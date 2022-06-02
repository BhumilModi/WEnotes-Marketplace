import searchIcon from '../public/images/search.png';
import Image from 'next/image'
import React, { useEffect, useState } from "react";


const style = {
    header: `h-[70px] flex items-center border-b-[2px] pb-10px pl-[70px] sticky top-0 z-[999] bg-[white]`,
    searchBar: `h-[40px] w-[500px] flex rounded-3xl border-2 items-center border-[black]`,
    searchIcon: `ml-3 mt-2`,
    search: `w-[90%] font-[16px] focus:outline-none pl-[10px] px-1`,
    publish: `text-[22px] pl-[450px] pr-[50px] text-[#9A9A9A] hover:text-[#0085FF] cursor-pointer`,
    button: `h-[40px] w-[150px] flex justify-center items-center mr-[20px] bg-[#0085FF] py-[5px] px-[20px] rounded-3xl `,
    id: `h-[40px] w-[150px] flex justify-center items-center mr-[20px] bg-[#ffffff] border-2 border-[#0085FF] py-[5px] px-[20px] rounded-3xl`,
}

export default function Header() {
    const [data, setdata] = useState("0");
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', function (res) {
                setdata(res[0]);
                setConnected(true);
            })
        } else {
            setConnected(false);
            setdata("0");
        }
    }, [])


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
                .then((res) => {
                    setConnected(true)
                    setdata(res[0])
                });
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
                    <button onClick={disconnectWallet} className={style.id}> {data.slice(0, 10)}...</button>
                ) : (
                    <button onClick={connectToWallet} className={style.button}>Connect Wallet</button>
                )
            }
        </div>
    )
}