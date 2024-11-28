import FullWidthSlider from '@/components/fullWidthSlider/fullWidthSlider'
import PageHeader from '@/components/pageHeader/pageHeader'

export default function Products() {
    return (
        <>
            <section className="container">
                <PageHeader
                    title="Products"
                    para="We display products based on the latest products we have, if you want
to see our old products please enter the name of the item"
                />
            </section>

            <FullWidthSlider />
        </>
    )
}
