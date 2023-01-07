const CountryFlag = countryCode =>
  `<img src="https://hatscripts.github.io/circle-flags/flags/${countryCode.toLowerCase()}.svg" style="width: 28px; display: block;" />`;

const Entry = (entry, section, hasCountries) =>
  `|${entry.label}|\`${entry.key}\`|<img src="${section}/${entry.key}.svg" style="width: 80px; display: block;" />|${
    hasCountries
      ? entry.countries
        ? `<div style="display: flex; gap: 6px;">${entry.countries.map(CountryFlag).join('')}</div>|`
        : 'Various|'
      : ''
  }`;

const Category = (category, section) =>
  `### ${category.headline}\n|Name|Key|Preview|${category.hasCountries ? 'Countries|' : ''}\n|---|---|---|${
    category.hasCountries ? '---|' : ''
  }\n${category.entries.map(entry => Entry(entry, section, category.hasCountries)).join('\n')}`;

const Section = section =>
  `## ${section.headline}\n${section.categories.map(category => Category(category, section.key)).join('\n')}`;

const MarkdownTable = sections => sections.map(Section).join('\n');

export default MarkdownTable;
