const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qualidade.apprbs.com.br",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: false,
    viewportWidth: 1366,
    viewportHeight: 768,
    video: true,

    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",

    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mochawesome",
      overwrite: false,
      html: false,
      json: true,
      timestamp: "mmddyyyy_HHMMss",
    },
  },
});