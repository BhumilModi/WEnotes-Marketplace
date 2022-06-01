import { useRouter } from "next/dist/client/router"
import _dbNotes from "./dblistCard"

const notes = [
    {
        image: "/images/notes.png",
        header: "Physics Notes",
        author: "Author: #ox73271021Mdsoa",
        description: "This are physics notes from chapter 1 of textbook class 12 Electromagnetism...",
        price: "1.8 MAT",
    },
    {
        image: "/images/notes.png",
        header: "Physics Notes",
        author: "Author: #ox73271021Mdsoa",
        description: "This are physics notes from chapter 1 of textbook class 12 Electromagnetism...",
        price: "1.8 MAT",
    },
    {
        image: "/images/notes.png",
        header: "Physics Notes",
        author: "Author: #ox73271021Mdsoa",
        description: "This are physics notes from chapter 1 of textbook class 12 Electromagnetism...",
        price: "1.8 MAT",
    },
    {
        image: "/images/notes.png",
        header: "Physics Notes",
        author: "#ox73271021Mdsoa",
        description: "This are physics notes from chapter 1 of textbook class 12 Electromagnetism...",
        price: "1.8 MAT",
    },
    {
        image: "/images/notes.png",
        header: "Physics Notes",
        author: "#ox73271021Mdsoa",
        description: "This are physics notes from chapter 1 of textbook class 12 Electromagnetism...",
        price: "1.8 MAT",
    },
    {
        image: "/images/notes.png",
        header: "Physics Notes",
        author: "#ox73271021Mdsoa",
        description: "This are physics notes from chapter 1 of textbook class 12 Electromagnetism...",
        price: "1.8 MAT",
    },
    {
        image: "/images/notes.png",
        header: "Physics Notes",
        author: "#ox73271021Mdsoa",
        description: "This are physics notes from chapter 1 of textbook class 12 Electromagnetism...",
        price: "1.8 MAT",
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
    listitem: `py-5`
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
                        <div className={style.listitem}>
                            {
                                notes.map((note, index) => (
                                    <_dbNotes key={index} img={note.image} header={note.header} description={note.description} author={note.author} price={note.price}  ></_dbNotes>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}