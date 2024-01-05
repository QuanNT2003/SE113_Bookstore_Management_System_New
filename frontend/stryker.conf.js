// stryker.conf.js

/**
  * @type {import('@stryker-mutator/api/core').StrykerOptions}
  */
module.exports = {
    mutate: [
      'src/pages/Login/*.js', // This will include all JS files in the pages directory
      '!src/pages/Login/*.scss', // This will exclude test files within the pages directory
    ],
    reporters: ['progress', 'clear-text', 'html'],
    coverageAnalysis: 'perTest',
    // Add any other configuration options needed for Stryker here
  };
  