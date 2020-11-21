
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','335'),
  exact: true,
},
{
  path: '/blog/choices/auth',
  component: ComponentCreator('/blog/choices/auth','274'),
  exact: true,
},
{
  path: '/blog/choices/frontend',
  component: ComponentCreator('/blog/choices/frontend','fe8'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','d85'),
  exact: true,
},
{
  path: '/blog/tags/authentication',
  component: ComponentCreator('/blog/tags/authentication','e2b'),
  exact: true,
},
{
  path: '/blog/tags/frontend',
  component: ComponentCreator('/blog/tags/frontend','628'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','f38'),
  exact: true,
},
{
  path: '/blog/tags/peeradmit',
  component: ComponentCreator('/blog/tags/peeradmit','451'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','ed4'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','659'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','b39'),
  exact: true,
},
{
  path: '/docs/server/api/dashboard',
  component: ComponentCreator('/docs/server/api/dashboard','d99'),
  exact: true,
},
{
  path: '/docs/server/api/login',
  component: ComponentCreator('/docs/server/api/login','120'),
  exact: true,
},
{
  path: '/docs/server/api/message-stream',
  component: ComponentCreator('/docs/server/api/message-stream','b03'),
  exact: true,
},
{
  path: '/docs/server/api/register',
  component: ComponentCreator('/docs/server/api/register','1d5'),
  exact: true,
},
{
  path: '/docs/server/api/status',
  component: ComponentCreator('/docs/server/api/status','fd6'),
  exact: true,
},
{
  path: '/docs/server/deployment/deployscript',
  component: ComponentCreator('/docs/server/deployment/deployscript','223'),
  exact: true,
},
{
  path: '/docs/server/routes',
  component: ComponentCreator('/docs/server/routes','262'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
