import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.scss";
import Footer from "@/components/Footer/Footer";
export default function about() {
  return (
    <main className={styles.about} id="contact">
      <div className={styles.header}>
        <div className="container">
          <Navbar />
          <h1>Privacy Policy</h1>
        </div>
      </div>
      <div className={styles.aboutInner}>
        <p>Last Updated: 12th Sept 2023</p>
        <div className={styles.points}>
          <h2>Introduction</h2>
          <p>
            Welcome to travelay! We are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            personal data when you visit our website, use our services, or
            interact with us.
          </p>
        </div>
        <div className={styles.points}>
          <h2> Information We Collect</h2>

          <p>We may collect the following types of personal information:</p>

          <ul>
            <li>
              <strong>Personal Identifiable Information (PII):</strong> Name,
              contact information (email address, phone number), and other
              information you provide when making reservations or inquiries.
            </li>
            <li>
              <strong>Payment Information:</strong> Payment card details and
              billing information, but only for processing transactions.
            </li>
            <li>
              <strong>Travel Preferences:</strong> Information about your travel
              preferences, including special requests and dietary restrictions.
            </li>
            <li>
              <strong>Website Usage Data:</strong> Information about your
              interactions with our website, including IP address, browser type,
              device information, and pages visited. We use cookies and similar
              technologies for this purpose.
            </li>
          </ul>
        </div>
        <div className={styles.points}>
          <h2> How We Use Your Information</h2>

          <p>
            We may use your personal information for the following purposes:
          </p>

          <ul>
            <li>
              To provide and manage travel-related services, including booking
              flights, hotels, and tours.
            </li>
            <li>
              To communicate with you regarding reservations, inquiries, and
              updates.
            </li>
            <li>
              To personalize your experience and offer tailored travel
              recommendations.
            </li>
            <li>To process payments and refunds.</li>
            <li>To improve our website and services.</li>
            <li>To comply with legal obligations and resolve disputes.</li>
          </ul>
        </div>
        <div className={styles.points}>
          <h2>Disclosure of Your Information</h2>
          <p>
            We may share your personal information with the following parties:
          </p>

          <ul>
            <li>
              Third-party service providers and partners necessary to fulfill
              your travel bookings.
            </li>
            <li>
              Legal authorities when required by law or to protect our rights,
              privacy, safety, or property.
            </li>
            <li>
              In the event of a merger, acquisition, or sale of assets, your
              information may be transferred to the new entity.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}
