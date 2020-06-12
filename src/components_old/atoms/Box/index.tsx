import {
    alignSelf,
    borderRadius,
    bottom,
    color,
    flex,
    justifySelf,
    left,
    position,
    right,
    space,
    styled,
    top,
    width,
    zIndex,
} from '@/style';

export const Box = styled.div`
  ${props => props.cursor && `cursor: ${props.cursor};`}
  ${props => props.height && `height: ${props.height};`}
  ${props => props.opacity && `opacity: ${props.opacity};`}
  ${props => props.transition && `transition: ${props.transition};`}
  ${props => {
      switch (props.center) {
          case 'y':
              return 'top: 50%; transform: translateY(-50%); position: absolute;';
          case 'x':
              return 'left: 50%; transform: translateX(-50%); position: absolute;';
          case true:
              return 'left: 50%; top: 50%; transform: translate(-50%, -50%); position: absolute;';
      }
      return '';
  }}

  ${alignSelf}
  ${borderRadius}
  ${bottom}
  ${color}
  ${flex}
  ${justifySelf}
  ${left}
  ${position}
  ${right}
  ${space}
  ${top}
  ${width}
  ${zIndex}
`;

Box.displayName = 'Box';
