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

      <main className={styles.main}>
        <h1 className={styles.title}>
          Selamat <a href="#">Datang</a>
        </h1>

        <p className={styles.description}>
          Informasi terkait akses online{' '}
          <code className={styles.code}>Ada Disini 📡</code>
        </p>

        <div className={styles.grid}>
          {/* <a href="http://175.106.8.138:9099" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h2>Teramedik &rarr;</h2>
            <p>Hospital Information System, Rumah Sakit Ibu & Anak Family</p>
          </a> */}

          <a href="http://175.106.8.138:9393/" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h2>RSCLOUD &rarr;</h2>
            <p>Rumah yang aman untuk semua data Anda, alangkah baiknya di simpan di Cloud</p>
          </a>

          <a href="http://akreditasi.rsiafamily.com/login.php" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h2>SIDOKARS v1.2 &rarr;</h2>
            <p>Mengumpulkan, menyimpan, dan mencari dokumen Akreditasi</p>
          </a>

          <a href="http://lims.rsiafamily.com:9494/flims/index.php?p=show_detail&id=25/" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h2>FORM IT SIMRS &rarr;</h2>
            <p>
              Pengajuan akses user baik itu Teramedik, RSCLOUD, Sidokars, ataupun Email
            </p>
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
