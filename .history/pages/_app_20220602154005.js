import '../styles/globals.css'
import SideBar from "../components/sideBar"
import Header from '../components/header';


const style = {
  wrapper: `flex w-[1200px]`,
  content: `flex-grow pt-[15px]`,
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
