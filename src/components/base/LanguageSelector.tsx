
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  // Guard against unexpected i18n values
  const currentLanguage =
    languages.find((lang) => lang.code === i18n?.language) ?? languages[0];

  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = async (languageCode: string) => {
    try {
      // `changeLanguage` returns a promise in i18next, await it to capture errors
      await i18n.changeLanguage(languageCode);
    } catch (error) {
      console.error('Failed to change language:', error);
      // Optionally, you could show a toast/notification to the user here
    } finally {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray/20 hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-sm font-medium">{currentLanguage.name}</span>
        <i className="ri-arrow-down-s-line text-sm" aria-hidden="true"></i>
      </button>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray/20 py-2 min-w-40 z-50"
          role="listbox"
        >
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              onClick={() => handleLanguageChange(language.code)}
              className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span className="text-lg">{language.flag}</span>
              <span className="text-sm font-medium">{language.name}</span>
              {language.code === i18n?.language && (
                <i
                  className="ri-check-line text-blue-600 ml-auto"
                  aria-hidden="true"
                ></i>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
