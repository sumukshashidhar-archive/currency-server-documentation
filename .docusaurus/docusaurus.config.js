export default {
  "title": "Peer Admit",
  "tagline": "College Admissions",
  "url": "https://peeradmit.netlifly.com",
  "baseUrl": "/",
  "onBrokenLinks": "ignore",
  "favicon": "img/favicon.ico",
  "organizationName": "sumukshashidhar",
  "projectName": "peeradmit-documentation",
  "themeConfig": {
    "navbar": {
      "title": "PeerAdmit",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/sumukshashidhar/peeradmit-documentation",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Documentation",
              "to": "docs/"
            },
            {
              "label": "Server API Routing List",
              "to": "docs/server/routes"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/sumukshashidhar/peeradmit-documentation"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 PeerAdmit Inc"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/sumuk/Documents/peeradmit-documentation/sidebars.js",
          "editUrl": "https://github.com/sumukshashidhar/peeradmit-documentation/edit/master/peeradmit/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/sumukshashidhar/peeradmit-documentation/edit/master/peeradmit/blog/"
        },
        "theme": {
          "customCss": "/Users/sumuk/Documents/peeradmit-documentation/src/css/custom.css"
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};