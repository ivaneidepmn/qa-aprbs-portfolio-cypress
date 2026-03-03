const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qualidade.apprbs.com.br",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: false, // se você tiver cypress/support/e2e.js, me avisa que ajusto
    viewportWidth: 1366,
    viewportHeight: 768,
    video: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
  },
});