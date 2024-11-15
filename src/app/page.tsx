import Image from 'next/image'
import './page.scss'
import furniture from '@/images/furniture-banner-1.jpg'
import searchIcon from '@/images/icons/search.svg'

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

                    <input type="text" className="page__search-input" />

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
        </main>
    )
}
