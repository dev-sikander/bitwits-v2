import Head from 'next/head'
import React, { useState, useEffect } from 'react';
//components
const Banner = React.lazy(() => import('@/components/CaseBanner'));
const CaseGlamic = React.lazy(() => import('@/components/CaseGlamic'));
const CaseWants = React.lazy(() => import('@/components/CaseWants'));
const CaseGoal = React.lazy(() => import('@/components/CaseGoal'));
const CaseOvercoming = React.lazy(() => import('@/components/CaseOvercoming'));
const CaseAnimate = React.lazy(() => import('@/components/CaseAnimate'));
const CaseServices = React.lazy(() => import('@/components/CaseServices'));
const NewHomeGlobal = React.lazy(() => import('@/components/NewHomeGlobal'));
const Capabilities = React.lazy(() => import('@/components/Capabilities'));
const NewHomeSlider = React.lazy(() => import('@/components/NewHomeSlider'));
const Technologieswe = React.lazy(() => import('@/components/Technologieswe'));
const Homenextproject = React.lazy(() => import('@/components/Homenextproject'));
const Faqs = React.lazy(() => import('@/components/NewhomeFaqs'));
const HomeLocation = React.lazy(() => import('@/components/HomeLocation'));
//images
const banLogo = await import('../public/images/case-beats/banner-logo.png');
const banImg = await import('../public/images/case-beats/banner-img.png');
const glamicImg = await import('../public/images/case-beats/glamic.png');
const goalImg = await import('../public/images/case-beats/goal.png');
const animiImg1 = await import('../public/images/case-beats/animi1.png');
const animiImg2 = await import('../public/images/case-beats/animi2.png');
const animiImg3 = await import('../public/images/case-beats/animi3.png');
const servImg = await import('../public/images/case-beats/services.png');
//Icons 
const icon1 = await import('../public/images/fymobile/1.png');
const icon2 = await import('../public/images/fymobile/2.png');
const icon3 = await import('../public/images/fymobile/3.png');
const icon4 = await import('../public/images/fymobile/4.png');
const icon5 = await import('../public/images/fymobile/5.png');
const icon6 = await import('../public/images/fymobile/6.png');


