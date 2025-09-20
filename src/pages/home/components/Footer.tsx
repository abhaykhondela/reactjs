
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation('home');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new URLSearchParams();
      formData.append('email', email);

      const response = await fetch('https://form.readdy.ai/f/newsletter_subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="https://static.readdy.ai/image/bccbf7bce46c7fa7f46fd0cd9462f40b/02b4e0a1522eba04f7ba9cc9b04a63d4.png"
                alt="Yoroi Consulting Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Transform your business with expert consulting and coaching services across USA, UK, Canada, Australia, Taiwan, France, Germany, and Spain.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-instagram-line text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {t('footer.links.services')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {t('footer.links.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {t('footer.links.contact')}
                </button>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                  {t('footer.links.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                  {t('footer.links.terms')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.newsletter.title')}</h4>
            <p className="text-gray-300 mb-4">{t('footer.newsletter.subtitle')}</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3" data-readdy-form id="newsletter_subscription">
              <div className="flex">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('footer.newsletter.placeholder')}
                  required
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-707 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 px-4 py-2 rounded-r-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <i className="ri-loader-4-line animate-spin"></i>
                  ) : (
                    t('footer.newsletter.subscribe')
                  )}
                </button>
              </div>

              {submitStatus === 'success' && (
                <p className="text-green-400 text-sm">Successfully subscribed!</p>
              )}

              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm">Failed to subscribe. Please try again.</p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            {t('footer.copyright')}
          </p>
          <a
            href="https://readdy.ai/?origin=logo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
          >
            {t('footer.made_with')}
          </a>
        </div>
      </div>
    </footer>
  );
}
