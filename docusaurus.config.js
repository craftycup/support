// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Crafty Cup Support",
  tagline: "All there is to know about Crafty Cup",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://support.bloxstreet.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "bloxstreet", // Usually your GitHub org/user name.
  projectName: "support", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
            routeBasePath: "/",
            sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "Crafty Cup Support",
        items: [],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Support",
            items: [
              {
                label: "Home",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Roblox Group",
                href: "https://www.roblox.com/groups/4888902/Crafty-Cup#!/about",
              },
              {
                label: "Discord",
                href: "https://discord.com/invite/craftycup",
              },
            ],
          },
          {
            title: "GitHub",
            items: [
              {
                label: "Organization",
                href: "https://github.com",
              },
              {
                label: "Support Repository",
                href: "https://github.com,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BloxStreet. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
