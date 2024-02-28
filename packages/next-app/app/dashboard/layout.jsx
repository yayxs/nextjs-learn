'use client'
import { useState } from 'react'

import Link from 'next/link'

export default function Temp({ children }) {
  console.log('1111', children)
  const [num, setNum] = useState(0)
  return (
    <>
      <div>
        <Link href='/dashboard/about'>/dashboard/about</Link>
        <br />
        <Link href='/dashboard/set'>/dashboard/set</Link>
      </div>
      <div> layout {num}</div>
      <div>
        <button
          onClick={() => {
            setNum(num + 1)
          }}
        ></button>
      </div>
      <div>{children}</div>
    </>
  )
}
