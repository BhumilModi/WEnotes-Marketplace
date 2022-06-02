import HomeMain from '../components/main'

const style = {
  wrapper: `flex pt-[15px] pl-[60px] bg-red-400 w-[1400px]`,
}

export default function MyApp() {
  return (
    <div className={style.wrapper}>
      <HomeMain />
    </div>
  )
}
