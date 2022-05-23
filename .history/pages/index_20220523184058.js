import _homeMain from '../Components/main'

const style = {
  wrapper: `flex pt-[15px] pb-[20px]`,
}

export default function MyApp() {
  return (
    <div className={style.wrapper}>
      <_homeMain />
    </div>
  )
}
