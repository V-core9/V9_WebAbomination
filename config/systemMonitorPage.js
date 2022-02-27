const sysMonitorPage = {
  title: 'V-core9 System Status',
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
  healthChecks: []
};

var pathsToTrack = [
  '/',
  '/home/',
  '/home.html',
  '/about-us/',
  '/about-us.html',
  '/contact-us/',
  '/contact-us.html',

  '/blog/',
  '/blog/the-silent-start',
  '/blog/the-silent-start.html',

  '/login/',
  '/login.html',
  '/register/',
  '/register.html',

  '/api/',

  '/api/page/',
  '/api/page/1',

  '/api/post/',
  '/api/post/1',

  '/api/user/',
  '/api/user/1',

  '/api/role/',
  '/api/role/1',
];

pathsToTrack.map((item) => {
  sysMonitorPage.healthChecks.push({
    protocol: 'http',
    host: 'localhost',
    path: item,
    port: '2500'
  });
});

module.exports = sysMonitorPage;
