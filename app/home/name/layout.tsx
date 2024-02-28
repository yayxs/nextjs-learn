import Link from 'next/link'
export default function Layout({ children }) {
  return (
    <div>
      <div>左边的是什么</div>
      <div>
        <Link href='/zhang'>to /zhang</Link>
      </div>
      <div>{children}</div>
    </div>
  )
}
