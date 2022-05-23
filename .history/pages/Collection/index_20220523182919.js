import _collectionMain from "../../Components/collectionMain"
import _sideBar from "../../Components/sideBar"

const style = {
    wrapper: `flex-1 pt-[15px] pr-[20px] pb-[20px]`,
}

export default function MyCollection() {
    return (
        <div className={style.wrapper}>
            <_collectionMain></_collectionMain>
        </div>
    )
}