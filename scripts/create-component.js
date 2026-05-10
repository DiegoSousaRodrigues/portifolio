import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'

const componentName = process.argv[2]

if (!componentName) {
  console.error('Informe o nome do componente.')
  process.exit(1)
}

const componentDir = join(
  process.cwd(),
  'src',
  'components',
  componentName
)

if (existsSync(componentDir)) {
  console.error(`O componente ${componentName} já existe.`)
  process.exit(1)
}

mkdirSync(componentDir, { recursive: true })

writeFileSync(
  join(componentDir, 'index.tsx'),
  `export { ${componentName} } from './${componentName}'\n`
)

writeFileSync(
  join(componentDir, `${componentName}.tsx`),
  `import type { ${componentName}Props } from './${componentName}.types'

export function ${componentName}({}: ${componentName}Props) {
  return <div>${componentName}</div>
}
`
)

writeFileSync(
  join(componentDir, `${componentName}.types.ts`),
  `export interface ${componentName}Props {}
`
)

writeFileSync(
  join(componentDir, `${componentName}.styles.ts`),
  `export const styles = {}
`
)

console.log(`Componente ${componentName} criado com sucesso!`)