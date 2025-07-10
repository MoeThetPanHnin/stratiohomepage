import React, { useState, useEffect } from 'react';
import './App.css';
import './News.css';
import NewsCard from './components/NewsCard';

const newsData = [
  {
    img: '/news/newsimg/[2023.09.20] post.png',
    title: 'ME Commons Hubs Officially Unveiled: Stratio Proudly ',
    desc: 'Under the CHIPS and Science Act, the Defense Department today announced the award of nearly $240 million dollars to eight regional "innovation hubs" around the United States which will be a part of',
    date: 'September 20, 2023',
    url: 'https://www.defense.gov/News/News-Stories/Article/Article/3532338/dod-names-8-locations-to-serve-as-new-microelectronics-commons-hubs/',
  },
  {
    img: '/news/newsimg/[2022.12.15] post.png',
    title: "Stratio and South Korea's National IIT Industry",
    desc: 'SAN JOSE, Calif., Dec. 15, 2022 (GLOBE NEWSWIRE) -- Stratio, Inc., an AI and sensor company that creates proprietary infrared technology to enhance public safety, today announced its collaboration with',
    date: 'December 15, 2022',
    url: 'https://www.globenewswire.com/news-release/2022/12/15/2574626/0/en/Stratio-and-South-Korea-s-National-IT-Industry-Promotion-Agency-NIPA-Announce-Technology-Roadmap-in-2023.html',
  },
  {
    img: '/news/newsimg/[2022.11.15] post.png',
    title: 'SPIE announces finalists for 2023 Prism Awards',
    desc: "BELLINGHAM, Washington, USA — Cutting-edge technologies and companies ranging from exciting and emerging startups to longtime industry stalwarts are among this year's finalists for the SPIE Prism",
    date: 'November 15, 2022',
    url: 'https://spie.org/news/spie-announces-finalists-for-2023-prism-awards?SSO=1',
  },
  {
    img: '/news/newsimg/[2022.09.09] post.png',
    title: 'Stratio puts shortwave infrared (SWIR) technology',
    desc: 'STRATIO, INC., is one of 10 startups from around the world working with the Luminate NY accelerator at NextCorps in downtown Rochester. These companies are helping to write the next chapter in',
    date: 'September 09, 2022',
    url: 'https://rbj.net/2022/09/09/stratio-puts-shortwave-infrared-swir-technology-into-the-palm-of-your-hand/',
  },
  {
    img: '/news/newsimg/[2022.03.23] post.png',
    title: 'Empire State Development Announces 10 Finalists',
    desc: '25 Million Luminate NY Initiative Continues to Bring the Best Startups with Optics, Photonics, and Imaging Technologies to the Finger Lakes Region to Tap World Class Resources and Grow the',
    date: 'March 23, 2022',
    url: 'https://esd.ny.gov/esd-media-center/press-releases/empire-state-development-announces-10-finalists-round-5-luminate-ny-competition-rochester',
  },
  {
    img: '/news/newsimg/[2019.06.20] post.png',
    title: 'Stratio Drives AI – Powered Scientific Applications for',
    desc: "Stratio has introduced LinkSquare, a portable, an accessible and affordable spectrometer that offers tailor-made solutions for the enterprise LinkSquare is the world's first. Stratio has embedded its",
    date: 'June 20, 2019',
    url: 'https://aithority.com/assistive-technologies/stratio-drives-ai-powered-scientific-applications-for-enterprises-that-need-it/',
  },
  {
    img: '/news/newsimg/[2019.04.17] post.png',
    title: 'LinkSquare is a Handheld Infrared Scanner That',
    desc: 'In addition to traveling really fast and keeping us from stumbling over things in the dark, light is a pretty effective tool in the food supply chain. Stratio is putting light into the hands of people with',
    date: 'April 17, 2019',
    url: 'https://thespoon.tech/linksquare-is-a-handheld-infrared-scanner-that-analyzes-food-for-freshness/',
  },
  {
    img: '/news/newsimg/[2018.12.04] post.png',
    title: 'Most Innovative Gadgets And Technologies From 2018',
    desc: 'Ever since the IoT (Internet of Things) category exploded a few years ago, the market began flooding with smart gadgets. Both established and start-up brands began putting chips in toasters,',
    date: 'December 04, 2018',
    url: 'https://www.mysmartprice.com/gear/features/',
  },
  {
    img: '/news/newsimg/[2018.10.04] post.png',
    title: "Why there's a culture shift on the horizon",
    desc: 'The latest update to the BRC Global Standard for Food Safety will move the goalposts in terms of food and drink hygiene with companies under even greater scrutiny.',
    date: 'October 04, 2018',
    url: 'https://www.foodmanufacture.co.uk/Article/2018/10/02/Food-safety-culture-identified-in-latest-global-standards/',
  },
  // Additional news items for "View more" functionality
  {
    img: '/news/newsimg/[2018.08.05] post.png',
    title: '10 Gadgets That Will Bring You Directly Into 2018',
    desc: 'Just 10 years ago we were completely fine with simple phones and few varied people get letters on Nowadays, we have lots of apps, a digital wallet, and a camera on our smartphones.',
    date: 'August 05, 2018',
    url: 'https://brightside.me/articles/10-gadgets-that-will-bring-you-directly-into-3019-484860/',
  },
  {
    img: '/news/newsimg/[2018.03.01] post.png',
    title: 'THE BEST SMART HOME INNOVATIONS FROM CES',
    desc: 'CES 2018 had a plethora of amazing consumer products, but these smart home innovations were our favorites.',
    date: 'March 01, 2018',
    url: 'https://thebossmagazine.com/smart-home-innovations-ces-2018/',
  },
  {
    img: '/news/newsimg/[2018.01.10] post.png',
    title: 'A see-through fridge, a roll-up TV: five exciting new',
    desc: 'People walk through a display at CES. The new rollable LG OLED TV looks the same as the curvy LG OLED televisions AFP The roll-up TV is currently only a prototype ICE.',
    date: 'January 10, 2018',
    url: 'https://www.thenationalnews.com/lifestyle/a-see-through-fridge-a-roll-up-tv-five-exciting-new-gadgets-from-ces-2018-1.694324',
  },
  {
    img: '/news/newsimg/[2018.01.09] post.png',
    title: '6 coolest gadgets from CES you\'ll likely see in your house',
    desc: "Jennifer Jolly's coolest gadgets from CES you'll actually see in your home this year. Jennifer Jolly, Special for USA TODAY A New Year means one thing in the world of gadgets.",
    date: 'January 09, 2018',
    url: 'https://www.usatoday.com/story/tech/columnist/2018/01/09/ces-2018-6-coolest-gadgets-ces-youll-likely-see-your-house-year/1016072001/',
  },
  {
    img: '/news/newsimg/[2018.01.07] post.png',
    title: 'LinkSquare Spectrometer Verifies Presence of',
    desc: 'LinkSquare makes spectroscopy accessible. They have created a pocket-sized spectrometer that verifies products information, or the presence of dangerous pathogens.',
    date: 'January 07, 2018',
    url: 'https://geeknewscentral.com/2018/01/07/linksquare-spectrometer-verifies-presence-of-pathogens-at-ces-2018/',
  },
  {
    img: '/news/newsimg/[2018.01.05] post.png',
    title: 'GADGETS Here Comes CES 2018, the Biggest Gadget',
    desc: 'In just a few days, upwards of 175,000 industry insiders, exhibitors, and members of the media will once again descend upon Las Vegas for whats known far and wide as the Consumer Electronics Sh... in.',
    date: 'January 05, 2018',
    url: 'https://gizmodo.com/here-comes-ces-2018-the-biggest-gadget-show-in-the-wor-1821789975',
  },
  {
    img: '/news/newsimg/[2017.01.09] post.png',
    title: '10 ingenious smart devices built by startups at CES 2017',
    desc: 'The corporations at CES may have had the bigger halls, but the Eureka Park shone just as bright on the little guys. Here why. As a first-timer to...',
    date: 'January 09, 2017',
    url: 'https://e27.co/10-amazing-smart-devices-built-by-startups-at-ces-2017-20170108/',
  },
  {
    img: '/news/newsimg/[2017.01.06] post.png',
    title: "TechCrunch's Hardware Battlefield finalists are",
    desc: 'Over the past two days, 13 startups have taken the stage at TechCrunchs Hardware Battlefield. Now our editorial...',
    date: 'January 06, 2017',
    url: 'https://techcrunch.com/2017/01/06/hardware-battlefield-finalists/?utm_content=buffer5aeb7&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer',
  },
  {
    img: '/news/newsimg/[2017.01.05B] post.png',
    title: "Stratio's portable spectroscope can tell what",
    desc: 'To the untrained eye, most pills tend to look the same, but, even to the trained eye, differences can be slight...',
    date: 'January 05, 2017',
    url: 'https://techcrunch.com/2017/01/05/stratios-portable-spectroscope-can-tell-what-kind-of-pill-that-is/?ncid=rss&utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+Techcrunch+(TechCrunch)',
  },
  {
    img: '/news/newsimg/[2017.01.05A] post.png',
    title: 'Meet the startups participating in Hardware',
    desc: 'We are thrilled to introduce the participants in the Hardware Battlefield 2017. These startups represent what...',
    date: 'January 05, 2017',
    url: 'https://techcrunch.com/2017/01/05/meet-the-startups-participating-in-hardware-battlefield-2017-at-ces/',
  },
  {
    img: '/news/newsimg/[2023.09.17] post.png',
    title: 'CEO Interview-The Power of Debates in Silicon Valley:',
    desc: '"시리즈 A 시드들의 토론의 힘에 대해 실리콘 밸리 이민자의 역사 말해',
    date: 'September 17, 2023',
    url: 'https://www.fnnews.com/news/202309171833377154',
  },
  {
    img: '/news/newsimg/[2023.01.06] post.png',
    title: 'Stratio CEO of Korean companies in Silicon Valley,',
    desc: '"“숙제 푸는 데 8년이 걸렸네요.” 세계 최초로 게르마늄(Germanium)을 활용한 호환 단파 적외선(SWIR) 카메라 센서 ‘비욘센스(BeyonSense)를 최근 출시한 스트라티오(Stratio) 이제형 대표는 “큰 짐을 덜어낸 것 같다”며 무엇보다 “다양한 산업에 적용시킬 수 있는 확장성에 보람을 느낀다”고 힘주어 말한다.',
    date: 'January 06, 2023',
    url: 'http://sf.koreatimes.com/article/20230106/1447968',
  },
  {
    img: '/news/newsimg/[2023.01.01] post.png',
    title: 'Stratio CEO TV interview by The Korea Economic TV "We',
    desc: '"Infrared imaging technology has long been too expensive, complicated and bulky for the general public to benefit from.',
    date: 'January 01, 2024',
    url: 'https://www.youtube.com/watch?v=ydPnxHX0HWo',
  },
  {
    img: '/news/newsimg/[2022.12.19] post.png',
    title: 'Stratio, a Promising Start-Up in Silicon Valley, Unveils the',
    desc: '(샌프란시스코=연합뉴스) 김태종 특파원 = 미국 실리콘밸리에 있는 한국 스타트업이 기존 제품보다 훨씬 작고 10배 이상 저렴한 적외선 카메라를 개발했다.',
    date: 'December 19, 2022',
    url: 'https://www.yna.co.kr/view/AKR20221218016500091',
  },
  {
    img: '/news/newsimg/[2022.11.25] post.png',
    title: 'Stratio Korea Has Been Selected to Develop "AI',
    desc: '스트라티오코리아가 정보통신산업진흥원(NIPA)의 ‘AI 융합 불법 복제품 판독시스템’ 사업에 선정되어 2023년까지 AI 기술 개발을 진행한다고 25일 밝혔다',
    date: 'November 25, 2022',
    url: 'https://www.news1.kr/industry/sb-founded/4876200',
  },
  {
    img: '/news/newsimg/[2022.11.10] post.png',
    title: 'K-Startup, Stratio and Doda, Proved Their Potential…by',
    desc: '정보통신산업진흥원(NIPA)은 지난 8일(현지시각) 미국 실리콘밸리 국가별 스타트업 지원센터연합IIA에서 열린 피칭대회(I-피치)에서 한국 스타트업 도다마인드와 스트라티오코리아가 각각 1등과 3등을 차지했다고 밝혔다.',
    date: 'November 10, 2022',
    url: 'https://news.mt.co.kr/mtview.php?no=2022111013542092707/',
  }
];

