import { styled } from '@/style'
import { Box } from '@/components/atoms'

export const Credits = styled.div`
  background: linear-gradient(180deg, white 0%, #f6f6f6 100%);
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 10rem 25% 15rem;
`

export const Img = styled.img`
  border-radius: 8px;
  box-shadow: 2px 22px 40px rgba(9, 16, 29, 0.1);
  width: 100%;
  height: auto;
  transform: translateY(0);
  transition: transform, box-shadow;
  transition-duration: 0.5s;

  &:hover {
    box-shadow: 2px 40px 40px rgba(9, 16, 29, 0.1);
    transform: translateY(-20px);
  }
`

export const Wrapper = styled(Box)`
  background: ${props => props.gradient};
  padding: 15rem 0 30rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  svg {
    position: absolute;
    bottom: 99%;
    left: 0;
    right: 0;
    width: 100%;
  }

  > a,
  .react-reveal {
    width: 45%;
  }
`

const firstColor = '#f0f'
const secondColor = '#0ff'
const d = 2

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h4 {
    margin: 0 0 3rem;
  }

  ul {
    list-style: none;
    padding-left: 0;

    li {
      padding: 0.5rem 0;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        left: -32px;
        top: 50%;
        transform: translateY(-50%);
        height: 10px;
        width: 10px;
        border-radius: 50%;
        box-shadow: inset 0 0 ${d * 0.1667}rem #fff,
          inset ${d * 0.067}rem 0 ${d * 0.2667}rem ${firstColor},
          inset ${d * -0.067}rem 0 ${d * 0.2667}rem ${secondColor},
          inset ${d * 0.067}rem 0 ${d}rem ${firstColor},
          inset ${d * 0.1667}rem 0 ${d * 0.1667}rem ${secondColor}, 0 0 ${d * 0.1667}rem #fff,
          ${d * -0.0333}rem 0 ${d * 0.2667}rem ${firstColor},
          ${d * 0.0333}rem 0 ${d * 0.2667}rem ${secondColor};
      }
    }
  }
`
