const config = {
 use: {
    screenshot: 'on',
    video: 'on',
  },
    reporter: [
      ['list'], 
      [         
        'playwright-qase-reporter',
        {
          debug: false,
          testops: {
            api: {
              token: '',
            },
            project: '',
            uploadAttachments: true,
            run: {
              complete: true,
            }
          },
        },
      ],
    ],
  };
  
  module.exports = config;
  
