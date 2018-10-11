// @flow
import * as React from 'react'
import ReactTransition from 'react-transition-group/Transition'

type ITransitionProps = {
  children: ({ state: {} }) => React.Node,
  type: 'fade',
  duration?: number,
  show: boolean,
  opacity: number,
}

export const Transition = (props: ITransitionProps) => {
  const defaultStyle = {
    // $flow-disable-line
    transition: `opacity ${props.duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: props.opacity },
    exiting: { opacity: 0 },
  }

  return (
    <ReactTransition in={props.show} timeout={props.duration} unmountOnExit>
      {state =>
        props.children({
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
