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
  join(componentDir, 'index.ts'),
  `export { ${componentName} } from './${componentName}'\n`
)

writeFileSync(
  join(componentDir, `${componentName}.tsx`),
  `import { Wrapper } from './${componentName}.styles'

export function ${componentName}() {
  return <Wrapper>${componentName}</Wrapper>
}
`
)

writeFileSync(
  join(componentDir, `${componentName}.styles.ts`),
  `import { w } from 'windstitch'

export const Wrapper = w.div('')
`
)

console.log(`Componente ${componentName} criado com sucesso!`)
