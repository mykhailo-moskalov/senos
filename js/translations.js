const translations = {
  en: {
    // HEADER
    headerNavHome: 'Home',
    headerNavAbout: 'About Us',
    headerNavProducts: 'Products',

    headerNavBtn: 'Contact Us',

    //MENU
    menuNavHome: 'Home',
    menuNavAbout: 'About Us',
    menuNavProducts: 'Products',
    menuNavBtn: 'Contact Us',

    //HERO
    heroTitle: 'From Fields<br />to Global Markets',

    heroSubtitle: 'Trusted Worldwide. Driven by Quality.',

    heroBtn: 'Explore Our Products',

    //ABOUT
    aboutTitle: 'About Us',

    aboutSubtitle1: 'Who We Are',
    aboutText1:
      'SENOS is an international trading company exporting agri commodities from the Black Sea region, connecting reliable producers with with buyers worldwide.',
    aboutSubtitle2: 'What We Offer',
    aboutText2:
      'We supply grains, pulses, oilseeds, edible oils, and animal feed — backed by trusted suppliers, quality control, and smooth logistics at every step.',
    aboutSubtitle3: 'Our Mission',
    aboutText3:
      'To build long-term partnerships through trust, performance, and value — helping our clients grow through reliable and efficient trade.',

    //PRODUCTS
    productsTitle: 'Our Products',

    productsHintMob: 'Tap to see more',
    productsHintDesk: 'Aim to see more',

    productsText11: 'Wheat',
    productsText12: 'Barley',
    productsText13: 'Corn',
    productsText14: 'Oats',
    productsSubtitle1: 'Grains',
    productsText21: 'Whole/Split Peas',
    productsText22: 'Red/Green Lentils',
    productsText23: 'Chickpeas',
    productsText24: 'Beans',
    productsSubtitle2: 'Pulses',
    productsText31: 'Crude and Refined Sunflower Oil',
    productsText32: 'Soybean Oil',
    productsText33: 'Rapeseed Oil',
    productsSubtitle3: 'Edible Oils',
    productsText41: 'Sunflower Seeds',
    productsText42: 'Soybeans',
    productsText43: 'Rapeseeds (Canola)',
    productsText44: 'Mustard Seeds',
    productsText45: 'Flax Seeds',
    productsSubtitle4: 'Oilseeds',
    productsText51: 'Sunflower Meal',
    productsText52: 'Soybean Meal',
    productsText53: 'Wheat Bran',
    productsText54: 'DDGS (Dried Distillers Grains with Soluble)',
    productsText55: 'Pelleted Soybean Hulls',
    productsSubtitle5: 'Animal Feed &amp; Meals',
    productsText61: 'White Crystal Sugar',
    productsSubtitle6: 'Other Products',

    //WHY
    whyTitle: 'Why Choose Senos',

    whySubtitle1: 'International Expertise',
    whyText1:
      'Over 10 years of experience in international agri-commodity trade',
    whySubtitle2: 'Trusted Supplier Network',
    whyText2:
      'Reliable partnerships with vetted suppliers and strict quality control at every stage',
    whySubtitle3: 'Product Diversity',
    whyText3:
      'Broad portfolio including grains, oilseeds, edible oils, animal feed, and processed agri-products',
    whySubtitle4: 'Operational Efficiency',
    whyText4:
      'Streamlined logistics, fast execution, and professional delivery management',
    whySubtitle5: 'Customer-Focused Approach',
    whyText5:
      "Tailored solutions and flexible terms to meet each client's specific needs",
    whySubtitle6: 'Consistent Quality Assurance',
    whyText6: 'Standardized quality procedures from origin to final delivery',
    whySubtitle7: 'Transparency &amp; Reliability',
    whyText7:
      'Clear communication, full traceability, and strict commitment to agreements',
    whySubtitle8: 'Long-Term Partnerships',
    whyText8:
      'Focused on building lasting business relationships — not one-time transactions',

    whyBtn: 'Contact Us',

    //FOOTER
    footerNavHome: 'Home',
    footerNavAbout: 'About Us',
    footerNavProducts: 'Products',

    footerCopyright: 'Copyright&copy; SENOS LLC . All rights reserved.',
    footerSocial: 'Social Media',

    footerContacts: 'Our contacts',
    footerPhone: '+380-63-190-14-10',
    footerEmail: 'trade@senosgroup.com',

    //MODAL
    modalTitle: 'Leave your details and our team will contact you shortly',

    modalLabelName: 'Name',
    modalTextValid1: 'Successful!',
    modalTextInvalid1: 'Invalid name, please try again',
    modalLabelPhone: 'Phone',
    modalTextValid2: 'Successful!',
    modalTextInvalid2: 'Invalid phone, please try again',
    modalLabelEmail: 'Email',
    modalTextValid3: 'Successful!',
    modalTextInvalid3: 'Invalid email, please try again',
    modalLabelComment: 'Comment',

    modalAgreeText: 'I accept the terms and conditions of the',
    modalAgreeLink: 'Privacy Policy',

    modalBtn: 'Send',
  },

  uk: {},

  tr: {},

  ar: {},

  zh: {},

  es: {},

  fr: {},
};

