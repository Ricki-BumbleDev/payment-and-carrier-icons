import Html from './Html.mjs';

const Entry = (entry, section) => `<img src="${section}/${entry.key}.svg" class="icon" />`;

const Category = (category, section) =>
  `<h3>${category.headline}</h3><div class="icons">${category.entries.map(entry => Entry(entry, section)).join('')}</div>`;

const Section = section =>
  `<h2>${section.headline}</h2>${section.categories.map(category => Category(category, section.key)).join('')}`;

const CategoryPreview = sections => Html(sections.map(Section).join(''));

export default CategoryPreview;
