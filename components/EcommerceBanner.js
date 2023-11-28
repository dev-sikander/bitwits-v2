import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Image from 'next/image'
import styles from "@/styles/ecommercebanner.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//images
import Logo from 'public/ecommerce/ecommercelogo.svg'
import checkImage from 'public/ecommerce/w-check.svg'
import Email from 'public/ecommerce/email.svg'
import Phone from 'public/ecommerce/b-phone.svg'
import Support from 'public/ecommerce/support.svg'
import PhoneTwo from 'public/ecommerce/w-phone.svg'
import USA from 'public/ecommerce/usa.svg'
import UAE from 'public/ecommerce/uae.svg'
import Malaysia from 'public/ecommerce/malaysia.svg'
import banImg1 from '../public/newHomePage/images/slider1.png'
import banImg2 from '../public/newHomePage/images/slider2.png'
import banImg3 from '../public/newHomePage/images/slider3.png'
import banImg4 from '../public/newHomePage/images/slider4.png'
import banImg5 from '../public/newHomePage/images/slider5.png'
import banImg6 from '../public/newHomePage/images/slider6.png'
import banImg7 from '../public/newHomePage/images/slider7.png'
import banImg8 from '../public/newHomePage/images/slider8.png'
import Slider from 'react-slick';
import Link from 'next/link';

