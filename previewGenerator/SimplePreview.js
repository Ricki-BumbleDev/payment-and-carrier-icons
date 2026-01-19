import Html from './Html.js';

const Entry = (entry, section) => `<img src="${section}/${entry.key}.svg" class="icon" />`;

const Category = (category, section) => category.entries.map(entry => Entry(entry, section)).join('');

const Section = section =>
  `<h2>${section.headline}</h2><div class="icons">${section.categories
    .map(category => Category(category, section.key))
    .join('')}</div>`;

const SimplePreview = sections => Html(sections.map(Section).join(''));

export default SimplePreview;
