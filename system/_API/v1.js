module.exports = async (req, res) => {
    res.end(JSON.stringify({
        version: 'v1', 
        paths : { 
            'page' : { 
                active : true,
                list : {
                    path : '/api/v1/page/',
                    type : 'get'
                }, 
                find : {
                    path : '/api/v1/page/:name',
                    type : 'get'
                }, 
                create : {
                    path : '/api/v1/page/',
                    type : 'post'
                }, 
                delete : {
                    path : '/api/v1/page/:name',
                    type : 'post'
                }, 
            }, 
            'post' : { 
                active : true,
                list : {
                    path : '/api/v1/post/',
                    type : 'get'
                }, 
                find : {
                    path : '/api/v1/post/:name',
                    type : 'get'
                }, 
                create : {
                    path : '/api/v1/post/',
                    type : 'post'
                }, 
                delete : {
                    path : '/api/v1/post/:name',
                    type : 'post'
                }, 
            },
            'tag' : { 
                active : false,
                list : {
                    path : '/api/v1/tag/',
                    type : 'get'
                }, 
                find : {
                    path : '/api/v1/tag/:name',
                    type : 'get'
                }, 
                create : {
                    path : '/api/v1/tag/',
                    type : 'post'
                }, 
                delete : {
                    path : '/api/v1/tag/:name',
                    type : 'post'
                }, 
            },
            'category' : { 
                active : false,
                list : {
                    path : '/api/v1/category/',
                    type : 'get'
                }, 
                find : {
                    path : '/api/v1/category/:name',
                    type : 'get'
                }, 
                create : {
                    path : '/api/v1/category/',
                    type : 'post'
                }, 
                delete : {
                    path : '/api/v1/category/:name',
                    type : 'post'
                }, 
            }
        } 
    }, true, 2));
};
