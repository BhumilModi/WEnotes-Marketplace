import _collectionMain from "../../Components/collectionMain"

const style = {
    wrapper: `flex-1 pt-[15px]  pb-[20px]`,
}

export default function MyCollection() {
    return (
        <div className={style.wrapper}>
            <_collectionMain></_collectionMain>
        </div>
    )
}