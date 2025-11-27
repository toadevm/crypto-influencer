import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Crypto Influencer Verification Platform',
  tagline: 'Protecting Investors, Projects, and Influencers from Fraud',
  favicon: 'img/favicon.ico',

  // Custom fields
  customFields: {
    author: 'SarahGrey',
  },

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://toadevm.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/crypto-influencer/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'toadevm', // Usually your GitHub org/user name.
  projectName: 'crypto-influencer', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn', // Changed from 'throw' to allow build during development

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    metadata: [
      {name: 'author', content: 'SarahGrey'},
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Crypto Influencer',
      items: [
        {
          to: '/docs/overview',
          label: 'Overview',
          position: 'left',
        },
        {
          to: '/docs/problem/trust-crisis',
          label: 'The Problem',
          position: 'left',
        },
        {
          to: '/docs/solution/how-it-works',
          label: 'Solution',
          position: 'left',
        },
        {
          to: '/docs/opportunity/market-size',
          label: 'Opportunity',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Overview',
              to: '/docs/overview',
            },
            {
              label: 'The Problem',
              to: '/docs/problem/trust-crisis',
            },
            {
              label: 'Our Solution',
              to: '/docs/solution/how-it-works',
            },
            {
              label: 'The Opportunity',
              to: '/docs/opportunity/market-size',
            },
          ],
        },
        {
          title: 'Quick Links',
          items: [
            {
              label: 'Real Scam Examples',
              to: '/docs/problem/real-examples',
            },
            {
              label: 'How It Works',
              to: '/docs/solution/how-it-works',
            },
            {
              label: 'Business Model',
              to: '/docs/opportunity/business-model',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Crypto Influencer Verification Platform. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['solidity', 'typescript', 'javascript', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
