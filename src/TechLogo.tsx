import { logos } from './logos'

type TechLogoProps = {
  icon: string
  label: string
}

export function TechLogo({ icon, label }: TechLogoProps) {
  const shape = logos[icon]
  return (
    <span className="tech-logo" title={label}>
      {shape && (
        <svg viewBox={shape.viewBox} aria-hidden="true" focusable="false">
          {shape.shapes.map((entry, index) => (
            <path key={index} d={entry.d} fill={entry.fill} />
          ))}
        </svg>
      )}
      <span className="tech-logo-name">{label}</span>
    </span>
  )
}
