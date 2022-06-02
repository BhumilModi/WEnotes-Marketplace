import HomeMain from '../components/main'

const style = {
  wrapper: `flex pt-[15px] pl-[60px] bg-red-100`,
}

export default function MyApp() {
  return (
    <div className={style.wrapper}>
      <HomeMain />
    </div>
  )
}
