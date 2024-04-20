import Image from 'next/image'

import logo from '@/assets/logo-nwl-expert.svg'
import NewNoteCard from '@/components/new-note-card'
import NoteCard from '@/components/note-card'
export default function Home() {
  return (
    <main className="mx-auto my-12 max-w-6xl space-y-6">
      <Image src={logo} alt="NLW Expert logo" />
      <form action="" className="">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>
      <div className="h-px bg-slate-700" />

      <div className="grid auto-rows-[250px] grid-cols-3 gap-6">
        <NewNoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </main>
  )
}
