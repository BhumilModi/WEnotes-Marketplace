import CollectionNotes from "./collectionCard"

const style = {
    wrapper: `flex flex-col pt-[15px] overflow-y-scroll scrollbar-hide`,
    content: `grid grid-cols-2 gap-4`,
    heading: `flex justify-between`,
    headText: `text-[32px] font-font`,
    span: `h-[5px] w-[125px] bg-gradient-to-br from-[#0085FF] to-[#00FFC2] rounded-md`,
}

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

export default function _collectionMain() {
    return (
        <div className={style.wrapper}>
            <div className={style.heading}>
                <div className={style.headText}>Newly Published</div>
            </div>
            <span className={style.span}></span>
            <div className={style.content}>
                {
                    notes.map((note, index) => (
                        <CollectionNotes key={index} img={note.image} header={note.header} description={note.description} author={note.author} price={note.price}  ></CollectionNotes>
                    ))
                }
            </div>
        </div>
    )
}