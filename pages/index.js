import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Link Akses Online</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/family.png" />
      </Head>

      // <main className={styles.main}>
      //   <h1 className={styles.title}>
      //     Selamat <a href="#">Datang</a>
      //   </h1>

      //   <p className={styles.description}>
      //     Informasi terkait akses online{' '}
      //     <code className={styles.code}>Ada Disini 📡</code>
      //   </p>

        <div className={styles.grid}>
         <a href="https://tctrain.ekahospital.com/trakcare/train/web/csp/system.Home.cls#/Component/SSUserLogon" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h2>TrakCare &rarr;</h2>
            <p>Eka Hospital Family</p>
         </a>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
