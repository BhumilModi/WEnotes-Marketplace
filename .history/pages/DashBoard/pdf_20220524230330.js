import _pdfReader from "../../Components/pdfReader"
import test from "../../public/1.pdf"

const style = {
    wrapper: `flex pt-[15px] pl-[80px]`,
}

export default function MyCollection() {
    return (
        <div className={style.wrapper}>
            <_pdfReader pdf={test} />
        </div>
    )
}