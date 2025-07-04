import React, { useState } from 'react';
import './App.css';

const newsData = [
  {
    img: '/news/[2023.09.17] post.png',
    title: 'ME Commons Hubs Officially Unveiled: Stratio Proudly',
    desc: 'Under the CHIPS and Science Act, the Defense Department today announced the award of nearly $240 million dollars to eight regional "innovation hubs" around the United States which will be a part of',
    date: 'September 20, 2023',
    url: '#',
  },
  {
    img: '/news/[2022.12.19] post.png',
    title: "Stratio and South Korea's National IIT Industry",
    desc: 'SAN JOSE, Calif., Dec. 15, 2022 (GLOBE NEWSWIRE) -- Stratio, Inc., an AI and sensor company that creates proprietary infrared technology to enhance public safety, today announced its collaboration with',
    date: 'December 15, 2022',
    url: '#',
  },
  {
    img: '/news/[2023.01.06] post.png',
    title: 'SPIE announces finalists for 2023 Prism Awards',
    desc: "BELLINGHAM, Washington, USA — Cutting-edge technologies and companies ranging from exciting and emerging startups to longtime industry stalwarts are among this year's finalists for the SPIE Prism",
    date: 'November 15, 2022',
    url: '#',
  },
  {
    img: '/news/[2022.09.09] post.png',
    title: 'Stratio puts shortwave infrared (SWIR) technology',
    desc: 'STRATIO, INC., is one of 10 startups from around the world working with the Luminate NY accelerator at NextCorps in downtown Rochester. These companies are helping to write the next chapter in',
    date: 'September 09, 2022',
    url: '#',
  },
  {
    img: '/news/[2022.03.23] post.png',
    title: 'Empire State Development Announces 10 Finalists',
    desc: '25 Million Luminate NY Initiative Continues to Bring the Best Startups with Optics, Photonics, and Imaging Technologies to the Finger Lakes Region to Tap World Class Resources and Grow the',
    date: 'March 23, 2022',
    url: '#',
  },
  {
    img: '/news/[2019.06.20] post.png',
    title: 'Stratio Drives AI – Powered Scientific Applications for',
    desc: "Stratio has introduced LinkSquare, a portable, an accessible and affordable spectrometer that offers tailor-made solutions for the enterprise LinkSquare is the world's first. Stratio has embedded its",
    date: 'June 20, 2019',
    url: '#',
  },
  {
    img: '/news/[2018.01.05] post.png',
    title: 'LinkSquare is a Handheld Infrared Scanner That',
    desc: 'In addition to traveling really fast and keeping us from stumbling over things in the dark, light is a pretty effective tool in the food supply chain. Stratio is putting light into the hands of people with',
    date: 'April 17, 2019',
    url: '#',
  },
  {
    img: '/news/[2018.12.04] post.png',
    title: 'Most Innovative Gadgets And Technologies From 2018',
    desc: 'Ever since the IoT (Internet of Things) category exploded a few years ago, the market began flooding with smart gadgets. Both established and start-up brands began putting chips in toasters,',
    date: 'December 04, 2018',
    url: '#',
  },
  {
    img: '/news/[2018.10.04] post.png',
    title: "Why there's a culture shift on the horizon",
    desc: 'The latest update to the BRC Global Standard for Food Safety will move the goalposts in terms of food and drink hygiene with companies under even greater scrutiny.',
    date: 'October 04, 2018',
    url: '#',
  },
  // Additional news items for "View more" functionality
  {
    img: '/news/[2018.08.05] post.png',
    title: '10 Gadgets That Will Bring You Directly Into 2018',
    desc: 'Just 10 years ago we were completely fine with simple phones and few varied people get letters on Nowadays, we have lots of apps, a digital wallet, and a camera on our smartphones.',
    date: 'August 05, 2018',
    url: '#',
  },
  {
    img: '/news/[2018.03.01] post.png',
    title: 'THE BEST SMART HOME INNOVATIONS FROM CES',
    desc: 'CES 2018 had a plethora of amazing consumer products, but these smart home innovations were our favorites.',
    date: 'March 01, 2018',
    url: '#',
  },
  {
    img: '/news/[2018.01.10] post.png',
    title: 'A see-through fridge, a roll-up TV: five exciting new',
    desc: 'People walk through a display at CES. The new rollable LG OLED TV looks the same as the curvy LG OLED televisions AFP The roll-up TV is currently only a prototype ICE.',
    date: 'January 10, 2018',
    url: '#',
  },
  {
    img: '/news/[2018.01.09] post.png',
    title: '6 coolest gadgets from CES you\'ll likely see in your house',
    desc: "Jennifer Jolly's coolest gadgets from CES you'll actually see in your home this year. Jennifer Jolly, Special for USA TODAY A New Year means one thing in the world of gadgets.",
    date: 'January 09, 2018',
    url: '#',
  },
  {
    img: '/news/[2018.01.07] post.png',
    title: 'LinkSquare Spectrometer Verifies Presence of',
    desc: 'LinkSquare makes spectroscopy accessible. They have created a pocket-sized spectrometer that verifies products information, or the presence of dangerous pathogens.',
    date: 'January 07, 2018',
    url: '#',
  },
  {
    img: '/news/[2017.01.09] post.png',
    title: 'GADGETS Here Comes CES 2018, the Biggest Gadget',
    desc: 'In just a few days, upwards of 175,000 industry insiders, exhibitors, and members of the media will once again descend upon Las Vegas for whats known far and wide as the Consumer Electronics Sh... in.',
    date: 'January 09, 2017',
    url: '#',
  },
  {
    img: '/news/[2017.01.06] post.png',
    title: '10 ingenious smart devices built by startups at CES 2017',
    desc: 'The corporations at CES may have had the bigger halls, but the Eureka Park shone just as bright on the little guys. Here why. As a first-timer to...',
    date: 'January 06, 2017',
    url: '#',
  },
  {
    img: '/news/[2017.01.05B] post.png',
    title: "TechCrunch's Hardware Battlefield finalists are",
    desc: 'Over the past two days, 13 startups have taken the stage at TechCrunchs Hardware Battlefield. Now our editorial...',
    date: 'January 06, 2017',
    url: '#',
  },
  {
    img: '/news/[2017.01.05A] post.png',
    title: "Stratio's portable spectroscope can tell what",
    desc: 'To the untrained eye, most pills tend to look the same, but, even to the trained eye, differences can be slight...',
    date: 'January 05, 2017',
    url: '#',
  },
  {
    img: '/news/[2022.11.25] post.png',
    title: 'Meet the startups participating in Hardware',
    desc: 'We are thrilled to introduce the participants in the Hardware Battlefield 2017. These startups represent what...',
    date: 'November 25, 2022',
    url: '#',
  },
  {
    img: '/news/[2022.11.10] post.png',
    title: 'CEO Interview-The Power of Debates in Silicon Valley:',
    desc: '"시리즈 A 시드들의 토론의 힘에 대해 실리콘 밸리 이민자의 역사 말해',
    date: 'November 10, 2022',
    url: '#',
  },
  {
    img: '/news/[2023.01.01] post.png',
    title: 'Stratio CEO of Korean companies in Silicon Valley,',
    desc: '"속성 컨설턴트들이 실리콘 밸리뽑아낸 팀을 연영스터(PaperSense)를 해 줄 것',
    date: 'January 01, 2023',
    url: '#',
  },
  {
    img: '/news/[2022.11.10] post.png',
    title: 'Stratio CEO TV interview by The Korea Economic TV "We',
    desc: '"Infrared imaging technology has long been too expensive, complicated and bulky for the general public to benefit from.',
    date: 'January 01, 2023',
    url: '#',
  },
  {
    img: '/news/[2022.11.25] post.png',
    title: 'Stratio, a Promising Start-Up in Silicon Valley, Unveils the',
    desc: '(본벤처스는리젠저) 실리콘 밸리의 희귀 스타트업 중 하나인 실리콘밸리의 저려기 개발회사로 자리를 단단히 자잡았다.',
    date: 'December 19, 2022',
    url: '#',
  },
  {
    img: '/news/[2023.01.01] post.png',
    title: 'Stratio Korea Has Been Selected to Develop "AI',
    desc: '스마티아오스지터디 인프라측정신학기술올(NINPAG) AI 성명 발전 센팅그 프로젝트, 시산화 사업덕 선정과 2023영회기 기 선명 더 창만기금드로 창 광잔다.',
    date: 'November 25, 2022',
    url: '#',
  },
  {
    img: '/news/[2022.11.10] post.png',
    title: 'K-Startup, Stratio and Doda, Proved Their Potential...by',
    desc: '인후동보신고협북합회(NINPAG) 자선 공정선경시설자가 제국 실용성덕들 크기 를 나티스마 시너다엑만다이여 적 된 딕장혹시 오리기의 성적.',
    date: 'January 01, 2023',
    url: '#',
  }
];

