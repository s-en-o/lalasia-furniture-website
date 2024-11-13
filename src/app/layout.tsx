import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/app/scss/global.scss'

const eudoxus = localFont({
    src: './fonts/EudoxusSansGX.woff',
    variable: '--font-eudoxus-sans',
    weight: '100 900',
})

const eudoxus2 = localFont({
    src: './fonts/EudoxusSansGX.woff2',
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
                {children}
            </body>
        </html>
    )
}
