import { ImageResponse } from 'next/og'
import {
  contentStyle,
  descriptionStyle,
  eyebrowDotStyle,
  eyebrowStyle,
  logoCardStyle,
  logoMarkStyle,
  titleAccentStyle,
  titleStyle,
  wrapperStyle,
} from './opengraph-image.styles'

export const alt = 'Diego Sousa | Front-end Engineer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={wrapperStyle}>
        <div style={contentStyle}>
          <div style={eyebrowStyle}>
            Front-end Engineer
            <span style={eyebrowDotStyle} />
          </div>

          <div style={titleStyle}>
            <span>Diego Sousa</span>
            <span style={titleAccentStyle}>
              React. Next.js. Performance.
            </span>
          </div>

          <div style={descriptionStyle}>
            Construindo experiências digitais simples, escaláveis e de alto
            impacto.
          </div>
        </div>

        <div style={logoCardStyle}>
          <div style={logoMarkStyle}>D</div>
        </div>
      </div>
    ),
    size,
  )
}
