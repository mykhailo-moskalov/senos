const translations = {
  en: {
    //PRIVACY POLICY
    ppNavLink: 'Back to the Main Page',

    ppTitle: 'Privacy Policy',

    ppText1:
      'At SENOS LLC, we respect your privacy and the trust you place in us.',
    ppText2:
      'We collect and process only the information that is necessary to communicate with you, respond to inquiries, and provide relevant information about our products and services. This may include your name, company, email address, phone number, and any message you send us through the website.',
    ppText3:
      'We do not sell, rent, or share your personal data with third parties unless required by law or necessary to operate our website securely and effectively.',
    ppText4:
      'Cookies may be used to improve your browsing experience and help us understand how visitors interact with our site. You can manage cookie preferences through your browser settings.',
    ppText5:
      'All information is stored securely. You may contact us at any time to request access to your data or to ask questions about how it is used.',

    ppContacts: 'Our contacts',
    ppEmailText: 'Our Email:',
    ppEmail: 'trade@senosgroup.com',
    ppSiteText: 'Our Website:',
    ppSite: 'senosgroup.com',

    ppAgree: 'By using this website, you agree to this policy.',
  },

  uk: {
    ppNavLink: 'Повернутися на головну сторінку',

    ppTitle: 'Політика конфіденційності',

    ppText1:
      'У компанії SENOS LLC ми поважаємо вашу конфіденційність і довіру, яку ви нам надаєте.',
    ppText2:
      "Ми збираємо та обробляємо лише ту інформацію, яка необхідна для спілкування з вами, відповіді на запити та надання актуальної інформації про наші продукти та послуги. Це може включати ваше ім'я, назву компанії, адресу електронної пошти, номер телефону та будь-яке повідомлення, яке ви надсилаєте нам через вебсайт.",
    ppText3:
      'Ми не продаємо, не здаємо в оренду і не передаємо ваші персональні дані третім сторонам, якщо це не вимагається законом або не є необхідним для безпечного та ефективного функціонування нашого вебсайту.',
    ppText4:
      'Файли cookie можуть використовуватися для покращення вашого досвіду перегляду та допомоги нам у розумінні того, як відвідувачі взаємодіють з нашим сайтом. Ви можете керувати налаштуваннями cookie через налаштування вашого браузера.',
    ppText5:
      "Уся інформація зберігається в безпечному вигляді. Ви можете зв'язатися з нами в будь-який час, щоб отримати доступ до своїх даних або поставити запитання щодо того, як вони використовуються.",

    ppContacts: 'Наші контакти',
    ppEmailText: 'Наша електронна пошта:',
    ppEmail: 'trade@senosgroup.com',
    ppSiteText: 'Наш вебсайт:',
    ppSite: 'senosgroup.com',

    ppAgree: 'Користуючись цим вебсайтом, ви погоджуєтеся з цією політикою.',
  },

  tr: {
    ppNavLink: '',

    ppTitle: '',

    ppText1: '',
    ppText2: '',
    ppText3: '',
    ppText4: '',
    ppText5: '',

    ppContacts: '',
    ppEmailText: '',
    ppEmail: '',
    ppSiteText: '',
    ppSite: '',

    ppAgree: '',
  },

  ar: {
    ppNavLink: '',

    ppTitle: '',

    ppText1: '',
    ppText2: '',
    ppText3: '',
    ppText4: '',
    ppText5: '',

    ppContacts: '',
    ppEmailText: '',
    ppEmail: '',
    ppSiteText: '',
    ppSite: '',

    ppAgree: '',
  },

  zh: {
    ppNavLink: '',

    ppTitle: '',

    ppText1: '',
    ppText2: '',
    ppText3: '',
    ppText4: '',
    ppText5: '',

    ppContacts: '',
    ppEmailText: '',
    ppEmail: '',
    ppSiteText: '',
    ppSite: '',

    ppAgree: '',
  },

  es: {
    ppNavLink: '',

    ppTitle: '',

    ppText1: '',
    ppText2: '',
    ppText3: '',
    ppText4: '',
    ppText5: '',

    ppContacts: '',
    ppEmailText: '',
    ppEmail: '',
    ppSiteText: '',
    ppSite: '',

    ppAgree: '',
  },

  fr: {
    ppNavLink: '',

    ppTitle: '',

    ppText1: '',
    ppText2: '',
    ppText3: '',
    ppText4: '',
    ppText5: '',

    ppContacts: '',
    ppEmailText: '',
    ppEmail: '',
    ppSiteText: '',
    ppSite: '',

    ppAgree: '',
  },
};

function ppSwitchLanguage(ppLanguageCode) {
  console.log('Switching language to:', ppLanguageCode);
  const t = translations[ppLanguageCode];
  if (!t) return;
  //PRIVACY POLICY
  document.getElementById('ppNavLink').innerText = t.ppNavLink;
  document.getElementById('ppTitle').innerText = t.ppTitle;
  document.getElementById('ppText1').innerText = t.ppText1;
  document.getElementById('ppText2').innerText = t.ppText2;
  document.getElementById('ppText3').innerText = t.ppText3;
  document.getElementById('ppText4').innerText = t.ppText4;
  document.getElementById('ppText5').innerText = t.ppText5;
  document.getElementById('ppContacts').innerText = t.ppContacts;
  document.getElementById('ppEmailText').innerText = t.ppEmailText;
  document.getElementById('ppEmail').innerText = t.ppEmail;
  document.getElementById('ppSiteText').innerText = t.ppSiteText;
  document.getElementById('ppSite').innerText = t.ppSite;
  document.getElementById('ppAgree').innerText = t.ppAgree;
}

// Set initial content from default dropdown value
window.onload = () => {
  const ppDefaultLang = document.getElementById('pp-language-select').value;
  ppSwitchLanguage(ppDefaultLang);
};
