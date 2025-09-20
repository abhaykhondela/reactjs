
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactSection() {
  const { t } = useTranslation('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const countries = [
    { code: 'usa', name: t('countries.usa') },
    { code: 'uk', name: t('countries.uk') },
    { code: 'canada', name: t('countries.canada') },
    { code: 'australia', name: t('countries.australia') },
    { code: 'taiwan', name: t('countries.taiwan') },
    { code: 'france', name: t('countries.france') },
    { code: 'germany', name: t('countries.germany') },
    { code: 'spain', name: t('countries.spain') }
  ];
  
  const services = [
    { key: 'business_consulting', name: t('services_options.business_consulting') },
    { key: 'executive_coaching', name: t('services_options.executive_coaching') },
    { key: 'team_development', name: t('services_options.team_development') },
    { key: 'change_management', name: t('services_options.change_management') },
    { key: 'strategy_planning', name: t('services_options.strategy_planning') },
    { key: 'digital_transformation', name: t('services_options.digital_transformation') }
  ];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.message.length > 500) {
      alert('Message must be 500 characters or less');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const formDataToSend = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      
      const response = await fetch('https://form.readdy.ai/f/contact_form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          country: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-mail-line text-white"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold text-gray-900">{t('contact.info.email')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-phone-line text-white"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-semibold text-gray-900">{t('contact.info.phone')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-global-line text-white"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Locations</p>
                    <p className="font-semibold text-gray-900">{t('contact.info.address')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Global%20business%20map%20showing%20international%20consulting%20offices%20across%20USA%20UK%20Canada%20Australia%20Taiwan%20France%20Germany%20Spain%2C%20modern%20world%20map%20visualization%20with%20location%20pins%20and%20connection%20lines%2C%20professional%20corporate%20design%20with%20blue%20color%20scheme%20representing%20global%20business%20expansion&width=600&height=300&seq=contact-map&orientation=landscape"
                alt="Global Offices"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form id="contact_form">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.country')}
                  </label>
                  <div className="relative">
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8 appearance-none"
                    >
                      <option value="">Select Country</option>
                      {countries.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.service')}
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8 appearance-none"
                    >
                      <option value="">Select Service</option>
                      {services.map((service) => (
                        <option key={service.key} value={service.key}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  maxLength={500}
                  required
                  className="w-full px-4 py-3 border border-gray/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </p>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                {isSubmitting ? 'Sending...' : t('contact.form.submit')}
              </button>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2"></i>
                    <p className="text-green-800">Message sent successfully! We'll get back to you soon.</p>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <i className="ri-error-warning-line text-red-600 mr-2"></i>
                    <p className="text-red-800">Failed to send message. Please try again.</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
