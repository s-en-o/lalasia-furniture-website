import logo from '@/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__top">
                    <Image src={logo} alt="logo" className="footer__logo" />

                    <p className="footer__para">
                        Lalasia is digital agency that help you make better
                        experience iaculis cras in.
                    </p>
                </div>

                <nav className="footer__links">
                    <div className="footer__item">
                        <h3 className="footer__item-header">Products</h3>
                        <ul className="footer__item-list">
                            <li>
                                <Link href={'/'}>Link</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Link</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Link</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Link</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__item">
                        <h3 className="footer__item-header">Services</h3>
                        <ul className="footer__item-list">
                            <li>
                                <Link href={'/'}>Link</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Link</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Link</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Link</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__item">
                        <h3 className="footer__item-header">Follow us</h3>
                        <ul className="footer__item-list">
                            <li>
                                <Link href={'/'}>Link</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Link</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Link</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Link</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
