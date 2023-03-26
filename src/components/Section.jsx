import React from 'react'
import { motion } from 'framer-motion';

const Section = ({ h3, text, hasBtn = true, btnTxt, imgSrc, imgSize = "70%", bgColor, headingColor, textColor, btnbgColor, btnColor }) => {
    return (
        <section className='section' style={{ backgroundColor: bgColor }}>
            <div>
                <motion.h3 data-cursorpointer style={{ color: headingColor }} initial={{ y: "100%", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>{h3}</motion.h3>
                {/* <p style={{ color: textColor }}>{text}</p> */}
                <motion.p data-cursorpointer style={{ color: textColor }} dangerouslySetInnerHTML={{ __html: text }}
                    initial={{
                        y: "-100%",
                        opacity: 0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.3,
                    }}
                ></motion.p>

                {hasBtn && <motion.button data-cursorpointer style={{ color: btnColor, backgroundColor: btnbgColor }}

                    initial={{
                        y: "100%",
                        opacity: 0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.3,
                        ease: "easeIn",
                    }}
                >{btnTxt}</motion.button>}
                <motion.div
                    initial={{
                        scale: 0.1,
                        opacity: 0,
                    }}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.3,
                    }}
                >
                    <img style={{ width: imgSize }} src={imgSrc} alt="img" />
                </motion.div>
            </div>
        </section>
    )
}

export default Section