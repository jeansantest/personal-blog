import React from "react"
import Link from "next/link";
import Image from "next/image"
import styles from "./navbar.module.css"
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.social}>
				<Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
				<Image src="/instagram.png" alt="facebook" width={24} height={24} />
			</div>
			<div className={styles.logo}>jeestblog</div>
			<div className={styles.links}>
				<ThemeToggle />
				<Link href="/" className={styles.link}>Home</Link>
				<Link href="/" className={styles.link}>Contato</Link>
				<Link href="/" className={styles.link}>Sobre mim</Link>
				<AuthLinks />
			</div>
		</div>
	)
}

export default Navbar
