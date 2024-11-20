import Image from 'next/image'
import prod1 from '@/images/products/prod-1.jpg'
import prod2 from '@/images/products/prod-2.jpg'
import prod3 from '@/images/products/prod-3.jpg'
import prod4 from '@/images/products/prod-4.jpg'
import './productSlider.scss'

const ProductSlider = () => {
    return (
        <section className="product">
            <header className="product__header">
                <small className="product__subtitle">Product</small>
                <h2 className="product__title">Our popular product</h2>
                <p className="product__para">
                    Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                    dignissim placerat nisi, adipiscing mauris non purus
                    parturient.
                </p>
            </header>

            <ul className="product__list">
                <li className="product__list-item">
                    <Image
                        src={prod1}
                        alt="product 1"
                        className="product__list-image"
                    />
                    <small className="product__list-category">Chair</small>

                    <h3 className="product__list-title">
                        White Aesthetic Chair
                    </h3>
                    <p className="product__list-para">
                        Combination of wood and wool
                    </p>

                    <span className="product__list-price">$63.47</span>
                </li>
                <li className="product__list-item">
                    <Image
                        src={prod2}
                        alt="product 2"
                        className="product__list-image"
                    />
                    <small className="product__list-category">Lamp</small>

                    <h3 className="product__list-title">Bardono Smart Lamp</h3>
                    <p className="product__list-para">
                        Easy to use with bluetooth connection
                    </p>

                    <span className="product__list-price">$62.23</span>
                </li>
                <li className="product__list-item">
                    <Image
                        src={prod3}
                        alt="product 3"
                        className="product__list-image"
                    />
                    <small className="product__list-category">Sofa</small>

                    <h3 className="product__list-title">Sofa Empuk Banget</h3>
                    <p className="product__list-para">
                        Using kapuk randu material
                    </p>

                    <span className="product__list-price">$58.39</span>
                </li>
                <li className="product__list-item">
                    <Image
                        src={prod4}
                        alt="product 4"
                        className="product__list-image"
                    />
                    <small className="product__list-category">
                        Living Room
                    </small>

                    <h3 className="product__list-title">Wooden Bookshelf</h3>
                    <p className="product__list-para">
                        Combination of wood and wool
                    </p>

                    <span className="product__list-price">$62.23</span>
                </li>
            </ul>
        </section>
    )
}

export default ProductSlider
