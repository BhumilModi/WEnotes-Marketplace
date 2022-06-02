import '../styles/globals.css'
import SideBar from "../components/sideBar"
import Header from '../components/header';


const style = {
  wrapper: `flex`,
  content: `w-[1200px] pt-[15px]`,
}

function MyApp({ Component, pageProps }) {
  return (
    <div className={style.wrapper}>
      <div className="h-screen w-[250px] sticky top-0">
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
