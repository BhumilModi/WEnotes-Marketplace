import _dbMain from "../../Components/dbMain"

const style = {
    wrapper: `flex-1 pt-[15px] pb-[20px]`,
}

export default function MyCollection() {
    return (
        <div className={style.wrapper}>
            <_dbMain></_dbMain>
        </div>
    )
}