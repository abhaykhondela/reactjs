
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../base/LanguageSelector';

export default function Header() {
  const { t } = useTranslation('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Smoothly scrolls to the element with the given id.
   * Includes defensive checks for SSR environments and unexpected errors.
   */
  const scrollToSection = (sectionId: string) => {
    if (typeof document === 'undefined') {
      // In a non‑browser environment (e.g., SSR) we cannot scroll.
      console.warn('scrollToSection called in a non‑browser environment.');
      return;
    }

    const element = document.getElementById(sectionId);
    if (!element) {
      console.warn(`Element with id "${sectionId}" not found.`);
      return;
    }

    try {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Failed to scroll to section:', error);
    }
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <img 
                src="https://static.readdy.ai/image/bccbf7bce46c7fa7f46fd0cd9462f40b/02b4e0a1522eba04f7ba9cc9b04a63d4.png"
                alt="Yoroi Consulting Logo"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-gray-800" style={{ fontFamily: '"Pacifico", serif' }}>
                Yoroi
              </span>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              {t('nav.testimonials')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              {t('nav.contact')}
            </button>
            <LanguageSelector />
          </nav>

          {/* Mobile navigation toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray/20 py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left cursor-pointer"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left cursor-pointer"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left cursor-pointer"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left cursor-pointer"
              >
                {t('nav.testimonials')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left cursor-pointer"
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
