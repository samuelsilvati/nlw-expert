export default function NoteCard() {
  return (
    <div className="relative space-y-3 overflow-hidden rounded-md bg-slate-800 p-5">
      <span className="text-sm font-medium text-slate-200">há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quisquam
        debitis ad consequatur id labore mollitia deleniti, odit autem dolores,
        porro enim vel? Delectus, aut. Magnam alias quas mollitia officiis.Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Quam quisquam
        debitis ad consequatur id labore mollitia deleniti, odit autem dolores,
        porro enim vel? Delectus, aut. Magnam alias quas mollitia officiis.
      </p>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
    </div>
  )
}
