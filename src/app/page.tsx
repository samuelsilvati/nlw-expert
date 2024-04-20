import Image from 'next/image'

import logo from '@/assets/logo-nwl-expert.svg'
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
        <div className="space-y-3 rounded-md bg-slate-700 p-5">
          <span className="text-sm font-medium text-slate-200">
            Adicionar nota
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Grave uma nota em áudio que será convetida para texto
            automaticamente
          </p>
        </div>
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </main>
  )
}
