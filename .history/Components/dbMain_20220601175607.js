import { useRouter } from "next/dist/client/router"
import _dbNotes from "./dblistCard"

const notes = [
    {
        image: "/images/notes.png",
        header: "Physics Notes",
        author: "Author: #ox73271021Mdsoa",
        description: "This are physics notes from chapter 1 of textbook class 12 Electromagnetism...",
        price: "1.8 MAT",
        holder1: "none",
        holder2: "none",
        h1price: "",
        h2price: "",
    },
    {
        image: "/images/notes.png",
        header: "Physics Notes",
        author: "Author: #ox73271021Mdsoa",
        description: "This are physics notes from chapter 1 of textbook class 12 Electromagnetism...",
        price: "1.8 MAT",
        holder1: "0x387fD6B74E866D129356A3DdBd480939051F264f",
        holder2: "0xb08e6e59fe4eaF71f80d538d313157eAEc2e589f",
        h1price: "1.8 MAT",
        h2price: "1.4 MAT",
    },
    {
        image: "/images/notes.png",
        header: "Physics Notes",
        author: "Author: #ox73271021Mdsoa",
        description: "This are physics notes from chapter 1 of textbook class 12 Electromagnetism...",
        price: "1.8 MAT",
        holder1: "0x387fD6B74E866D129356A3DdBd480939051F264f",
        holder2: "0xb08e6e59fe4eaF71f80d538d313157eAEc2e589f",
        h1price: "1.8 MAT",
        h2price: "1.4 MAT",
    },
    {
        image: "/images/notes.png",
        header: "Physics Notes",
        author: "#ox73271021Mdsoa",
        description: "This are physics notes from chapter 1 of textbook class 12 Electromagnetism...",
        price: "1.8 MAT",
        holder1: "none",
        holder2: "none",
        h1price: "",
        h2price: ""
    },
]

const style = {
    wrapper: `flex-1 pt-[15px] pr-[20px] pb-[20px]`,
    content: ` flex flex-col pt-2`,
    heading: `flex justify-between`,
    headText: `text-[32px] font-font`,
    span: `h-[5px] w-[125px] bg-gradient-to-br from-[#0085FF] to-[#00FFC2] rounded-md`,
    main: `flex-1 pt-5`,
    header: `flex flex-row pb-2 border-b-2`,
    headerText: `px-5 text-[20px] text-[#9A9A9A] hover:text-[#0085FF] cursor-pointer`,
    list: `flex flex-col`,
    item: `pt-3`
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
                        {
                            notes.map((note, index) => (
                                <div key={index} className={style.item}>
                                    <_dbNotes img={note.image} header={note.header} description={note.description} author={note.author} price={note.price} holder1={note.holder1} holder2={note.holder2} h1price={note.h1price} h2price={note.h2price}></_dbNotes>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}