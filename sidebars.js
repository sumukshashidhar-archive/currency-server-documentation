module.exports = {
  someSidebar: {
    "Getting Started":['welcomedocs'],
      "Server Documentation": ['server/routes', {
        "API":[
          'server/api/status',
          'server/api/message-stream',
          'server/api/register',
          'server/api/login',
          'server/api/dashboard'
        ]
      },
        {
          "Deployment":[
              'server/deployment/deployscript'
          ]
        }
    ],
  },
};
