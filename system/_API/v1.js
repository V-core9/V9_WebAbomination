module.exports = async (req, res) => {
    res.end(JSON.stringify({
        version: 'v1', 
        paths : { 
            'page' : { 
                list : {
                    path : '/',
                    type : 'get'
                }, 
                find : {
                    path : '/:name',
                    type : 'get'
                }, 
                create : {
                    path : '/',
                    type : 'post'
                }, 
                delete : {
                    path : '/:name',
                    type : 'post'
                }, 
            }, 
            'post' : { 
                list : {
                    path : '/',
                    type : 'get'
                }, 
                find : {
                    path : '/:name',
                    type : 'get'
                }, 
                create : {
                    path : '/',
                    type : 'post'
                }, 
                delete : {
                    path : '/:name',
                    type : 'post'
                }, 
            },
            'tag' : { 
                list : {
                    path : '/',
                    type : 'get'
                }, 
                find : {
                    path : '/:name',
                    type : 'get'
                }, 
                create : {
                    path : '/',
                    type : 'post'
                }, 
                delete : {
                    path : '/:name',
                    type : 'post'
                }, 
            },
            'category' : { 
                list : {
                    path : '/',
                    type : 'get'
                }, 
                find : {
                    path : '/:name',
                    type : 'get'
                }, 
                create : {
                    path : '/',
                    type : 'post'
                }, 
                delete : {
                    path : '/:name',
                    type : 'post'
                }, 
            }
        } 
    }, true, 2));
};
