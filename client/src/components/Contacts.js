import React from "react";
import "../css/Contacts.css";

function Contacts() {
    return (
        <section className="contacts">
            <div className="contacts__container">
                <h2 className="contacts__title">Contacts</h2>
                <div className="contacts__content">
                    <div className="contacts__map">
                        {/* <iframe className="contacts__map-iframe" src="https://yandex.ru/map-widget/v1/?um=constructor%3A1c194d08624b8718ba84d59267979526dafc74dc056a8b3b9e18c4c3acd5d9ce&amp;source=constructor" width="600" height="450" title="Map" frameBorder="0"></iframe> */}
                        <div style={{ position: 'relative', overflow: 'hidden' }}>
                            <a href="https://yandex.com/maps?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>
                                Yandex Maps
                            </a>
                            <a href="https://yandex.com/maps/?from=mapframe&ll=89.632519%2C27.630554&mode=usermaps&source=mapframe&um=constructor%3A1c194d08624b8718ba84d59267979526dafc74dc056a8b3b9e18c4c3acd5d9ce&utm_medium=mapframe&utm_source=maps&z=10" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>
                                Yandex Maps: search for places, transport, and routes
                            </a>
                            <iframe
                                title="Unique Title"
                                src="https://yandex.com/map-widget/v1/?from=mapframe&ll=89.632519%2C27.630554&mode=usermaps&source=mapframe&um=constructor%3A1c194d08624b8718ba84d59267979526dafc74dc056a8b3b9e18c4c3acd5d9ce&utm_medium=mapframe&utm_source=maps&z=10"
                                width="560"
                                height="320"
                                frameBorder="1"
                                allowFullScreen={true}
                                style={{ position: 'relative' }}
                            ></iframe>
                        </div>
                    </div>

                    <div className="contacts__list">
                        <div className="contacts__phone-part">
                            <div className="contacts__phone">
                                <p className="item__title">Phone number</p>
                                <a className="item__property link" href="tel:">+975 17880790</a>
                            </div>
                            <div className="contacts__email">
                                <p className="item__title">Email</p>
                                <a className="item__property link" href="mailto:">Ngachang.cakeshop@gmail.com</a>
                            </div>
                        </div>

                        <div className="contacts__item">
                            <p className="item__title">Address</p>
                            <p className="item__property address">Gyelpozhing College, Kabesa, Thimphu, Bhutan</p>
                            <p className="item__title">Operating mode</p>
                            <p className="item__property">Mon - Sun : 10:00 - 22:00</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;