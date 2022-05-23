import _homeMain from '../Components/main'

const style = {
  wrapper: `flex-1 pt-[15px] pb-[20px]`,
}

export default function MyApp() {
  return (
    <div className={style.wrapper}>
      <_homeMain />
    </div>
  )
}
