const { svgPointer, displayDriver, vDebugger, V_Logo } = require('./core/modules');



(async () => {
    vDebugger.init();

    V_Logo.printLogo("v_logo");
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
