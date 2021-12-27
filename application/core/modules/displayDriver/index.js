const vDomPrinter = require('../domPrinter');


// requestAnimationFrame
raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60); };

// vDisplayDriver 
const vDisplayDriver = {

    config: {
        selector: 'v_page',
        mode: "hiding",
        debug: true
    },

    data: {
        page: {},
        styles: []
    },

    set page(page = null) {
        if (page === null) return false;
        try {
            this.data.page = page;
            this.initPrint();
            return true;
        } catch (error) {
            return error;
        }
    },

    get page() {
        return this.data.page;
    },

    listenForEvents() {
        //Self addig on dom load
        document.onreadystatechange = function () {
            switch (document.readyState) {
                case "loading":
                    // The document is still loading.;
                    break;
                case "interactive":
                    // DOMContentLoaded event.
                    window.dispatchEvent(new Event('vDisplayDriver_Ready'));
                    break;
                case "complete":
                    // The document is finished loading.
                    break;
            }
            //console.log(document.readyState)
        };

        window.addEventListener('vDisplayDriver_Ready', (e) => {
            console.log('EventListener got:[> vDisplayDriver_Ready <]');
            try {
                vDisplayDriver.init();
                window.removeEventListener('vDisplayDriver_Ready', this);
            } catch (error) {
                console.error(error);
            }
        });
    },

    looper() {
        //console.log('yea...scrolling')
        var notYetDone = 0;
        var testItems = vDisplayDriver.data.page.sections;
        //console.log(testItems)
        if (typeof testItems !== "undefined") {
            if (testItems.length > 0) {
                testItems.forEach((element) => {
                    var helpElem = document.getElementById(element.elemID);
                    if (vDisplayDriver.isInUserView('#' + element.elemID)) {
                        if (!element.done) {
                            if ((typeof element.render === 'undefined') || (element.lastUpdate > element.timeOfRender)) {
                                element.render = vDomPrinter.getTemplate(element);
                                element.timeOfRender = Date.now();
                                helpElem.innerHTML = element.render;
                                helpElem.style.minHeight = helpElem.clientHeight + "px";
                                vDisplayDriver.maybeLoadStyle(element.type);
                                element.done = true;
                            } else {
                                helpElem.innerHTML = element.render;
                                element.done = true;
                            }
                        }

                        if (!element.onloadDone) {
                            element.onload = vDomPrinter.getOnLoad(element.type);
                            if (typeof element.onload === "function") {
                                console.log(element.onload);
                                console.log(element);
                                element.render = element.onload();
                                console.log(element);
                                element.timeOfRender = Date.now();
                            }
                            element.onLoadDone = true;
                        }

                    } else {
                        element.onLoadDone = false;
                        element.done = false;
                        helpElem.innerHTML = "";
                        //console.log('Is ' + element.elemID + ' visible? NO')
                        notYetDone++;
                    }
                });
            }
        }

        if (notYetDone === -1) {
            console.log('Done! Detaching scroll event listener...');
            window.removeEventListener("scroll", this.handler);
        }
    },

    handler() {
        // requestAnimationFrame
        raf(vDisplayDriver.looper);
    },

    loadPage() {
        this.canPrintPage();
        console.log(this.data.page);
    },

    isInUserView(el) {
        //console.log('FunctionCall >> [ function isInUserView(el) ] || [ Elem: ' + el + ' ]');
        const scroll = window.scrollY || window.pageYOffset;
        var elem = document.querySelector(el);
        if (typeof elem !== "undefined") {
            const boundsTop = (elem ? elem.getBoundingClientRect().top : 0) + scroll;

            const viewport = {
                top: scroll,
                bottom: scroll + window.innerHeight,
            };

            const bounds = {
                top: boundsTop,
                bottom: boundsTop + elem.clientHeight,
            };


            return (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
                (bounds.top <= viewport.bottom && bounds.top >= viewport.top);
        } else {
            return false;
        }
    },

    canPrintPage() {
        if ((window) && (document)) {
            return true;
        } else {
            this.init();
        }
    },

    initPrint() {
        var stopPrint = false;
        this.data.page.sections.forEach(section => {

            var helpVal = (performance.now() * (1000000000));
            var helpVal2 = helpVal - Math.trunc(helpVal);
            helpVal2 = ((Math.trunc(helpVal2 * (100000)) == 0) ? Math.trunc(helpVal) : (Math.trunc(helpVal2 * (100000))));

            var uid = 'UID_' + helpVal2;
            var foundUniqueID = false;

            while (!foundUniqueID) {
                var elemTest = document.getElementById(uid);
                if (elemTest) {
                    helpVal2++;
                    uid = 'UID_' + helpVal2;
                } else {
                    foundUniqueID = true;
                }
            }

            document.querySelector(vDisplayDriver.config.selector).innerHTML += `<div id="${uid}" class="page_section ${section.type}"></div>`;

            section.elemID = uid;
            section.lastUpdate = Date.now();
            section.timeOfRender = 0;

            if (stopPrint === false) {

                section.render = vDomPrinter.getTemplate(section);


                if (!section.onloadDone) {
                    section.onload = vDomPrinter.getOnLoad(section);
                    if (typeof section.onload === "function") {
                        console.log(section.onload);
                        section.onload(uid);
                    }
                    section.onLoadDone = true;
                }

                this.maybeLoadStyle(section.type);

                document.getElementById(uid).innerHTML = section.render;

                document.getElementById(uid).style.minHeight = document.getElementById(uid).clientHeight + "px";
                section.timeOfRender = Date.now();
                if (!vDisplayDriver.isInUserView("#" + uid)) {
                    stopPrint = true;
                    console.log("stopPrint = TRUE");
                }
            }
        });
    },

    set styles(style = null) {
        if (style !== null) {
            try {
                this.data.styles.push(style);
            } catch (e) {
                console.log("ERROR:>> " + e.message);
                return false;
            }
            document.body.innerHTML += style.style;
            return true;
        }
        return false;
    },

    get styles () {
        return this.data.styles;
    },

    maybeLoadStyle(type) {
        var stylesNumber = this.data.styles.length;
        var shouldLoadStyle = true;
        if (stylesNumber > 0) {
            this.data.styles.forEach((style) => {
                if (style.name === type) {
                    shouldLoadStyle = false;
                }
            });
        }

        if ((stylesNumber == 0) || (shouldLoadStyle)) {
            this.styles = { name: type, style: vDomPrinter.getStyle(type) };
            //console.log("SUCCESS :: Style Loaded Into vDisplayDriver \nTemplate Name  -[ " + type + " ] ");
            return true;
        }

        if (shouldLoadStyle === false) {
            //console.log("SKIPPING Style Loading >> \nReason :[ shouldLoadStyle  == FALSE  ]  ");
        } else {
            //console.log("NO STYLE LOADED");
        }
        return false;
    },

    renderUpdated(event) {
        console.warn(event);
    },

    init(page = null) {
        try {
            this.listenForEvents();
            window.addEventListener("load", vDisplayDriver.handler);
            window.addEventListener("scroll", vDisplayDriver.handler);
        } catch (error) {
            console.error(error);
        }
    }

};

vDisplayDriver.init();

module.exports = vDisplayDriver;
