import fs from 'fs/promises';
import CategoryPreview from './CategoryPreview.mjs';
import MarkdownTable from './MarkdownTable.mjs';
import MarkdownTableDoctave from './MarkdownTableDoctave.mjs';
import MarkdownTableGitHub from './MarkdownTableGitHub.mjs';
import SimplePreview from './SimplePreview.mjs';

const renderer = 'SimplePreview';
const outputFile = 'preview.html';

const rendererComponents = {
  SimplePreview,
  CategoryPreview,
  MarkdownTable,
  MarkdownTableGitHub,
  MarkdownTableDoctave
};

const sectionDefinitions = [
  {
    key: 'paymentMethods',
    headline: 'Payment Methods',
    categories: [
      { key: 'card1', headline: 'Cards (International)' },
      { key: 'card2', headline: 'Cards (Regional)', hasCountries: true },
      { key: 'mobile', headline: 'Mobile' },
      { key: 'service1', headline: 'Services (International)' },
      { key: 'service2', headline: 'Services (Regional)', hasCountries: true },
      { key: 'other', headline: 'Other', hasCountries: true },
      { key: 'invoice', headline: 'Invoice Processors', hasCountries: true },
      { key: 'crypto', headline: 'Crypto' }
    ]
  },
  {
    key: 'carriers',
    headline: 'Carriers',
    categories: [
      { key: 'international', headline: 'International' },
      { key: 'nationalPost', headline: 'National Postal Services', hasCountries: true },
      { key: 'other', headline: 'Other', hasCountries: true }
    ]
  }
];

const groupEntries = (entries, categories) =>
  categories.map(entry => ({
    ...entry,
    entries: entries.filter(({ category }) => category === entry.key).map(({ category, ...rest }) => rest)
  }));

const sections = await Promise.all(
  sectionDefinitions.map(async sectionDefinition => {
    const entries = JSON.parse(await fs.readFile(`${sectionDefinition.key}.json`, 'utf-8'));
    const categories = groupEntries(entries, sectionDefinition.categories);
    return { ...sectionDefinition, categories };
  })
);

const Renderer = rendererComponents[renderer];
const output = Renderer(sections);
await fs.writeFile(outputFile, output);

// <img src="https://media.nexacommerce.com/${file}" width="110px"  />
