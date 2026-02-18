import React, { useState } from 'react';
import './TermsAndConditions.css';

function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState('terms');

  return (
    <div className="terms-screen">
      <header className="terms-header">
        <h1>Legal</h1>
        <nav className="terms-nav">
          <button
            className={activeSection === 'terms' ? 'active' : ''}
            onClick={() => setActiveSection('terms')}
          >
            Terms & Conditions
          </button>
          <button
            className={activeSection === 'privacy' ? 'active' : ''}
            onClick={() => setActiveSection('privacy')}
          >
            Privacy Policy
          </button>
        </nav>
      </header>

      <main className="terms-content">
        {activeSection === 'terms' && (
          <section className="legal-section" aria-label="Terms and Conditions">
            <h2>Terms and Conditions</h2>
            <p className="last-updated">Last updated: February 2025</p>

            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing or using this application (“App”), you agree to be bound by these Terms and Conditions.
              If you do not agree with any part of these terms, you must not use the App. We reserve the right to
              update these terms at any time; continued use after changes constitutes acceptance.
            </p>

            <h3>2. Description of Service</h3>
            <p>
              This App provides a platform where users can:
            </p>
            <ul>
              <li>Make predictions on football and other sports matches and events;</li>
              <li>Communicate with other users about football and sports events;</li>
              <li>Join prediction forums and communities;</li>
              <li>Share and receive predictions and tips from other individuals.</li>
            </ul>
            <p>
              Predictions and content shared on the App are for informational and entertainment purposes only.
              The App does not constitute gambling, betting with real money, or financial advice unless explicitly
              stated and permitted in your jurisdiction.
            </p>

            <h3>3. Eligibility</h3>
            <p>
              You must be at least 18 years of age (or the age of majority in your jurisdiction) to use this App.
              By using the App, you represent that you meet this requirement and that you are not prohibited from
              using the service under applicable law. We may verify your age and identity and suspend or terminate
              accounts that do not comply.
            </p>

            <h3>4. User Accounts and Registration</h3>
            <p>
              To access certain features, you may need to register an account. You agree to provide accurate,
              current, and complete information and to update it as necessary. You are responsible for
              maintaining the confidentiality of your account credentials and for all activity under your
              account. You must notify us immediately of any unauthorized use.
            </p>

            <h3>5. User Conduct</h3>
            <p>
              You agree not to:
            </p>
            <ul>
              <li>Post false, misleading, defamatory, or offensive content;</li>
              <li>Harass, abuse, or harm other users;</li>
              <li>Impersonate any person or entity or misrepresent your affiliation;</li>
              <li>Use the App for any illegal purpose or in violation of any laws;</li>
              <li>Attempt to gain unauthorized access to the App, other accounts, or systems;</li>
              <li>Scrape, copy, or redistribute content or data without permission;</li>
              <li>Interfere with the proper functioning of the App or other users’ use;</li>
              <li>Share predictions or tips in exchange for or as part of real-money gambling where prohibited.</li>
            </ul>
            <p>
              We reserve the right to remove content and suspend or terminate accounts that violate these rules.
            </p>

            <h3>6. Predictions and Content</h3>
            <p>
              All predictions, tips, and other user-generated content are provided “as is.” We do not guarantee
              the accuracy, completeness, or usefulness of any prediction or content. Use of predictions is at
              your own risk. We are not liable for any losses or decisions made based on content on the App.
              Past performance does not indicate future results.
            </p>

            <h3>7. Intellectual Property</h3>
            <p>
              The App and its original content, features, and functionality are owned by us and are protected by
              copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or
              create derivative works without our written permission. You retain ownership of content you post
              but grant us a non-exclusive, royalty-free license to use, display, and distribute it in connection
              with the App.
            </p>

            <h3>8. Forums and Communications</h3>
            <p>
              Forums, chats, and other communication channels are for lawful discussion of sports and predictions.
              We may monitor content but are not obligated to do so. We are not responsible for the content or
              conduct of users. You use these features at your own risk.
            </p>

            <h3>9. Limitation of Liability</h3>
            <p>
              To the fullest extent permitted by law, we and our affiliates, officers, directors, employees, and
              agents shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages, or any loss of profits, data, or goodwill, arising from your use of the App or any
              predictions or content. Our total liability shall not exceed the amount you paid to us in the
              twelve months preceding the claim, or one hundred currency units, whichever is less.
            </p>

            <h3>10. Indemnification</h3>
            <p>
              You agree to indemnify, defend, and hold harmless the App, its operators, and affiliates from any
              claims, damages, losses, or expenses (including legal fees) arising from your use of the App, your
              content, or your violation of these terms or any law.
            </p>

            <h3>11. Termination</h3>
            <p>
              We may suspend or terminate your access at any time, with or without cause or notice. You may
              stop using the App at any time. Upon termination, your right to use the App ceases immediately.
              Provisions that by their nature should survive (including liability limits and indemnity) will
              survive termination.
            </p>

            <h3>12. Governing Law and Disputes</h3>
            <p>
              These terms are governed by the laws of the jurisdiction in which we operate, without regard to
              conflict of law principles. Any disputes shall be resolved in the courts of that jurisdiction,
              except where prohibited by law.
            </p>

            <h3>13. Contact</h3>
            <p>
              For questions about these Terms and Conditions, please contact us at the email or address
              provided in the App or on our website.
            </p>
          </section>
        )}

        {activeSection === 'privacy' && (
          <section className="legal-section" aria-label="Privacy Policy">
            <h2>Privacy Policy</h2>
            <p className="last-updated">Last updated: February 2025</p>

            <h3>1. Introduction</h3>
            <p>
              We are committed to protecting your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our prediction and sports community App.
            </p>

            <h3>2. Information We Collect</h3>
            <p>We may collect:</p>
            <ul>
              <li><strong>Account information:</strong> name, email address, date of birth, and password (stored securely);</li>
              <li><strong>Profile and usage data:</strong> predictions, forum posts, messages, preferences, and how you use the App;</li>
              <li><strong>Device and technical data:</strong> device type, operating system, IP address, and app version;</li>
              <li><strong>Communications:</strong> when you contact us or participate in in-app chats and forums.</li>
            </ul>

            <h3>3. How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve the App and its features;</li>
              <li>Authenticate your account and enforce our terms;</li>
              <li>Display your predictions, posts, and profile to other users as permitted by your settings;</li>
              <li>Send you service-related notifications and, with your consent, marketing communications;</li>
              <li>Analyze usage to improve experience and security;</li>
              <li>Comply with legal obligations and protect our rights.</li>
            </ul>

            <h3>4. Sharing of Information</h3>
            <p>
              We may share your information with service providers who assist in operating the App (e.g. hosting,
              analytics) under strict confidentiality. We may disclose information if required by law, to protect
              rights and safety, or in connection with a merger or sale of assets. We do not sell your personal
              data to third parties for their marketing.
            </p>

            <h3>5. Forums and Public Content</h3>
            <p>
              Content you post in prediction forums, comments, or public profiles may be visible to other users
              and, in some cases, indexable by search engines. Do not share sensitive personal information in
              public areas.
            </p>

            <h3>6. Data Retention</h3>
            <p>
              We retain your information for as long as your account is active or as needed to provide the
              service, comply with law, resolve disputes, and enforce our agreements. You may request deletion
              of your account and associated data subject to applicable law.
            </p>

            <h3>7. Security</h3>
            <p>
              We implement appropriate technical and organizational measures to protect your data against
              unauthorized access, alteration, disclosure, or destruction. No method of transmission or storage
              is completely secure; we cannot guarantee absolute security.
            </p>

            <h3>8. Your Rights</h3>
            <p>
              Depending on your location, you may have the right to access, correct, delete, or port your
              personal data, object to or restrict certain processing, and withdraw consent. To exercise these
              rights, contact us using the details below. You may also have the right to lodge a complaint with
              a supervisory authority.
            </p>

            <h3>9. Children</h3>
            <p>
              The App is not intended for users under the age of 18 (or the age of majority in your
              jurisdiction). We do not knowingly collect personal information from minors. If you believe we
              have collected such information, please contact us so we can delete it.
            </p>

            <h3>10. International Transfers</h3>
            <p>
              Your information may be transferred to and processed in countries other than your own. We ensure
              appropriate safeguards are in place where required by applicable law.
            </p>

            <h3>11. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes via
              the App or email. Your continued use after changes constitutes acceptance of the updated policy.
            </p>

            <h3>12. Contact Us</h3>
            <p>
              For privacy-related questions or to exercise your rights, please contact us at the email or
              address provided in the App or on our website.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}

export default TermsAndConditions;
