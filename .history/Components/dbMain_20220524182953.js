import { useRouter } from "next/dist/client/router"

const style = {
    wrapper: `flex-1 pt-[15px] pr-[20px] pb-[20px]`,
}

export default function _dbMain() {
    const router = useRouter()
    return (
        <div className={style.wrapper}>
            <button className="border-2 py-5 px-10" onClick={router.push("/pdf")}>
                open pdf
            </button>
        </div>
    )
}