const batchIdTime = Date.now();

module.exports = {
    
    appName: 'Cypress Prototype',
    showLogs: true,
    batchName: 'cypress-prototype-' + batchIdTime,
    batchId: batchIdTime,
    apiKey: process.env.APPLITOOLS_API_KEY,
    serverUrl: 'https://gannetteyes.applitools.com',
    matchLevel: 'Strict',
    concurrency: 45,
    browser: [
      {width: 375, height: 667, name: 'chrome'},
      {width: 412, height: 553, name: 'chrome'},
      {width: 800, height: 1112, name: 'chrome'},
      {width: 375, height: 667, name: 'firefox'},
      {width: 412, height: 553, name: 'firefox'},
      {width: 800, height: 1112, name: 'firefox'},
      {deviceName: 'iPhone X', screenOrientation: 'portrait'},
      {deviceName: 'iPhone 5/SE', screenOrientation: 'portrait'},
      {deviceName: 'iPhone 6/7/8', screenOrientation: 'portrait'},
      {deviceName: 'iPad Mini', screenOrientation: 'portrait'},
      {deviceName: 'Pixel 2 XL', screenOrientation: 'portrait'},
      {deviceName: 'Nexus 6P', screenOrientation: 'portrait'},
    ]
    // all other configuration variables apply
  }
