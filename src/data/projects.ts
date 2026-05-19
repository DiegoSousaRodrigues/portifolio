export type Project = {
  title: string
  description: string
  previewUrl: string
  tags: string[]
  projectLabel: string
  projectUrl: string
  codeLabel: string
  codeUrl: string
}

export const projects = [
  {
    title: 'Auth Next.js',
    description:
      'Aplicação de autenticação com página inicial, login e área logada, exibindo o estado da sessão do usuário.',
    previewUrl: 'https://auth-alpha-dusky.vercel.app/',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Autenticação'],
    projectLabel: 'Ver projetos',
    projectUrl: 'https://auth-alpha-dusky.vercel.app/',
    codeLabel: 'Código',
    codeUrl: 'https://github.com/DiegoSousaRodrigues/auth',
  },
] satisfies Project[]
