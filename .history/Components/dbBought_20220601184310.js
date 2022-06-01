import { useRouter } from "next/dist/client/router"
import BoughtNotes from "./boughtCard"

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
        request1: "0x387fD6B74E866D129356A3DdBd480939051F264f",
        request2: "0x387fD6B74E866D129356A3DdBd480939051F264f",
        r1price: "1.8 MAT",
        r2price: "1.4MAT",
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
        request1: "0x387fD6B74E866D129356A3DdBd480939051F264f",
        request2: "0x387fD6B74E866D129356A3DdBd480939051F264f",
        r1price: "1.8 MAT",
        r2price: "1.4MAT",
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
        request1: "0x387fD6B74E866D129356A3DdBd480939051F264f",
        request2: "0x387fD6B74E866D129356A3DdBd480939051F264f",
        r1price: "1.8 MAT",
        r2price: "1.4MAT",
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
        h2price: "",
        request1: "0x387fD6B74E866D129356A3DdBd480939051F264f",
        request2: "0x387fD6B74E866D129356A3DdBd480939051F264f",
        r1price: "1.8 MAT",
        r2price: "1.4MAT",
    },
]

const style = {
    wrapper: `flex-1 pt-[15px] pr-[20px] pb-[20px]`,
    content: ` flex flex-col`,
    main: `flex-1`,
    header: `flex flex-row pb-2 border-b-2`,
    headerText: `mx-5 text-[24px] text-[#0085FF] cursor-pointer border-b-[4px] border-[#0085FF] pb-1`,
    headerText2: `mx-5 text-[24px] text-[#9A9A9A] hover:text-[#0085FF] cursor-pointer`,
    list: `flex flex-col`,
    item: `pt-3`
}

export default function _dbPublished() {
    const router = useRouter()
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.main}>
                    <div className={style.header}>
                        <div className={style.headerText2} onClick={() => { router.push("/DashBoard/published") }}>
                            Published
                        </div>
                        <div className={style.headerText} onClick={() => { router.push("/DashBoard/bought") }}>
                            Bought
                        </div>
                    </div>
                    <div className={style.list}>
                        {
                            notes.map((note, index) => (
                                <div key={index} className={style.item}>
                                    <BoughtNotes img={note.image} header={note.header} description={note.description} author={note.author} price={note.price} request1={note.request1} request2={note.request2} r1price={note.r1price} r2price={note.r2price}></BoughtNotes>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}