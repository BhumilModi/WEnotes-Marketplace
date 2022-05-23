import _sideBar from "../Components/sideBar"
import Home from "../Components/home"

const style = {
  content: `w-screen h-screen flex`,
}

export default function MyApp() {
  return (
    <div className={style.content}>
      {/* <_sideBar></_sideBar> */}
      <Home></Home>
    </div>
  )
}
