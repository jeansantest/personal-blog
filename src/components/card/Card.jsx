import styles from "./card.module.css"
import Image from "next/image"
import Link from "next/link"

function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="temp" fill />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <h1 className={styles.title}>Lorem ipsum dolor sit</h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget lobortis diam, eu rhoncus neque. Ut pulvinar quam a ante varius rutrum in eu nulla. Integer fermentum aliquet. Integer commodo neque eget quam eleifend sollicitudin a nec nunc. Nam lacinia hendrerit odio, facilisis feugiat mi congue nec. Sed id suscipit dolor...
                </p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card
