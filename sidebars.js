/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  // Manually defined sidebar
  tutorialSidebar: [
    {
      type: 'category',
      label: '🛠 Ethereum Developer Bootcamp',
      items: [
        'intro/about',
        'intro/ethereum-concepts',
      ],
    },
    {
      type: 'category',
      label: '🦀 Rust',
      items: [
        'rust/intro',
        'rust/basics',
        'rust/setup',
        'rust/control-flow',
      ],
    },
    {
      type: 'category',
      label: '⛽️ Fuel Network',
      items: [
        'fuel-network/intro',
        'fuel-network/setup',
        'fuel-network/basics',
        'fuel-network/programs',
        'fuel-network/control-flow',
        'fuel-network/advanced-topics',
        'fuel-network/blockchain-dev',
      ],
    },
    {
      type: 'category',
      label: '💻 Solidity',
      items: [
        'solidity/intro',
        'solidity/setup',
        'solidity/basics',
        'solidity/control-flow',
      ],
    },
  ],
};

module.exports = sidebars;
