// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'K1s',
  tagline: 'Your Kubernetes Serverless cluster for developers and newbies',
  url: 'https://k1s.sh',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'la-rebelion', // Usually your GitHub org/user name.
  projectName: 'k1s-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'es'],
  // },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/la-rebelion/k1s-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false, // Optional: disable the blog plugin
        // {
        //   showReadingTime: true,
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-L6H5PLMNY5',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'K1s',
        hideOnScroll: true,
        logo: {
          alt: 'K1s Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
            to: '/',
          },
          {
            to: '/roadmap',
            label: 'Roadmap',
            position: 'left',
          },
          {
            to: 'https://go.rebelion.la/k1s-access',
            html: '<span style="backgroundColor: #25c2a0; borderRadius: 20px; padding: 10px">Get Early Access</span>',
            position: 'left',
            target: '_blank',
          },
          {
            href: 'https://go.rebelion.la/k1s-docs-gh?utm_medium=k1s-docs&utm_source=navbar&utm_campaign=docs',
            label: 'GitHub',
            className: 'header-github-link',
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
                label: 'Docs',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/kubectl',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/k1s',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/LaRebelionLabs',
              },
              {
                label: 'Website Blog',
                href: 'https://rebelion.la',
              },
              {
                label: 'K1s Terminal',
                href: 'https://k1s.sh',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://rebelion.la',
              },
              {
                label: 'GitHub',
                href: 'https://go.rebelion.la/k1s-docs-gh?utm_medium=k1s-docs&utm_source=footer&utm_campaign=docs',
              },
            ],
          },
        ],
        logo: {
          alt: 'K1s Logo',
          src: 'img/k1s-txt-180.png',
          href: 'https://k1s.sh',
          width: 60,
          height: 60,
        },
        copyright: `Made in TX<br/> K1s Copyright © ${new Date().getFullYear()} by La Rebelion Labs.`,
      },
      prism: {
        additionalLanguages: ['bash', 'diff', 'json'],
      },
    }),
    scripts: [
      {
        src: 'https://js.hsforms.net/forms/embed/v2.js',
        async: true,
      },
    ],
};

module.exports = config;
