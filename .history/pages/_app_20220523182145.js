import '../styles/globals.css'
import _sideBar from "../Components/sideBar"

function MyApp({ Component, pageProps }) {
  return (
    <div className={style.content}>
      <_sideBar></_sideBar>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
