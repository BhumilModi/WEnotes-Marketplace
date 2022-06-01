import Image from 'next/image'

const style = {
    wrapper: `h-[200px] w-[800px] bg-[#EFEFEF] rounded-md flex p-4 mt-[5px] ml-[20px] flex-shrink-0 border-2  hover:border-2 border-[#EFEFEF] hover:border-[#0085FF] hover:ease-in-out hover:delay-150`,
    noteImg: `flex-1 h-[150px] w-[100px] object-contain`,
    detail: `flex flex-col w-[280px] ml-5 pr-5`,
    author: `text-[14px] text-[#9A9A9A]`,
    price: `text-[14px] mt-5`,
    request: `border-l-2 border-[black] pl-4 `,
}



export default function _dbNotes({ img, header, author, description, price, holder1, holder2, h1price, h2price }) {

    return (
        <div className={style.wrapper}>
            <Image src={img} className={style.noteImg} width="100" height="150" alt="note1"></Image>
            <div className={style.detail}>
                <div className="text-[20px] font-semibold">{header}</div>
                <div className={style.author}>Author: {author}</div>
                <div className="text-[12px] mt-2">{description}</div>
                <div className={style.price}>Selling Price: {price}</div>
            </div>
            <div className={style.request}>
                <div className="text-[20px] font-semibold">Current Holder</div>
                <div className="flex justify-between text-[18] w-[300px]">
                    <div>
                        {holder1.slice(0, 10)}
                    </div>
                    <div>
                        {h1price}
                    </div>
                </div>
            </div>
        </div>
    )
}