const miniCake = {

    get(cname) {
        console.log(`🍰 miniCake [GET]: ${cname}`);
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return false;
    },

    set(name, value, minutes) {
        console.log(`🍰 miniCake [SET]: ${name} , ${value} , ${minutes}`);
        const d = new Date();
        d.setTime(d.getTime() + (minutes * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

};

module.exports = miniCake;
