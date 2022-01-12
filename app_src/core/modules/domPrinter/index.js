const domPrinter = {

    baseDom: require('./baseDom'),
    
    templates: require("./templates"),
    //MD: require("./MARKDOWN"),

    findByName(objName = null) {
        var resp = false;
        this.templates.forEach(item => {
            if (objName == item.name) {
                resp = item;
            }
        });
        return resp;
    },

    getTemplate(templateItem = null) {
        var result = false;
        if (templateItem.type !== null) {
            result = this.findByName(templateItem.type);
            result = result.view(templateItem.data);
        } else {
            result = false;
        }
        return result;
    },

    getStyle(templateName = null) {
        var result = false;
        if (templateName !== null) {
            result = this.findByName(templateName).css();
        } else {
            result = false;
        }
        return result;
    },
    getOnLoad(templateItem = null) {
        var result = false;
        if (templateItem.type !== null) {
            result = this.findByName(templateItem.type);
            return result.onload;
        } else {
            return false;
        }
    },
};

module.exports = domPrinter;
