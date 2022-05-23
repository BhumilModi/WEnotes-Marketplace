/* eslint-disable react/jsx-no-undef */
import HomeIcon from '@mui/icons-material/Home';
import ViewCarouselOutlinedIcon from '@mui/icons-material/ViewCarouselOutlined';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import { useRouter } from "next/router"
import logo from "../public/images/wenotes.svg"

const style = {
    wrapper: `w-[250px] border-r-[2px] pt-[5px] `,
    content: `flex flex-col justify-center items-center `,
    logo: `h-[50px] text-[32px] pt-[20px] font-font`,
    navBar: ` pt-[15px]`,
    iconContainer: ` pr-4 pt-6 `,
    navItem: `flex text-[20px] pl-[45px] mt-6 cursor-pointer text-[#9A9A9A] hover:text-[#0085FF]`,
    text: `pt-6 `
}

export default function _sideBar() {
    const router = useRouter()
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                {/* <div className={style.logo}>WeNotes</div> */}
                <Image src={logo} alt="logo" />
            </div>
            <div className={style.navBar}>
                <div className={style.navItem} onClick={() => { router.push("/") }}>
                    <div className={style.iconContainer}>
                        <HomeIcon />
                    </div>
                    <a className={style.text}>Home</a>
                </div>
                <div className={style.navItem} onClick={() => { router.push(redirect) }}>
                    <div className={style.iconContainer}>
                        <ViewCarouselOutlinedIcon />
                    </div>
                    <a className={style.text}>My Collection</a>
                </div>
                <div className={style.navItem} onClick={() => { router.push(redirect) }}>
                    <div className={style.iconContainer}>
                        <DashboardRoundedIcon />
                    </div>
                    <a className={style.text}>Dashboard</a>
                </div>
            </div>
        </div>
    )
} 