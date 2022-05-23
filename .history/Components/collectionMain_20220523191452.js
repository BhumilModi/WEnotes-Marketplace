import CollectionNotes from "./collectionCard"

const style = {
    wrapper: `flex-1 pt-[15px] pr-[20px] pb-[20px]`,
    content: `grid`
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
]

export default function _collectionMain() {
    return (
        <div className={style.wrapper}>
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