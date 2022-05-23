import { useState } from "react";
import Notes from "./noteCard"
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const style = {
    wrapper: ` pl-[100px] pt-[20px]`,
    content: ` flex flex-col pt-2`,
    heading: `flex justify-between`,
    headText: `text-[32px] font-font`,
    span: `h-[5px] w-[125px] bg-gradient-to-br from-[#0085FF] to-[#00FFC2] rounded-md`,
    notes: `w-[1250px] pb-5 pt-5`
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

export default function _homeMain() {
    const [sliderRef, setSliderRef] = useState(null)

    const sliderSettings = {
        arrows: false,
        slidesToShow: 2.3,
        slidesToScroll: 1,
        infinite: false,
    }

    return (
        <div className={style.wrapper}>
            <div className={style.content} >
                <div className={style.heading}>
                    <div className={style.headText}>Newly Published</div>
                    <div className="pr-20 content">
                        <KeyboardArrowLeftRoundedIcon className="text-[30px] mt-2 cursor-pointer text-[#9A9A9A] hover:text-[#000000]" onCLick={sliderRef?.slickPrev}></KeyboardArrowLeftRoundedIcon>
                        <KeyboardArrowRightRoundedIcon className="text-[30px] mt-2 cursor-pointer text-[#9A9A9A] hover:text-[#000000]" onCLick={sliderRef?.slickNext}></KeyboardArrowRightRoundedIcon>
                    </div>
                </div>
                <span className={style.span}></span>

                <div className={style.notes}>
                    <Slider {...sliderSettings} ref={setSliderRef}>
                        {
                            notes.map((note, index) => (
                                <Notes key={index} img={note.image} header={note.header} description={note.description} author={note.author} price={note.price}  ></Notes>
                            ))
                        }
                    </Slider>
                </div>
                <div className={style.heading}>
                    <div className={style.headText}>Best Seller</div>
                    <div className="pr-20">
                        <KeyboardArrowLeftRoundedIcon className="text-[30px] mt-2 cursor-pointer text-[#9A9A9A] hover:text-[#000000]"></KeyboardArrowLeftRoundedIcon>
                        <KeyboardArrowRightRoundedIcon className="text-[30px] mt-2 cursor-pointer text-[#9A9A9A] hover:text-[#000000]"></KeyboardArrowRightRoundedIcon>
                    </div>
                </div>
                <span className={style.span}></span>
                <div className={style.notes}>
                    <Slider {...sliderSettings} ref={setSliderRef}>
                        {
                            notes.map((note, index) => (
                                <Notes key={index} img={note.image} header={note.header} description={note.description} author={note.author} price={note.price}  ></Notes>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}