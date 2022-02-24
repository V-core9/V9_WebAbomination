module.exports = {
  title: 'V-core9 System Status Page',
  path: '/system-monitor',
  chartVisibility: {
    cpu: true,
    mem: true,
    heap: true,
    load: true,
    eventLoop: true,
    responseTime: true,
    rps: true,
    statusCodes: true
  },
  healthChecks: [
    {
      protocol: 'http',
      host: 'localhost',
      path: '/',
      port: '2500'
    },
    {
      protocol: 'http',
      host: 'localhost',
      path: '/home',
      port: '2500'
    },
    {
      protocol: 'http',
      host: 'localhost',
      path: '/about-us',
      port: '2500'
    },
    {
      protocol: 'http',
      host: 'localhost',
      path: '/contact-us',
      port: '2500'
    },
    {
      protocol: 'http',
      host: 'localhost',
      path: '/blog/',
      port: '2500'
    },
    {
      protocol: 'http',
      host: 'localhost',
      path: '/blog/the-silent-start',
      port: '2500'
    },
    {
      protocol: 'http',
      host: 'localhost',
      path: '/login',
      port: '2500'
    },
    {
      protocol: 'http',
      host: 'localhost',
      path: '/register',
      port: '2500'
    },
    {
      protocol: 'http',
      host: 'localhost',
      path: '/api',
      port: '2500'
    },
    {
      protocol: 'http',
      host: 'localhost',
      path: '/api/page/',
      port: '2500'
    },
    {
      protocol: 'http',
      host: 'localhost',
      path: '/api/post/',
      port: '2500'
    },
    {
      protocol: 'http',
      host: 'localhost',
      path: '/api/user/',
      port: '2500'
    },
    {
      protocol: 'http',
      host: 'localhost',
      path: '/api/role/',
      port: '2500'
    }
  ]
};
