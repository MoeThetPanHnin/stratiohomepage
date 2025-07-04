import React, { useEffect } from 'react';
import './About.css';

function OurCrew() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      <div className="ourcrew-container">
        {/* Leader Group Section */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className="ourcrew-section-title">Stanford Alumni Leader Group</h2>
          <div className="crew-cards">
            <div className="crew-card">
              <img src="/ourcrew/james.png" alt="James Lee" className="crew-card-img" />
              <h3 className="crew-card-name">James Lee</h3>
              <div className="crew-card-underline"></div>
              <div className="crew-card-role">
                <span className="crew-card-degree">PhD</span>
                Co-Founder & CEO
              </div>
              <div className="crew-card-details">
                <img src="/ourcrew/stanford-university-vector-logo.svg" alt="Stanford University" style={{ height: '40px', objectFit: 'contain' }} />
              </div>
            </div>

            <div className="crew-card">
              <img src="/ourcrew/youngsik.png" alt="Youngsik Kim" className="crew-card-img" />
              <h3 className="crew-card-name">Youngsik Kim</h3>
              <div className="crew-card-underline"></div>
              <div className="crew-card-role">
                <span className="crew-card-degree">PhD</span>
                Co-Founder & CTO
              </div>
              <div className="crew-card-details">
                <img src="/ourcrew/stanford-university-vector-logo.svg" alt="Stanford University" style={{ height: '40px', objectFit: 'contain' }} />
              </div>
            </div>

            <div className="crew-card">
              <img src="/ourcrew/yeul.png" alt="Yeul Na" className="crew-card-img" />
              <h3 className="crew-card-name">Yeul Na</h3>
              <div className="crew-card-underline"></div>
              <div className="crew-card-role">
                <span className="crew-card-degree">PhD</span>
                Co-Founder & CSO
              </div>
              <div className="crew-card-details">
                <img src="/ourcrew/stanford-university-vector-logo.svg" alt="Stanford University" style={{ height: '40px', objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Key Employees Section */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className="ourcrew-section-title">Key Employees</h2>
          <div className="crew-cards">
            <div className="crew-card">
              <h3 className="crew-card-name">Sejin Serena Park</h3>
              <div className="crew-card-underline"></div>
              <div className="crew-card-role">
                <span className="crew-card-degree">MS</span>
                VP. Operation
              </div>
              <div className="crew-card-details">
                <img src="/ourcrew/stanford-university-vector-logo.svg" alt="Stanford University" style={{ height: '40px', objectFit: 'contain' }} />
              </div>
            </div>

            <div className="crew-card">
              <h3 className="crew-card-name">Yongho Jang</h3>
              <div className="crew-card-underline"></div>
              <div className="crew-card-role">
                <span className="crew-card-degree">BS</span>
                Head of Software
              </div>
              <div className="crew-card-details">
                <img src="/ourcrew/Purdue_University_Fort_Wayne_logo.svg" alt="Purdue University" style={{ height: '40px', objectFit: 'contain' }} />
              </div>
            </div>

            <div className="crew-card">
              <h3 className="crew-card-name">Heeyeon Hailey Yang</h3>
              <div className="crew-card-underline"></div>
              <div className="crew-card-role">
                <span className="crew-card-degree">BA</span>
                Head of Strategy
              </div>
              <div className="crew-card-details">
                <img src="/ourcrew/NCsoft-NEW-LOGO_2_w.ai.png" alt="NC Soft" style={{ height: '40px', objectFit: 'contain' }} />
              </div>
            </div>

            <div className="crew-card">
              <h3 className="crew-card-name">Taefa Steven Hong</h3>
              <div className="crew-card-underline"></div>
              <div className="crew-card-role">
                <span className="crew-card-degree">BA</span>
                CFO
              </div>
              <div className="crew-card-details">
                <img src="/ourcrew/Qcapital_partners.png" alt="Q Capital Partners" style={{ height: '40px', objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Board Members Section */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className="ourcrew-section-title">Board Members</h2>
          <div className="crew-cards">
            <div className="crew-card">
              <h3 className="crew-card-name">Jinhyung Lee</h3>
              <div className="crew-card-underline"></div>
              <div className="crew-card-role">
                <span className="crew-card-degree">PhD</span>
                Professor, Stanford Univ.
              </div>
              <div className="crew-card-details">
                <img src="/ourcrew/stanford-university-vector-logo.svg" alt="Stanford University" style={{ height: '40px', objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Advisors Section */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className="ourcrew-section-title">Advisors</h2>
          <div className="crew-cards">
            <div className="crew-card">
              <h3 className="crew-card-name">Paul Pickering</h3>
              <div className="crew-card-underline"></div>
              <div className="crew-card-role">
                <span className="crew-card-degree">PhD</span>
                Managing Partner, Silicon Catalyst
              </div>
              <div className="crew-card-details">
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', width: '100%' }}>
                  <img src="/ourcrew/TGtrigem.svg" alt="TG Trigem" style={{ height: '30px', objectFit: 'contain' }} />
                  <img src="/ourcrew/SiC_Logo.png" alt="Silicon Catalyst" style={{ height: '30px', objectFit: 'contain' }} />
                  <img src="/ourcrew/Micralyne.png" alt="Micralyne" style={{ height: '30px', objectFit: 'contain' }} />
                  <img src="/ourcrew/Exar Corporation.svg" alt="Exar Corporation" style={{ height: '30px', objectFit: 'contain' }} />
                </div>
              </div>
            </div>

            <div className="crew-card">
              <h3 className="crew-card-name">Marc Rippen</h3>
              <div className="crew-card-underline"></div>
              <div className="crew-card-role">
                <span className="crew-card-degree">PhD</span>
                CEO, Alertgy
              </div>
              <div className="crew-card-details">
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', width: '100%' }}>
                  <img src="/ourcrew/Alertgy.png" alt="Alertgy" style={{ height: '30px', objectFit: 'contain' }} />
                  <img src="/ourcrew/SRI.svg" alt="SRI" style={{ height: '30px', objectFit: 'contain' }} />
                  <img src="/ourcrew/embry riddle.svg" alt="Embry Riddle" style={{ height: '30px', objectFit: 'contain' }} />
                  <img src="/ourcrew/US ARMY.svg" alt="US Army" style={{ height: '30px', objectFit: 'contain' }} />
                </div>
              </div>
            </div>

            <div className="crew-card">
              <h3 className="crew-card-name">Euijung Moon</h3>
              <div className="crew-card-underline"></div>
              <div className="crew-card-role">
                <span className="crew-card-degree">PhD</span>
                Professor, Oxford Univ.
              </div>
              <div className="crew-card-details">
                <img src="/ourcrew/University_of_Oxford.svg" alt="Oxford University" style={{ height: '40px', objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OurCrew; 