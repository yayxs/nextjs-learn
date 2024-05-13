import Link from 'next/link'

import data from 'public/mock/data.json'
import SidebarNoteList from './SidebarNoteList'

function getAllNotes() {
  return new Promise((resolve) => {
    console.log('data', data)
    resolve(data)
  })
}

export default async function Sidebar() {
  const notes = await getAllNotes()
  return (
    <>
      <section className='shrink-0 max-w-[350px] min-w-[250px]  min-h-screen w-[30%]  bg-white z-[1000] shadow-sideBar overflow-y-auto'>
        <Link href={'/'}>
          <section className='flex items-center pl-4 pb-4 pr-4 uppercase pt-9 tracking-plus'>
            <img
              className='logo'
              src='/logo.svg'
              width='22px'
              height='20px'
              alt=''
              role='presentation'
            />
            <strong>React Notes</strong>
          </section>
        </Link>
        <section
          role='menubar'
          className='flex justify-between pt-0 pb-4 pr-4 '
        ></section>
        <nav>
          <SidebarNoteList notes={notes} />
        </nav>
      </section>
    </>
  )
}
