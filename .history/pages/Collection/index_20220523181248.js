
import _sideBar from "../../Components/sideBar"

const style = {
    content: `w-screen h-screen flex`,
}

export default function MyCollection() {
    return (
        <div className={style.content}>
            <_sideBar></_sideBar>
            <div>MyCollection</div>
        </div>
    )
}