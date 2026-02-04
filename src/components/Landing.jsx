import React, { useState, useEffect } from 'react';
import './LandingPage.css';

// Assets
import img1 from '../assets/aqsa/1.png';
import hat from '../assets/aqsa/hat.png';
import balloon1 from '../assets/aqsa/balloon1.png';
import balloon2 from '../assets/aqsa/balloon2.png';
import unnamed from '../assets/aqsa/unnamed.png';
import decorateFlower from '../assets/aqsa/decorate_flower.png';
import decorate from '../assets/aqsa/decorate.png';
import smiley from '../assets/aqsa/smiley_icon.png';
import cute1 from '../assets/aqsa/mewmew.gif';
import cute2 from '../assets/aqsa/love.png';

const Landing = ({ onNext }) => {
    const [showMail, setShowMail] = useState(false);
    const [dateText, setDateText] = useState("");


    // Date Typewriter Effect
    useEffect(() => {
        const fullDate = "5th Feb";
        let idx = 0;
        const timer = setInterval(() => {
            if (idx < fullDate.length) {
                setDateText(prev => prev + fullDate.charAt(idx));
                idx++;
            } else {
                clearInterval(timer);
            }
        }, 200);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="aqsa-body">
            <div id="wrapper">

                {/* FLAGS */}
                <div className="flag__birthday">
                    <img src={img1} alt="" width="350" className="flag__left" />
                    <img src={img1} alt="" width="350" className="flag__right" />
                </div>

                {/* CONTENT */}
                <div className="content">

                    {/* LEFT SIDE */}
                    <div className="left">
                        <div className="title">
                            <h1 className="happy text-5xl md:text-9xl">
                                <span style={{ '--t': '2s' }}>H</span>
                                <span style={{ '--t': '2.2s' }}>a</span>
                                <span style={{ '--t': '2.4s' }}>p</span>
                                <span style={{ '--t': '2.6s' }}>p</span>
                                <span style={{ '--t': '2.8s' }}>y</span>
                            </h1>
                            <h1 className="birthday text-5xl md:text-9xl">
                                <span style={{ '--t': '3s' }}>B</span>
                                <span style={{ '--t': '3.2s' }}>i</span>

                                <span style={{ '--t': '3.4s' }}>r</span>
                                <span style={{ '--t': '3.6s' }}>t</span>
                                <span style={{ '--t': '3.8s' }}>h</span>
                                <span style={{ '--t': '4s' }}>d</span>
                                <span style={{ '--t': '4.2s' }}>a</span>
                                <span style={{ '--t': '4.4s' }}>y</span>
                            </h1>
                            <div className="hat">
                                <img src={hat} alt="" width="130" />
                            </div>
                        </div>

                        <div className="date__of__birth">
                            <span>{dateText}</span>
                            <i className="fa-solid fa-star" style={{ marginLeft: '10px' }}></i>
                        </div>

                        <div className="btn">
                            <button id="btn__letter" onClick={() => setShowMail(true)}>
                                <div className="mail">
                                    Click Here Jhanvi
                                    <i className="fa-regular fa-envelope"></i>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="right">
                        <div className="box__account">
                            <div className="image">
                                <img src={unnamed} alt="" />
                            </div>
                            <div className="name">
                                <i className="fa-solid fa-heart"></i>
                                <span>Dear Jhanvi</span>
                                <i className="fa-solid fa-heart"></i>
                            </div>
                            <div className="balloon_one">
                                <img width="100px" src={balloon1} alt="" />
                            </div>
                            <div className="balloon_two">
                                <img width="100px" src={balloon2} alt="" />
                            </div>
                        </div>

                        {/* ROTATING CIRCLE TEXT */}
                        <div className="cricle">
                            <div className="text__cricle">
                                <span style={{ '--i': 1 }}>h</span>
                                <span style={{ '--i': 2 }}>a</span>
                                <span style={{ '--i': 3 }}>p</span>
                                <span style={{ '--i': 4 }}>p</span>
                                <span style={{ '--i': 5 }}>y</span>
                                <span style={{ '--i': 6 }}>-</span>
                                <span style={{ '--i': 7 }}>b</span>
                                <span style={{ '--i': 8 }}>i</span>
                                <span style={{ '--i': 9 }}>r</span>
                                <span style={{ '--i': 10 }}>t</span>
                                <span style={{ '--i': 11 }}>h</span>
                                <span style={{ '--i': 12 }}>d</span>
                                <span style={{ '--i': 13 }}>a</span>
                                <span style={{ '--i': 14 }}>y</span>
                                <span style={{ '--i': 15 }}>-</span>
                            </div>
                            <i className="fa-solid fa-heart"></i>
                        </div>
                    </div>
                </div>

                {/* DECORATIONS */}
                <div className="decorate_star star1" style={{ '--t': '15s' }}></div>
                <div className="decorate_star star2" style={{ '--t': '15.2s' }}></div>
                <div className="decorate_star star3" style={{ '--t': '15.4s' }}></div>
                <div className="decorate_star star4" style={{ '--t': '15.6s' }}></div>
                <div className="decorate_star star5" style={{ '--t': '15.8s' }}></div>

                <div className="decorate_flower--one" style={{ '--t': '15s' }}>
                    <img width="20" src={decorateFlower} alt="" />
                </div>
                <div className="decorate_flower--two" style={{ '--t': '15.3s' }}>
                    <img width="20" src={decorateFlower} alt="" />
                </div>
                <div className="decorate_flower--three" style={{ '--t': '15.6s' }}>
                    <img width="20" src={decorateFlower} alt="" />
                </div>

                <div className="decorate_bottom">
                    <img src={decorate} alt="" width="100" />
                </div>
                <div className="smiley__icon">
                    <img src={smiley} alt="" width="100" />
                </div>

                {/* MAIL BOX MODAL */}
                {showMail && (
                    <div className="boxMail">
                        <i className="fa-solid fa-xmark close-modal" onClick={() => setShowMail(false)}>X</i>
                        <div className="boxMail-container">
                            <div className="card1">
                                <div className="userImg">
                                    <img src={unnamed} alt="" />
                                </div>
                                <h4 className="username">To: Jhanvi 💖</h4>
                                <h3>Happy Birthday</h3>
                                <div className="imageCute">
                                    <img src={cute1} alt="" />
                                </div>
                            </div>
                            <div className="card2">
                                <div className="card2-content">
                                    <h3>To You!</h3>
                                    <h2>
                                        19 years ago, you came into this world as a precious little baby. You took your first
                                        breaths, learned to crawl, and spoke those magical first words - 'mama', 'papa'. You stepped
                                        into school and found friends who would walk beside you. From a young age, dance found you,
                                        and you blossomed with every step, every movement becoming a part of your soul.
                                        Then came 10th grade, and plus two brought you the most beautiful memories - friendships
                                        that felt like home, bonds with family that shaped who you are. Life led you to UKF college,
                                        a place that tested you in ways you never wanted. But through it all, you remained you.
                                        And me? I found my favorite person. My best friend. The one I'm endlessly grateful for. You
                                        listen when my heart is heavy, you hold my troubles like they're your own, you hear my
                                        sorrows without judgment. Having you in my life isn't just luck - it's a blessing I'll never
                                        take for granted
                                    </h2>
                                    <div className="imageCute2">
                                        <img src={cute2} alt="" width="50" />
                                    </div>
                                    <button
                                        onClick={onNext}
                                        className="mt-4 px-6 py-2 bg-retro-pink text-white font-bold rounded-full hover:bg-retro-gold transition-colors w-full"
                                    >
                                        Proceed to Surprise &rarr;
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>

            {/* Font Awesome CDN (Injected via JS if not in index.html, but assuming standard project has it or I should add it) */}
        </div>
    );
};

export default Landing;
