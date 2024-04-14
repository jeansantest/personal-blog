import React from "react"
import styles from "./featured.module.css"
import Image from "next/image"

const Featured = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<b>Olá, Jean Esteves aqui!</b> Descubra minhas histórias e ideias sobre tecnologia e desenvolvimento
			</h1>
			<div className={styles.post}>
				<div className={styles.imgContainer}>
					<Image
						src="/p1.jpeg"
						alt="Picture of the author"
						fill
						className={styles.image}
					/>
				</div>
				<div className={styles.textContainer}>
					<h1 className={styles.postTitle}>Composition recall indeed tip.</h1>
					<p className={styles.postDesc}>Idea highest balance ring mixture cost sad power once graph cake president orange picture thrown band twice already thought noted brown share flame north.</p>
					<button className={styles.button}>Read More</button>
				</div>
			</div>
		</div>
	)
}

export default Featured
