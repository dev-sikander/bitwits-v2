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
const banLogo = await import('../public/images/case-travel/banner-logo.png');
const banImg = await import('../public/images/case-travel/banner-img.png');
const glamicImg = await import('../public/images/case-travel/glamic.png');
const goalImg = await import('../public/images/case-travel/goal.png');
const animiImg1 = await import('../public/images/case-travel/animi1.png');
const animiImg2 = await import('../public/images/case-travel/animi2.png');
const animiImg3 = await import('../public/images/case-travel/animi3.png');
const servImg = await import('../public/images/case-travel/services.png');
//Icons 
const icon1 = await import('../public/images/fymobile/1.png');
const icon2 = await import('../public/images/fymobile/2.png');
const icon3 = await import('../public/images/fymobile/3.png');
const icon4 = await import('../public/images/fymobile/4.png');
const icon5 = await import('../public/images/fymobile/5.png');
const icon6 = await import('../public/images/fymobile/6.png');


export default function TravelApp() {

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
        title={<> Explore the World, One Click at a Time </>}
        banImg={banImg}
        bannerClass='tourista'
      />

      <CaseGlamic
        textArray1={[
          {
            title: <>Travel App <span>Development</span></>,
            text: [
              <>
                <i>Tourista</i> is your premium travel app, simplifying every aspect of your journeys. From trip planning and interactive maps to local insights and seamless booking integration, Tourista has you covered.
              </>,
              <>
                Enjoy offline access, document your experiences in a travel journal, and stay updated with safety alerts. Whether you're a beginner or a frequent traveler, Tourista is your go-to app for a hassle-free and unforgettable travel adventure.
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
              <>Our client's inspiration for Tourista stemmed from their personal frustration with the complexities of travel planning. They realized that there was a need for a streamlined and user-friendly solution to help travelers make the most of their journeys.</>,

              <>Their desire to create an app that simplifies trip planning, enhances navigation, and provides valuable insights led to the inception of Tourista. The goal was to make travel accessible and enjoyable for every traveler out there!</>,
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
              'Effortlessly create customized itineraries.',
              'Real-time navigation with points of interest.',
              'Curated recommendations and insider tips.',
              'Download maps and essential information.',
              'Secure flights, accommodations, and activities.',
              'Document memories and experiences.',
              'Simplify budgeting while traveling.',
              'Stay informed with travel advisories and weather updates.',
              'Intuitive design for seamless use.',
            ],
          },
          {
            title: <> <span>Challenges</span> We Faced </>,
            textArray: [
              'Combining various data sources.',
              'Balancing features and simplicity.',
              'Ensuring smooth offline use.',
              'Protecting user and payment data.',
              'Addressing diverse devices and systems.',
            ],
          },
          {
            title: <> Trouble <span>Tackling</span> </>,
            textArray: [
              'Employed robust APIs and data handling protocols for seamless data synchronization.',
              'Conducted extensive user testing and feedback loops to refine the interface.',
              'Utilized advanced caching mechanisms and efficient data storage.',
              'Implemented encryption and compliance with industry standards for data protection.',
              'Utilized versatile frameworks to ensure compatibility across various devices and operating systems.',
            ],
          },
        ]}
        para={<> BitsWits took on the challenge of creating Tourista by assembling a talented team of developers, and designers. Through meticulous planning, agile development methodologies, and a commitment to user-centered design, BitsWits successfully crafted an app that simplifies travel, making it accessible and enjoyable for all. </>}
        wantsClass='tourista'
      />

      <CaseGoal
        golImg={goalImg}
        title={<> Start your app development journey effortlessly; let BitsWits be your savior with a quick tap! </>}
        goalClass='tourista'
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