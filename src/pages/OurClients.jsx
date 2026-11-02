import { Link } from "react-router-dom";
import cedarLogo from "../assets/logo-cedarharvestermontessorischools.jpeg";
import cedarMobileLogo from "../assets/logo-cedarharvestermontessorischools-mobile.jpeg";
import amobiLogo from "../assets/logo-amobiservicesltd.jpeg";
import amobiMobileLogo from "../assets/logo-amobiservicesltd-mobile.jpeg";
import hazelLogo from "../assets/logo-hazelprcompanyltd.jpeg";
import hazelMobileLogo from "../assets/logo-hazelprcompanyltd-mobile.jpeg";

const clients = [
  {
    name: "Cedar Harvester Montessori Schools",
    category: "Education",
    id: "048-EDU",
    description: "Perimeter guarding & children security protocols.",
    logo: cedarLogo,
    mobileLogo: cedarMobileLogo,
    alt: "Cedar Harvester Montessori Schools logo",
  },
  {
    name: "Eliminigwe Housing Estate Elelenwon",
    category: "Residential",
    id: "102-RES",
    description: "Housing Estate surveillance & security operations.",
    icon: "domain",
  },
  {
    name: "Amobi Services Ltd.",
    category: "Energy / Maritime",
    id: "219-OGS",
    description: "Technical logistics & offshore pipeline support integration.",
    logo: amobiLogo,
    mobileLogo: amobiMobileLogo,
    alt: "Amobi Services Ltd. logo",
  },
  {
    name: "Hazel PR Company Ltd.",
    category: "Enterprise",
    id: "001-HQ",
    description: "Internal logistics, marketing and parent integration.",
    logo: hazelLogo,
    mobileLogo: hazelMobileLogo,
    alt: "Hazel PR Company Ltd. logo",
  },
];

function ClientLogo({ client }) {
  if (client.logo) {
    return (
      <picture className="clients-logo-frame">
        <source media="(max-width: 700px)" srcSet={client.mobileLogo} />
        <img src={client.logo} alt={client.alt} loading="lazy" />
      </picture>
    );
  }

  return (
    <div className="clients-logo-placeholder" aria-hidden="true">
      <span className="material-symbols-outlined">{client.icon}</span>
      <span>ESTATE</span>
    </div>
  );
}

export default function OurClients() {
  return (
    <main className="clients-page">
      <section className="clients-hero">
        <div className="container">
          <div className="clients-hero-glow" />
          <div className="clients-eyebrow">
            <span className="material-symbols-outlined">verified_user</span>
            <span>Partnership Directory & Institutional Verification</span>
          </div>
          <div className="clients-hero-copy">
            <h1>Our Clients</h1>
            <p>
              Trusted by leading organizations across educational, residential,
              technical, and industrial ecosystems.
            </p>
          </div>
          <div className="clients-hero-standards">
            <div><i /><span>Standardized SLA Engagements</span></div>
            <div><i /><span>Full Marine & Ground Compliance</span></div>
          </div>
        </div>
      </section>

      <section className="clients-directory">
        <div className="container clients-directory-inner">
          <div className="clients-directory-heading">
            <div>
              <span>Verified Deployments</span>
              <h2>Strategic Engagements & Key Accounts</h2>
            </div>
            <p>Registry Index: HPR-CL-2026/Q1</p>
          </div>

          <div className="clients-account-grid">
            {clients.map((client) => (
              <article className="clients-account-card" key={client.id}>
                <ClientLogo client={client} />
                <div className="clients-account-copy">
                  <div className="clients-account-meta">
                    <span>{client.category}</span>
                    <small>ID: {client.id}</small>
                  </div>
                  <h3>{client.name}</h3>
                  <p>{client.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="clients-metrics">
            <article>
              <span>Operation Continuity</span>
              <strong>99.98%</strong>
              <p>Verified uptime across manned patrols and fixed guard stations.</p>
            </article>
            <article>
              <span>Technical Certifications</span>
              <strong>ISO 9001:2015</strong>
              <p>Full alignment with national maritime and private security standards.</p>
            </article>
            <article>
              <span>Rapid Response Coverage</span>
              <strong>&lt; 12 Mins</strong>
              <p>Tactical mobilization units positioned throughout Port Harcourt.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="clients-enquiry">
        <div className="container">
          <div>
            <h2>Interested in Our Services?</h2>
            <p>
              Connect with our deployment specialists to architect tailored
              physical security, offshore logistics, or procurement operations
              for your facility.
            </p>
          </div>
          <div className="clients-enquiry-actions">
            <Link className="clients-enquiry-primary" to="/contact">
              Make an Enquiry
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link className="clients-enquiry-secondary" to="/services">
              View Capabilities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
