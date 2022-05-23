/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import note1 from '../assets/notes.png';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const style = {
    wrapper: `h-[250px] w-[500px] bg-[#F8F8F8] rounded-md flex p-4 mt-[5px] ml-[20px]`,
    noteImg: `flex-1 h-[180px] w-[100px] object-contain`,
    detail: `flex flex-col w-[300px] ml-5`,
    author: `text-[16px] text-[#9A9A9A]`,
    price: `text-[18px] mt-5`,
    more: `text-[16px] mt-7 ml-[150px] cursor-pointer`
}

export default function Notes() {
    return (
        <div className={style.wrapper}>
            <Image src={note1} className={style.noteImg} alt={note1}></Image>
            <div className={style.detail}>
                <div className="text-[24px]">Physics Notes</div>
                <div className={style.author}>Author: #ox73271021Mdsoa</div>
                <div className="text-[16px] mt-3">This are physics notes from chapter 1 of textbook class 12 Electromagnetism...</div>
                <div className={style.price}>Selling Price: 1.8 MAT</div>
                <div className={style.more}>View Details <ArrowForwardIosRoundedIcon className='text-[16px] pb-1' /></div>
            </div>
        </div>
    )
}