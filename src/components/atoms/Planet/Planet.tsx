import { css, styled } from '@/style';

interface IPlanetProps {
    diameter?: number;
    firstColor?: string;
    secondColor?: string;
}

export const Planet = styled<IPlanetProps, 'div'>('div')`
    border-radius: 50%;
    box-shadow: ${({ diameter, firstColor, secondColor }) => {
        const d = diameter!;

        return css`
      inset 0 0 ${d * 0.1667}rem #fff, /* inner white */
      inset ${d * 0.067}rem 0 ${d * 0.2667}rem ${firstColor}, /* inner left magenta short */
      inset ${d * -0.067}rem 0 ${d * 0.2667}rem ${secondColor}, /* inner right cyan short */
      inset ${d * 0.067}rem 0 ${d}rem ${firstColor}, /* inner left magenta broad */
      inset ${d * 0.1667}rem 0 ${d * 0.1667}rem ${secondColor}, /* inner right cyan broad */
      0 0 ${d * 0.1667}rem #fff, /* outer white */
      ${d * -0.0333}rem 0 ${d * 0.2667}rem ${firstColor}, /* outer left magenta */
      ${d * 0.0333}rem 0 ${d * 0.2667}rem ${secondColor}; /* outer right cyan */
      `;
    }};
`;

Planet.defaultProps = {
    firstColor: '#f0f',
    secondColor: '#0ff',
    diameter: 2,
};
