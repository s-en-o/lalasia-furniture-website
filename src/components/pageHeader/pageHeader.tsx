import './pageHeader.scss'

export default function PageHeader({
    title,
    para,
}: {
    title: string
    para: string
}) {
    return (
        <header className="page__header">
            <h1 className="page__title">{title}</h1>

            <p className="page__para">{para}</p>
        </header>
    )
}
