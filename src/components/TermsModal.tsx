import { motion, AnimatePresence } from 'motion/react';
import { X, Check } from 'lucide-react';
import { useState } from 'react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'read' | 'accept';
  onAccept?: () => void;
}

export default function TermsModal({ isOpen, onClose, mode, onAccept }: TermsModalProps) {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleConfirm = () => {
    if (isAccepted && onAccept) {
      onAccept();
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
              <h2 className="text-xl font-display font-bold text-white">Terms of Service</h2>
              <button
                onClick={onClose}
                type="button"
                className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto text-zinc-300 text-sm space-y-8 font-light leading-relaxed">
              <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">1. Introduction</h3>
                <p>Welcome to ESScaled ("Agency", "we", "our", "us"). These Terms of Service ("Terms") govern your access to and use of ESScaled.com and the digital marketing, website design, and consulting services we provide. By using our website or purchasing our services, you agree to be bound by these Terms.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">2. Definitions</h3>
                <p>"Client", "you", and "your" refers to you, the person or entity logging on this website and compliant to the Agency's terms and conditions. "Services" refers to the marketing, advertising, and web design services provided by the Agency.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">3. Scope of Services</h3>
                <p>ESScaled provides professional services including, but not limited to, website design, marketing consultation, and paid advertising campaign management. The specific scope of work will be outlined in a separate agreement or proposal provided to the Client.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">4. Client Responsibilities</h3>
                <p>The Client agrees to provide timely access to necessary materials, branding assets, account credentials, and information required for the Agency to perform its Services. Clients are responsible for ensuring the information, products, and advertising materials they provide are lawful, accurate, and do not infringe on third-party rights.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">5. No Guarantee of Results</h3>
                <p>The Agency employs industry best practices; however, the Agency <strong>does not guarantee specific business results, revenue increases, or advertising performance</strong>. Results depend heavily on market conditions, product quality, pricing, competition, and client decisions. Past performance is not indicative of future results.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">6. Payment Terms and Billing</h3>
                <p>Payment terms will be specified in the Client's invoice or service agreement. The Agency reserves the right to suspend Services if payments are not made in accordance with the agreed-upon schedule.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">7. Refund Policy</h3>
                <p>Due to the nature of digital services and the immediate allocation of resources, <strong>services are strictly non-refundable once work begins</strong>, unless otherwise explicitly stated in writing by authorized Agency personnel.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">8. Intellectual Property Rights</h3>
                <p>Upon full payment, the Client retains ownership of final deliverables (such as website code and ad creatives) created specifically for them. The Agency retains ownership of its proprietary tools, frameworks, methodologies, and pre-existing intellectual property.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">9. Use of Client Materials</h3>
                <p>The Client grants the Agency a non-exclusive, royalty-free license to use materials, branding assets, and information provided by the Client solely for the purpose of delivering the Services and showcasing the work in the Agency's portfolio, unless a non-disclosure agreement is in place.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">10. Privacy and Data Protection</h3>
                <p>The Agency takes your privacy seriously. We <strong>do not sell, distribute, or misuse client personal data</strong>. Client information such as <strong>name, phone number, email address, date of birth, and business information</strong> will only be used for communication and service delivery.</p>
                <p className="mt-4">The Agency will <strong>never use client payment information for personal use</strong>. Any payment information (credit cards, business cards, or other payment methods) will only be used for authorized transactions approved by the account holder. Reasonable efforts and industry-standard security measures are made to protect sensitive information.</p>
                <p className="mt-4">For more information on consumer protection and data security, please refer to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li><a href="https://www.ftc.gov" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-300">United States Federal Trade Commission (FTC)</a></li>
                  <li><a href="https://www.sba.gov" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-300">U.S. Small Business Administration</a></li>
                  <li><a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-300">National Institute of Standards and Technology Cybersecurity Framework</a></li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">11. Confidentiality</h3>
                <p>Both parties agree to keep confidential any proprietary information, trade secrets, and sensitive business data shared during the course of the relationship, and not to disclose such information to third parties without prior written consent.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">12. Limitation of Liability</h3>
                <p>The Agency is <strong>not legally responsible for the internal operations, financial decisions, legal compliance, or management of the client's business</strong>. Furthermore, the Agency is not liable for losses caused by advertising performance, third-party platform policy changes (e.g., Facebook or Google account bans), or external factors beyond its control. In no event shall the Agency's liability exceed the total amount paid by the Client for the specific services in dispute.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">13. Disclaimer of Warranties</h3>
                <p>Services are provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">14. Independent Contractor Relationship</h3>
                <p>The Agency operates strictly as an <strong>independent contractor</strong>. Nothing in these Terms shall be construed to create a partnership, joint venture, agency, or employer-employee relationship between the Agency and the Client.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">15. Compliance With Laws</h3>
                <p>The Client agrees to comply with all applicable local, state, national, and international laws and regulations regarding their business operations, advertising claims, and data collection practices.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">16. Termination of Services</h3>
                <p>Either party may terminate the Services with written notice as specified in the individual service agreement. Upon termination, the Client is responsible for payment for all work completed up to the date of termination.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">17. Indemnification</h3>
                <p>The Client agrees to indemnify, defend, and hold harmless the Agency, its officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, or expenses arising out of or in any way connected with the Client's use of the Services or violation of these Terms.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">18. Governing Law</h3>
                <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the Agency is registered, without regard to its conflict of law provisions.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">19. Changes to Terms</h3>
                <p>The Agency reserves the right to modify or replace these Terms at any time. We will provide notice of any material changes by posting the new Terms on our website. Continued use of the Services after any such changes constitutes your acceptance of the new Terms.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">20. Contact Information</h3>
                <p>If you have any questions about these Terms, please contact us at:</p>
                <div className="mt-4 space-y-4">
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-white">Evan Vicino</p>
                    <p>Email: <a href="mailto:evanvicino@esscaled.com" className="text-white underline hover:text-gray-300">evanvicino@esscaled.com</a></p>
                    <p>Phone: <a href="tel:5082805346" className="text-white underline hover:text-gray-300">508-280-5346</a></p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-white">Stepan Lebedev</p>
                    <p>Email: <a href="mailto:stepanlebedev@esscaled.com" className="text-white underline hover:text-gray-300">stepanlebedev@esscaled.com</a></p>
                    <p>Phone: <a href="tel:5082747739" className="text-white underline hover:text-gray-300">508-274-7739</a></p>
                  </div>
                </div>
                <p className="mt-4"><strong>Website:</strong> ESScaled.com</p>
              </section>
            </div>

            {/* Footer */}
            {mode === 'accept' && (
              <div className="p-6 border-t border-white/10 bg-zinc-900/50 rounded-b-2xl shrink-0">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center w-5 h-5 mt-0.5 border border-white/20 rounded bg-zinc-950 group-hover:border-white/40 transition-colors shrink-0">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      checked={isAccepted}
                      onChange={(e) => setIsAccepted(e.target.checked)}
                    />
                    <Check className={`w-3.5 h-3.5 text-white transition-opacity ${isAccepted ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                  <span className="text-sm text-zinc-300 select-none">
                    I have read and agree to the Terms of Service. I understand that ESScaled does not guarantee specific results and that services are non-refundable once work begins.
                  </span>
                </label>
                <div className="mt-6 flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2.5 text-sm font-medium text-white hover:bg-white/5 rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleConfirm}
                    disabled={!isAccepted}
                    className="px-6 py-2.5 text-sm font-medium bg-white text-black rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Confirm & Submit
                  </button>
                </div>
              </div>
            )}
            {mode === 'read' && (
              <div className="p-6 border-t border-white/10 bg-zinc-900/50 rounded-b-2xl flex justify-end shrink-0">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 text-sm font-medium bg-white text-black rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
