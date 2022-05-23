import Header from './header';


const style = {
    wrapper: `flex-1 pt-[15px] pr-[20px] pb-[20px]`,
}

export default function _collectionMain() {
    return (
        <div className={style.wrapper}>
            <Header />
            <div>MyCollection</div>
        </div>
    )
}