import { Link } from "react-router-dom";

const companyContacts = [
  {
    icon: "corporate_fare",
    label: "Operational Address",
    value: "54 Ivigwe Road, Woji, Port Harcourt, Rivers State, Nigeria",
  },
  {
    icon: "call",
    label: "Direct Telecommunications",
    value: "0814 015 7380, 0818 472 0864",
    href: "tel:+2348140157380",
  },
  {
    icon: "mail",
    label: "Electronic Dispatch",
    value: "hazelprcompanyltd12@gmail.com",
    href: "mailto:hazelprcompanyltd12@gmail.com",
  },
  {
    icon: "language",
    label: "Institutional Portal",
    value: "www.hazelprcompanyltd.com",
    href: "https://www.hazelprcompanyltd.com",
    external: true,
  },
];

const securityContacts = [
  {
    icon: "security",
    label: "Rapid Response & Surveillance Lines",
    value: "0814 015 7380, 0818 472 0864, 0806 416 6710",
    href: "tel:+2348140157380",
  },
  {
    icon: "mark_email_read",
    label: "Dedicated Security Mailbox",
    value: "hazelsecurity12@gmail.com",
    href: "mailto:hazelsecurity12@gmail.com",
  },
  {
    icon: "verified_user",
    label: "Division Gateway",
    value: "www.hazelsecurity.com",
    href: "https://www.hazelsecurity.com",
    external: true,
  },
];

const divisions = [
  ["oil-gas", "Oil & Gas Technical Services"],
  ["ndt-inspection", "NDT & Inspection"],
  ["welding-fabrication", "Welding & Fabrication"],
  ["security-services", "Hazel Security Services"],
  ["general-enquiry", "General Enquiry"],
];

function ContactCard({ item, security = false }) {
  const content = item.href ? (
    <a
      className="contact-card-value"
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
    >
      {item.value}
    </a>
  ) : (
    <span className="contact-card-value">{item.value}</span>
  );

  return (
    <article className={`contact-detail-card${security ? " is-security" : ""}`}>
      <span className="material-symbols-outlined contact-detail-icon">{item.icon}</span>
      <div>
        <span className="contact-detail-label">{item.label}</span>
        {content}
      </div>
    </article>
  );
}

function handleContactSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const name = data.get("fullName");
  const email = data.get("emailAddress");
  const phone = data.get("phoneNumber");
  const division = data.get("division");
  const message = data.get("message");
  const confidentiality = data.get("confidentiality")
    ? "The sender requests confidential handling of this enquiry."
    : "No confidentiality request was selected.";

  const subject = encodeURIComponent(`Website enquiry: ${division}`);
  const body = encodeURIComponent(
    `Full Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDivision: ${division}\n\nMessage:\n${message}\n\n${confidentiality}`
  );

  window.location.href = `mailto:hazelprcompanyltd12@gmail.com?subject=${subject}&body=${body}`;
}

export default function ContactUs() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container contact-hero-inner">
          <span className="contact-eyebrow"><i /> Operational Enquiries & Command</span>
          <h1>Contact Us</h1>
          <p>
            Get in touch with our team for precision engineering, marine operations,
            non-destructive testing, and security solutions.
          </p>
        </div>
        <div className="contact-hero-glow" />
      </section>

      <section className="contact-main">
        <div className="container contact-main-layout">
          <div className="contact-information">
            <section className="contact-group">
              <div className="contact-group-heading">
                <h2>Company Contacts</h2>
                <span>Corporate HQ</span>
              </div>
              <div className="contact-detail-list">
                {companyContacts.map((item) => <ContactCard key={item.label} item={item} />)}
              </div>
            </section>

            <section className="contact-group">
              <div className="contact-group-heading">
                <h2>Hazel Security Contacts</h2>
                <span>24/7 Ops Desk</span>
              </div>
              <div className="contact-detail-list">
                {securityContacts.map((item) => <ContactCard key={item.label} item={item} security />)}
              </div>
            </section>

            <div className="contact-compliance">
              <span className="material-symbols-outlined">verified</span>
              <div>
                <strong>Technical & Security Enquiries</strong>
                <span>Contact the relevant division directly using the details above.</span>
              </div>
            </div>
          </div>

          <section className="contact-form-panel">
            <div className="contact-form-heading">
              <h2>Send Message</h2>
              <p>
                Complete the form to prepare an email enquiry for the Hazel PR
                Company team. Your email application will open with the details filled in.
              </p>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="contact-field">
                <label htmlFor="contact-full-name">Full Name <span>*</span></label>
                <input id="contact-full-name" name="fullName" placeholder="Full Name" autoComplete="name" required />
              </div>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-email">Email Address <span>*</span></label>
                  <input id="contact-email" name="emailAddress" type="email" placeholder="Email Address" autoComplete="email" required />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-phone">Phone Number <span>*</span></label>
                  <input id="contact-phone" name="phoneNumber" type="tel" placeholder="Phone Number" autoComplete="tel" required />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-division">Subject / Operational Division <span>*</span></label>
                <select id="contact-division" name="division" defaultValue="" required>
                  <option value="" disabled>Select service discipline</option>
                  {divisions.map(([value, label]) => <option value={label} key={value}>{label}</option>)}
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Message <span>*</span></label>
                <textarea id="contact-message" name="message" placeholder="Write your message here..." rows="5" required />
              </div>

              <label className="contact-confidentiality">
                <input type="checkbox" name="confidentiality" />
                <span>Request confidential handling of this enquiry.</span>
              </label>

              <button className="contact-submit" type="submit">
                Prepare Email <span className="material-symbols-outlined">send</span>
              </button>
              <p className="contact-form-note">
                This form opens your email application. It does not send or store submissions on this website.
              </p>
            </form>
          </section>
        </div>
      </section>

      <section className="contact-location">
        <div className="container">
          <div className="contact-location-heading">
            <div>
              <span>Geographic Dispatch</span>
              <h2>Port Harcourt Headquarters & Tactical Base</h2>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=54+Ivigwe+Road%2C+Woji%2C+Port+Harcourt%2C+Rivers+State%2C+Nigeria" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined">near_me</span>
              Get Directions
            </a>
          </div>
          <div className="contact-map">
            <iframe
              title="Map showing 54 Ivigwe Road, Woji, Port Harcourt"
              src="https://www.google.com/maps?q=54%20Ivigwe%20Road%2C%20Woji%2C%20Port%20Harcourt%2C%20Rivers%20State%2C%20Nigeria&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="contact-map-card">
              <span className="material-symbols-outlined">location_on</span>
              <strong>Hazel PR Company Headquarters</strong>
              <p>54 Ivigwe Road, Woji, Port Harcourt, Rivers State, Nigeria.</p>
              <Link to="/contact">Contact the team</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
