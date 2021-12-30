
const v_cache = {
    _items: {},
    cacheTime: 2500,
    get: async (name) => {
        try {
            var res = v_cache._items[name];
            return (res !== undefined) ? res : false;
        } catch (e) {
            return false;
        }
    },
    save: async (name, item) => {
        v_cache._items[name] = item;
    },
    cache_time_check: async (item) => {
        return (Date.now() - item.lastUpdate > v_cache.cacheTime);
    }
};

module.exports = v_cache;
