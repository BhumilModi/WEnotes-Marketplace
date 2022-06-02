import HomeMain from '../components/main'

const style = {
  wrapper: `flex pt-[15px] pl-[60px]`,
}

export default function MyApp() {
  return (
    <div className={style.wrapper}>
      <HomeMain />
    </div>
  )
}
