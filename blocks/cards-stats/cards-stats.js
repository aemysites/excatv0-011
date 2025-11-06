export default function decorate(block) {
  /* build cards */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-stats-card-image';
      else div.className = 'cards-stats-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => {
    const { width, height } = img;
    const ratio = width && height ? width / height : null;
    // Set aspect ratio for proper sizing
    img.width = 60;
    img.height = 60;
  });
  block.textContent = '';
  block.append(ul);
}
