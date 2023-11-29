import { Nunito } from 'next/font/google'

import Navbar from '@/app/common/components/layout/Navbar';
import LoginModal from '@/app/common/components/modals/LoginModal';
import RegisterModal from '@/app/common/components/modals/RegisterModal';
import SearchModal from '@/app/common/components/modals/SearchModal';
import RentModal from '@/app/common/components/modals/RentModal';
import ToasterProvider from '@/app/common/providers/ToasterProvider';

import './globals.css'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

const font = Nunito({ 
  subsets: ['latin'], 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <SearchModal />
        <RentModal />
        {/* @ts-expect-error Server Component */}
        <Navbar />
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
