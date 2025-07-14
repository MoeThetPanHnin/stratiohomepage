import React, { useEffect } from "react";
import "../css/About.css";
import "../css/OurCrew.css";
import james from "../images/ourcrewimg/james.png";
import youngsik from "../images/ourcrewimg/youngsik.png";
import yeul from "../images/ourcrewimg/yeul.png";
import snuh from "../images/ourcrewimg/SNUH logo_g.png";
import snf from "../images/ourcrewimg/SNFLogo-2018_g.png";
import ncsoft from "../images/ourcrewimg/NCsoft-NEW-LOGO_2_w.ai.png";
import arrow_outward from "../images/ourcrewimg/Arrow_Outward.svg";
import tgtrigem from "../images/ourcrewimg/TGtrigem.svg";
import qcapital from "../images/ourcrewimg/Qcapital_partners.png";
import stanford from "../images/ourcrewimg/stanford-university-vector-logo.svg";
import siliconcatalyst from "../images/ourcrewimg/SiC_Logo.png";
import micralyne from "../images/ourcrewimg/Micralyne.png";
import exar from "../images/ourcrewimg/Exar Corporation.svg";
import alertgy from "../images/ourcrewimg/Alertgy.png";
import sri from "../images/ourcrewimg/SRI.svg";
import embryriddle from "../images/ourcrewimg/embry riddle.svg";
import usarmy from "../images/ourcrewimg/US ARMY.svg";
import oxford from "../images/ourcrewimg/University_of_Oxford.svg";

