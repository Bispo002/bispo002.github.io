import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'PlanoFácil',
  tagline: 'Plano de aulas alinhados com a BNCC',
  favicon: 'img/plano-facil-logo.svg',
  url: 'https://bispo002.github.io/',
  baseUrl: '/',
  organizationName: 'Bispo002',
  projectName: 'bispo002.github.io',
  trailingSlash: false,
  onBrokenLinks: 'throw',

  presets: [
    [
      'classic',
      {
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      hideOnScroll: false,
      items: [],
    },
    footer: {
      copyright: `${new Date().getFullYear()}, PlanoFácil - Built with Docusaurus. Gabriel Bachega, Gabriel Bispo`,
    },
  },
};

export default config;
