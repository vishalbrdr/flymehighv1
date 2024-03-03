import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.scss";
import Footer from "@/components/Footer/Footer";
export default function about() {
  return (
    <main className={styles.about} id="contact">
      <div className={styles.header}>
        <div className="container">
          <h1>About Us</h1>
        </div>
      </div>
      <div className={styles.aboutInner}>
        <h2>Welcome to Travelay - Your Passport to Exceptional Journeys!</h2>
        <div className={styles.points}>
          <h2>Our Mission</h2>
          <p>
            At Travelay, our mission is clear: to be the leading and most
            trustworthy travel management company that sets the standard for
            professionalism, reliability, and transparency for our valued
            customers. With a wealth of experience in global networking travel
            management companies and an unwavering commitment to a client-first
            approach, we stand by these principles in every journey we help you
            embark upon.
          </p>
        </div>
        <div className={styles.points}>
          <h2>Your Remarkable Journey Starts Here</h2>
          <p>
            We believe that every journey should be nothing short of remarkable.
            That&apos;s why our dedicated team of travel experts is not just
            knowledgeable; they are passionate about curating personalized
            itineraries that cater to your unique preferences and budget, no
            matter where you wish to explore. Your dream destinations are ours
            to discover together.
          </p>
        </div>
        <div className={styles.points}>
          <h2>Your Dreams, Our Expertises</h2>
          <p>
            With an extensive network of trusted partners spanning the globe,
            Travelay can make your travel dreams a reality. Whether you yearn
            for the tranquility of a tropical beach, the vibrant energy of a
            bustling city, or the adrenaline rush of a thrilling adventure,
            we&apos;ll take care of all the arrangements.
          </p>
          <p>
            From securing the best flight options to selecting the most suitable
            hotels, we ensure that every detail is handled with precision and
            care. Our goal is simple but profound: to provide you with a
            seamless and stress-free travel experience, allowing you to focus on
            creating lifelong memories while we take care of the logistics.
          </p>
        </div>
        <div className={styles.points}>
          <h2>Stay Connected for Unforgettable Adventures</h2>
          <p>
            We invite you to stay connected with us for upcoming travel
            inspiration, insider tips, and exclusive offers as we embark on this
            incredible journey together. Follow our blog and social media
            channels for a steady stream of wanderlust-inducing content and
            travel insights that will ignite your passion for exploring the
            world.
          </p>
          <p>
            At Travelay, we don&apos;t just book trips; we create
            experiences. With us, your journey is not just a destination;
            it&apos;s a story waiting to be written. So, pack your bags, and
            let&apos;s soar to new heights together! ✈
          </p>
          <p>
            Thank you for choosing Travelay as your trusted travel partner.
            Your adventure begins now.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
