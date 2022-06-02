import '../styles/globals.css'
import SideBar from "../Components/sideBar"
import Header from '../Components/header';


const style = {
  wrapper: `flex`,
  content: `flex-1 pt-[15px]`,
}

function MyApp({ Component, pageProps }) {
  return (
    <div className={style.wrapper}>
      <div className="h-screen sticky top-0">
        <SideBar></SideBar>
      </div>
      <div className={style.content}>
        <Header></Header>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
