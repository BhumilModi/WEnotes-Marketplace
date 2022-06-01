import { useRouter } from "next/dist/client/router"

const style = {
    wrapper: `flex-1 pt-[15px] pr-[20px] pb-[20px]`,
    content: ` flex flex-col pt-2`,
    heading: `flex justify-between`,
    headText: `text-[32px] font-font`,
    span: `h-[5px] w-[125px] bg-gradient-to-br from-[#0085FF] to-[#00FFC2] rounded-md`,
    headerText: ``,
    main: `flex-1 pt-5`,
    header: `flex flex-row text-[20px]`
}

export default function _dbMain() {
    const router = useRouter()
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.heading}>
                    <div className={style.headText}>DashBoard</div>
                </div>
                <span className={style.span}></span>
                <div className={style.main}>
                    <div className={style.header}>
                        <div className={style.headerText}>
                            Published
                        </div>
                        <div className={style.headerText}>
                            Bought
                        </div>
                    </div>
                    <div className={style.list}>

                    </div>
                </div>
            </div>
        </div>
    )
}