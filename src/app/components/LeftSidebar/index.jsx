
'use client'
import { useState } from "react";
import styles from "./styles.module.css"
import { MdSpaceDashboard } from "react-icons/md";
import React from "react";
import Image from "next/image";
import { FaList } from "react-icons/fa6";
import { BsFillCollectionFill } from "react-icons/bs";
import { ImStatsBars } from "react-icons/im";
import { IoCart } from "react-icons/io5";
import { AiFillSchedule } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import ToggleTheme from "../ToggleTheme";

const items = [
    {
        icon: <MdSpaceDashboard />,
        label: "Dashboard"
    },
    {
        icon: <FaList />,
        label: "Active Bids"
    },
    {
        icon: <BsFillCollectionFill />,
        label: "My Collection"
    },
    {
        icon: <ImStatsBars />,
        label: "Market"
    },
    {
        icon: <IoCart />,
        label: "Sales"
    },
    {
        icon: < AiFillSchedule />,
        label: "Schedule"
    },
    {
        seperator: true,
    },
    {
        icon: <RiMessage2Fill />,
        label: "Messages"
    },
    {
        icon: <BiSupport />,
        label: "Support"
    },

];



export default function LeftSidebar() {
    const [activeItem, setActiveItem] = useState(0)
    const handleItemClick = (index) => {
        setActiveItem(index);
    };
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <Image
                    src="/zod.png"
                    alt="Logo"
                    width={200}
                    height={66.7}
                />
            </div>
            <div className={styles.menu}>
                {items.map((item, index) => {
                    if (item.seperator) {
                        return <div className={styles.seperator}></div>
                    }
                    else {
                        return (
                            <MenuItem
                                key={index}
                                index={index}
                                Icon={item.icon}
                                label={item.label}
                                active={index === activeItem}
                                onClick={handleItemClick}

                            />
                        )
                    }
                })}
            </div>
            <div className={styles.themeContainer}>
                <span>Dark Mode</span>
                <ToggleTheme />
        </div>
        </aside>
    );
}

const MenuItem = ({
    Icon,
    label,
    active,
    onClick,
    key,
    index,

}) => {
    const handleClick = () => {
        onClick(index);
    };
    return (
        <div 
            key={key} 
            onClick={handleClick} 
            className={`${styles.menuItem}  ${active ? styles.active : ''}`}
        >
            <Icon.type {...Icon.props} />
            <span>{label}</span>
        </div>
    );
}



function DarkMode() {
    return (
        <div className={styles.themeContainer}>
            <span>Dark Mode</span>
            <div>sese</div>
        </div>
    )
}