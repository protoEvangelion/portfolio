// @flow
import * as React from 'react'
import { Transition } from 'components/molecules'
import { ISidebarProps } from 'interfaces'
import { SidebarNavItem } from './SidebarNavItem'
import { SidebarWrapper } from './styles'

export const Sidebar = (props: ISidebarProps) => {
  const {
    currentFrame,
    handleSidebarMouseEnter,
    handleSidebarMouseLeave,
    isSidebarActive,
    moveToFrame,
    totalFrames,
    updateCoordinates,
  } = props
  return (
    <SidebarWrapper currentFrame={currentFrame}>
      <div className="top-line line" />

      <div
        className="nav-item-wrapper"
        onMouseEnter={handleSidebarMouseEnter}
        onMouseLeave={handleSidebarMouseLeave}
      >
        {Array.from({ length: totalFrames }).map((__, i) => (
          <SidebarNavItem
            currentFrame={currentFrame}
            frame={i + 1}
            handleClick={moveToFrame}
            isSidebarActive={isSidebarActive}
            key={i}
            updateCoordinates={updateCoordinates}
          />
        ))}
      </div>

      <Transition show={currentFrame === 1} opacity={0.5}>
        {styles => <div className="center-line line" style={styles} />}
      </Transition>

      <Transition show={currentFrame === 1}>
        {styles => (
          <div className="next-frame-button" onClick={() => moveToFrame(2)} style={styles}>
            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </div>
        )}
      </Transition>

      <div className="bottom-line line" />
    </SidebarWrapper>
  )
}
