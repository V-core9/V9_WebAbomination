
const v_cache = {
    _items: {},
    cacheTime: 2500,
    get: async (name) => {
        return (v_cache._items[name] !== undefined) ? v_cache._items[name] : false;
    },
    save: async (name, item) => {
        v_cache._items[name] = { data: item, time: Date.now() };
    },
    cache_time_check: async (item) => {
        return (Date.now() - item.lastUpdate > v_cache.cacheTime);
    }
};

module.exports = v_cache;

