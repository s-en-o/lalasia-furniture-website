import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/scss/global.scss'
import Nav from '@/components/nav/nav'
import Footer from '@/components/footer/Footer'

const eudoxus = localFont({
    src: '../fonts/EudoxusSansGX.woff',
    variable: '--font-eudoxus-sans',
    weight: '100 900',
})

const eudoxus2 = localFont({
    src: '../fonts/EudoxusSansGX.woff2',
    variable: '--font-eudoxus-sans-2',
    weight: '100 900',
})

export const metadata: Metadata = {
    title: 'Lalasia',
    description:
        'Looking for your next furniture, look no further. We have various range of quality furniture.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${eudoxus.variable} ${eudoxus2.variable}`}>
                <Nav />

                {children}

                <Footer />
            </body>
        </html>
    )
}
