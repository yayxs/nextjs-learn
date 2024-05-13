export default function SidebarNoteList({ notes }) {
  const arr = Object.entries(notes)
  console.log(arr)
  return (
    <ul className='py-4'>
      {arr.map(([noteId, note]) => {
        const { title, updateTime } = JSON.parse(note)
        return (
          <li key={noteId} className='px-4'>
            <header className='z-[1] max-w-[85%] pointer-events-none'>
              <strong className='block text-[1.25rem] leading-[1.2] whitespace-nowrap overflow-hidden text-ellipsis'>
                {title}
              </strong>
              <small>{updateTime}</small>
            </header>
          </li>
        )
      })}
    </ul>
  )
}
