import Image from 'next/image'
import './page.scss'
import furniture from '@/images/furniture-banner-1.jpg'
import searchIcon from '@/images/icons/search.svg'
import icon1 from '@/images/icons/icon-1.svg'
import icon2 from '@/images/icons/icon-2.svg'
import icon3 from '@/images/icons/icon-3.svg'
import highlight1 from '@/images/highlight-1.jpg'
import highlight2 from '@/images/highlight-2.jpg'
import person1 from '@/images/person-1.png'
import star from '@/images/icons/star.svg'
import quote from '@/images/icons/quote-up.svg'
import ProductSlider from '@/components/productSlider/productSlider'
import Link from 'next/link'

export default function Home() {
    return (
        <main className="container">
            <header className="page__header">
                <h1 className="page__title">
                    Discover Furniture With High Quality Wood
                </h1>

                <p className="page__para">
                    Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                    dignissim placerat nisi, adipiscing mauris non. Purus
                    parturient viverra nunc, tortor sit laoreet. Quam tincidunt
                    aliquam adipiscing tempor.
                </p>
            </header>

            <div className="page__image">
                <div className="page__search">
                    <Image
                        src={searchIcon}
                        alt="search icon"
                        className="page__search-icon"
                    />

                    <input
                        type="text"
                        className="page__search-input"
                        placeholder="Ergonomic chair"
                    />

                    <button className="page__search-button">Search</button>
                </div>

                <Image
                    src={furniture}
                    alt="Furniture"
                    priority={true}
                    sizes="100vw"
                    className="page__image-item"
                />
            </div>

            <section className="benefit">
                <header className="benefit__header">
                    <div className="benefit__header-main">
                        <small className="benefit__subtitle">Benefits</small>
                        <h2 className="benefit__title">
                            Benefits when using our services
                        </h2>
                    </div>

                    <p className="benefit__para">
                        Pellentesque etiam blandit in tincidunt at donec. Eget
                        ipsum dignissim placerat nisi, adipiscing mauris non
                        purus parturient.
                    </p>
                </header>

                <ul className="benefit__list">
                    <li className="benefit__list-item">
                        <Image
                            src={icon1}
                            alt="icon 1"
                            className="benefit__list-icon"
                        />

                        <h3 className="benefit__list-header">Many Choices</h3>

                        <p className="benefit__list-para">
                            Pellentesque etiam blandit in tincidunt at donec.
                            Eget ipsum dignissim placerat nisi, adipiscing
                            mauris non.{' '}
                        </p>
                    </li>
                    <li className="benefit__list-item">
                        <Image
                            src={icon2}
                            alt="icon 2"
                            className="benefit__list-icon"
                        />

                        <h3 className="benefit__list-header">
                            Fast and On Time
                        </h3>

                        <p className="benefit__list-para">
                            Pellentesque etiam blandit in tincidunt at donec.
                            Eget ipsum dignissim placerat nisi, adipiscing
                            mauris non.{' '}
                        </p>
                    </li>
                    <li className="benefit__list-item">
                        <Image
                            src={icon3}
                            alt="icon 3"
                            className="benefit__list-icon"
                        />

                        <h3 className="benefit__list-header">
                            Affordable Price
                        </h3>

                        <p className="benefit__list-para">
                            Pellentesque etiam blandit in tincidunt at donec.
                            Eget ipsum dignissim placerat nisi, adipiscing
                            mauris non.{' '}
                        </p>
                    </li>
                </ul>
            </section>

            <ProductSlider />

            <section className="about">
                <header className="about__header">
                    <small className="about__subtitle">Our Product</small>
                    <h2 className="about__title">
                        Crafted by talented and high quality material
                    </h2>

                    <p className="about__para">
                        Pellentesque etiam blandit in tincidunt at donec. Eget
                        ipsum dignissim placerat nisi, adipiscing mauris non
                        purus parturient.
                    </p>

                    <Link href="/" className="about__button">
                        Learn more
                    </Link>

                    <Image
                        src={highlight1}
                        alt="Highlight 1"
                        className="about__image"
                    />
                </header>

                <div className="about__info">
                    <div className="about__info-detail">
                        <em>20+</em>
                        <p>Years Experience</p>
                    </div>

                    <div className="about__info-detail">
                        <em>483</em>
                        <p>Happy Client</p>
                    </div>

                    <div className="about__info-detail">
                        <em>150+</em>
                        <p>Project Finished</p>
                    </div>

                    <Image
                        src={highlight2}
                        alt="Highlight 2"
                        className="about__info-image"
                    />
                </div>
            </section>

            <section className="testimonial">
                <header className="testimonial__header">
                    <small className="testimonial__subtitle">
                        Testimonials
                    </small>
                    <h2 className="testimonial__title">
                        What our customer say{' '}
                    </h2>
                    <p className="testimonial__para">
                        Pellentesque etiam blandit in tincidunt at donec. Eget
                        ipsum dignissim placerat nisi, adipiscing mauris non
                        purus parturient.
                    </p>
                </header>

                <ul className="testimonial__list">
                    <li className="testimonial__list-item">
                        <Image
                            src={quote}
                            alt="quote icon"
                            className="testimonial__list-image"
                        />

                        <blockquote className="testimonial__quote">
                            Pellentesque etiam blandit in tincidunt at donec.
                            Eget ipsum dignissim placerat nisi, adipiscing
                            mauris non.
                        </blockquote>

                        <figure className="testimonial__person">
                            <Image
                                src={person1}
                                alt="Janne Cooper"
                                className="testimonial__person-photo"
                            />

                            <figcaption className="testimonial__person-name">
                                Janne Cooper
                            </figcaption>
                        </figure>

                        <div className="testimonial__rating">
                            <Image
                                src={star}
                                alt="Janne Cooper"
                                className="testimonial__rating-icon"
                            />

                            <span className="testimonial__rating-number">
                                4.3
                            </span>
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    )
}
