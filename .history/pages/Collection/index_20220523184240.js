import _collectionMain from "../../Components/collectionMain"

const style = {
    wrapper: `flex pt-[15px] pl-[80px]`,
}

export default function MyCollection() {
    return (
        <div className={style.wrapper}>
            <_collectionMain></_collectionMain>
        </div>
    )
}