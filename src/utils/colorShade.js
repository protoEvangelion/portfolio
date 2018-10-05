// @flow
import { colors } from 'theme'

export default function shade(color, percent) {
  if (color.slice(0, 3) !== 'rgb') {
    color = colors[color]
  }
  const f = color.split(',');

    
const t = percent < 0 ? 0 : 255;

    
const p = percent < 0 ? percent * -1 : percent;

    
const R = parseInt(f[0].slice(4));

    
const G = parseInt(f[1]);

    
const B = parseInt(f[2])
  return (
    `rgb(${ 
    Math.round((t - R) * p) + R 
    },${ 
    Math.round((t - G) * p) + G 
    },${ 
    Math.round((t - B) * p) + B 
    })`
  )
}
