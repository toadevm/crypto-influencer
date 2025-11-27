import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Investor-focused documentation structure
 * Simplified from technical deep-dive to business pitch
 */
const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'doc',
      id: 'overview',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'The Problem',
      collapsed: false,
      items: [
        'problem/trust-crisis',
        'problem/real-examples',
      ],
    },
    {
      type: 'category',
      label: 'Our Solution',
      items: [
        'solution/how-it-works',
        'solution/protection-system',
      ],
    },
    {
      type: 'category',
      label: 'The Opportunity',
      items: [
        'opportunity/market-size',
        'opportunity/business-model',
        'opportunity/goals',
      ],
    },
  ],
};

export default sidebars;
