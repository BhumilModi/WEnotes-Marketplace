import _dbBought from "../../Components/dbBought"

const style = {
    wrapper: `flex pt-[15px] pl-[80px]`,
}

export default function MyCollection() {
    return (
        <div className={style.wrapper}>
            <_dbBought></_dbBought>
        </div>
    )
}