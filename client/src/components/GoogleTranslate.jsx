import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    if (!window.googleTranslateLoaded) {
      const addScript = document.createElement("script");
      addScript.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      addScript.async = true;
      document.body.appendChild(addScript);

      window.googleTranslateLoaded = true; // Prevent multiple loads

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "hi,en,ta,te,kn,ml,mr,gu,bn,pa,ur",
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };
    }
  }, []);

  return (
    <div className="translate-container flex items-center">
      <div id="google_translate_element" className="custom-translate"></div>
    </div>
  );
};

export default GoogleTranslate;
