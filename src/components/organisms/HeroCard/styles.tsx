import { keyframes, styled } from '@/style'

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const SyntaxCtn = styled.div`
  background: #282a36;
  padding: 0 1rem;
  min-height: 4rem;
  border-radius: 8px;
  margin: 2rem 0 1rem;
  display: inline-block;
  width: 100%;
  display: flex;
  align-items: center;

  .Typist {
    display: flex;
    align-items: center;

    .Cursor {
      display: inline-block;
      padding-left: 3px;

      &--blinking {
        color: #ff79c6;
        font-size: 1.75em;
        opacity: 1;
        animation: ${blink} 1s linear infinite;
      }
    }
  }

  .orange {
    color: #ffb86c;
  }

  .green {
    color: #50fa7b;
  }

  .pink {
    color: #ff79c6;
  }

  .cyan {
    color: #8be9fd;
  }

  .purple {
    color: #bd93f9;
  }
`
