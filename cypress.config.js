const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: '5muukp',
   "reporter": "mochawesome",
    "reporterOptions": {
       "reportDir": "cypress/reports",
       "overwrite": false,
       "html": true,
       "json": true,
       "xlsx":true
},

  env:{
    apiurl :"http://192.168.0.17:1706/api/v1",
  },
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl:"http://192.168.0.131:86/login"
  },

  
  
});
