export default function Header() {
  return (
    <div className="text-white flex w-full items-center justify-between h-[60px]">
      <div className="flex items-center gap-3">
        <div className="border-2 border-blue-600 p-3 rounded-lg">DS</div>
        <div className="flex flex-col">
          <span className="text-sm font-[500]">Diego Sousa</span>
          <span className="text-xs">Frontend Engineer</span>
        </div>
      </div>
      <ul className="flex justify-between gap-12 text-sm">
        <li>Projetos</li>
        <li>Contato</li>
        <li>DarkMode</li>
      </ul>
    </div>
  )
}
