import Sidebar from '@/components/Sidebar'
import './main.css'

export const metadata = {
  title: 'Next 路由',
  description: 'Next111'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='min-h-screen leading-normal scroll-smooth'>
        <Sidebar />
      </body>
    </html>
  )
}
