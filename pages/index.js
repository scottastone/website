import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="hey, my name is Scott." />
        <p className="description">
          This is a simple starter project for Next.js.

        </p>
      </main>

      <header>
        <a href="https://www.google.ca">Google Scholar</a>
      </header>

    </div>
  )

}
