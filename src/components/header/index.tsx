import styles from './styles.module.css'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export function Header() {

    const { data: session, status } = useSession()
    console.log(session, status)

    return (
        <header className={styles.header} >
            <section className={styles.content}>
                <nav className={styles.nav}>
                    <Link href="/">
                        <h1 className={styles.logo}>
                            Tarefas
                            <span>+</span>
                        </h1>
                    </Link>
                    {session?.user && <Link className={styles.link} href="/dashboard">Meu Painel</Link>}
                </nav>
                {status === "loading" ? (<></>) :
                    session ? (
                        <button className={styles.logginButton} onClick={() => signOut()} >
                            Olá, {session?.user?.name}
                        </button>
                    ) : (
                        <button className={styles.logginButton} onClick={() => signIn()} >
                            Acessar
                        </button>
                    )}
            </section>
        </header>
    )
}