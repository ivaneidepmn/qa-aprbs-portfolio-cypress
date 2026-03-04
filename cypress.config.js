const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  screenshotOnRunFailure: true,

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: false,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },

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