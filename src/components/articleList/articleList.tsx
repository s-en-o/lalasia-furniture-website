import Link from 'next/link'
import './articleList.scss'
import bg from '@/images/article-featured.jpg'
import article from '@/images/article.jpg'
import person from '@/images/person-1.png'
import Image from 'next/image'

const ArticleList = () => {
    return (
        <section className="article">
            <div className="article__top">
                <header className="article__header">
                    <small className="article__subtitle">Articles</small>
                    <h2 className="article__title">
                        The best furniture comes from Lalasia
                    </h2>
                    <p className="article__para">
                        Pellentesque etiam blandit in tincidunt at donec.
                    </p>
                </header>

                <ul className="article__featured">
                    <li
                        className="article__featured-item"
                        style={{ backgroundImage: `url(${bg.src})` }}
                    >
                        <Link
                            href={'/'}
                            className="article__featured-item-content"
                        >
                            <small className="article__featured-item-subtitle">
                                Tips and Trick
                            </small>
                            <h3 className="article__featured-item-title">
                                Create Cozy Dinning Room Vibes
                            </h3>
                            <p className="article__featured-item-para">
                                Decorating with neutrals brings balance to the
                                dining room...
                            </p>
                            <span className="article__featured-item-action">
                                Read More
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>

            <ul className="article__list">
                <li>
                    <Link href={'/'} className="article__list-item">
                        <Image
                            src={article}
                            alt="article"
                            className="article__list-item-image"
                        />
                        <div className="article__list-item-content">
                            <small className="article__list-item-category">
                                Tips and Trick
                            </small>
                            <h3 className="article__list-item-title">
                                6 ways to give your home minimalistic vibes
                            </h3>

                            <figure className="article__list-item-person">
                                <Image
                                    src={person}
                                    alt="Somename"
                                    className="article__list-item-photo"
                                />
                                <figcaption className="article__list-item-name">
                                    By Kim Gurameh
                                </figcaption>
                            </figure>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className="article__list-item">
                        <Image
                            src={article}
                            alt="article"
                            className="article__list-item-image"
                        />
                        <div className="article__list-item-content">
                            <small className="article__list-item-category">
                                Tips and Trick
                            </small>
                            <h3 className="article__list-item-title">
                                6 ways to give your home minimalistic vibes
                            </h3>

                            <figure className="article__list-item-person">
                                <Image
                                    src={person}
                                    alt="Somename"
                                    className="article__list-item-photo"
                                />
                                <figcaption className="article__list-item-name">
                                    By Kim Gurameh
                                </figcaption>
                            </figure>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className="article__list-item">
                        <Image
                            src={article}
                            alt="article"
                            className="article__list-item-image"
                        />
                        <div className="article__list-item-content">
                            <small className="article__list-item-category">
                                Tips and Trick
                            </small>
                            <h3 className="article__list-item-title">
                                6 ways to give your home minimalistic vibes
                            </h3>

                            <figure className="article__list-item-person">
                                <Image
                                    src={person}
                                    alt="Somename"
                                    className="article__list-item-photo"
                                />
                                <figcaption className="article__list-item-name">
                                    By Kim Gurameh
                                </figcaption>
                            </figure>
                        </div>
                    </Link>
                </li>
            </ul>
        </section>
    )
}

export default ArticleList