function OurCrew() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      <div className="ourcrew-container">
        {/* Leader Group Section */}
        <section
          className="leader-group-section"
          style={{ marginBottom: "30rem" }}
        >
          <h2 className="ourcrew-section-title">
            Stanford Alumni Leader Group
          </h2>
          <div className="crew-cards">
            <div className="crew-card">
              <div className="crew-card-img-wrapper">
                <img
                  src={james}
                  alt="Jaehyung James Lee"
                  className="crew-card-img"
                />
                <a
                  className="crew-card-linkedin-arrow"
                  href=" https://www.linkedin.com/in/jaehyung-james-lee-6b815616/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img src={arrow_outward} alt="Arrow Outward" />
                </a>
              </div>
              <h3 className="crew-card-name">Jaehyung James Lee</h3>
              <div className="crew-card-underline"></div>
              <div className="crew-card-role">
                <span className="crew-card-degree">PhD</span>
                Co Founder and CEO
              </div>
              <div
                className="crew-card-details"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  - Seoul National Univ. EE BS
                  <br />
                  - Stanford Univ. EE MA
                  <br />- Stanford Univ. EE PhD
                </div>
                <div>
                  - Ex. BCG Consultant
                  <br />- STRATIO, INC. CEO
                </div>
              </div>
            </div>

            <div className="crew-card">
              <div className="crew-card-img-wrapper">
                <img
                  src={youngsik}
                  alt="Youngsik Kim"
                  className="crew-card-img"
                />
                <a
                  className="crew-card-linkedin-arrow"
                  href=" https://www.linkedin.com/in/youngsik-kim-82847073/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img src={arrow_outward} alt="Arrow Outward" />
                </a>
              </div>
              <h3 className="crew-card-name">Youngsik Kim</h3>
              <div className="crew-card-underline"></div>
              <div className="crew-card-role">
                <span className="crew-card-degree">PhD</span>
                Co Founder and SVP. ENG.
              </div>
              <div
                className="crew-card-details"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  - Seoul National Univ. EE BS
                  <br />
                  - Stanford Univ. EE MA
                  <br />- Stanford Univ. EE PhD
                </div>
                <div>
                  - Ex. ASSIA, Naver Corp.Engineer
                  <br />- STRATIO, Inc., SVP. Eng.
                </div>
              </div>
            </div>

            <div className="crew-card">
              <div className="crew-card-img-wrapper">
                <img src={yeul} alt="Yeul Na" className="crew-card-img" />
                <a
                  className="crew-card-linkedin-arrow"
                  href="https://www.linkedin.com/in/yeul-na-2007b36a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img src={arrow_outward} alt="Arrow Outward" />
                </a>
              </div>
              <h3 className="crew-card-name">Yeul Na</h3>
              <div className="crew-card-underline"></div>
              <div className="crew-card-role">
                <span className="crew-card-degree">PhD</span>
                Co Founder and SVP. Tech.
              </div>
              <div
                className="crew-card-details"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  - Seoul National Univ. EE BS
                  <br />
                  - Stanford Univ. EE MA
                  <br />- Stanford Univ. EE PhD
                </div>
                <div>
                  - Ex. APIC Corp. Engineer
                  <br />- STRATIO, INC., SVP. Tech.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Employees Section */}
        <section
          className="key-employees-section"
          style={{ marginBottom: "20rem" }}
        >
          <h2 className="ourcrew-section-title">Key Employees</h2>
          <div className="employee-cards">
            <div className="employee-card">
              <h3 className="crew-card-name">Sejin Serena Park</h3>
              <div className="crew-card-underline"></div>
              <div className="crew-card-role">
                <span className="crew-card-degree">MS</span>
                VP. Operation
              </div>
              <div className="crew-card-details">
                <img
                  src={snuh}
                  alt="Stanford University"
                  style={{
                    height: "40px",
                    objectFit: "contain",
                    marginRight: "10px",
                  }}
                />
                <img
                  src={snf}
                  alt="Stanford University"
                  style={{ height: "39px", objectFit: "contain" }}
                />
              </div>
            </div>

            <div className="employee-card">
              <h3 className="crew-card-name">Yongho Jang</h3>
              <div className="crew-card-underline"></div>
              <div className="crew-card-role">
                <span className="crew-card-degree">BS</span>
                Head of Software
              </div>
              <div className="crew-card-details">
                <img
                  src={ncsoft}
                  alt="Purdue University"
                  style={{ height: "40px", objectFit: "contain" }}
                />
              </div>
            </div>

            <div className="employee-card">
              <h3 className="crew-card-name">Heeyeon Hailey Yang</h3>
              <div className="crew-card-underline"></div>
              <div className="crew-card-role">
                <span className="crew-card-degree">BA</span>
                Head of Strategy
              </div>
              <div className="crew-card-details">
                <img
                  src={stanford}
                  alt="NC Soft"
                  style={{ height: "40px", objectFit: "contain" }}
                />
              </div>
            </div>

            <div className="employee-card">
              <h3 className="crew-card-name">Taefa Steven Hong</h3>
              <div className="crew-card-underline"></div>
              <div className="crew-card-role">
                <span className="crew-card-degree">BA</span>
                CFO
              </div>
              <div className="crew-card-details">
                <img
                  src={tgtrigem}
                  alt="TGtrigem"
                  style={{
                    height: "29px",
                    objectFit: "contain",
                    marginRight: "10px",
                  }}
                />
                <img
                  src={qcapital}
                  alt="Q Capital Partners"
                  style={{ height: "56px", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Board Members Section */}
        <section
          className="board-member-section"
          style={{ marginBottom: "12rem", marginTop: "12rem" }}
        >
          <h2 className="ourcrew-section-title">Board Members</h2>
          <div className="employee-cards">
            <div className="employee-card">
              <h3 className="crew-card-name">Jinhyung Lee</h3>
              <div className="crew-card-underline"></div>
              <div className="crew-card-role">
                <span className="crew-card-degree">PhD</span>
                Professor, Stanford Univ.
              </div>
              <div className="crew-card-details">
                <img
                  src={stanford}
                  alt="NC Soft"
                  style={{ height: "40px", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Advisors Section */}
        <section className="advisor-section" style={{ marginBottom: "12rem" }}>
          <h2 className="ourcrew-section-title">Advisors</h2>
          <div className="employee-cards">
            <div className="employee-card">
              <h3 className="crew-card-name">Paul Pickering</h3>
              <div className="crew-card-underline"></div>
              <div className="crew-card-role">
                <span className="crew-card-degree">PhD</span>
                Managing Partner, <br /> Silicon Catalyst
              </div>
              <div className="crew-card-details">
                <img
                  src={stanford}
                  alt="Stanford University"
                  style={{
                    width: "30px",
                    height: "40px",
                    objectFit: "contain",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                />
                <img
                  src={siliconcatalyst}
                  alt="Silicon Catalyst"
                  style={{
                    width: "40px",
                    height: "30px",
                    objectFit: "contain",
                    marginRight: "10px",
                  }}
                />
                <img
                  src={micralyne}
                  alt="Silicon Catalyst"
                  style={{
                    height: "40px",
                    objectFit: "contain",
                    marginRight: "10px",
                  }}
                />
                <img
                  src={exar}
                  alt="Silicon Catalyst"
                  style={{
                    height: "40px",
                    objectFit: "contain",
                    marginRight: "10px",
                  }}
                />
              </div>
            </div>

            <div className="employee-card">
              <h3 className="crew-card-name">Marc Rippen</h3>
              <div className="crew-card-underline"></div>
              <div className="crew-card-role">
                <span className="crew-card-degree">PhD</span>
                CEO, Alertgy
              </div>
              <div className="crew-card-details">
                <img
                  src={alertgy}
                  alt="Stanford University"
                  style={{
                    width: "120px",
                    height: "30px",
                    objectFit: "contain",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                />
                <img
                  src={sri}
                  alt="Silicon Catalyst"
                  style={{
                    width: "40px",
                    height: "30px",
                    objectFit: "contain",
                    marginRight: "10px",
                  }}
                />
                <img
                  src={embryriddle}
                  alt="Silicon Catalyst"
                  style={{
                    height: "40px",
                    objectFit: "contain",
                    marginRight: "10px",
                  }}
                />
                <img
                  src={usarmy}
                  alt="Silicon Catalyst"
                  style={{
                    height: "40px",
                    objectFit: "contain",
                    marginRight: "10px",
                  }}
                />
              </div>
            </div>

            <div className="employee-card">
              <h3 className="crew-card-name">Euijung Moon</h3>
              <div className="crew-card-underline"></div>
              <div className="crew-card-role">
                <span className="crew-card-degree">PhD</span>
                Professor, Oxford Univ.
              </div>
              <div className="crew-card-details">
                <img
                  src={oxford}
                  alt="NC Soft"
                  style={{ height: "40px", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OurCrew;
