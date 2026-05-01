export default function Header() {
  return (
    <div className="text-white flex w-full items-center justify-between h-[60px]">
      <div>Logo</div>
      <ul className="flex justify-between gap-12">
        <li>Sobre</li>
        <li>Projetos</li>
        <li>Contato</li>
        <li>DarkMode</li>
      </ul>
    </div>
  )
}
