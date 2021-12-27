const { svgPointer, displayDriver, vSidebar, V_Logo } = require('./core/modules');



(async () => {
    console.log('DEBUGGER INIT');
    vSidebar.init();

    console.log('LOGO PRINT');
    V_Logo.printLogo("v_logo");


    console.log('PAGE DATA TO DISPLAY DRIVER');
    displayDriver.page = JSON.parse(document.querySelector("meta[name='Vc9_Page']").getAttribute("content"));

    console.log('DISPLAY DRIVER LOAD PAGE');
    displayDriver.loadPage();
})();


const vApp = () => {
    if (typeof this.bootStatus === "undefined") this.bootStatus = null;
    this.displayDriver = displayDriver;
    this.svgPointer = svgPointer;

    this.boot = () => {
        console.log("[-IN_PROGRESS-] :: V_Application Boot Starting >->-> ");

        vApp.bootStatus = true;
        console.log("[-COMPLETED-] :: V_Application Boot Completed >->-> ");
    };

    if (this.bootStatus === null) this.boot();
};

vApp();
