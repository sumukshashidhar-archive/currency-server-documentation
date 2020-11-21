---
id: deployscript
title: Using the Bundled Deployment Script
slug: /server/deployment/deployscript
---


### Requirements

There is a bundled script with the application to help you deploy. But before that, you must set the environment variables

#### Steps
1. Copy `env.template` to `.env`
2. Set the variables for the database, and modify the other variables to your preference if necessary
3. Run `chmod +x deploy.sh`
4. `./deploy.sh`

Provided you have docker and all other requirements installed, deployment will proceed smoothly
