import * as React from 'react'

interface ILogoProps {
  dark: boolean
}

export const Logo: React.SFC<ILogoProps> = ({ dark, ...props }) => (
  <svg
    className="logo"
    width="4rem"
    height="4rem"
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="90" cy="90" r="90" fill={dark ? '#ffde28' : '#ffde28'} />
    <g fill={dark ? '#011627' : '#fff'}>
      <path d="M130 21H80.0005L75 48C94 48 121.775 47.8125 129 69C137 93.5859 108.867 120.5 101 132H122L132 163H168L148 105C157 101 164.958 95.4792 170.166 88.7735C175.374 82.0026 178.337 73.474 179.053 63.1875C179.941 50.503 176.257 40.4328 168 33C159 24.9885 146 21 130 21Z" />
      <path d="M67.186 90L75 48L47 91H66.814L59 133L87 90H67.186Z" />
      </g>
  </svg>
)
