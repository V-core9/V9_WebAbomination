var os = require('os');


const sysStatModel = {

    data: async () => {
        return {
            arch: os.arch(),
            coreCount: os.cpus().length,
            totalmem: os.totalmem(),
            freemem: os.freemem(),
            homedir: os.homedir(),
            hostname: os.hostname(),
            loadavg: os.loadavg(),
            platform: os.platform(),
            release: os.release(),
            type: os.type(),
            uptime: os.uptime(),
            userInfo: os.userInfo(),
            version: os.version(),
        };
    },

    all: async () => {
        return { status: 200, data: await sysStatModel.data() };
    }

};

module.exports = sysStatModel;
