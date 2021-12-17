const { parentPort, workerData } = require("worker_threads");


$_Exec = (value) => {

    if (value.action === undefined || wActions[value.action] === undefined) return false;

    try {
        console.log(value);
        return { action: value.action, data: wActions[value.action](value.data) };
    } catch (error) {
        return { action: null, data: null };
    }

};

const wActions = {


    sum: (data) => {
        const { num, sec } = data;
        return num + sec;
    },

    div: (data) => {
        const { num, sec } = data;
        return num / sec;
    },

    mul: (data) => {
        const { num, sec } = data;
        return num * sec;
    },

    sub: (data) => {
        const { num, sec } = data;
        return num - sec;
    },

    fibonacci: (data) => {
        var result = 0, n_1 = 1, n_2 = 0;
        for (var i = 1; i < data.num; i++) {
            result = n_1 + n_2;
            n_2 = n_1;
            n_1 = result;
        }
        return result;
    },

};


parentPort.postMessage($_Exec(workerData));

