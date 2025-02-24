import data from "../../data/index.json";

export default function CertificationsAndBadges() {
  return (
    <section className="certifications--section" id="certifications">
      <div className="certifications--container">
        <h3 className="certifications--heading">Licenses & Certifications</h3>
        <div className="certifications--grid">
          {data?.certifications?.map((cert, index) => (
            <div key={index} className="certification--card">
              {cert.badgeSrc && (
                <img 
                  src={cert.badgeSrc.startsWith("/") ? cert.badgeSrc : `/img/${cert.badgeSrc}`} 
                  alt={cert.title} 
                  className="certification--image" 
                />
              )}
              <h4 className="certification--title">{cert.title}</h4>
              <p className="certification--issuer">{cert.issuer}</p>
              <p className="certification--date">Issued: {cert.issueDate}</p>
              <p className="certification--id">Credential ID: {cert.credentialId}</p>
              <a href={cert.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                View Certification
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="badges--container">
        <h3 className="badges--heading">Badges</h3>
        <div className="badges--grid">
          {data?.badges?.map((badge, index) => (
            <div key={index} className="badge--card">
              {badge.src && (
                <img 
                  src={badge.src.startsWith("/") ? badge.src : `/img/${badge.src}`} 
                  alt={badge.title} 
                  className="badge--image" 
                />
              )}
              <h4 className="badge--title">{badge.title}</h4>
              <a href={badge.link} className="btn btn-secondary" target="_blank" rel="noopener noreferrer"> 
                View Badge
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}