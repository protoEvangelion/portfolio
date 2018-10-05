import * as React from 'react'
import ReactTransition from 'react-transition-group/Transition'
import { ITransitionProps } from 'interfaces'

export const Transition: React.SFC<ITransitionProps> = ({
  children,
  type,
  opacity,
  duration,
  show,
}) => {
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity },
    exiting: { opacity: 0 },
  }

  return (
    <ReactTransition in={show} timeout={duration} unmountOnExit>
      {state =>
        children({
          ...defaultStyle,
          ...transitionStyles[state],
        })
      }
    </ReactTransition>
  )
}

Transition.defaultProps = {
  type: 'fade',
  duration: 300,
  opacity: 1,
}
