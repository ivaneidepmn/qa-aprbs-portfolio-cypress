const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  screenshotOnRunFailure: true,

  e2e: {
    baseUrl: "https://qualidade.apprbs.com.br",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: false,

    viewportWidth: 1366,
    viewportHeight: 768,

    video: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",

    setupNodeEvents(on, config) {
      return config;
    },
  },
});