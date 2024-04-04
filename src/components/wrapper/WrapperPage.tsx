import Footer from "../layouts/Footer"
import Navbar from "../layouts/Navbar"

interface Props {
    children: React.ReactNode
}

export default function WrapperPage(props: Props) {
    return(
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    )
}