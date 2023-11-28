import Head from 'next/head'
import React, { useState, useEffect } from 'react';
//components
const WorkBanner = React.lazy(() => import('@/components/WorkBanner'));
const WorkBody = React.lazy(() => import('@/components/WorkBody'));
const NewHomeGlobal = React.lazy(() => import('@/components/NewHomeGlobal'));
const Capabilities = React.lazy(() => import('@/components/Capabilities'));
const NewHomeSlider = React.lazy(() => import('@/components/NewHomeSlider'));
const Technologieswe = React.lazy(() => import('@/components/Technologieswe'));
const Homenextproject = React.lazy(() => import('@/components/Homenextproject'));
const Faqs = React.lazy(() => import('@/components/NewhomeFaqs'));
const HomeLocation = React.lazy(() => import('@/components/HomeLocation'));


export default function OurWork() {

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

            <WorkBanner />
            <WorkBody />
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
