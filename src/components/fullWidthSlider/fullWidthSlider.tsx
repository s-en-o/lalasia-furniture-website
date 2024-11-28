import './fullwidthSlider.scss'
import slider1Image from '../../images/slider/1.jpg'

export default function FullWidthSlider() {
    return (
        <ul className="slider">
            <li
                className="slider__item"
                style={{ backgroundImage: `url(${slider1Image.src})` }}
            >
                <div className="slider__content">
                    <small className="slider__label">Discount</small>
                    <h2 className="slider__title">Ramadhan Sale Offer</h2>
                    <p className="slider__para">
                        Get 40% off for the first transaction on Lalasia
                    </p>
                </div>
            </li>
        </ul>
    )
}