function switchLanguage(languageCode) {
  console.log('Switching language to:', languageCode);
  const t = translations[languageCode];
  if (!t) return;

  // HEADER
  document.getElementById('headerNavHome').innerText = t.headerNavHome;
  document.getElementById('headerNavAbout').innerText = t.headerNavAbout;
  document.getElementById('headerNavProducts').innerText = t.headerNavProducts;

  document.getElementById('headerNavBtn').innerText = t.headerNavBtn;
  //MENU
  document.getElementById('menuNavHome').innerText = t.menuNavHome;
  document.getElementById('menuNavAbout').innerText = t.menuNavAbout;
  document.getElementById('menuNavProducts').innerText = t.menuNavProducts;

  document.getElementById('menuNavBtn').innerText = t.menuNavBtn;

  //HERO
  document.getElementById('heroTitle').innerHTML = t.heroTitle;

  document.getElementById('heroSubtitle').innerText = t.heroSubtitle;

  document.getElementById('heroBtn').innerText = t.heroBtn;

  //ABOUT
  document.getElementById('aboutTitle').innerText = t.aboutTitle;

  document.getElementById('aboutSubtitle1').innerText = t.aboutSubtitle1;
  document.getElementById('aboutText1').innerText = t.aboutText1;
  document.getElementById('aboutSubtitle2').innerText = t.aboutSubtitle2;
  document.getElementById('aboutText2').innerText = t.aboutText2;
  document.getElementById('aboutSubtitle3').innerText = t.aboutSubtitle3;
  document.getElementById('aboutText3').innerText = t.aboutText3;

  //PRODUCTS
  document.getElementById('productsTitle').innerText = t.productsTitle;

  document.getElementById('productsHintMob').innerText = t.productsHintMob;
  document.getElementById('productsHintDesk').innerText = t.productsHintDesk;

  document.getElementById('productsText11').innerText = t.productsText11;
  document.getElementById('productsText12').innerText = t.productsText12;
  document.getElementById('productsText13').innerText = t.productsText13;
  document.getElementById('productsText14').innerText = t.productsText14;
  document.getElementById('productsSubtitle1').innerText = t.productsSubtitle1;
  document.getElementById('productsText21').innerText = t.productsText21;
  document.getElementById('productsText22').innerText = t.productsText22;
  document.getElementById('productsText23').innerText = t.productsText23;
  document.getElementById('productsText24').innerText = t.productsText24;
  document.getElementById('productsSubtitle2').innerText = t.productsSubtitle2;
  document.getElementById('productsText31').innerText = t.productsText31;
  document.getElementById('productsText32').innerText = t.productsText32;
  document.getElementById('productsText33').innerText = t.productsText33;
  document.getElementById('productsSubtitle3').innerText = t.productsSubtitle3;
  document.getElementById('productsText41').innerText = t.productsText41;
  document.getElementById('productsText42').innerText = t.productsText42;
  document.getElementById('productsText43').innerText = t.productsText43;
  document.getElementById('productsText44').innerText = t.productsText44;
  document.getElementById('productsText45').innerText = t.productsText45;
  document.getElementById('productsSubtitle4').innerText = t.productsSubtitle4;
  document.getElementById('productsText51').innerText = t.productsText51;
  document.getElementById('productsText52').innerText = t.productsText52;
  document.getElementById('productsText53').innerText = t.productsText53;
  document.getElementById('productsText54').innerText = t.productsText54;
  document.getElementById('productsText55').innerText = t.productsText55;
  document.getElementById('productsSubtitle5').innerHTML = t.productsSubtitle5;
  document.getElementById('productsText61').innerText = t.productsText61;
  document.getElementById('productsSubtitle6').innerText = t.productsSubtitle6;

  //WHY
  document.getElementById('whyTitle').innerText = t.whyTitle;

  document.getElementById('whySubtitle1').innerText = t.whySubtitle1;
  document.getElementById('whyText1').innerText = t.whyText1;
  document.getElementById('whySubtitle2').innerText = t.whySubtitle2;
  document.getElementById('whyText2').innerText = t.whyText2;
  document.getElementById('whySubtitle3').innerText = t.whySubtitle3;
  document.getElementById('whyText3').innerText = t.whyText3;
  document.getElementById('whySubtitle4').innerText = t.whySubtitle4;
  document.getElementById('whyText4').innerText = t.whyText4;
  document.getElementById('whySubtitle5').innerText = t.whySubtitle5;
  document.getElementById('whyText5').innerText = t.whyText5;
  document.getElementById('whySubtitle6').innerText = t.whySubtitle6;
  document.getElementById('whyText6').innerText = t.whyText6;
  document.getElementById('whySubtitle7').innerHTML = t.whySubtitle7;
  document.getElementById('whyText7').innerText = t.whyText7;
  document.getElementById('whySubtitle8').innerText = t.whySubtitle8;
  document.getElementById('whyText8').innerText = t.whyText8;

  document.getElementById('whyBtn').innerText = t.whyBtn;

  //FOOTER
  document.getElementById('footerNavHome').innerText = t.footerNavHome;
  document.getElementById('footerNavAbout').innerText = t.footerNavAbout;
  document.getElementById('footerNavProducts').innerText = t.footerNavProducts;

  document.getElementById('footerCopyright').innerHTML = t.footerCopyright;
  document.getElementById('footerSocial').innerText = t.footerSocial;

  document.getElementById('footerContacts').innerText = t.footerContacts;
  document.getElementById('footerPhone').innerText = t.footerPhone;
  document.getElementById('footerEmail').innerText = t.footerEmail;

  //MODAL
  document.getElementById('modalTitle').innerText = t.modalTitle;

  document.getElementById('modalLabelName').innerText = t.modalLabelName;
  document.getElementById('modalTextValid1').innerText = t.modalTextValid1;
  document.getElementById('modalTextInvalid1').innerText = t.modalTextInvalid1;
  document.getElementById('modalLabelPhone').innerText = t.modalLabelPhone;
  document.getElementById('modalTextValid2').innerText = t.modalTextValid2;
  document.getElementById('modalTextInvalid2').innerText = t.modalTextInvalid2;
  document.getElementById('modalLabelEmail').innerText = t.modalLabelEmail;
  document.getElementById('modalTextValid3').innerText = t.modalTextValid3;
  document.getElementById('modalTextInvalid3').innerText = t.modalTextInvalid3;
  document.getElementById('modalLabelComment').innerText = t.modalLabelComment;

  document.getElementById(
    'modalAgreeText'
  ).innerHTML = `${t.modalAgreeText} <a id="modalAgreeLink" href="./privacy-policy.html" target="_blank" class="modal-policy">${t.modalAgreeLink}</a>`;

  document.getElementById('modalBtn').childNodes[0].textContent = t.modalBtn;
}

// Set initial content from default dropdown value
window.onload = () => {
  const defaultLang = document.getElementById('language-select').value;
  const defaultLangMob = document.getElementById('menu-language-select').value;
  switchLanguage(defaultLang);
  switchLanguage(defaultLangMob);
};
