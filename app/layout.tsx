import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavbarFooter from './components/Footer/NavbarFooter'
import Navbar from './components/Header/Navbar'
import './styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mag Controle de Pedidos',
  description: 'Aplicação para controle de pedido de produtos feitos pela empresa MAG',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`inter.className
      w-full h-screen flex flex-col justify-center items-center gap-5 bg-green-100
      `}>
        <Navbar />
        {children}
        <NavbarFooter />
      </body>
    </html>
  )
}
