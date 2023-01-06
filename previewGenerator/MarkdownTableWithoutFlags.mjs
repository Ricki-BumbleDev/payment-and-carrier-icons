const countryNames = new Intl.DisplayNames('en', { type: 'region' });

const Entry = (entry, section, hasCountries) =>
  `|${entry.label}|\`${entry.key}\`|<img src="${section}/${entry.key}.svg" style="width: 80px; display: block;" />|${
    hasCountries ? `${entry.countries?.map(countryCode => countryNames.of(countryCode)).join(', ') ?? ''}|` : ''
  }`;

const Category = (category, section) =>
  `### ${category.headline}\n|Name|Key|Preview|${category.hasCountries ? 'Countries|' : ''}\n|---|---|---|${
    category.hasCountries ? '---|' : ''
  }\n${category.entries.map(entry => Entry(entry, section, category.hasCountries)).join('\n')}`;

const Section = section =>
  `## ${section.headline}\n${section.categories.map(category => Category(category, section.key)).join('\n')}`;

const MarkdownTable = sections => sections.map(Section).join('\n');

export default MarkdownTable;
