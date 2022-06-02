import { useState } from "react";
import Notes from "./noteCard"
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const style = {
    wrapper: `  pt-[20px] w-[1150px]`,
    content: ` flex flex-col pt-2`,
    heading: `flex justify-between`,
    headText: `text-[32px] font-font`,
    span: `h-[5px] w-[125px] bg-gradient-to-br from-[#0085FF] to-[#00FFC2] rounded-md`,
    notes: `w-[1100px] pb-5 pt-5`
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

export default function HomeMain() {
    const [sliderRef1, setSliderRef1] = useState(null)
    const [sliderRef2, setSliderRef2] = useState(null)

    const sliderSettings = {
        arrows: false,
        slidesToShow: 2.1,
        slidesToScroll: 1,
        infinite: false,
    }

    return (
        <div className={style.wrapper}>
            <div className={style.content} >
                <div className={style.heading}>
                    <div className={style.headText}>Newly Published</div>
                    <div className="pr-[15px] content">
                        <button className="text-[30px] mt-2 text-[#9A9A9A] hover:text-[#000000]" onClick={sliderRef1?.slickPrev}>
                            <KeyboardArrowLeftRoundedIcon ></KeyboardArrowLeftRoundedIcon>
                        </button>
                        <button className="text-[30px] mt-2 text-[#9A9A9A] hover:text-[#000000]" onClick={sliderRef1?.slickNext}>
                            <KeyboardArrowRightRoundedIcon ></KeyboardArrowRightRoundedIcon>
                        </button>
                    </div>
                </div>
                <span className={style.span}></span>

                <div className={style.notes}>
                    <Slider {...sliderSettings} ref={setSliderRef1}>
                        {
                            notes.map((note, index) => (
                                <Notes key={index} img={note.image} header={note.header} description={note.description} author={note.author} price={note.price}  ></Notes>
                            ))
                        }
                    </Slider>
                </div>
                <div className={style.heading}>
                    <div className={style.headText}>Best Seller</div>
                    <div className="pr-[25px] content">
                        <button className="text-[30px] mt-2 text-[#9A9A9A] hover:text-[#000000]" onClick={sliderRef2?.slickPrev}>
                            <KeyboardArrowLeftRoundedIcon></KeyboardArrowLeftRoundedIcon>
                        </button>
                        <button className="text-[30px] mt-2 text-[#9A9A9A] hover:text-[#000000]" onClick={sliderRef2?.slickNext}>
                            <KeyboardArrowRightRoundedIcon ></KeyboardArrowRightRoundedIcon>
                        </button>
                    </div>
                </div>
                <span className={style.span}></span>
                <div className={style.notes}>
                    <Slider {...sliderSettings} ref={setSliderRef2}>
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