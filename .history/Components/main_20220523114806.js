import Notes from "./noteCard"
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

const style = {
    wrapper: ` pl-[100px] pt-[20px]`,
    content: ` flex flex-col pt-2`,
    heading: `flex justify-between`,
    headText: `text-[32px] font-font`,
    span: `h-[5px] w-[125px] bg-gradient-to-br from-[#0085FF] to-[#00FFC2] rounded-md`,
    notes: `w-[1250px] mr-10 pb-5 pt-5`
}

export default function _homeMain() {
    return (
        <div className={style.wrapper}>
            <div className={style.content} >
                <div className={style.heading}>
                    <div className={style.headText}>Newly Published</div>
                    <div className="pr-20">
                        <KeyboardArrowLeftRoundedIcon className="text-[30px] mt-2 cursor-pointer text-[#9A9A9A] hover:text-[#000000]"></KeyboardArrowLeftRoundedIcon>
                        <KeyboardArrowRightRoundedIcon className="text-[30px] mt-2 cursor-pointer text-[#9A9A9A] hover:text-[#000000]"></KeyboardArrowRightRoundedIcon>
                    </div>
                </div>
                <span className={style.span}></span>

                <div className={style.notes}>
                    <div className="flex overflow-x-scroll scrollbar-hide">
                        <Notes></Notes>
                        <Notes></Notes>
                        <Notes></Notes>
                        <Notes></Notes>
                    </div>
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
                    <div className="flex overflow-x-scroll scrollbar-hide">
                        <Notes></Notes>
                        <Notes></Notes>
                        <Notes></Notes>
                        <Notes></Notes>
                    </div>
                </div>
            </div>
        </div>
    )
}