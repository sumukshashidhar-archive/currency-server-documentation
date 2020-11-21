module.exports = {
  title: 'Currency Server',
  tagline: 'Free. Open Source. Currency Management.',
  url: 'https://currency.peeradmit.ml',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'sumukshashidhar', // Usually your GitHub org/user name.
  projectName: 'peeradmit-documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'PeerAdmit',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/sumukshashidhar/peeradmit-documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: 'docs/',
            },
            {
              label: 'Server API Routing List',
              to: 'docs/server/routes',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sumukshashidhar/peeradmit-documentation',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PeerAdmit Inc`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/sumukshashidhar/peeradmit-documentation/edit/master/peeradmit/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/sumukshashidhar/peeradmit-documentation/edit/master/peeradmit/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
