'use client'
import styles from "./styles.module.css"
import { IoSearchSharp } from "react-icons/io5";
import { FaEthereum } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import Image from "next/image";


export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div>
                <SearchBar />
                <Balance />
                <Notifications />
                <Profile
                    image="profile2.jpg"
                    name="John Chioutakos"
                    email="johnchiout.dev@gmail.com"
                />
            </div>
            <div>
              
            </div>


        </nav>
    )
}


const SearchBar = () => {
    return (
        <div className={`${styles.searchbar} ${styles.button}`}>
            <IoSearchSharp />
            <input type="text" className={styles.input} placeholder="search by creator of collection" />
        </div>
    )
}

const Balance = () => {
    return (
        <div className={`${styles.button} ${styles.balance}`}>
            < FaEthereum />
            <p>30.400</p>
        </div>
    )
}

const Notifications = () => {
    return (
        <div className={`${styles.button} ${styles.notifications}`}>
            <IoIosNotifications />
            <div className={styles.notification}>
            </div>
        </div>
    )
}

const Profile = ({ image, name, email }) => {
    return (
        <div className={`${styles.profile}`}>
            <div className={styles.profileImage}>
                <Image src={`/${image}`} alt="profile" fill />
            </div>
            <div className={styles.profileDetails}>
                <div className={styles.name}>
                    <p>{name}</p>
                    <MdOutlineKeyboardArrowDown />
                </div>
                <span>{email}</span>
            </div>
        </div>
    )
}