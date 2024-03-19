import styles from './styles.module.css'
import Image from "next/image";
export default function ProfileSidebar() {
    return (
        <div className={styles.myprofile}>
            My profile
            <div className={styles.imageContainer}>
                <Image 
                    src="/profile.jpg" 
                    alt="Profile picture" 
                    fill />
            </div>
        </div>
    )
}