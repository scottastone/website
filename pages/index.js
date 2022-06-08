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
        I’m a PhD candidate in the department of psychology at the University of Alberta, supervised by Craig Chapman and Anthony Singhal. Recently, I’ve been working with BioWare on some projects involving eyetracking.

        I am interested in multimodal data collection, particularly eyetracking and motion capture. I also dabble in reinforcement learning and (a very little bit of) EEG.

        I also do consulting for eyetracking, motion capture, and any sort of software/hardware development for lab purposes (e.g. stimulus presentation, analysis). Feel free to reach out if you want to chat.
        </p>
      </main>

      <Footer />
    </div>
  )
}