function News() {
  const [showSecondSet, setShowSecondSet] = useState(false);

  // Show first 9 or next 16 depending on state
  const visibleNews = showSecondSet
    ? newsData.slice(9, 25)
    : newsData.slice(0, 9);

  return (
    <div style={{ width: '100vw', minHeight: '100vh', background: 'black', paddingTop: 90, paddingBottom: 100 }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: 0 }}>
        <div style={{ textAlign: 'center', margin: '0 0 2.5rem 0', paddingTop: '3rem' }}>
          <h2 style={{ color: '#D5B64C', fontSize: '2.5rem', fontWeight: 700, marginBottom: '2.5rem' }}>Inside STRATIO, INC.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '18px', justifyItems: 'center' }}>
          {visibleNews.map((news, idx) => (
            <div key={idx} style={{ background: 'none', width: 380, display: 'flex', flexDirection: 'column', minHeight: 420, margin: 0, padding: 0 }}>
              <img src={news.img} alt={news.title} style={{ width: '100%', height: 200, objectFit: 'cover', margin: 0, padding: 0 }} />
              <div style={{ background: '#222', margin: 0, padding: '1.5rem 1.2rem 1.2rem 1.2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ color: '#fff', fontSize: '1.35rem', fontWeight: 700, margin: 0, marginBottom: 10, lineHeight: 1.25 }}>{news.title}</h3>
                <p style={{ color: '#ccc', fontSize: '1rem', margin: 0, marginBottom: 0, flex: 1, lineHeight: 1.5 }}>{news.desc}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#181818', padding: '0.9rem 1.2rem', borderTop: '1px solid #333', margin: 0 }}>
                <span style={{ color: '#ccc', fontSize: '0.98rem' }}>{news.date}</span>
                <a href={news.url} style={{ color: '#fff', fontSize: 22, display: 'flex', alignItems: 'center' }} aria-label="Read more">
                  <span style={{ display: 'inline-block', transform: 'translateY(2px)' }}>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        {!showSecondSet && (
          <div style={{ textAlign: 'center', margin: '3rem 0 0 0' }}>
            <button onClick={() => setShowSecondSet(true)} style={{ background: 'transparent', border: '2px solid #fff', color: '#fff', padding: '1rem 2.5rem', borderRadius: '2rem', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', marginTop: '2rem' }}>View more  +</button>
          </div>
        )}
      </div>
      <style>{`
        @media (max-width: 900px) {
          .news-card { width: 100% !important; min-width: unset !important; }
        }
      `}</style>
    </div>
  );
}

export default News; 