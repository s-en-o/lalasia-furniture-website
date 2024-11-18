import Image from 'next/image'
import './page.scss'
import furniture from '@/images/furniture-banner-1.jpg'
import searchIcon from '@/images/icons/search.svg'
import icon1 from '@/images/icons/icon-1.svg'
import icon2 from '@/images/icons/icon-2.svg'
import icon3 from '@/images/icons/icon-3.svg'

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

            <section>
                <small>product</small>
                <h2>Our popular product</h2>
                <p>
                    Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                    dignissim placerat nisi, adipiscing mauris non purus
                    parturient.
                </p>
            </section>
        </main>
    )
}
