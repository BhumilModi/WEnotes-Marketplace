import searchIcon from '../public/images/search.png';
import Image from 'next/image'
import React, { useState } from "react";

const style = {
    header: `h-[70px] flex items-center border-b-[2px] pb-10px pl-[100px]`,
    searchBar: `h-[40px] w-[500px] flex rounded-3xl border-2 items-center border-[black]`,
    searchIcon: `ml-3 mt-2`,
    search: `w-[90%] font-[16px] focus:outline-none pl-[10px] px-1`,
    publish: `text-[22px] pl-[450px] pr-[50px] text-[#9A9A9A] hover:text-[#0085FF] cursor-pointer`,
    button: `h-[40px] w-[150px] flex justify-center items-center mr-[20px] bg-[#0085FF] py-[5px] px-[20px] rounded-3xl cursor-pointer`,
}

export default function Header() {
    const [data, setdata] = useState("loading");
    const [connected, setConnected] = useState(false);

    const accountChangeHandler = (account) => {
        setdata(account);
        setConnected(true);

    };

    const disconnectWallet = async () => {
        alert(`Already connected to Metamask wallet ${data}`)
    }

    const connectToWallet = async () => {
        if (window.ethereum) {

            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((res) => accountChangeHandler(res[0]));
        } else {
            alert("install metamask extension!!");
        }
    }

    return (
        <div className={style.header}>
            <div className={style.searchBar}>
                <div className={style.searchIcon}>
                    <Image src={searchIcon} className="icon" alt='Search' ></Image>
                </div>
                <input className={style.search} placeholder='Search Topic'></input>
            </div>
            <div className={style.publish}>
                Publish
            </div>
            {
                connected ? (
                    <disconnectWalletButton onClick={disconnectWallet} className={style.button}> {data.slice(0, 10)}...</disconnectWalletButton>
                ) : (
                    <connectWalletButton onClick={connectToWallet} className={style.button}>Connect Wallet</connectWalletButton>
                )
            }
        </div>
    )
}