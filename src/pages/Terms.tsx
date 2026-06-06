import Header from "@/components/Header";
import Footer from "@/components/Footer";
import usePageMeta from "@/hooks/usePageMeta";

const Terms = () => {
  usePageMeta({
    title: "Terms of Service",
    description: "Terms of Service and Mobile Terms for National Benefits Services Center. A2P 10DLC SMS compliance, TCPA compliance, and usage policies.",
  });

  return (
    <div className="page-wrapper">
      <Header />
      
      <main className="flex-1 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto prose-institutional">
            <h1>Terms of Service</h1>
            <p className="text-sm text-muted mb-8">Last Updated: January 26, 2026</p>

            <section className="mb-8">
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing and using this website and submitting an insurance inquiry or application ("Service") operated by National Benefits Services Center, you agree to be bound by these Terms of Service. These terms apply to all visitors, users, and others who access the website. If you do not agree to abide by these terms, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2>2. Life Insurance Inquiry and Application Process</h2>
              <p>
                National Benefits Services Center provides quotes, comparisons, and applications for life insurance products including Final Expense, Medicare Supplement, Life Insurance, and Supplemental Coverage. By submitting an inquiry or application through this website, you acknowledge:
              </p>
              <ul>
                <li>All information provided is true, accurate, and complete to the best of your knowledge</li>
                <li>You are the person applying for coverage or authorized to apply on behalf of the applicant</li>
                <li>You are at least 18 years of age</li>
                <li>You understand that coverage is not guaranteed and is subject to underwriting review</li>
                <li>You have read the applicable coverage documents and policy terms</li>
                <li>False or misleading information may result in denial of coverage or policy cancellation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>3. No Guarantee of Coverage</h2>
              <p>
                Submission of an application does not guarantee approval, issuance, or effective date of coverage. All applications are subject to:
              </p>
              <ul>
                <li>Underwriting review and approval</li>
                <li>Insurer verification of information</li>
                <li>Medical underwriting (if required by the carrier)</li>
                <li>Age, health status, and other eligibility factors</li>
              </ul>
              <p>
                National Benefits Services Center and the insurance carriers reserve the right to request additional information, modification of coverage, or to deny applications at their discretion. Approval timelines vary by carrier and underwriting complexity.
              </p>
            </section>

            <section className="mb-8">
              <h2>4. Use License and Restrictions</h2>
              <p>
                You may use this website solely for lawful purposes related to obtaining life insurance information and quotes. You may not:
              </p>
              <ul>
                <li>Reproduce, duplicate, copy, or re-sell any materials from this website</li>
                <li>Reverse engineer, decompile, or attempt to derive source code</li>
                <li>Use this website for commercial purposes unrelated to life insurance guidance</li>
                <li>Remove or alter copyright, trademark, or other proprietary notices</li>
                <li>Transmit viruses, malware, or harmful code</li>
                <li>Attempt unauthorized access to our systems or networks</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>5. Disclaimer of Warranties</h2>
              <p>
                <strong>This website and all materials are provided "as is" without warranty of any kind.</strong> National Benefits Services Center makes no warranties, express or implied, regarding:
              </p>
              <ul>
                <li>The accuracy, completeness, or timeliness of information provided</li>
                <li>Coverage availability or suitability for your specific needs</li>
                <li>Insurance carrier rates, terms, or policy conditions</li>
                <li>Uninterrupted website operation or error-free functionality</li>
                <li>Third-party website content or linked resources</li>
              </ul>
              <p>
                Insurance coverage options, rates, and terms are provided by individual insurance carriers and may change without notice. Your actual policy will be governed by the carrier's official policy documents, not by information on this website.
              </p>
            </section>

            <section className="mb-8">
              <h2>6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, National Benefits Services Center and its officers, employees, and agents shall not be liable for:
              </p>
              <ul>
                <li>Any indirect, incidental, special, or consequential damages</li>
                <li>Lost profits, lost data, or loss of business</li>
                <li>Errors or omissions in quotes or information provided</li>
                <li>Coverage denial or policy cancellation by carriers</li>
                <li>Issues with SMS delivery or communication</li>
              </ul>
              <p>
                This limitation applies even if advised of the possibility of such damages.
              </p>
            </section>

            <section className="mb-8">
              <h2>7. Accuracy of Information</h2>
              <p>
                While we strive to provide accurate information, insurance products, rates, and availability may change frequently. We do not warrant that:
              </p>
              <ul>
                <li>All information on the website is current or accurate</li>
                <li>Quotes provided are binding or guaranteed by carriers</li>
                <li>Coverage options are available in your state or jurisdiction</li>
                <li>Rates will remain unchanged after application submission</li>
              </ul>
              <p>
                Please verify all details with your insurance agent or carrier before enrolling. Actual policy terms, rates, and conditions are determined by the issuing insurance company.
              </p>
            </section>

            <section className="mb-8">
              <h2>8. Third-Party Links and Websites</h2>
              <p>
                This website may contain links to third-party websites operated by insurance carriers, state regulatory agencies, and other resources. National Benefits Services Center:
              </p>
              <ul>
                <li>Does not control or endorse third-party content</li>
                <li>Is not responsible for the accuracy or legality of linked sites</li>
                <li>Does not warranty the performance or security of third-party sites</li>
              </ul>
              <p>
                Use of any linked website is at your own risk and subject to that site's terms of service.
              </p>
            </section>

            <section className="mb-8">
              <h2>9. Policy Changes and Modifications</h2>
              <p>
                National Benefits Services Center reserves the right to modify, update, or discontinue this website or any features, products, or services at any time without notice. We may also revise these Terms of Service. Your continued use of the website constitutes acceptance of any changes. Please review this agreement periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2>10. Compliance with Laws</h2>
              <p>
                You agree to comply with all applicable federal, state, and local laws regarding insurance, privacy, and consumer protection. You are responsible for understanding the insurance regulations in your jurisdiction.
              </p>
            </section>

            <hr className="my-8 border-t-2 border-border" />

            <h1 className="mt-8">Mobile Terms of Service (A2P 10DLC Compliance)</h1>
            <p className="text-sm text-muted mb-8">Applicable to SMS and Text Message Communications</p>

            <section className="mb-8">
              <h2>1. SMS Program Overview</h2>
              <p>
                National Benefits Services Center operates an A2P 10DLC (Application-to-Person, 10-Digit Long Code) SMS program. By providing your mobile phone number and opting in through our website contact form, you consent to receive text messages from National Benefits Services Center at the number you provide. This Mobile Terms section governs all SMS and text message communications.
              </p>
              <p>
                <strong>SMS is optional and is not required to apply for insurance.</strong> Consent to receive SMS is separate from your insurance application.
              </p>
            </section>

            <section className="mb-8">
              <h2>2. Message Types and Frequency</h2>
              <p>
                We send two distinct categories of SMS messages:
              </p>
              <h3>Service SMS (Transactional)</h3>
              <p>
                Service SMS includes messages necessary for your insurance application and account management:
              </p>
              <ul>
                <li>Application confirmation and status updates</li>
                <li>Appointment reminders and rescheduling</li>
                <li>Document requests and submission confirmations</li>
                <li>Policy activation and enrollment notifications</li>
                <li>Important account changes and payment reminders</li>
                <li>Security alerts and verification codes</li>
              </ul>
              <p>
                Service SMS frequency varies based on your application and account activity. These are sent regardless of time of day as they are transactional.
              </p>
              <h3>Marketing SMS (Promotional)</h3>
              <p>
                Marketing SMS includes promotional messages about insurance products, coverage options, special offers, and updates. Examples include:
              </p>
              <ul>
                <li>New product announcements</li>
                <li>Special promotional offers</li>
                <li>Coverage tips and educational content</li>
                <li>Service announcements</li>
              </ul>
              <p>
                Marketing SMS is sent only to users who have explicitly checked the "Marketing SMS" checkbox on our contact form. You must opt in to receive Marketing SMS; it is not sent by default. Marketing SMS is generally sent during business hours (8 AM – 9 PM ET, Monday–Friday).
              </p>
            </section>

            <section className="mb-8">
              <h2>3. Consent and Opt-In (A2P 10DLC Requirement)</h2>
              <p>
                <strong>IMPORTANT: Consent to receive SMS is not a condition of purchasing insurance or receiving customer service.</strong>
              </p>
              <p>
                By checking the "Service SMS" and/or "Marketing SMS" checkboxes on our contact form and submitting your phone number, you explicitly consent to receive the corresponding SMS messages from National Benefits Services Center. Both checkboxes are unchecked by default, requiring your active selection.
              </p>
              <p>
                You represent and warrant that:
              </p>
              <ul>
                <li>You are authorized to use the phone number provided</li>
                <li>You are the primary account holder or authorized user of that number</li>
                <li>You have read and understood these Mobile Terms</li>
                <li>You understand that standard SMS rates apply</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>4. Message and Data Rates</h2>
              <p>
                <strong>Message and data rates may apply.</strong> Standard SMS rates from your mobile carrier will be charged for all messages, including replies. Your carrier's data plan and SMS limits apply. National Benefits Services Center is not responsible for carrier charges. Please check with your carrier for details on your plan's messaging and data costs.
              </p>
              <p>
                Carriers supported: AT&T, Verizon, T-Mobile, and other US wireless carriers.
              </p>
            </section>

            <section className="mb-8">
              <h2>5. Opting Out (STOP)</h2>
              <p>
                You can opt out of SMS messages at any time by replying "STOP" to any message from National Benefits Services Center. Upon receiving your STOP request:
              </p>
              <ul>
                <li>We will stop sending SMS messages to your number within 24 hours</li>
                <li>You may receive a final confirmation text message</li>
                <li>Your number will be added to our internal do-not-contact list</li>
              </ul>
              <p>
                <strong>Note:</strong> Opting out via STOP will remove you from all SMS categories (Service and Marketing). However, if you later need assistance with your policy or application, you can update your preferences by calling us at 313-442-7350.
              </p>
            </section>

            <section className="mb-8">
              <h2>6. Help and Support (HELP)</h2>
              <p>
                Reply "HELP" to any message to receive information about the SMS program, including:
              </p>
              <ul>
                <li>How to manage your SMS preferences</li>
                <li>How to opt out (reply STOP)</li>
                <li>Contact information for customer support</li>
                <li>Information about message rates and carrier policies</li>
              </ul>
              <p>
                HELP requests are responded to during business hours (8 AM – 5 PM ET, Monday–Friday).
              </p>
            </section>

            <section className="mb-8">
              <h2>7. Phone Number Requirements</h2>
              <p>
                To receive SMS messages, you must provide:
              </p>
              <ul>
                <li>A valid, active US mobile phone number capable of receiving SMS (not a landline or VoIP number)</li>
                <li>A number you own or are authorized to use</li>
                <li>A number where you can reliably receive text messages</li>
              </ul>
              <p>
                National Benefits Services Center is not responsible for messages not delivered due to network issues, carrier errors, or invalid phone numbers. If you change your phone number, please update your contact information on our website or call us at 313-442-7350.
              </p>
            </section>

            <section className="mb-8">
              <h2>8. Service Limitations</h2>
              <p>
                <strong>No Guaranteed Delivery:</strong> While we use industry-standard SMS providers, message delivery is not guaranteed. Messages may be delayed due to carrier network issues, technical failures, or high message volume. National Benefits Services Center is not liable for undelivered or delayed messages.
              </p>
              <p>
                <strong>Not an Emergency Service:</strong> SMS is not monitored 24/7 and is not an emergency communication channel. In a medical or emergency situation, call 911. For urgent policy or application issues outside business hours, call our main line at 313-442-7350.
              </p>
              <p>
                <strong>Business Hours Support:</strong> SMS support is provided during business hours (8 AM – 5 PM ET, Monday–Friday). Messages sent outside business hours will be responded to the next business day.
              </p>
            </section>

            <section className="mb-8">
              <h2>9. Carrier Liability Disclaimer</h2>
              <p>
                Carriers including AT&T, Verizon, T-Mobile, and others are not liable for:
              </p>
              <ul>
                <li>Delayed or undelivered messages</li>
                <li>Service interruptions or outages</li>
                <li>Network congestion or capacity issues</li>
                <li>Changes to carrier service or policies</li>
              </ul>
              <p>
                National Benefits Services Center is not responsible for any carrier-related issues affecting SMS delivery.
              </p>
            </section>

            <section className="mb-8">
              <h2>10. Privacy and Data Security</h2>
              <p>
                Your phone number and SMS preferences are protected according to our Privacy Policy. We use industry-standard encryption and security measures. Your phone number will not be shared with third parties except:
              </p>
              <ul>
                <li>With our SMS service provider (required to deliver messages)</li>
                <li>With insurance carriers you've applied with (if necessary for policy administration)</li>
                <li>As required by law or court order</li>
              </ul>
              <p>
                See our Privacy Policy for complete details on how we handle your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2>11. TCPA Compliance</h2>
              <p>
                National Benefits Services Center operates in compliance with the Telephone Consumer Protection Act (TCPA):
              </p>
              <ul>
                <li>You explicitly consent to receive messages at the phone number you provide</li>
                <li>Consent is not a condition of purchasing insurance or receiving service</li>
                <li>You can revoke consent at any time by replying STOP</li>
                <li>We do not use automated calls, prerecorded messages, or artificial voices for SMS (all are text-based)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>12. Changes to Mobile Terms</h2>
              <p>
                National Benefits Services Center may update these Mobile Terms at any time. We will notify you of material changes via email or SMS. Your continued use of the SMS service after such notice constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className="mb-8">
              <h2>13. Contact for SMS and Support</h2>
              <p>
                For questions about our SMS program, to update preferences, or to report issues:
              </p>
              <ul>
                <li><strong>Text "HELP"</strong> to any message from National Benefits Services Center</li>
                <li><strong>Email:</strong> <a href="mailto:support@buildingbetterdaysinsurance.com" className="link">support@buildingbetterdaysinsurance.com</a></li>
                <li><strong>Phone:</strong> 313-442-7350 (Monday–Friday, 8 AM – 5 PM ET)</li>
                <li><strong>SMS for Support:</strong> 313-442-7350</li>
                <li><strong>Mailing Address:</strong><br />National Benefits Services Center<br />290 Town Center Drive, Suite 675<br />Dearborn, MI 48126</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
