import React from "react";
import "../css/About.css";
import tartsImg1 from "../img/tarts-1.jpg";
import tartsImg2 from "../img/tarts-2.jpg";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function About() {
    return (
        <section className="about" id="about">
            <div className="about__container">
                <h2 className="about__title">About Us</h2>
                <div className="about__content">
                    <div className="about__text-part">
                        <h3 className="about__subtitle">Our Goal</h3>
                        <p className="about__text">Ngachang Cake is a cake bakery shop located in Thimphu, Kabesa, Bhutan.</p>
                        <p className="about__text">It has gained its popularity among the students, staffs and the people around Kabesa because of its fast service, its quality and because of the taste. It is also known for its affordable prize. Ngachang cake lets you customize the cake of your choice and get it ready for any event.  </p>
                        <Link className="about__link" to="/contacts">
                            <span className="about__link-text">Find us on the map</span>
                            <span className="material-symbols-outlined arrow">
                                trending_flat
                            </span>
                        </Link>
                    </div>
                    <div className="about__img-wrapper img1">
                        <img src={tartsImg1} className="about__img img1" alt="tarts"></img>
                    </div>
                    <div className="about__img-wrapper img2">
                        <img src={tartsImg2} className="about__img img2" alt="tarts"></img>
                    </div>
                    <div className="about__text-part">
                        <h3 className="about__subtitle">More about us</h3>
                        <p className="about__text">At Ngachang Cake, we work with a carefully chosen, high quality ingredients to create hand-crafted locally-made cakes in Kabesa. Our cakes are delicious, beautiful and loved by locals and visitors alike</p>
                        <p className="about__text">We have been cake bakers for more than 10 years and the secret for our success is being passionate about baking and making cakes that taste as amazing as they look. We find inspiration in our passion for the beautiful place we live and use seasonal and organic ingredients whenever possible. A cake is the best way to celebrate life and we love making them even more special for any occasion.</p>
                        <HashLink className="about__link" smooth to="/#cakes">
                            <span className="about__link-text">To the Cake Gallery</span>
                            <span className="material-symbols-outlined arrow">
                                trending_flat
                            </span>
                        </HashLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;