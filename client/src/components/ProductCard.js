import React from "react";
import "../css/ProductCard.css";

function ProductCard(props) {
    const dessertOfTheDayId = props.dessertOfTheDayId;

    function isCartView() {
        if (props.className === "cart-view") {
            return true;
        }
    }

    function isSpecialtView() {
        if (props.className === "special-view") {
            return true;
        }
    }

    function getTemplate() {
        if (isCartView()) {
            return cartTemplate;
        }
        else if (isSpecialtView()) {
            return dessertOfTheDayTemplate;
        }
        return mainTemplate;
    }

    function countPrice(price, numberOfItems) {
        return price * numberOfItems;
    }

    // function isSpecialItem(id) {
    //     if (id === dessertOfTheDayId) {
    //         return true;
    //     }
    // }

    function countDessertOfTheDayPrice(id, price) {
        let discount = 0.1;
        if (id === dessertOfTheDayId) {
            return price * (1 - discount);
        }
        return price;
    }

    const dessertOfTheDayPrice = countDessertOfTheDayPrice(props.id, props.price);

    function importAll(r) {
        let images = {};
        r.keys().map(item => {
            images[item.replace('./', '')] = r(item);
            return item;
        });
        return images;
    }

    const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg|webp)$/));

    const mainTemplate = (
        <div className="card__container">
            <div className="card__main">
                <div className="card__img-wrapper">
                    <img className="card__img" src={images[props.img]} alt="product" />
                </div>
                <div className="card__text">
                    <div className="card__title">{props.name}</div>
                    <div className="card__description">{props.description}</div>
                </div>
            </div>

        </div>
    );

    const cartTemplate = (
        <div className="card__container cart-view">
            <button className="card__delete-btn">
                <span className="material-symbols-outlined delete-icon" onClick={props.deleteFromCart}>
                    close
                </span>
            </button>
            <div className="card__img-wrapper cart-view">
                <img className="card__img cart-view" src={images[props.img]} alt="product" />
            </div>

            <div className="card__main cart-view">
                <div className="card__text cart-view">
                    <div className="card__title">{props.name}</div>
                    <div className="card__description cart-view">{props.description}</div>
                </div>

                <div className="card__footer cart-view">
                    <div className="card__counter">
                        <div className="counter__container">
                            <button className="counter__minus" onClick={props.handleDecreaseQuantity}>-</button>
                            <div className="counter__number">{props.quantity}</div>
                            <button className="counter__plus" onClick={props.handleIncreaseQuantity}>+</button>
                        </div>
                    </div>
                    <div className="card__prices cart-view">
                        <div className="card__price">{countPrice(dessertOfTheDayPrice, props.quantity)} ₽</div>
                        {/* <p className="card__price-formula">{props.quantity} шт. x {props.price} ₽</p> */}
                    </div>

                    {/* <div className="button card__submit cart-view">В корзину</div> */}
                </div>
            </div>
        </div>
    );

    const dessertOfTheDayTemplate = (
        <div className="card__container special-view">
            <div className="card__img-wrapper special-view">
                <img className="card__img special-view" src={images[props.img]} alt="product" />
            </div>

            <div className="card__text-part">
                <div className="card__text">
                    <div className="card__title">{props.name}</div>
                    <div className="card__description">{props.description}</div>
                </div>

                <div className="card__footer">
                    <div className="card__prices special-view">
                        <div className="card__old-price special-view">{props.price} ₽</div>
                        {/* <div className="card__new-price">{dessertOfTheDayPrice} ₽</div> */}
                    </div>
                    {/* <div className="btn card__submit" onClick={() => props.onClick()}>В корзину</div> */}
                </div>
            </div>
        </div>
    );

    return (
        <div className={"card" + (
            isCartView() ? " cart-view"
                : isSpecialtView() ? " special-view"
                    : "")}
        >
            {getTemplate()}
        </div>
    );
}

export default ProductCard;