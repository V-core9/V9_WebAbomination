const { svgPointer, displayDriver, vSidebar } = require('./core/modules');


vApp = async () => {
    if (typeof this.bootStatus === "undefined") this.bootStatus = null;
    this.displayDriver = displayDriver;
    this.svgPointer = svgPointer;

    this.boot = async () => {
        console.log("[-IN_PROGRESS-] :: V_Application Boot Starting >->-> ");
    
        console.log('PAGE DATA TO DISPLAY DRIVER');
        displayDriver.page = JSON.parse(document.querySelector("meta[name='Vc9_Page']").getAttribute("content"));
    
        console.log('DISPLAY DRIVER LOAD PAGE');
        displayDriver.loadPage();
        
        console.log('Sidebar INIT');
        svgPointer.init();
        
        console.log('Sidebar INIT');
        vSidebar.init();
    

        vApp.bootStatus = true;
        console.log("[-COMPLETED-] :: V_Application Boot Completed >->-> ");

    };

    if (this.bootStatus === null) this.boot();
};

const V = vApp();
