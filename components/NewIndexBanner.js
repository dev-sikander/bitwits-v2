import React from 'react';
import Link from 'next/link';
import styles from "@/styles/NewIndexBanner.module.css";
//
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
//
const itemData = [
    {
        title: "Top Mobile App Development Company",
        subTitle: "Empowering Brands with Big Dreams and Innovative Visions",
        linkHref: "tel:+18335006007",
        linkText: "LET'S CONNECT",
    },
];


const NewIndexBanner = () => {

    const sliderRef = React.useRef(null);

    const activate = (e) => {
        const items = sliderRef.current.querySelectorAll('.item');

        if (e.target.matches('.next')) {
            sliderRef.current.append(items[0].cloneNode(true));
            sliderRef.current.append(items[0]);
            items[0].remove();
        }

        if (e.target.matches('.prev')) {
            sliderRef.current.prepend(items[items.length - 1].cloneNode(true));
            sliderRef.current.prepend(items[items.length - 1]);
            items[items.length - 1].remove();
        }
    };


    return (
        <>

            <section className={styles.newHomeBg}>
                <ul className={`${styles.slider}`} ref={sliderRef}>
                    <li className={`${styles.item} item ${styles.item1}`}>
                        {itemData.map((item, index) => (
                            <div key={index} className={styles.content}>
                                <p className={`${styles.just} font-bold f-20 mb-lg-0`}>{item.title}</p>
                                <h1 className={`${styles.develop} font55 font-bold`}>{item.subTitle}</h1>
                                <div className={styles.pont}>
                                    <Link className={styles.about} href={item.linkHref}>{item.linkText}</Link>
                                </div>
                            </div>
                        ))}
                    </li>
                    <li className={`${styles.item} item ${styles.item2}`}>
                        {itemData.map((item, index) => (
                            <div key={index} className={styles.content}>
                                <p className={`${styles.just} font-bold f-20 mb-lg-0`}>{item.title}</p>
                                <h1 className={`${styles.develop} font55 font-bold`}>{item.subTitle}</h1>
                                <div className={styles.pont}>
                                    <Link className={styles.about} href={item.linkHref}>{item.linkText}</Link>
                                </div>
                            </div>
                        ))}
                    </li>
                    <li className={`${styles.item} item ${styles.item3}`}>
                        {itemData.map((item, index) => (
                            <div key={index} className={styles.content}>
                                <p className={`${styles.just} font-bold f-20 mb-lg-0`}>{item.title}</p>
                                <h1 className={`${styles.develop} font55 font-bold`}>{item.subTitle}</h1>
                                <div className={styles.pont}>
                                    <Link className={styles.about} href={item.linkHref}>{item.linkText}</Link>
                                </div>
                            </div>
                        ))}
                    </li>
                    <li className={`${styles.item} item ${styles.item4}`}>
                        {itemData.map((item, index) => (
                            <div key={index} className={styles.content}>
                                <p className={`${styles.just} font-bold f-20 mb-lg-0`}>{item.title}</p>
                                <h1 className={`${styles.develop} font55 font-bold`}>{item.subTitle}</h1>
                                <div className={styles.pont}>
                                    <Link className={styles.about} href={item.linkHref}>{item.linkText}</Link>
                                </div>
                            </div>
                        ))}
                    </li>
                    <li className={`${styles.item} item ${styles.item5}`}>
                        {itemData.map((item, index) => (
                            <div key={index} className={styles.content}>
                                <p className={`${styles.just} font-bold f-20 mb-lg-0`}>{item.title}</p>
                                <h1 className={`${styles.develop} font55 font-bold`}>{item.subTitle}</h1>
                                <div className={styles.pont}>
                                    <Link className={styles.about} href={item.linkHref}>{item.linkText}</Link>
                                </div>
                            </div>
                        ))}
                    </li>
                </ul>
                <div className={styles.nav}>
                    <div className={`${styles.btn} prev`} onClick={activate}>
                        <FaArrowLeft />
                    </div>
                    <div className={`${styles.btn} next`} onClick={activate}>
                        <FaArrowRight />
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewIndexBanner