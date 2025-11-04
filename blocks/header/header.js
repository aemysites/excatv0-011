/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // Clear block content
  block.textContent = '';

  // Create nav wrapper
  const navWrapper = document.createElement('div');
  navWrapper.className = 'nav-wrapper';

  // Create nav element
  const nav = document.createElement('nav');
  nav.id = 'nav';

  // Create brand section with Panasonic logo
  const navBrand = document.createElement('div');
  navBrand.className = 'nav-brand';
  const brandLink = document.createElement('a');
  brandLink.href = '/';
  brandLink.className = 'logo';
  const logoImg = document.createElement('img');
  logoImg.src = '/icons/logo.svg';
  logoImg.alt = 'Panasonic';
  brandLink.appendChild(logoImg);
  navBrand.appendChild(brandLink);

  // Create navigation sections
  const navSections = document.createElement('div');
  navSections.className = 'nav-sections';
  
  const navWrapper2 = document.createElement('div');
  navWrapper2.className = 'default-content-wrapper';
  
  const navList = document.createElement('ul');
  
  // Navigation items
  const navItems = [
    { text: '商品情報', href: '#' },
    { text: 'サポート', href: '#' },
    { text: 'オンラインストア', href: '#' },
    { text: 'CLUB Panasonic', href: '#' },
  ];

  navItems.forEach((item) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    navList.appendChild(li);
  });

  navWrapper2.appendChild(navList);
  navSections.appendChild(navWrapper2);

  // Assemble the nav
  nav.appendChild(navBrand);
  nav.appendChild(navSections);

  // Add nav to wrapper
  navWrapper.appendChild(nav);

  // Add wrapper to block
  block.appendChild(navWrapper);
}
