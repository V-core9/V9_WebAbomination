(()=>{var t={989:t=>{function e(t){return Math.floor(Math.random()*t)}const n={_elem:null,info:{version:2,description:"Just a basic V logo just to have something to start with"},options:{strokeWidth:2,mode:"dev",elem_id:"v_logo",color_scheme:{main:"lime",box:"green",line:"darkgreen",mainBg:"transparent"},drawing_delay:100,size:"custom",disable_animated_part:!1},data:{width:150,height:150,lines_count:30,lines_drawn:0,width02:null,width04:null,width06:null,width08:null,height02:null,height08:null,calcDimensions(){n.data.width02=.2*n.data.width,n.data.width04=.4*n.data.width,n.data.width06=.6*n.data.width,n.data.width08=.8*n.data.width,n.data.height02=.2*n.data.height,n.data.height08=.8*n.data.height,console.log(n.data.lines_count+" Lines to print ::")}},template(){var t=`<svg id="${n.options.elem_id}"width="${n.data.width}" height="${n.data.height}" viewBox="0 0 ${n.data.width} ${n.data.height}" xmlns="http://www.w3.org/2000/svg" >`,e=n.options.strokeWidth,i=n.options.color_scheme.box,o=n.options.color_scheme.line;return"dev"===n.options.mode&&(t+=`<rect class="box" width="${n.data.width02}" height="${n.data.height02}" stroke='${i}' fill='transparent'  stroke-width="${e}%"/>\n                <rect class="box" width="${n.data.width02}" height="${n.data.height02}" x="${n.data.width08}"  stroke='${i}' fill='transparent' stroke-width='${e}%'/>\n                <rect class="box" width="${n.data.width02}" height="${n.data.height02}" x="${n.data.width04}" y="${n.data.height08}"  stroke='${i}' fill='transparent' stroke-width='${e}%'/>\n    \n                <line class="borderline" x1="0" y1="0" x2="${n.data.width04}" y2="${n.data.height08}" stroke="${o}"  stroke-width='${e}%'/>\n                <line class="borderline" x1="0" y1="${n.data.height02}" x2="${n.data.width04}" y2="${n.data.height}" stroke="${o}" stroke-width='${e}%' />\n                <line class="borderline" x1="${n.data.width02}" y1="0" x2="${n.data.width06}" y2="${n.data.height08}" stroke="${o}" stroke-width='${e}%' />\n                <line class="borderline" x1="${n.data.width02}" y1="${n.data.height02}" x2="${n.data.width06}" y2="${n.data.height}" stroke="${o}"  stroke-width="${e}%" />\n    \n                <line class="borderline" x1="${n.data.width08}" y1="0" x2="${n.data.width04}" y2="${n.data.height08}" stroke="${o}"  stroke-width="${e}%" />\n                <line class="borderline" x1="${n.data.width08}" y1="${n.data.height02}" x2="${n.data.width04}" y2="${n.data.height}" stroke="${o}" stroke-width="${e}%" />\n                <line class="borderline" x1="${n.data.width}" y1="0" x2="${n.data.width06}" y2="${n.data.height08}" stroke="${o}"  stroke-width="${e}%" />\n                <line class="borderline" x1="${n.data.width}" y1="${n.data.height02}" x2="${n.data.width06}" y2="${n.data.height}" stroke="${o}"  stroke-width="${e}%"/>`),t+"</svg>"},animation_interval:null,drawAnimationStart(){console.log(n.options.drawing_delay+"ms"),n.animation_interval=setInterval((()=>{n.drawLine()}),n.options.drawing_delay)},drawLine(){if(n.data.lines_drawn=n.data.lines_drawn+1,console.log(n.data.lines_drawn),n.data.lines_drawn>=n.data.lines_count)n.drawAnimationStop();else{var t,i,o,a=0,s="";n.data.lines_drawn<n.data.lines_count/2?(t=0+e(n.data.width02),i=0+e(n.data.height02),o=n.data.width04+e(n.data.width02),a=n.data.height08+e(n.data.height02)):(t=n.data.width04+e(n.data.width02),i=n.data.height08+e(n.data.height02),o=n.data.width08+e(n.data.width02),a=0+e(n.data.height02),s="alter_direction_animation"),console.log(`x1:${t}|y1:${i}|:|x2:${o}|y2:${a}`),n._elem.insertAdjacentHTML("afterbegin",`<line ${""!==s?"class='"+s+"'":""} x1="${t}" y1="${i}" x2="${o}" y2="${a}" stroke="${n.options.color_scheme.main}" stroke-width="${e(4)}" stroke-dasharray="${e(100)} ${e(50)} ${e(200)} ${e(100)} ${e(50)} ${e(50)} ${e(100)} ${e(200)} ${e(200)} " opacity="0.${e(100)}" animation-duration="${2*(e(5)+.5)}s" />`)}},drawAnimationStop(){console.log("Done Drawing :: Interval STOP"),clearInterval(n.animation_interval),n.animation_interval=null},setWidth(t=0){n.data.width=t},setHeight(t=0){n.data.height=t},printLogo(t=null){if(null===t)return console.log("cant be empty"),!1;var e=document.querySelector(t);"parent"===n.options.size&&(n.setWidth(e.getBoundingClientRect().width),n.setHeight(0!=e.getBoundingClientRect().height?e.getBoundingClientRect().height:e.getBoundingClientRect().width)),n.data.calcDimensions(),e.insertAdjacentHTML("beforeend",n.template()),n._elem=document.querySelector(`#${n.options.elem_id}`),!0!==n.options.disable_animated_part&&n.drawAnimationStart()}};t.exports=n},228:t=>{const e={page_data:null,api_version:"11.0.147",timestamp:Date.now(),settings:{ui:!0,ui_pos:"right",elem_id:"v_debugger_block",open:!1},toggleUI(){var t=document.getElementById("v_debugger_block");"open"==t.getAttribute("status")?t.setAttribute("status",""):t.setAttribute("status","open")},init(){console.log("vDebugger init"),document.querySelector("body").innerHTML+='<div class="v_block" id="'+e.settings.elem_id+'" ui_pos="'+e.settings.ui_pos+'" status="'+(!0===e.settings.open?"open":"closed")+'"><div class="header"><h2>V FrontEnd Debugger Tool</h2></div><v_dbg_box></v_dbg_box></div>',e.page_data=JSON.parse(document.querySelector("meta[name='Vc9_Page']").getAttribute("content")),document.querySelector("hero").innerHTML+="<h4> PAGE FOUND : "+e.page_data.name+"</h4>",window.onclick=()=>{e.toggleUI()}}};t.exports=e},765:(t,e,n)=>{const i=n(538);raf=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};const o={config:{mode:"hiding",debug:!0},data:{page:{},styles:[]},set page(t=null){if(null===t)return!1;try{return this.data.page=t,this.initPrint(),!0}catch(t){return t}},listenForEvents(){document.onreadystatechange=function(){switch(document.readyState){case"loading":case"complete":break;case"interactive":window.dispatchEvent(new Event("vDisplayDriver_Ready"))}},window.addEventListener("vDisplayDriver_Ready",(t=>{console.log("EventListener got:[> vDisplayDriver_Ready <]");try{o.init()}catch(t){console.error(t)}try{window.removeEventListener("vDisplayDriver_Ready",this)}catch(t){console.error(t)}}))},looper(){var t=0,e=o.data.page.sections;void 0!==e&&e.length>0&&e.forEach((e=>{var n=document.getElementById(e.elemID);o.isInUserView("#"+e.elemID)?(e.done||(void 0===e.render||e.lastUpdate>e.timeOfRender?(e.render=i.getTemplate(e),e.timeOfRender=Date.now(),n.innerHTML=e.render,n.style.minHeight=n.clientHeight+"px",o.maybeLoadStyle(e.type),e.done=!0):(n.innerHTML=e.render,e.done=!0)),e.onloadDone||(e.onload=i.getOnLoad(e.type),"function"==typeof e.onload&&(console.log(e.onload),console.log(e),e.render=e.onload(),console.log(e),e.timeOfRender=Date.now()),e.onLoadDone=!0)):(e.onLoadDone=!1,e.done=!1,n.innerHTML="",t++)})),-1===t&&(console.log("Done! Detaching scroll event listener..."),window.removeEventListener("scroll",this.handler))},handler(){raf(o.looper)},loadPage(){this.canPrintPage();var t=this.data.page.meta,e=this.data.page.title;this.data.page.sections,console.log(t),document.title=e;var n=document.createElement("meta");n.setAttribute("content",t.description),n.setAttribute("name","description"),document.head.appendChild(n);var i=document.createElement("meta");i.setAttribute("content",t.keywords),i.setAttribute("name","keywords"),document.head.appendChild(i)},isInUserView(t){const e=window.scrollY||window.pageYOffset;var n=document.querySelector(t);if(void 0!==n){const t=(n?n.getBoundingClientRect().top:0)+e,i={top:e,bottom:e+window.innerHeight},o={top:t,bottom:t+n.clientHeight};return o.bottom>=i.top&&o.bottom<=i.bottom||o.top<=i.bottom&&o.top>=i.top}return!1},canPrintPage(){if(window&&document)return!0;this.init()},initPrint(){var t=!1;this.data.page.sections.forEach((e=>{for(var n=1e9*performance.now(),a=n-Math.trunc(n),s="UID_"+(a=0==Math.trunc(1e5*a)?Math.trunc(n):Math.trunc(1e5*a)),l=!1;!l;)document.getElementById(s)?s="UID_"+ ++a:l=!0;document.body.innerHTML+=`<div id="${s}" class="page_section ${e.type}"></div>`,e.elemID=s,e.lastUpdate=Date.now(),e.timeOfRender=0,!1===t&&(e.render=i.getTemplate(e),e.onloadDone||(e.onload=i.getOnLoad(e),"function"==typeof e.onload&&(console.log(e.onload),e.onload(s)),e.onLoadDone=!0),this.maybeLoadStyle(e.type),document.getElementById(s).innerHTML=e.render,document.getElementById(s).style.minHeight=document.getElementById(s).clientHeight+"px",e.timeOfRender=Date.now(),o.isInUserView("#"+s)||(t=!0,console.log("stopPrint = TRUE")))}))},set styles(t=null){if(null!==t){try{this.data.styles.push(t)}catch(t){return console.log("ERROR:>> "+t.message),!1}return document.body.innerHTML+=t.style,!0}return!1},maybeLoadStyle(t){var e=this.data.styles.length,n=!0;return e>0&&this.data.styles.forEach((e=>{e.name===t&&(n=!1)})),!(0!=e&&!n||(this.styles={name:t,style:i.getStyle(t)},0))},renderUpdated(t){console.warn(t)},init(t=null){try{this.listenForEvents(),window.addEventListener("load",o.handler),window.addEventListener("scroll",o.handler)}catch(t){console.error(t)}}};o.init(),t.exports=o},538:(t,e,n)=>{const i={templates:n(71),findByName(t=null){var e=!1;return this.templates.forEach((n=>{t==n.name&&(e=n)})),e},getTemplate(t=null){return null!==t.type&&this.findByName(t.type).view(t.data)},getStyle(t=null){return null!==t&&this.findByName(t).css()},getOnLoad(t=null){return null!==t.type&&this.findByName(t.type).onload}};t.exports=i},151:t=>{const e={name:"admin_base_list_01",view:(t={title:null,subtitle:null,button:{do:null,text:null},image:{url:"#",width:"auto",height:"auto",alt:null}})=>`<div class="section_side">\n                    <h1>${t.title}</h1>\n                    <h2>${t.subtitle}</h2>\n                    <button onclick="${t.button.do}">${t.button.text}</button>\n                </div>\n                <div class="section_side onload_data"></div>`,css:()=>"<style>\n                .admin_base_list_01 {\n                    background: #101525;\n                    color: white;\n                }\n                v_block {\n                    background: linear-gradient(128deg, #2196f33b, rgb(255 255 255 / 15%));\n                    border: none;\n                    box-shadow: 0 5px 10px black;\n                    display: flex;\n                    flex-direction: column;\n                    padding: 0;\n                }\n                \n                options_list {\n                    display: flex;\n                    flex-direction: column;\n                    gap: 0.15em;\n                }\n                \n                v_block title {\n                    display: inline-flex;\n                    font-size: 2em;\n                    font-weight: bolder;\n                    background: #ffffff17;\n                    padding: 0.25em .5em;\n                }\n                \n                item {\n                    padding: 0.25em 1em;\n                    border: 1px solid rgb(255 255 255 / 10%);\n                    background: #ffffff05;\n                    box-shadow: 0 1.5px 4px #008eff1f;\n                }\n            </style>",onload:()=>{var t="undefined"!=typeof appConfigPageInfo?appConfigPageInfo:null;if(null!==t){var e=`<V_BLOCK>\n        <title>Application Config:</title>\n            <OPTIONS_LIST>\n            <ITEM>Name: ${t.appConfig.name}</ITEM>\n            <ITEM>Language: ${t.appConfig.language}</ITEM>\n            <ITEM>Only Secure: ${t.appConfig.onlySecure}</ITEM>\n            <ITEM>Origin: ${t.appConfig.origin}</ITEM>\n            <ITEM>Port: ${t.appConfig.port}</ITEM>\n            <ITEM>Target: ${t.appConfig.target}</ITEM>\n            <ITEM>Print to Console: ${t.appConfig.printConsole}</ITEM>\n            <ITEM>Response Timestamp: ${t.response_timestamp}</ITEM>\n            </OPTIONS_LIST>\n        </V_BLOCK>`;setTimeout((()=>{document.querySelector(".admin_base_list_01 ").style.minHeight="unset",document.querySelector(".admin_base_list_01 .onload_data").insertAdjacentHTML("afterbegin",e)}),250)}},disabled:!1,author:"-v-"};t.exports=e},932:t=>{const e={name:"admin_base_list_files_01",view:(t={title:null,subtitle:null,button:{do:null,text:null},image:{url:"#",width:"auto",height:"auto",alt:null}})=>'<div class="section onload_data">\n                </div>',css:()=>"<style>\n                .admin_base_list_files_01 {\n                    background: #101525;\n                    color: white;\n                }\n                .admin_base_list_files_01 options_list {\n                    flex-direction: row;\n                    align-items: center;\n                    justify-content: center;\n                }\n\n                .admin_base_list_files_01 v_block {\n                    background: linear-gradient(128deg, #2196f33b, rgb(255 255 255 / 15%));\n                    border: none;\n                    box-shadow: 0 5px 10px black;\n                    display: flex;\n                    flex-direction: column;\n                    padding: 0;\n                }\n                \n                .admin_base_list_files_01 options_list {\n                    display: flex;\n                    flex-direction: row;\n                    gap: 0.15em;\n                }\n                \n                .admin_base_list_files_01 v_block title {\n                    display: inline-flex;\n                    font-size: 2em;\n                    font-weight: bolder;\n                    background: #ffffff17;\n                    padding: 0.25em .5em;\n                }\n                \n                .admin_base_list_files_01 item {\n                    padding: 0.25em 1em;\n                    border: 1px solid rgb(255 255 255 / 10%);\n                    background: #ffffff05;\n                    box-shadow: 0 1.5px 4px #008eff1f;\n                    flex: 1;\n                    align-items: center;\n                    justify-content: center;\n                    width: 80px;\n                    overflow: hidden;\n            }\n            </style>",onload:t=>{var e="undefined"!=typeof appConfigPageInfo?appConfigPageInfo:null;if(null!==e){var n='<V_BLOCK>\n                <title>List of Files:</title>\n                <OPTIONS_LIST headrow="true">\n                    <ITEM>Name: </ITEM>\n                    <ITEM>mode: </ITEM>\n                    <ITEM>ino: </ITEM>\n                    <ITEM>size: </ITEM>\n                    <ITEM>blocks: </ITEM>\n                    \x3c!--ITEM>gid:</ITEM>\n                    <ITEM>uid: </ITEM>\n                    <ITEM>blksize: </iTEM>\n                    <ITEM>dev: </ITEM>\n                    <ITEM>nlink: </ITEM>\n                    <ITEM>rdev: </ITEM>\n                    <ITEM>atimeMs: </ITEM>\n                    <ITEM>mtimeMs: </ITEM>\n                    <ITEM>ctimeMs: </ITEM>\n                    <ITEM>birthtimeMs: </ITEM>\n                    <ITEM>atime: </ITEM>--\x3e\n                    <ITEM>mtime: </ITEM>\n                    <ITEM>ctime: </ITEM>\n                    <ITEM>birthtime: </ITEM>\n                </OPTIONS_LIST>';return e.files.forEach((t=>{n+=`<OPTIONS_LIST>\n                <ITEM> ${t.name}</ITEM>\n                <ITEM> ${t.stats.mode}</ITEM>\n                <ITEM> ${t.stats.ino}</ITEM>\n                <ITEM> ${t.stats.size}</ITEM>\n                <ITEM> ${t.stats.blocks}</ITEM>\n                \x3c!--ITEM>gid: ${t.stats.gid}</ITEM>\n                <ITEM>dev: ${t.stats.dev}</ITEM>\n                <ITEM> ${t.stats.uid}</ITEM>\n                <ITEM> ${t.blksize}</ITEM> \n                <ITEM>nlink: ${t.stats.nlink}</ITEM>\n                <ITEM>rdev: ${t.stats.rdev}</ITEM>\n                <ITEM>atimeMs: ${t.stats.atimeMs}</ITEM>\n                <ITEM>mtimeMs: ${t.stats.mtimeMs}</ITEM>\n                <ITEM>ctimeMs: ${t.stats.ctimeMs}</ITEM>\n                <ITEM>birthtimeMs: ${t.stats.birthtimeMs}</ITEM>\n                <ITEM> ${t.stats.atime}</ITEM>--\x3e\n                <ITEM> ${t.stats.mtime}</ITEM>\n                <ITEM> ${t.stats.ctime}</ITEM>\n                <ITEM> ${t.stats.birthtime}</ITEM>\n                </OPTIONS_LIST>`})),n+="</V_BLOCK>"}},disabled:!1,author:"-v-"};t.exports=e},913:t=>{t.exports={name:"base_about_us_01",view:(t={title:null,subtitle:null,text:null})=>`<div class="section_full">\n                    <h3>${t.title}</h3>\n                    <h5>${t.subtitle}</h5>\n                    <p>${t.text}</p>\n                </div>`,css:()=>"<style>\n                .base_about_us_01 .section_full {\n                    align-items: center;\n                    justify-content: center;\n                    display: flex;\n                    flex-direction: column;\n                    padding: 2em;\n                    gap: 1em;\n                }\n                \n                .base_about_us_01 .section_full h3 {\n                    color: #03a9f4;\n                    font-size: 2em;\n                    text-align: center;\n                    letter-spacing: 2px;\n                }\n                \n                .base_about_us_01 .section_full h5 {\n                    font-size: 1.25em;\n                    color: gray;\n                    text-shadow: 0 0 5px black;\n                    background: #00000030;\n                    padding: 1em 2em;\n                }\n                \n                .base_about_us_01 .section_full p {\n                    max-width: 50%;\n                    text-align: center;\n                    line-height: 1.5em;\n                    letter-spacing: 1px;\n                    text-shadow: 0 0 10px #03a9f4;\n                }\n            </style>",disabled:!1,author:"-v-"}},508:t=>{t.exports={name:"base_hero_01",view:(t={title:null,subtitle:null,button:{do:null,text:null},image:{url:"#",width:"auto",height:"auto",alt:null}})=>`<div class="section_side">\n                    <h1>${t.title}</h1>\n                    <h2>${t.subtitle}</h2>\n                    <button id="mainButtonClick" onclick="${t.button.do}">${t.button.text}</button>\n                </div>\n                <div class="section_side">\n                    <img src="${t.image.url}" width="${t.image.width}" height="${t.image.height}" alt="${t.image.alt}"/>\n                </div>`,css:()=>"<style>\n                    .hero_main {\n                        background: #101525;\n                        color: white;\n                    }\n                </style>",disabled:!1,author:"-v-"}},314:t=>{t.exports={name:"base_hero_alt_01",view:(t={title:null,subtitle:null,button:{do:null,text:null},image:{url:"#",width:"auto",height:"auto",alt:null}})=>`<div class="section_side">\n                    <h1>${t.title}</h1>\n                    <h2>${t.subtitle}</h2>\n                    <button id="mainButtonClickALT" onclick="${t.button.do}">${t.button.text}</button>\n                </div>\n                <div class="section_side">\n                    <img src="${t.image.url}" width="${t.image.width}" height="${t.image.height}" alt="${t.image.alt}"/>\n                </div>`,css:()=>"<style>\n                .base_hero_alt_01 {\n                    background: #101525;\n                    color: white;\n                }\n                .base_hero_alt_01 author {\n                    background: #0000006e;\n                }\n                \n                .base_hero_alt_01 h1 {\n                    font-size: 1.65em;\n                    line-height: 1em;\n                    background: #b40000;\n                }\n                \n                .base_hero_alt_01 {\n                    gap: 1em;\n                    position: relative;\n                    max-width: 960px;\n                    margin: 0 auto;\n                    align-items: stretch;\n                    padding: 1em;\n                }\n                \n                .base_hero_alt_01 .section_side {\n                    flex: 1;\n                    display: flex;\n                    flex-direction: column;\n                    align-items: center;\n                    justify-content: center;\n                    background: #ffffff0d;\n                    gap: 1em;\n                    text-align: center;\n                }\n                \n                .base_hero_alt_01 h2 {\n                    font-size: 1.25em;\n                    line-height: 1.75em;\n                    font-weight: 500;\n                    text-decoration: underline;\n                }\n                \n                .base_hero_alt_01 button {\n                    background: #7e1010;\n                    cursor: pointer;\n                    box-shadow: 0 1px 2px #00000075;\n                }\n                \n                .base_hero_alt_01 button:hover {\n                    background: #c30000;\n                    box-shadow: 0 5px 5px black;\n                }\n            </style>",disabled:!1,author:"-v-"}},505:t=>{t.exports={name:"base_newsletter_01",view:(t={title:null,text:null})=>`<div class="section_side">\n                    <h3>${t.title}</h3>\n                    <p>${t.text}</p>\n                </div>\n                <div class="section_side">\n                    <input type="text"/>\n                    <button />SignUp</button>\n                </div>`,css:()=>'<style>\n                \n                .page_section.base_newsletter_01 {\n                    background: repeating-linear-gradient(219deg, #252939, transparent 100px);\n                    box-shadow: 0 0 10px inset black;\n                    padding: 2em;\n                    max-width: 760px;\n                    margin: 0 auto;\n                }\n                \n                .page_section.base_newsletter_01 .section_side {\n                    max-width: 50%;\n                    display: flex;\n                    flex-direction: column;\n                    gap: 1em;\n                    flex: 1;\n                }\n                \n                .page_section.base_newsletter_01 h3 {\n                    font-size: 1.25em;\n                    color: #03A9F4;\n                    display: inline-flex;\n                    background: #ffffff1a;\n                    width: fit-content;\n                    box-shadow: 0 5px 10px black;\n                }\n                \n                .page_section.base_newsletter_01 p {\n                    display: inline-flex;\n                    background: #ffffff1a;\n                    width: fit-content;\n                    box-shadow: 0 5px 10px black;\n                }\n                \n                input[type="text"] {\n                    font-size: 1em;\n                    padding: 1em;\n                    background: #00000042;\n                    outline: none;\n                    color: white;\n                    border: none;\n                    border: 1px solid #03A9F4;\n                    font-weight: bold;\n                }\n                \n                button {\n                    width: fit-content;\n                    margin: 0 auto;\n                    font-size: 1.15em;\n                    font-weight: bold;\n                    background: #03A9F4;\n                    color: white;\n                    padding: .5em 1.5em;\n                    border-radius: 0;\n                    box-shadow: 0 2px 5px black;\n                    text-shadow: 0 0 2px black;\n                }\n            </style>',disabled:!1,author:"-v-"}},71:(t,e,n)=>{const i=n(508),o=n(314),a=n(913),s=n(505),l=n(151),d=n(932);t.exports=[a,i,o,s,l,d]},364:(t,e,n)=>{t.exports={vDebugger:n(228),V_Logo:n(989),domPrinter:n(538),displayDriver:n(765),svgPointer:n(297)}},297:t=>{const e={config:{id_string:"svgPointer",debug:!0},customCursor:null,customCursorString:()=>`<svg id="${e.config.id_string}" width="30px" height="30px" viewBox="0 0 20 20" class="svg-2 selected">\n                              <defs>\n                                <radialGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">\n                                  <stop offset="10%" style="stop-color:#03A9F4;stop-opacity:1"></stop>\n                                  <stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity:0"></stop>\n                                </radialGradient>\n                                <filter id="f1" x="-2" y="-2" width="400%" height="400%">\n                                  <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset>\n                                  <feGaussianBlur result="blurOut" in="offOut" stdDeviation="1"></feGaussianBlur>\n                                  <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend>\n                                </filter>\n                              </defs>\n                              <path class="outlineBack" d="M1,1 L8,15 C 8 15, 18 18, 15 8 L15,8 L1,1" filter="url(#f1)"></path>\n                              <path class="outline" d="M1,1 L8,15 C 8 15, 18 18, 15 8 L15,8 L1,1"></path>\n                              <ellipse stroke-width="0" ry="3" rx="3" id="svg_14" cy="12" cx="12" fill-opacity="null" stroke-opacity="null" stroke="#000" fill="url(#grad1)"></ellipse>\n                              <ellipse stroke-width="0.5" ry="3" rx="3" id="svg_13" cy="12" cx="12" fill-opacity="null" stroke-opacity="null" stroke="#000" fill="none" stroke-dasharray="8,1,2,1,2,1"></ellipse>\n                              </svg>`,mouseClickStart:()=>{e.customCursor.classList.add("clicking")},mouseClickStop:()=>{e.customCursor.classList.remove("clicking")},mouseMove:t=>{console.log(t.clientX+" "+t.clientY),e.customCursor.style.top=(t.clientY+window.scrollY||window.pageYOffset)+"px",e.customCursor.style.left=t.clientX+"px"},init:()=>{try{return console.log("ADDING SVG CURSOR"),document.documentElement.insertAdjacentHTML("beforeend",e.customCursorString()),e.customCursor=document.getElementById(e.config.id_string),window.addEventListener("mousemove",e.mouseMove),window.addEventListener("mousedown",e.mouseClickStart),window.addEventListener("mouseup",e.mouseClickStop),!0}catch(t){return console.log(t),t}}};e.init(),t.exports=e},946:function(t,e,n){const{svgPointer:i,displayDriver:o,vDebugger:a,V_Logo:s}=n(364);(async()=>{a.init(),s.printLogo("v_logo")})();const l=()=>{void 0===this.bootStatus&&(this.bootStatus=null),this.displayDriver=o,this.svgPointer=i,this.boot=()=>{console.log("[-IN_PROGRESS-] :: V_Application Boot Starting >->-> "),l.bootStatus=!0,console.log("[-COMPLETED-] :: V_Application Boot Completed >->-> ")},null===this.bootStatus&&this.boot()};l()}},e={};!function n(i){var o=e[i];if(void 0!==o)return o.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,n),a.exports}(946)})();