/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'pair-generator',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV.contentSecurityPolicy = {
    'default-src' : "'none'",
    'script-src'  : `'self' 'unsafe-inline' 'unsafe-eval' ${ENV.VM_LIVE_RELOAD} ` +
                    "https://widget.intercom.io https://js.intercomcdn.com",
    'font-src'    : "'self' https://fonts.gstatic.com",
    'connect-src' : `'self' ${ENV.ANALYTICS_URL} ${ENV.CAPCOM_URL} ` +
                    `${ENV.VM_LIVE_RELOAD} https://api-ping.intercom.io ` +
                    "https://nexus-websocket-a.intercom.io " +
                    "https://nexus-websocket-b.intercom.io " +
                    "wss://nexus-websocket-a.intercom.io " +
                    "wss://nexus-websocket-b.intercom.io " +
                    "https://api-iam.intercom.io",
    'img-src'     : "'self' https://js.intercomcdn.com  data:",
    'style-src'   : "'self' 'unsafe-inline' https://fonts.googleapis.com/css?family=Lato",
    'media-src'   : "'self'"
  };

  return ENV;
};
