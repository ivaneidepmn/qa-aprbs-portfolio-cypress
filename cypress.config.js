const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: false,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true
  },

  e2e: {
    baseUrl: "https://qualidade.apprbs.com.br",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    viewportWidth: 1366,
    viewportHeight: 768,
    video: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    }
  }
});