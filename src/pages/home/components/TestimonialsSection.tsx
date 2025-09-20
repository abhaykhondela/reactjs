
import { useTranslation } from 'react-i18next';
import React from 'react';

export default function TestimonialsSection() {
  const { t } = useTranslation('home');

  const testimonials = [
    {
      nameKey: 'testimonials.client1.name',
      positionKey: 'testimonials.client1.position',
      textKey: 'testimonials.client1.text',
      image:
        'https://readdy.ai/api/search-image?query=Professional%20female%20CEO%20in%20business%20suit%20smiling%20confidently%20in%20modern%20corporate%20office%2C%20executive%20headshot%20portrait%20of%20successful%20business%20leader%20with%20natural%20lighting%2C%20sophisticated%20professional%20appearance%20with%20clean%20corporate%20background&width=300&height=300&seq=client-1&orientation=squarish',
    },
    {
      nameKey: 'testimonials.client2.name',
      positionKey: 'testimonials.client2.position',
      textKey: 'testimonials.client2.text',
      image:
        'https://readdy.ai/api/search-image?query=Professional%20male%20business%20director%20in%20executive%20attire%20standing%20in%20modern%20office%20environment%2C%20confident%20business%20leader%20headshot%20portrait%20with%20corporate%20background%2C%20natural%20lighting%20and%20sophisticated%20professional%20appearance&width=300&height=300&seq=client-2&orientation=squarish',
    },
    {
      nameKey: 'testimonials.client3.name',
      positionKey: 'testimonials.client3.position',
      textKey: 'testimonials.client3.text',
      image:
        'https://readdy.ai/api/search-image?query=Professional%20female%20COO%20in%20business%20attire%20with%20confident%20expression%20in%20modern%20corporate%20setting%2C%20executive%20portrait%20of%20successful%20business%20operations%20leader%20with%20clean%20office%20background%2C%20natural%20lighting%20and%20professional%20appearance&width=300&height=300&seq=client-3&orientation=squarish',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={t(testimonial.nameKey)}
                  className="w-16 h-16 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {t(testimonial.nameKey)}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t(testimonial.positionKey)}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  &quot;{t(testimonial.textKey)}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
