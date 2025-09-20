
import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation('home');
  
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('about.description')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-time-line text-2xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('about.experience')}</h3>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-team-line text-2xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('about.clients')}</h3>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-global-line text-2xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('about.countries')}</h3>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20business%20consultant%20presenting%20strategy%20to%20executive%20team%20in%20modern%20boardroom%2C%20diverse%20group%20of%20business%20professionals%20in%20suits%20analyzing%20growth%20charts%20and%20data%20visualizations%2C%20clean%20corporate%20environment%20with%20natural%20lighting%2C%20sophisticated%20meeting%20room%20with%20glass%20walls%20and%20modern%20furniture%2C%20focus%20on%20collaboration%20and%20leadership%20development&width=600&height=400&seq=about-img&orientation=landscape"
              alt="About Yoroi Consulting"
              className="rounded-lg shadow-lg w-full h-96 object-cover object-top"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