function News() {
  const [showSecondSet, setShowSecondSet] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ width: '100vw', minHeight: '100vh', background: 'black', paddingTop: 90, paddingBottom: 100 }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: 0 }}>
        <div style={{ textAlign: 'center', margin: '0 0 2.5rem 0', paddingTop: '3rem' }}>
          <h2 className="news-page-title">Inside STRATIO, INC.</h2>
        </div>
        {/* First 9 news cards */}
        <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(370px, 1fr))', gap: '5px', justifyItems: 'stretch' }}>
          {newsData.slice(0, 9).map((news, idx) => (
            <NewsCard key={idx} {...news} />
          ))}
        </div>
        {/* View More button */}
        {!showSecondSet && (
          <div style={{ textAlign: 'center', margin: '2rem 0 3rem 0' }}>
            <button
              className="view-more-btn"
              onClick={() => setShowSecondSet(true)}
              style={{ border: '2px solid #fff', padding: '1rem 2.5rem', borderRadius: '2rem', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', marginTop: '2rem' }}
            >
              View More  +
            </button>
          </div>
        )}
        {/* Remaining 16 news cards */}
        {showSecondSet && (
          <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(370px, 1fr))', gap: '5px', justifyItems: 'stretch', marginTop: '2.5rem', marginBottom: '4rem' }}>
            {newsData.slice(9, 25).map((news, idx) => (
              <NewsCard key={9 + idx} {...news} />
            ))}
          </div>
        )}
      </div>
      <style>{`
        @media (max-width: 900px) {
          .news-card { width: 100% !important; min-width: unset !important; }
        }
        @media (min-width: 1100px) {
          .news-grid { gap: 15px !important; }
        }
      `}</style>
    </div>
  );
}

export default News; 