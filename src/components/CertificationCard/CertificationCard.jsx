import "./CertificationCard.css";

function CertificationCard({ name, issuer, year, status }) {
  return (
    <article className="cert-card">
      <h3>{name}</h3>

      <p className="cert-issuer">{issuer}</p>

      <div className="cert-footer">
        <span>{status}</span>
        <span>{year}</span>
      </div>
    </article>
  );
}

export default CertificationCard;