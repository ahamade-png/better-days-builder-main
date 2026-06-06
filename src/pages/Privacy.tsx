import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import usePageMeta from "@/hooks/usePageMeta";

const Privacy = () => {
  usePageMeta({
    title: "Privacy Policy",
    description: "How National Benefits Services Center collects, uses, and protects your personal information. GLBA, CCPA, and A2P 10DLC compliant.",
  });

  return (
    <div className="page-wrapper">
      <Header />
      
      <main className="flex-1 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto prose-institutional">
            <h1>Privacy Policy</h1>
            <p className="text-sm text-muted mb-8">Last Updated: January 26, 2026</p>

            <section className="mb-8">
              <h2>1. Introduction and Commitment to Privacy</h2>
              <p>
                National Benefits Services Center ("Company," "we," "us," "our") is an independent life insurance agency. We are committed to protecting your privacy and ensuring you have a transparent, secure experience when inquiring about or purchasing life insurance products through our website.
              </p>
              <p>
                This Privacy Policy explains our information practices, including what personal data we collect, how we use it, how we protect it, your rights regarding your information, and how to contact us with concerns or requests.
              </p>
              <p>
                <strong>This Privacy Policy is subject to all applicable federal, state, and local privacy laws, including GLBA (Gramm-Leach-Bliley Act), CCPA (California Consumer Privacy Act), and other state privacy regulations.</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2>2. What Personal Information We Collect</h2>
              <p>
                We collect personal information that you provide directly, as well as information collected automatically through your use of our website:
              </p>
              <h3>Information You Provide</h3>
              <ul>
                <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address, date of birth</li>
                <li><strong>Insurance Application Data:</strong> Health status, insurance history, coverage needs, income, family information, beneficiary details</li>
                <li><strong>SMS Preferences:</strong> Opt-in status for Service SMS and Marketing SMS, phone number authorization</li>
                <li><strong>Communications:</strong> Messages you send us via SMS, email, or phone, including STOP/HELP requests</li>
                <li><strong>Payment Information:</strong> Payment method details (when applicable)</li>
              </ul>
              <h3>Information Collected Automatically</h3>
              <ul>
                <li><strong>Technical Data:</strong> IP address, browser type, device type and model, operating system, pages visited, time spent on pages</li>
                <li><strong>Cookies and Tracking:</strong> Session cookies, persistent cookies (if enabled), and web analytics data</li>
                <li><strong>Device Information:</strong> Device ID, mobile carrier information (if applicable)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>3. How We Use Your Personal Information</h2>
              <p>
                We use the personal information we collect for the following purposes:
              </p>
              <h3>Insurance-Related Purposes</h3>
              <ul>
                <li>Process your insurance inquiry and application</li>
                <li>Obtain quotes and compare coverage options</li>
                <li>Underwriting and risk assessment</li>
                <li>Policy issuance and management</li>
                <li>Customer support and service</li>
                <li>Compliance with regulatory and legal obligations</li>
              </ul>
              <h3>Communication Purposes</h3>
              <ul>
                <li>Send appointment reminders and application status updates (Service SMS)</li>
                <li>Send promotional offers and product information (Marketing SMS, if opted in)</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Send account notifications and important updates</li>
              </ul>
              <h3>Analytics and Improvement</h3>
              <ul>
                <li>Analyze website usage and user behavior</li>
                <li>Improve website functionality and user experience</li>
                <li>Monitor system performance and security</li>
                <li>Conduct market research and trend analysis</li>
              </ul>
              <h3>Legal and Compliance</h3>
              <ul>
                <li>Comply with federal, state, and local legal obligations</li>
                <li>Prevent fraud and protect against illegal activity</li>
                <li>Enforce our Terms of Service and other agreements</li>
                <li>Respond to lawful requests from government agencies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>4. SMS and Text Message Communications (A2P 10DLC Compliance)</h2>
              <p>
                National Benefits Services Center operates an A2P 10DLC (Application-to-Person, 10-Digit Long Code) SMS program in full compliance with TCPA (Telephone Consumer Protection Act) and carrier regulations.
              </p>
              <h3>Consent-Based SMS</h3>
              <p>
                By providing your phone number and checking the "Service SMS" and/or "Marketing SMS" checkboxes on our contact form, you explicitly consent to receive text messages from National Benefits Services Center. Both checkboxes are unchecked by default; you must actively opt in.
              </p>
              <p>
                <strong>Consent to receive SMS is not a condition of obtaining insurance or customer service.</strong>
              </p>
              <h3>Service SMS</h3>
              <p>
                Service SMS includes transactional messages such as:
              </p>
              <ul>
                <li>Application confirmation and status updates</li>
                <li>Appointment reminders</li>
                <li>Document requests and submission confirmations</li>
                <li>Policy activation notifications</li>
                <li>Important account changes</li>
                <li>Verification codes and security alerts</li>
              </ul>
              <h3>Marketing SMS</h3>
              <p>
                Marketing SMS includes promotional messages about products, offers, and updates—sent only to users who explicitly opt in. Marketing SMS frequency may vary (typically 1–4 messages per month) and is sent during business hours.
              </p>
              <h3>Opt-Out and STOP Requests</h3>
              <p>
                You may revoke your SMS consent at any time by replying "STOP" to any message. We will process your opt-out within 24 hours and add your number to our Do-Not-Contact list. Standard message and data rates apply.
              </p>
              <h3>Message Rates and Carrier Policy</h3>
              <p>
                Standard SMS rates from your carrier apply to all messages. National Benefits Services Center is not responsible for carrier charges. See your carrier's SMS plan for details.
              </p>
            </section>

            <section className="mb-8">
              <h2>5. Information Sharing and Disclosure</h2>
              <p>
                We share your personal information only in the following circumstances:
              </p>
              <h3>With Insurance Carriers</h3>
              <p>
                We share your application data with life insurance carriers you've applied with to process your application and issue coverage.
              </p>
              <h3>With Third-Party Service Providers</h3>
              <p>
                We use service providers to assist with:
              </p>
              <ul>
                <li>SMS delivery (Twilio, Telnyx, or similar platforms)</li>
                <li>Email service and marketing (MailChimp, Constant Contact, or similar)</li>
                <li>Web hosting and analytics (Google Analytics, Vercel, or similar)</li>
                <li>CRM and customer management systems</li>
                <li>Payment processing (if applicable)</li>
              </ul>
              <p>
                We require these providers to maintain the confidentiality and security of your information under written agreements.
              </p>
              <h3>Legal Requirements and Law Enforcement</h3>
              <p>
                We may disclose personal information when required by law, court order, subpoena, or government request. We will notify you of such requests unless legally prohibited from doing so.
              </p>
              <h3>Business Transfers</h3>
              <p>
                If National Benefits Services Center is acquired, merges with another company, or undergoes a similar business transaction, your personal information may be transferred as part of that transaction. We will notify you of any such change and any choices you may have.
              </p>
              <h3>No Sale of Personal Information</h3>
              <p>
                <strong>We do not sell your personal information to third parties for their independent use.</strong> We share information only with service providers and insurance carriers as necessary to provide our services.
              </p>
            </section>

            <section className="mb-8">
              <h2>6. Data Security and Protection</h2>
              <p>
                We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, and destruction:
              </p>
              <ul>
                <li>SSL/TLS encryption for data in transit</li>
                <li>Secure password authentication</li>
                <li>Restricted access to personal information (employees and contractors only)</li>
                <li>Regular security assessments and audits</li>
                <li>Data retention policies (we retain data only as long as necessary)</li>
              </ul>
              <p>
                <strong>However, no method of electronic transmission or storage is completely secure.</strong> While we strive to protect your information, we cannot guarantee absolute security. Any transmission of personal information is at your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2>7. Your Privacy Rights</h2>
              <p>
                Depending on your state of residence, you may have the following rights:
              </p>
              <h3>Right to Access (CCPA, VCCPA, and other state laws)</h3>
              <p>
                You have the right to request what personal information we have collected about you, the source of that information, and our purposes for using it.
              </p>
              <h3>Right to Deletion (CCPA, VCCPA, and other state laws)</h3>
              <p>
                Subject to certain exceptions (such as legal obligations, fraud prevention, and insurance underwriting), you may request deletion of your personal information.
              </p>
              <h3>Right to Correction</h3>
              <p>
                You may request correction of inaccurate personal information we hold about you.
              </p>
              <h3>Right to Opt-Out of Marketing Communications</h3>
              <p>
                You may opt out of Marketing SMS by replying "STOP" or request to be removed from our mailing list by contacting us.
              </p>
              <h3>Right to Data Portability</h3>
              <p>
                You may request a portable copy of your personal information in a structured, commonly used format.
              </p>
              <h3>Right to Non-Discrimination</h3>
              <p>
                We will not discriminate against you for exercising your privacy rights by denying you service, charging different prices, or offering different quality of service (except where differences are directly related to the value of your information).
              </p>
              <h3>How to Exercise Your Rights</h3>
              <p>
                To exercise any of these rights, contact us at:
              </p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:support@buildingbetterdaysinsurance.com" className="link">support@buildingbetterdaysinsurance.com</a></li>
                <li><strong>Phone:</strong> 313-442-7350</li>
                <li><strong>Mailing Address:</strong> National Benefits Services Center, 290 Town Center Drive, Suite 675, Dearborn, MI 48126</li>
              </ul>
              <p>
                We will verify your identity and respond to your request within 45 days (or as required by applicable law).
              </p>
            </section>

            <section className="mb-8">
              <h2>8. Sensitive Personal Information</h2>
              <p>
                Your life insurance application may include sensitive health information, including:
              </p>
              <ul>
                <li>Health history and medical conditions</li>
                <li>Medication use</li>
                <li>Tobacco/nicotine use</li>
                <li>Lifestyle information</li>
              </ul>
              <p>
                This information is:
              </p>
              <ul>
                <li>Protected under federal privacy laws (GLBA, HIPAA where applicable)</li>
                <li>Shared only with insurance carriers and licensed agents</li>
                <li>Used exclusively for underwriting and coverage determination</li>
                <li>Retained in secure systems with restricted access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>9. Children's Privacy</h2>
              <p>
                Our website is not intended for individuals under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child, we will delete it promptly.
              </p>
              <p>
                Insurance applications must be submitted by adults (18+) on their own behalf or by parents/legal guardians on behalf of minors (where applicable).
              </p>
            </section>

            <section className="mb-8">
              <h2>10. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to:
              </p>
              <ul>
                <li>Remember your preferences and login information</li>
                <li>Understand how you use our website</li>
                <li>Personalize your experience</li>
                <li>Analyze website performance</li>
              </ul>
              <p>
                You may disable cookies in your browser settings, but this may limit functionality. Third-party analytics services (such as Google Analytics) may also place cookies on your device.
              </p>
            </section>

            <section className="mb-8">
              <h2>11. Links to Third-Party Websites</h2>
              <p>
                Our website contains links to third-party websites operated by insurance carriers, regulatory agencies, and other resources. This Privacy Policy does not apply to third-party sites. We recommend reviewing the privacy policies of any sites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2>12. State-Specific Privacy Rights</h2>
              <h3>California Residents (CCPA)</h3>
              <p>
                If you are a California resident, you have additional rights under the California Consumer Privacy Act, including:
              </p>
              <ul>
                <li>Right to know what personal information is collected, used, and shared</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of the "sale" or "sharing" of personal information</li>
                <li>Right to non-discrimination for exercising CCPA rights</li>
              </ul>
              <h3>Virginia Residents (VCCPA)</h3>
              <p>
                If you are a Virginia resident, you have rights under the Virginia Consumer Data Protection Act, including access, deletion, correction, and opt-out rights.
              </p>
              <h3>Other States</h3>
              <p>
                Similar privacy laws are in effect in Colorado, Connecticut, Delaware, Illinois, Iowa, Montana, New Hampshire, New Mexico, Tennessee, Utah, and other states. Contact us for information about your specific state's rights.
              </p>
            </section>

            <section className="mb-8">
              <h2>13. Data Retention</h2>
              <p>
                We retain your personal information:
              </p>
              <ul>
                <li><strong>Application Data:</strong> For the duration of your policy plus 7 years (insurance industry standard)</li>
                <li><strong>Communications Records (SMS/Email):</strong> For 2–3 years or as required by insurance regulations</li>
                <li><strong>Analytics Data:</strong> Aggregated data retained indefinitely; personally identifiable analytics deleted after 13 months</li>
                <li><strong>Marketing Lists:</strong> Until you opt out or unsubscribe</li>
              </ul>
              <p>
                After the retention period, we securely delete or anonymize your information.
              </p>
            </section>

            <section className="mb-8">
              <h2>14. Contact and Privacy Requests</h2>
              <p>
                If you have questions about this Privacy Policy, wish to exercise your privacy rights, or have privacy concerns, please contact us:
              </p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:support@buildingbetterdaysinsurance.com" className="link">support@buildingbetterdaysinsurance.com</a></li>
                <li><strong>Phone:</strong> 313-442-7350 (Monday–Friday, 8 AM – 5 PM ET)</li>
                <li><strong>Mailing Address:</strong><br />National Benefits Services Center<br />290 Town Center Drive, Suite 675<br />Dearborn, MI 48126</li>
                <li><strong>SMS Support:</strong> Text "HELP" to 313-442-7350</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>15. SMS Terms and Conditions</h2>
              <ol>
                <li>We use SMS to confirm appointments, send reminders, and notify clients of schedule updates or important changes.</li>
                <li>You can cancel the SMS service at any time. Just text "STOP". After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time, and we will start sending SMS messages to you again.</li>
                <li>If you are experiencing issues with the messaging program, you can reply with the keyword "HELP" for more assistance, or you can get help directly at <a href="mailto:support@buildingbetterdaysinsurance.com" className="link">support@buildingbetterdaysinsurance.com</a>.</li>
                <li>Carriers are not liable for delayed or undelivered messages.</li>
                <li>As always, message and data rates may apply for any messages sent to you from us and to us from you. Message frequency may vary. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.</li>
                <li>If you have any questions regarding privacy, please read our privacy policy: <Link to="/privacy" className="link">Privacy Policy</Link>.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2>16. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by:
              </p>
              <ul>
                <li>Posting the updated policy on our website</li>
                <li>Updating the "Last Updated" date</li>
                <li>Sending you an email or SMS notification (if material changes affect your rights)</li>
              </ul>
              <p>
                Your continued use of our website following notification of changes constitutes your acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2>17. Compliance and Regulatory Information</h2>
              <p>
                National Benefits Services Center complies with:
              </p>
              <ul>
                <li>Gramm-Leach-Bliley Act (GLBA)</li>
                <li>Telephone Consumer Protection Act (TCPA)</li>
                <li>California Consumer Privacy Act (CCPA)</li>
                <li>Virginia Consumer Data Protection Act (VCCPA)</li>
                <li>Other state privacy and insurance regulations</li>
                <li>Carrier A2P 10DLC compliance requirements</li>
              </ul>
              <p>
                We are an independent insurance agency licensed to operate in accordance with state insurance regulations.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;