import Image from 'next/image'

const style = {
    wrapper: `h-[250px] w-[500px] bg-[#EFEFEF] rounded-md flex p-4 mt-[5px] ml-[20px] flex-shrink-0 border-2  hover:border-2 border-[#EFEFEF] hover:border-[#0085FF] hover:ease-in-out hover:delay-150`,
    noteImg: `flex-1 h-[180px] w-[100px] object-contain`,
    detail: `flex flex-col w-[300px] ml-5`,
    author: `text-[16px] text-[#9A9A9A]`,
    price: `text-[18px] mt-5`,
    button: `text-[16px] mt-4 ml-[150px] cursor-pointer bg-[#0085FF] py-[5px] px-[10px] rounded-3xl`
}



export default function CollectionNotes({ img, header, author, description, price }) {

    return (
        <div className={style.wrapper}>
            <Image src={img} className={style.noteImg} width="150" height="180" alt="note1"></Image>
            <div className={style.detail}>
                <div className="text-[24px] font-semibold">{header}</div>
                <div className={style.author}>Author: {author}</div>
                <div className="text-[16px] mt-3">{description}</div>
                <div className={style.price}>Selling Price: {price}</div>
                <button className={style.button}>Sell</button>
            </div>
        </div>
    )
}