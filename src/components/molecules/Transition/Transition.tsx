import * as React from 'react'
import ReactTransition from 'react-transition-group/Transition'

interface ITransitionProps {
  type: 'fade'
  duration?: number
  show: boolean
  opacity: number
  children: (obj: any) => any
}

export const Transition = ({ duration = 300, opacity, show, children }: ITransitionProps) => {
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles: any = {
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
