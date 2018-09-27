import * as React from 'react'
import CssTransition from 'react-transition-group/Transition'
import { ITransitionProps } from 'interfaces'

export const Transition: React.SFC<ITransitionProps> = ({
  children,
  type,
  opacity,
  duration,
  show,
}) => {
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, height ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity },
    exiting: { opacity },
    exited: { opacity: 0, height: 0 },
  }

  return (
    <CssTransition in={show} timeout={duration}>
      {state =>
        children({
          ...defaultStyle,
          ...transitionStyles[state],
        })
      }
    </CssTransition>
  )
}

Transition.defaultProps = {
  type: 'fade',
  duration: 300,
  opacity: 1,
}
