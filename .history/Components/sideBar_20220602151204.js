
import Image from "next/Image"
import { useRouter } from "next/router"
import HomeIcon from '@mui/icons-material/Home';
import ViewCarouselOutlinedIcon from '@mui/icons-material/ViewCarouselOutlined';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import logo from "../public/images/wenotes.svg"

const style = {
    wrapper: `h-screen w-[250px] border-r-[2px] pt-[5px]`,
    content: `flex flex-col justify-center items-center `,
    logo: `h-[40px] pt-[28px]`,
    navBar: ` pt-[15px]`,
    iconContainer: ` pr-4 pt-6 `,
    navItem: `flex text-[20px] pl-[45px] mt-6 cursor-pointer text-[#9A9A9A] hover:text-[#0085FF]`,
    text: `pt-6 `
}

export default function SideBar() {
    const router = useRouter()
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.logo}>
                    <Image src={logo} alt="logo" width="180" height="40" />
                </div>
            </div>
            <div className={style.navBar}>
                <div className={style.navItem} onClick={() => { router.push("/") }}>
                    <div className={style.iconContainer}>
                        <HomeIcon />
                    </div>
                    <a className={style.text}>Home</a>
                </div>
                <div className={style.navItem} onClick={() => { router.push("/Collection") }}>
                    <div className={style.iconContainer}>
                        <ViewCarouselOutlinedIcon />
                    </div>
                    <a className={style.text}>My Collection</a>
                </div>
                <div className={style.navItem} onClick={() => { router.push("/DashBoard/published") }}>
                    <div className={style.iconContainer}>
                        <DashboardRoundedIcon />
                    </div>
                    <a className={style.text}>Dashboard</a>
                </div>
            </div>
        </div>
    )
} 