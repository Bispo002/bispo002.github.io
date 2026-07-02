/**
 * Sidebar configuration for Docusaurus.
 *
 * Para utilizar esta documentação com Docusaurus:
 *
 * 1. Na raiz do projeto, execute:
 *    npx create-docusaurus@latest website classic
 *
 * 2. Copie a pasta docs/ para website/docs/ (ou aponte docs.path para ./docs)
 *
 * 3. Substitua website/sidebars.js por este arquivo (ajustando o caminho se necessário)
 *
 * 4. Em docusaurus.config.js, configure:
 *    - title: 'PlanoFácil'
 *    - docs.sidebarPath: require.resolve('./sidebars.js')
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Primeiros Passos',
      collapsed: false,
      items: [
        'getting-started/instalacao',
        'getting-started/configuracao-ambiente',
      ],
    },
    {
      type: 'category',
      label: 'Arquitetura',
      items: [
        'arquitetura/visao-geral',
        'arquitetura/estrutura-projeto',
        'arquitetura/rotas-navegacao',
        'arquitetura/autenticacao-autorizacao',
      ],
    },
    {
      type: 'category',
      label: 'Guias',
      items: [
        'guias/fluxo-usuario',
        'guias/planos-aula',
        'guias/integracao-bncc',
      ],
    },
    {
      type: 'category',
      label: 'Referência',
      items: [
        'referencia/componentes',
        'referencia/servicos',
        'referencia/integracao-backend',
      ],
    },
    {
      type: 'category',
      label: 'Desenvolvimento',
      items: [
        'desenvolvimento/padroes-codigo',
        'desenvolvimento/testes',
        'desenvolvimento/build-deploy',
      ],
    },
  ],
};

module.exports = sidebars;
