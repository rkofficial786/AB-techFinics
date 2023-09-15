import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/core/Home/Header/Header'
import Navbar from '@/components/common/Navbar/Navbar'
import About from '@/components/core/Home/About/About'
import Services from '@/components/core/Home/Services/Services'
import Partners from '@/components/core/Home/Partners/Partners'
import Clients from '@/components/core/Home/Clients/Clients'
import Industry from '@/components/core/Home/Industries/Industry'
import Contact from '@/components/core/Home/Conatct/Contact'
import Footer from '@/components/common/Footer/Footer'


export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Partners/>
      <Clients/>
      <Industry/>
      <Contact/>
      <Footer/>
      
    </main>
  )
}
