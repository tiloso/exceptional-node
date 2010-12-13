var Exceptional = require('../lib/exceptional').Exceptional;

// Exceptional.API_KEY = 'your-api-key-here';
Exceptional.API_KEY = 'd2df6fd8a778dfa3af99dae93df2754e061263c2';

process.addListener('uncaughtException', function(err) {
    Exceptional.handle(err);
});

try {
  throw new Error("Test Error 1");
} catch(error) {
  console.log("Error occurred ", error.message);
  Exceptional.handle(error);
}


throw new Error("Test Error 2");
