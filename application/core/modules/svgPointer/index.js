const svgPointer = {

    config: {
        id_string: "svgPointer",
        debug: true
    },

    customCursor: null,

    customCursorString: () => {
        return `<svg id="${svgPointer.config.id_string}" width="30px" height="30px" viewBox="0 0 20 20" class="svg-2 selected">
                    <defs>
                        <radialGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="10%" style="stop-color:#03A9F4;stop-opacity:1"></stop>
                        <stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity:0"></stop>
                        </radialGradient>
                        <filter id="f1" x="-2" y="-2" width="400%" height="400%">
                        <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset>
                        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="1"></feGaussianBlur>
                        <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend>
                        </filter>
                    </defs>
                    <path class="outlineBack" d="M1,1 L8,15 C 8 15, 18 18, 15 8 L15,8 L1,1" filter="url(#f1)"></path>
                    <path class="outline" d="M1,1 L8,15 C 8 15, 18 18, 15 8 L15,8 L1,1"></path>
                    <ellipse stroke-width="0" ry="3" rx="3" id="svg_14" cy="12" cx="12" fill-opacity="null" stroke-opacity="null" ></ellipse>
                    <ellipse stroke-width="1" ry="3" rx="3" id="svg_13" cy="12" cx="12" fill-opacity="null" stroke-opacity="null" stroke-dasharray="8,1,2,1,2,1"></ellipse>
                </svg>`;
    },

    mouseClickStart: () => {
        svgPointer.customCursor.classList.add('clicking');
    },

    mouseClickStop: () => {
        svgPointer.customCursor.classList.remove('clicking');
    },

    mouseMove: (e) => {
        console.log(e.clientX + " " + e.clientY);
        svgPointer.customCursor.style.top = (e.clientY + window.scrollY || window.pageYOffset) + 'px';
        svgPointer.customCursor.style.left = e.clientX + 'px';
    },

    init: () => {
        try {
            console.log("ADDING SVG CURSOR");
            document.documentElement.insertAdjacentHTML("beforeend", svgPointer.customCursorString());
            svgPointer.customCursor = document.getElementById(svgPointer.config.id_string);

            window.addEventListener("mousemove", svgPointer.mouseMove);
            window.addEventListener("mousedown", svgPointer.mouseClickStart);
            window.addEventListener("mouseup", svgPointer.mouseClickStop);
            return true;
        } catch (error) {
            console.log(error);
            return error;
        }
    },

};

svgPointer.init();

module.exports = svgPointer;
