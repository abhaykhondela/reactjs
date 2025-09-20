
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation('home');

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Professional%20business%20consulting%20team%20in%20modern%20office%20environment%20with%20diverse%20executives%20collaborating%20on%20strategy%20planning%2C%20clean%20minimalist%20workspace%20with%20glass%20walls%20and%20natural%20lighting%2C%20sophisticated%20corporate%20atmosphere%20with%20blue%20and%20white%20color%20scheme%2C%20professional%20people%20in%20business%20attire%20discussing%20growth%20charts%20and%20business%20transformation&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white w-full">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap shadow-lg"
            >
              {t('hero.cta')}
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all cursor-pointer whitespace-nowrap"
            >
              {t('hero.consultation')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
