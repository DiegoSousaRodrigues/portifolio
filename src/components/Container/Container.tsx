import { Wrapper } from './Container.styles'

export function Container({ children }: React.PropsWithChildren) {
  return <Wrapper>{children}</Wrapper>
}
