const newman = require('newman');

newman.run({
  collection: require('./tests/MyRestfulBooker.postman_collection.json'),
  reporters: ['cli', 'htmlextra'],
  reporter: {
    htmlextra: {
      export: './newman/report.html',
    },
  },
//   environment: require('./tests/env.postman_environment.json'), // optional if you have env vars
}, (err) => {
  if (err) {
    console.error('❌ Collection run failed!', err);
    process.exit(1);
  } else {
    console.log('✅ Collection run completed successfully!');
  }
});
