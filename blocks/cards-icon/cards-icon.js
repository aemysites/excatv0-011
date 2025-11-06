export default function decorate(block) {
  /* build cards */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-icon-card-image';
      else div.className = 'cards-icon-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => {
    img.width = 50;
    img.height = 50;
  });
  block.textContent = '';
  block.append(ul);
}