const EcommerceBanner = () => {

    var bannerslider = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <>
            <section className={styles.EcommerceBanner}>
                <Row>
                    <Col lg={6} xl={8} className='p-0'>
                        <div className={styles.bannerbg}>
                            <Image src={Logo} alt='Logo' className={styles.logo} />

                            <div className={styles.content}>
                                <h1 className='font-50 text-white font-bold uppercase anton'>Top Ecommerce App <br />
                                    Development Company in USA!</h1>
                                <h6 className='f20 text-white font-bold'>Exceeded Performance Benchmarks, and Beat All Competitors.</h6>
                                <ul className=''>
                                    <li className='mb-2'>
                                        <Image src={checkImage} alt='BitsWits' />
                                        <span className='text-white font16 ms-2 mt-2'>Upgraded digital sales for expanding brands</span>
                                    </li>
                                    <li className='mb-2'>
                                        <Image src={checkImage} alt='BitsWits' />
                                        <span className='text-white font16 ms-2 mt-2'>Secured payment systems</span>
                                    </li>
                                    <li className='mb-2'>
                                        <Image src={checkImage} alt='BitsWits' />
                                        <span className='text-white font16 ms-2 mt-2'>Personalized user accounts
                                        </span>
                                    </li>
                                    <li className='mb-2'>
                                        <Image src={checkImage} alt='BitsWits' />
                                        <span className='text-white font16 ms-2 mt-2'>Push notifications and alerts</span>
                                    </li>
                                    <li className='mb-2'>
                                        <Image src={checkImage} alt='BitsWits' />
                                        <span className='text-white font16 ms-2 mt-2'>Push notifications and alerts</span>
                                    </li>
                                    <li className='mb-2'>
                                        <Image src={checkImage} alt='BitsWits' />
                                        <span className='text-white font16 ms-2 mt-2'>Product catalog and search features for products</span>
                                    </li>
                                </ul>
                                <p className='font20 text-white font-regular'>Our eCommerce app developers have built up to <span className='font-bold'>1200+</span> online stores,
                                    helping dynamic brands achieve high revenue since <span className='font-bold'>21 years.</span></p>

                                <Slider {...bannerslider} className={styles.newLogoSlide}>
                                    <div className="">
                                        <Image alt="BitsWits" src={banImg1} className="img-fluid w-75" />
                                    </div>
                                    <div className="">
                                        <Image alt="BitsWits" src={banImg2} className="img-fluid w-75" />
                                    </div>
                                    <div className="">
                                        <Image alt="BitsWits" src={banImg3} className="img-fluid w-50" />
                                    </div>
                                    <div className="">
                                        <Image alt="BitsWits" src={banImg4} className="img-fluid w-75" />
                                    </div>
                                    <div className="">
                                        <Image alt="BitsWits" src={banImg5} className="img-fluid w-75" />
                                    </div>
                                    <div className="">
                                        <Image alt="BitsWits" src={banImg6} className="img-fluid w-50" />
                                    </div>
                                    <div className="">
                                        <Image alt="BitsWits" src={banImg7} className="img-fluid w-75" />
                                    </div>
                                    <div className="">
                                        <Image alt="BitsWits" src={banImg8} className="img-fluid w-50" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} xl={4} className='p-0'>
                        <div className={styles.formsbg}>
                            <ul className='d-flex align-items-center justify-content-evenly pt-3 pt-sm-0'>
                                <li>
                                    <Link href="mailto:;" className='d-flex align-items-center'>
                                        <Image src={Email} alt='email' width={18} height={18} />
                                        <span className='font14 text-white font-medium ms-2'>Email</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="tel:;" className='d-flex align-items-center'>
                                        <Image src={Phone} alt='email' width={18} height={18} />
                                        <span className='font14 text-white font-medium ms-2'>Call Now</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="javascript:;" className='d-flex align-items-center'>
                                        <Image src={Support} alt='email' width={18} height={18} />
                                        <span className='font14 text-white font-medium ms-2'>Live Chat</span>
                                    </Link>
                                </li>
                            </ul>
                            <p className={`bg-black d-flex align-items-center justify-content-center w-100 text-white font15 mb-0 ${styles.ankerTag}`}>
                                <Image src={PhoneTwo} alt='Phone' width={18} height={18} className='' />
                                <span className='ms-2'>Let's discuss your project:</span>
                                <Link href="tel:;" className='ms-2 text-white font-medium'>+1 833 500 6007</Link>

                            </p>
                            <Form className={styles.forms}>
                                <h5 className='text-white font-bold font-28 text-center mb-3'>Make An Obligation-Free Enquiry</h5>
                                <input type='text' className='mb-3' placeholder="Hi, what's your name?*" required />
                                <input type='text' className='mb-3' placeholder="What's your email address?" required />
                                <input type='tel' className='mb-3' placeholder="Your contact number" required />
                                <textarea rows={5} placeholder='Please include any notes or specific questions here'></textarea>
                                <div className='d-flex align-items-center justify-content-between pt-3'>
                                    <span className='text-white font-medium font11'>We takes your privacy seriously. Read our <Link href="javascript:;" className='text-white d-block font-bold'>Privacy Notice.</Link> </span>
                                    <Button type='submit' className={`text-white bg-black rounded-2 ${styles.secBtn}`}>ENQUIRE NOW</Button>
                                </div>
                                <h5 className='text-white font-bold font-28 text-center mt-4 mb-4'>OUR OFFICES</h5>
                                <Row>
                                    <Col className='col-4' sm={4}>
                                        <div className='text-center'>
                                            <div className='image'>
                                                <Image src={USA} alt='USA' />
                                            </div>
                                            <div className='text'>
                                                <span className='d-block text-white font15 font-medium pt-2'>USA</span>
                                                <Link href="tel:;" className='d-block text-white font12 font-regular pt-2'>+1 833 500 6007</Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className='col-4' sm={4}>
                                        <div className='text-center'>
                                            <div className='image'>
                                                <Image src={UAE} alt='UAE' />
                                            </div>
                                            <div className='text'>
                                                <span className='d-block text-white font15 font-medium pt-2'>UAE</span>
                                                <Link href="tel:;" className='d-block text-white font12 font-regular pt-2'>+97 155 503 1266</Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className='col-4' sm={4}>
                                        <div className='text-center'>
                                            <div className='image'>
                                                <Image src={Malaysia} alt='Malaysia' />
                                            </div>
                                            <div className='text'>
                                                <span className='d-block text-white font15 font-medium pt-2'>MALAYSIA</span>
                                                <Link href="tel:;" className='d-block text-white font12 font-regular pt-2'>+1 833 500 6007</Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                            </Form>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default EcommerceBanner