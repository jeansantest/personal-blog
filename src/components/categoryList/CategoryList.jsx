import React from "react"
import styles from "./categoryList.module.css"
import Link from "next/link"
import Image from "next/image"

const CategoryList = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Categorias</h1>
			<div className={styles.categories}>
				<Link href="/blog?categoria=desenvolvimentoWeb" className={`${styles.category} ${styles.programming}`}>
					<Image src="/programming.png" alt="" width={32} height={32} className={styles.image} />
					Programação
				</Link>
				<Link href="/blog?categoria=desenvolvimentoPessoal" className={`${styles.category} ${styles.personalDevelopment}`}>
					<Image src="/selfimprovement.png" alt="" width={32} height={32} className={styles.image} />
					Desenvolvimento Pessoal
				</Link>
				<Link href="/blog?categoria=viagens" className={`${styles.category} ${styles.travel}`}>
					<Image src="/travel.png" alt="" width={32} height={32} className={styles.image} />
					Viagens
				</Link>
				<Link href="/blog?categoria=jogos" className={`${styles.category} ${styles.games}`}>
					<Image src="/games.png" alt="" width={32} height={32} className={styles.image} />
					Jogos
				</Link>
			</div>
		</div>
	)
}

export default CategoryList
