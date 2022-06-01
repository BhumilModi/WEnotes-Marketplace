import Image from 'next/image'

const style = {
    wrapper: `h-[200px] w-[400px] bg-[#EFEFEF] rounded-md flex p-4 mt-[5px] ml-[20px] flex-shrink-0 border-2  hover:border-2 border-[#EFEFEF] hover:border-[#0085FF] hover:ease-in-out hover:delay-150`,
    noteImg: `flex-1 h-[150px] w-[100px] object-contain`,
    detail: `flex flex-col w-[200px] ml-5`,
    author: `text-[12px] text-[#9A9A9A]`,
    price: `text-[14px] mt-5`,
}



export default function _dbNotes({ img, header, author, description, price }) {

    return (
        <div className={style.wrapper}>
            <Image src={img} className={style.noteImg} width="100" height="150" alt="note1"></Image>
            <div className={style.detail}>
                <div className="text-[20px] font-semibold">{header}</div>
                <div className={style.author}>Author: {author}</div>
                <div className="text-[12px] mt-3">{description}</div>
                <div className={style.price}>Selling Price: {price}</div>
            </div>
        </div>
    )
}