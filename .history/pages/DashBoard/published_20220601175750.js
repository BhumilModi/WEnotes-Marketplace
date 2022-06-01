import _dbMain from "../../Components/dbMain"

const style = {
    wrapper: `flex pt-[15px] pl-[80px]`,
}

export default function MyCollection() {
    return (
        <div className={style.wrapper}>
            <_dbMain></_dbMain>
        </div>
    )
}