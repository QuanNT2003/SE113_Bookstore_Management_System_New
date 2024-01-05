// stryker.conf.js

/**
  * @type {import('@stryker-mutator/api/core').StrykerOptions}
  */
module.exports = {
    mutate: [
      'src/pages/**/*.js', // This will include all JS files in the pages directory
      '!src/pages/**/*.test.js', // This will exclude test files within the pages directory
    ],
    testFramework: 'mocha', // Change this to your actual test framework if it's not mocha
    testRunner: 'mocha', // Change this to your actual test runner if it's not mocha
    reporters: ['progress', 'clear-text', 'html'],
    coverageAnalysis: 'perTest',
    // Add any other configuration options needed for Stryker here
  };
  