import _sideBar from "../Components/sideBar"
import Home from "../Components/home"
import Header from '../Components/header';
import _homeMain from '../Components/main'

const style = {
  wrapper: `flex-1 pt-[15px] pr-[20px] pb-[20px]`,
}

export default function MyApp() {
  return (
    <div className={style.wrapper}>
      <Header />
      <_homeMain />
    </div>
  )
}
