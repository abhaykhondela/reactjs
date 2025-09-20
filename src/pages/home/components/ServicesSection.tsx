
import { useTranslation } from 'react-i18next';

export default function ServicesSection() {
  const { t } = useTranslation('home');

  const services = [
    {
      icon: 'ri-briefcase-line',
      titleKey: 'services.business.title',
      descriptionKey: 'services.business.description',
      image:
        'https://readdy.ai/api/search-image?query=Business%20strategy%20consulting%20session%20with%20professional%20consultants%20analyzing%20market%20data%20and%20growth%20charts%20on%20digital%20displays%2C%20modern%20office%20environment%20with%20executives%20discussing%20strategic%20planning%20and%20digital%20transformation%20initiatives%2C%20clean%20corporate%20setting%20with%20natural%20lighting%20and%20professional%20atmosphere&width=400&height=300&seq=service-1&orientation=landscape',
    },
    {
      icon: 'ri-user-star-line',
      titleKey: 'services.executive.title',
      descriptionKey: 'services.executive.description',
      image:
        'https://readdy.ai/api/search-image?query=Executive%20coaching%20session%20with%20senior%20business%20leader%20receiving%20personalized%20leadership%20development%20training%2C%20professional%20coach%20mentoring%20CEO%20in%20modern%20office%20setting%2C%20focus%20on%20leadership%20skills%20and%20decision-making%20improvement%2C%20sophisticated%20business%20environment%20with%20natural%20lighting&width=400&height=300&seq=service-2&orientation=landscape',
    },
    {
      icon: 'ri-team-line',
      titleKey: 'services.team.title',
      descriptionKey: 'services.team.description',
      image:
        'https://readdy.ai/api/search-image?query=Team%20development%20workshop%20with%20diverse%20group%20of%20professionals%20participating%20in%20collaborative%20training%20session%2C%20team%20building%20activities%20and%20structured%20programs%20in%20modern%20conference%20room%2C%20focus%20on%20high-performance%20team%20building%20and%20collaborative%20workshops%20with%20professional%20facilitators&width=400&height=300&seq=service-3&orientation=landscape',
    },
    {
      icon: 'ri-arrow-up-circle-line',
      titleKey: 'services.change.title',
      descriptionKey: 'services.change.description',
      image:
        'https://readdy.ai/api/search-image?query=Change%20management%20presentation%20with%20business%20transformation%20specialists%20explaining%20organizational%20change%20methodologies%20to%20corporate%20stakeholders%2C%20professional%20meeting%20room%20with%20process%20diagrams%20and%20stakeholder%20engagement%20strategies%20displayed%20on%20screens%2C%20modern%20corporate%20environment&width=400&height=300&seq=service-4&orientation=landscape',
    },
  ];

  // Small utility to provide a fallback image when loading fails
  const handleImageError = (e) => {
    e.currentTarget.src =
      'https://via.placeholder.com/400x300?text=Image+Not+Available';
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={t(service.titleKey)}
                  className="w-full h-full object-cover object-top"
                  onError={handleImageError}
                />
                <div className="absolute top-4 left-4 bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                  <i className={`${service.icon} text-xl text-white`}></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(service.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
