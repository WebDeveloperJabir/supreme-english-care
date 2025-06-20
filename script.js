let defaultLanguage = "en";

// Please update the object when you update the page content
const translations = {
  en: {
    "page-title": "Supreme English Care",
    "phone-number": "+880123456789",
    "coaching-name": "Supreme English Care",
    "coaching-type": "Coaching Center",
    "coaching-address": "48 bhatpara, joar sahara, dhaka",
    "nav-home": "Home",
    "nav-about": "About",
    "nav-courses": "Courses",
    "nav-contact": "Contact",
    "language-name": "English",
  },
  bn: {
    "page-title": "সুপ্রিম ইংলিশ কেয়ার",
    "phone-number": "+৮৮০১২৩৪৫৬৭৮৯",
    "coaching-name": "সুপ্রিম ইংলিশ কেয়ার",
    "coaching-type": "কোচিং সেন্টার",
    "coaching-address": "৪৮ ভাটপাড়া, জোয়ার সাহারা, ঢাকা",
    "nav-home": "হোম",
    "nav-about": "আমাদের সম্পর্কে",
    "nav-courses": "কোর্সসমূহ",
    "nav-contact": "যোগাযোগ",
    "language-name": "বাংলা",
  },
};

function changeLanguage() {
  defaultLanguage = defaultLanguage === "en" ? "bn" : "en";
  const selectedTexts = document.querySelectorAll("[data-i18n]");

  document.title = translations[defaultLanguage]["page-title"];
  selectedTexts.forEach((el) => {
    const translationKey = el.getAttribute("data-i18n");
    const translationExists = translations[defaultLanguage][translationKey];
    if (translationExists) el.textContent = translationExists;
  });
}

const videoLeftButton = document.getElementById("video-scroll-left-button");
const videoRightButton = document.getElementById("video-scroll-right-button");
const scrollContainer = document.querySelector(".main-video-frame");

videoLeftButton.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: -460,
    behavior: "smooth",
  });
});

videoRightButton.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: 460,
    behavior: "smooth",
  });
});
