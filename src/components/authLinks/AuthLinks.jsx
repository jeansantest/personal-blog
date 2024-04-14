"use client"

import React, { useState } from 'react'
import Link from "next/link";
import styles from "./authLinks.module.css"

const AuthLinks = () => {
    // temporary
    const [open, setOpen] = useState(false);
    const status = "notauthenticated"
    const typeUser = "writer"

    const renderAuthLinks = (status, isBurgerMenu) => {
        return status === "notauthenticated" ? (
            <Link href="/login" className={isBurgerMenu ? "" : styles.link}>Logar</Link>
        ) : (
            <>
                {typeUser === "writer" && (<Link href="/write" className={isBurgerMenu ? "" : styles.link}>Escreva</Link>)}
                <span className={isBurgerMenu ? "" : styles.link}>Deslogar</span>
            </>
        )
    }

    return (
        <>
            {renderAuthLinks(status)}
            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {open && (
                <div className={styles.responsiveMenu}>
                    <Link href="/">Home</Link>
                    <Link href="/">Contato</Link>
                    <Link href="/">Sobre mim</Link>
                    {renderAuthLinks(status, open)}
                </div>
            )}
        </>
    )
}

export default AuthLinks
