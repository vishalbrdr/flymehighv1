import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.scss";
import Footer from "@/components/Footer/Footer";
export default function about() {
  return (
    <main className={styles.about} id="contact">
      <div className={styles.header}>
        <div className="container">
          <Navbar />
          <h1>Terms and Conditions</h1>
        </div>
      </div>
      <div className={styles.aboutInner}>
        <div className={styles.points}>
          <h2>Acceptance of Terms and Conditions</h2>
          <p>
            By using this website or booking services with [Your Travel Agency],
            you agree to abide by these terms and conditions. If you do not
            agree with any part of these terms, please refrain from using our
            website or services.
          </p>
        </div>
        <div className={styles.points}>
          <h2> Booking and Reservations</h2>
          <p>
            All bookings made through our website are subject to availability
            and confirmation by FlyMeHigh.
          </p>
          <p>
            The prices displayed on our website are subject to change without
            notice. The final price will be confirmed at the time of booking.
          </p>
          <p>
            Payment terms, cancellation policies, and refund conditions vary by
            service and are specified during the booking process.
          </p>
        </div>
        <div className={styles.points}>
          <h2>Travel Documents and Requirements</h2>
          <p>
            It is the responsibility of travelers to ensure they have valid
            passports, visas, and any required travel documents for their
            destination(s).
          </p>
          <p>
            FlyMeHigh will provide information on visa and health requirements
            to the best of its knowledge, but travelers should verify with
            relevant authorities.
          </p>
        </div>
        <div className={styles.points}>
          <h2> Travel Insurance</h2>
          <p>
            We strongly recommend that all travelers purchase comprehensive
            travel insurance to cover unforeseen events, including trip
            cancellations, medical emergencies, and lost luggage.
          </p>
        </div>
        <div className={styles.points}>
          <h2>Changes and Cancellations</h2>
          <p>
            FlyMeHigh reserves the right to modify or cancel bookings due to
            unforeseen circumstances or events beyond our control. We will make
            reasonable efforts to notify affected customers promptly.
          </p>
        </div>
        <div className={styles.points}>
          <h2>Liability</h2>
          <p>
            FlyMeHigh is not liable for any loss, injury, damage, or delay
            incurred by travelers during their trip. Travelers participate in
            activities and use services at their own risk.
          </p>
          <p>
            FlyMeHigh is not responsible for third-party services, such as
            airlines, hotels, or tour operators. The terms and conditions of
            these providers apply.
          </p>
        </div>
        <div className={styles.points}>
          <h2>Privacy</h2>
          <p>
            We collect and use personal information in accordance with our
            Privacy Policy. By using our website, you consent to our data
            practices as described in the Privacy Policy.
          </p>
        </div>
        <div className={styles.points}>
          <h2>Intellectual Property</h2>
          <p>
            All content on our website, including text, images, logos, and
            trademarks, is protected by copyright and other intellectual
            property laws. You may not use, reproduce, or distribute our content
            without permission.
          </p>
        </div>
        <div className={styles.points}>
          <h2>Governing Law</h2>
          <p>
            These terms and conditions are governed by the laws of [Your
            Jurisdiction]. Any disputes arising from these terms will be subject
            to the exclusive jurisdiction of the courts in India.
          </p>
        </div>
        <div className={styles.points}>
          <h2>Changes to Terms and Conditions</h2>
          <p>
            FlyMeHigh reserves the right to update or modify these terms and
            conditions at any time. Users are encouraged to review this page
            periodically for changes.
          </p>
          <p>
            By using our website and services, you acknowledge that you have
            read, understood, and agreed to these terms and conditions.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
