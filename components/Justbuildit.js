import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router";
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Justbuildit.module.css'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import banImg1 from '../public/images/banner/bannerImg1.png'
import banImg2 from '../public/images/banner/bannerImg2.png'
import banImg3 from '../public/images/banner/bannerImg1.png'
import banImg4 from '../public/images/banner/bannerImg2.png'
import banImg5 from '../public/images/banner/bannerImg1.png'


const Justbuildit = () => {

    const router = useRouter();

    var bannerslider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 20000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <>

            <section className={router.pathname == '/mobile-application-duplicate' ? styles.slide1 : styles.slide}>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h2 className={styles.just}>Build Your App</h2>
                            <h3 className={styles.develop}>Hire BitsWits & Watch Your App Ideas Aspire!</h3>

                            <div className={styles.pont}>
                                <Link className={styles.about} href="tel:+18335006007">LET'S CONNECT</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Slider {...bannerslider} className='mt-5 jstBuild'>
                    <div className={styles.strpImg}>
                        <Image alt="BitsWits" src={banImg1} className="img-fluid w-100" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image alt="BitsWits" src={banImg2} className="img-fluid w-100" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image alt="BitsWits" src={banImg3} className="img-fluid w-100" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image alt="BitsWits" src={banImg4} className="img-fluid w-100" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image alt="BitsWits" src={banImg5} className="img-fluid w-100" />
                    </div>
                </Slider>
            </section>
        </>
    )
}

export default Justbuildit