export default function Beats() {

  const [showComponent, setShowComponent] = useState(false);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);

    }, 1000); // Delay duration in milliseconds (e.g., 1000ms = 1 second)

    return () => clearTimeout(timeout);
  }, []);


  return (
    <>
      <Head>
        <title>BitsWits</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/icons/favicon.png" />
      </Head>

      <Banner
        banLogo={banLogo}
        title={<> Play It Loud, Play It Proud </>}
        banImg={banImg}
        bannerClass='beats'
      />

      <CaseGlamic
        textArray1={[
          {
            title: <>Music App <span>Solution</span></>,
            text: [
              <>
                <i>Beats</i>, a music app, showcases music albums, lets users collaborate with other application users, and brings together a community of music enthusiasts, all within our vibrant and supportive platform.
              </>,
              <>
                It stands out from the rest with its unique feature that allows users to not only create their own music but also share their albums with a global audience.
              </>
            ]
          },
        ]}

        textArray2={[
          {
            title: <>Want an <br /> App Like This?</>,
            text: <>Our expert consultants eagerly await your ideas. Request a complimentary consultation with our app specialists to discuss your idea.</>,
          },
        ]}

        foldImg={glamicImg}

        textArray3={[
          {
            title: <>Why Trust BitsWits with <span>App Development?</span></>,
            text: [
              <>We stand as the primary choice for mobile app development, exemplifying excellence in a dynamic field. Our team combines creativity and the most suitable tech stack to develop customized app solutions.</>,
              <>Our track record of delivering on time and within budget, coupled with a commitment to staying ahead of industry trends, sets us apart as the best partner for mobile app development.</>,
            ],
          },
          {
            title: <>The <span>Starting</span> Point</>,
            text: [
              <>Beats started when a group of dedicated musicians and tech enthusiasts came together with a vision to create a platform that would empower individuals to make their mark in the world of music.</>,
              <>The founders’ vision is to create an inclusive community of music lovers, where every user can find their unique rhythm and express themselves freely. </>,
            ],
          },
        ]}
      />

      <CaseServices
        servImg={servImg}
      />

      <CaseWants
        sections={[
          {
            title: <>Main <span>Features</span> </>,
            textArray: [
              'Artist Profiles',
              'Music Creation Tools',
              'Personalized Playlists',
              'High-Quality Audio Streaming',
              'Synchronized Lyrics Integration',
            ],
          },
          {
            title: <> A Closer Look at Project <span>Challenges We Faced</span> </>,
            textArray: [
              'Aggregating and updating artist data and content.',
              'Developing a user-friendly music creation interface.',
              'Creating an effective recommendation algorithm.',
              'Ensuring seamless high-quality audio streaming.',
              'Synchronizing lyrics with songs in real-time.',
            ],
          },
          {
            title: <> Trouble <span>Tackling</span> </>,
            textArray: [
              'Designed intuitive artist profile layouts for easy navigation.',
              'Ensured user-friendly interfaces for music creation.',
              'Implemented smart algorithms for personalized playlist suggestions.',
              'Optimized for seamless, high-quality audio playback.',
              'Developed a sync system for precise lyric display.',
            ],
          },
        ]}
        para={<> BitsWits combined the best suitable tech stack and creative design for the app The result is a music mobile application that delivers an exceptional user experience and elevates the way people enjoy and create music.</>}
        wantsClass='beats'
      />

      <CaseGoal
        golImg={goalImg}
        title={<> Take a step toward your beauty goals from the comfort of your couch with just a few taps on our app! </>}
        goalClass='beats'
      />

      <CaseOvercoming
        challenges={[
          {
            icon: icon1,
            title: <> Overcoming <br /> Development Challenges </>,
            text: <> We bring together a team of highly skilled app developers, each with their unique expertise and experiences, to tackle complex development problems efficiently. Our team breaks down challenges into manageable components and implements innovative solutions to ensure successful project outcomes. </>,
          },
          {
            icon: icon2,
            title: <> Hybrid <br /> Development Excellence </>,
            text: <> Our approach to app development is anything but one-size-fits-all. With a hybrid approach, we strike a balance between predictability and adaptability. For projects with clearly defined timeframes, we employ a waterfall approach to meet the deadlines. This helps us meet the compliance requirements and regulatory standards. </>,
          },
          {
            icon: icon3,
            title: <> On-Time Delivery - <br /> Every Time </>,
            text: <> Completing tasks within a timeframe is a reflection of our professionalism, reliability, and dedication to client satisfaction. Upon onboarding, we set realistic and achievable deadlines, define clear milestones, and allocate resources accordingly. Project managers at BitsWits use tools to track progress and ensure the project remains on schedule. </>,
          },
          {
            icon: icon4,
            title: <> Erasing <br /> Time-zone Barriers </>,
            text: <> Our project managers are trained to remain considerate about time-zone differences, they take into account clients' availability and preferences. We prioritize cultural sensitivity, our developers made a system that shows clients' active hours along with their current location in google maps, and holidays around the globe. </>,
          },
          {
            icon: icon5,
            title: <> Efficient <br /> Communication </>,
            text: <> BitsWits offers round-the-clock, efficient communication to clients through instant chat, messages, and calls. Our commitment to 24/7 availability ensures that clients can reach out at their convenience. Our instant chat is equipped with end-to-end encryption, ensuring privacy and safeguarding sensitive information in every interaction. </>,
          },
          {
            icon: icon6,
            title: <> Addressing <br /> Payment Disputes </>,
            text: <> At BitsWits, we rely on the Stripe payment method for all transactions. We've developed an automated dispute resolution portal to efficiently manage payment issues. Our portal also provides clear visibility into the different stages of reported payment disputes and their current statuses. </>,
          },
        ]}
      />

      <CaseAnimate
        animiImg1={animiImg1}
        animiImg2={animiImg2}
        animiImg3={animiImg3}
      />

      <NewHomeGlobal />
      <Capabilities />
      <NewHomeSlider />
      <Technologieswe />
      <Homenextproject
        title="Brace yourself for an App-venture!"
      />
      <Faqs />
      <HomeLocation />

    </>
  )
}
