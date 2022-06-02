import _dbPublished from "../../Components/dbPublished"

const style = {
    wrapper: `flex pt-[15px] pl-[80px]`,
}

export default function MyCollection() {
    return (
        <div className={style.wrapper}>
            <_dbPublished></_dbPublished>
        </div>
    )
}