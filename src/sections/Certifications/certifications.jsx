import "./Certifications.css";

import { certifications } from "../../data/certifications";
import CertificationCard from "../../components/CertificationCard/CertificationCard";

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2>Certifications</h2>

        <p className="section-description">
          Professional certifications and continuing education supporting my
          career in IT and Cybersecurity.
        </p>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <CertificationCard
              key={cert.id}
              {...cert}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;