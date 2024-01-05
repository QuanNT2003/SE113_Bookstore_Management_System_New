module.exports = function(config){
    config.set({
      mutate: [
        'src/pages/**/*.js',
        '!src/pages/index.js'
      ],
      testFramework: 'mocha',
      testRunner: 'mocha',
      reporters: ['progress', 'clear-text', 'html'],
      coverageAnalysis: 'perTest'
    });
  }