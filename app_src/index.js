const { svgPointer, vDD} = require('./core/modules');


(async () => {
    vDD.page = JSON.parse(document.querySelector("meta[name='Vc9_Page']").getAttribute("content"));
    svgPointer.init();
})();
