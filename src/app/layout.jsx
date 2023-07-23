import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import './globals.css'
import { Playfair_Display } from 'next/font/google'

const playFair = Playfair_Display({ subsets: ['latin'] })

export const metadata = {
  title: 'GlamGang - Bold Fashion',
  description: 'Your One-Stop Shop for Fashion',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playFair.className}>
        <Navbar/>
        <main className='min-h-[200px] text-center text-2xl'>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
