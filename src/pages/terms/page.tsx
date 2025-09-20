
import { useTranslation } from 'react-i18next';
import Header from '../../components/feature/Header';
import Footer from '../home/components/Footer';

export default function TermsOfService() {
  const { t } = useTranslation('terms');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: December 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Yoroi Consulting's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
              <p className="text-gray-700 mb-4">
                Yoroi Consulting provides business consulting, executive coaching, team development, and change management services across multiple countries including USA, UK, Canada, Australia, Taiwan, France, Germany, and Spain.
              </p>
              <p className="text-gray-700 mb-4">
                Our services include but are not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Strategic business planning and consulting</li>
                <li>Executive and leadership coaching</li>
                <li>Team development and training programs</li>
                <li>Change management and organizational transformation</li>
                <li>Digital transformation consulting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Client Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Provide accurate and complete information necessary for our services</li>
                <li>Participate actively and in good faith in all agreed upon activities</li>
                <li>Make timely payments according to our agreed terms</li>
                <li>Respect confidentiality agreements and intellectual property rights</li>
                <li>Provide feedback and communicate concerns promptly</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment terms will be specified in individual service agreements. Generally:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Fees are due according to the payment schedule outlined in your service agreement</li>
                <li>Late payments may incur additional charges</li>
                <li>Refunds are subject to the specific terms of your service agreement</li>
                <li>All fees are exclusive of applicable taxes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Confidentiality</h2>
              <p className="text-gray-700 mb-4">
                We maintain strict confidentiality regarding all client information and business matters. Both parties agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Keep all confidential information strictly private</li>
                <li>Not disclose confidential information to third parties without written consent</li>
                <li>Use confidential information solely for the purpose of our engagement</li>
                <li>Return or destroy confidential information upon termination of services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All methodologies, frameworks, tools, and materials developed by Yoroi Consulting remain our intellectual property. Clients receive a limited license to use these materials solely for their internal business purposes during and after our engagement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Yoroi Consulting's liability is limited to the fees paid for our services. We are not liable for:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, business, or opportunities</li>
                <li>Damages arising from client's failure to implement recommendations</li>
                <li>Third-party actions or decisions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-700 mb-4">
                Either party may terminate services with written notice as specified in the service agreement. Upon termination:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>All outstanding fees become immediately due</li>
                <li>Both parties must return confidential materials</li>
                <li>Ongoing obligations (confidentiality, IP rights) continue</li>
                <li>Work product completed to date remains with the client</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These terms shall be governed by the laws of the jurisdiction where services are primarily delivered, as specified in individual service agreements. Any disputes will be resolved through binding arbitration.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Force Majeure</h2>
              <p className="text-gray-700 mb-4">
                Neither party shall be liable for delays or failures in performance resulting from acts beyond reasonable control, including natural disasters, war, terrorism, pandemics, or government actions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Modifications</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> legal@yoroiconsulting.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p className="text-gray-700"><strong>Address:</strong> Global Offices Available</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
