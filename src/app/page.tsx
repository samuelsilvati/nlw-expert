'use client'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react'

import logo from '@/assets/logo-nwl-expert.svg'
import NewNoteCard from '@/components/new-note-card'
import NoteCard from '@/components/note-card'

interface Note {
  id: string
  date: Date
  content: string
}

export default function Home() {
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState<Note[]>(() => {
    if (typeof window !== 'undefined') {
      const notesOnStorage = localStorage.getItem('notes')
      if (notesOnStorage) {
        return JSON.parse(notesOnStorage)
      }
    }
    return []
  })

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    }
    const notesArray = [newNote, ...notes]
    setNotes(notesArray)

    localStorage.setItem('notes', JSON.stringify(notesArray))
  }

  function onNoteDeleted(id: string) {
    const notesArray = notes.filter((note) => {
      return note.id !== id
    })

    setNotes(notesArray)

    localStorage.setItem('notes', JSON.stringify(notesArray))
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value

    setSearch(query)
  }

  const filteredNotes =
    search !== ''
      ? notes.filter((note) =>
          note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
        )
      : notes
  return (
    <main className="mx-auto my-12 max-w-6xl space-y-6 px-5">
      <Image src={logo} alt="NLW Expert logo" />
      <form action="" className="">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
          onChange={handleSearch}
        />
      </form>
      <div className="h-px bg-slate-700" />

      <div className="grid auto-rows-[250px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NewNoteCard onNoteCreated={onNoteCreated} />

        {filteredNotes.map((note) => {
          return (
            <NoteCard note={note} key={note.id} onNoteDeleted={onNoteDeleted} />
          )
        })}
      </div>
    </main>
  )
}
