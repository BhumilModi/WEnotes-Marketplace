
import _sideBar from "../Components/sideBar"

const style = {
    content: `w-screen h-screen flex`,
}

export default function Dashboard() {
    return (
        <div className={style.content}>
            <_sideBar></_sideBar>
            <div>Dashboard</div>
        </div>
    )
}