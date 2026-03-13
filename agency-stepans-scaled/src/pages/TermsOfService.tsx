import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-ink text-white selection:bg-white/30">
      <Navbar />
      <main className="pt-32 pb-24 sm:pt-48 sm:pb-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <h1 className="text-3xl font-display font-bold text-white mb-8">Terms of Service</h1>
            
            <div className="space-y-8 text-zinc-300 font-light leading-relaxed">
              <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
                <p>Welcome to ESScaled ("Agency", "we", "our", "us"). These Terms of Service ("Terms") govern your access to and use of ESScaled.com and the digital marketing, website design, and consulting services we provide. By using our website or purchasing our services, you agree to be bound by these Terms.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">2. Scope of Services & Responsibilities</h2>
                <p>ESScaled provides professional services including, but not limited to, website design, marketing consultation, and paid advertising campaign management.</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li>The service provider is only responsible for creating advertisements using materials provided by the client.</li>
                  <li>The provider is not legally responsible for business performance, revenue outcomes, or marketing results.</li>
                  <li>The provider is not legally affiliated with the client's business and operates strictly as an independent contractor.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">3. Payment Terms & Refund Policy</h2>
                <p>All payments made to ESScaled are final and non-refundable. Due to the nature of digital services and the immediate allocation of resources, services are strictly non-refundable once work begins, unless otherwise explicitly stated in writing by authorized Agency personnel.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">4. Privacy and Data Protection</h2>
                <p>We take your privacy seriously and adhere to strict data protection standards:</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li>Personal information such as name, email, phone number, date of birth, and payment information will not be shared or used outside the transaction.</li>
                  <li>Payment details will never be stored or used without authorization from the cardholder.</li>
                </ul>
                <p className="mt-4">For more information on consumer protection and data security, please refer to the following public government resources:</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li><a href="https://consumer.ftc.gov" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-300">FTC Consumer Protection</a></li>
                  <li><a href="https://www.usa.gov/privacy" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-300">U.S. Privacy Guidance</a></li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">5. Intellectual Property Rights</h2>
                <p>Upon full payment, the Client retains ownership of final deliverables created specifically for them. The Agency retains ownership of its proprietary tools, frameworks, methodologies, and pre-existing intellectual property. The Client grants the Agency a non-exclusive license to use materials provided by the Client solely for the purpose of delivering the Services.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
                <p>The Agency is not legally responsible for the internal operations, financial decisions, legal compliance, or management of the client's business. Furthermore, the Agency is not liable for losses caused by advertising performance, third-party platform policy changes, or external factors beyond its control.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">7. Contact Information</h2>
                <p>If you have any questions about these Terms, please contact us at:</p>
                <p className="mt-2"><strong>Email:</strong> <a href="mailto:evanvicino@esscaled.com" className="text-white underline hover:text-gray-300">evanvicino@esscaled.com</a></p>
                <p><strong>Website:</strong> ESScaled.com</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
