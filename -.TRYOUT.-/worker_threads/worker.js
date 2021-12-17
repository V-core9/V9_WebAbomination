const { parentPort, workerData } = require("worker_threads");

const WA_Tools = {

    // Worker Action Find
    waFind: (in_val) => {

        if (in_val.action === undefined || WA_Tools.$_Actions[in_val.action] === undefined) return false;
        try {
            console.log(in_val);
            return {action: in_val.action, data: WA_Tools.$_Actions[in_val.action](in_val.data)};
        } catch (error) {
            return false;
        }

    },

    $_Actions: {

        // Sum
        sum: (data) => {
            const { num, sec } = data;
            return num + sec;
        },
        // Divide
        div: (data) => {
            const { num, sec } = data;
            return num / sec;
        },
        // Multiply
        mul: (data) => {
            const { num, sec } = data;
            return num * sec;
        },
        // Subtract
        sub: (data) => {
            const { num, sec } = data;
            return num - sec;
        },
        // Fibonacci
        fibonacciNumber: (data) => {
            if (data.num === 0) {
                return 0;
            }
            else if (data.num === 1) {
                return 1;
            }
            else {
                var helper1 = data.num - 1;
                var helper2 = data.num - 2;
                return WA_Tools.$_Actions.sum( {num: WA_Tools.$_Actions.fibonacciNumber({num : helper1}) , sec: WA_Tools.$_Actions.fibonacciNumber({num: helper2})});
            }
        },


    },

};


parentPort.postMessage(WA_Tools.waFind(workerData));

