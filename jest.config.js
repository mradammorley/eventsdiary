// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // The test environment that will be used for testing
    testEnvironment: "node",

    // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
    testURL: "http://localhost",

    // Location of setup file included at the top of all tests
    setupTestFrameworkScriptFile: "./test-setup.js"
};
