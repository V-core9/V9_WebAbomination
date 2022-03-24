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
  '/page/',
  '/page/1',
  '/post/',
  '/post/1',
  '/user/',
  '/user/1',
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
