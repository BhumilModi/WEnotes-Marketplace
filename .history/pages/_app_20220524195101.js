import '../styles/globals.css'
import _sideBar from "../Components/sideBar"
import Header from '../Components/header';


const style = {
  wrapper: ` flex`,
  content: `flex-1 pt-[15px]`,
}

function MyApp({ Component, pageProps }) {
  return (
    <div className={style.wrapper}>
      <_sideBar></_sideBar>
      <div className={style.content}>
        <Header></Header>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
