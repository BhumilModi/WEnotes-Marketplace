import { useRouter } from "next/dist/client/router"

const style = {
    wrapper: `flex-1 pt-[15px] pr-[20px] pb-[20px]`,
    content: ` flex flex-col pt-2`,
    heading: `flex justify-between`,
    headText: `text-[32px] font-font`,
    span: `h-[5px] w-[125px] bg-gradient-to-br from-[#0085FF] to-[#00FFC2] rounded-md`,
}

export default function _dbMain() {
    const router = useRouter()
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.heading}>

                </div>
                <button className="border-2 py-5 px-10">
                    open pdf
                </button>
            </div>
        </div>
    )
}