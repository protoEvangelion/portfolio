import React from 'react'
import { Sidebar } from './NotesSidebarStyles'
import { Accordion } from 'components/molecules'
import { map, orderBy } from 'lodash'
import { Link } from 'gatsby'

const SidebarContent = ({ path, tree }) => {
  const unorderedTree = map(tree, node => {
    const className = `${styles.leafLink} ${node.slug === path ? styles.active : ''} ${
      node.firstLevel ? styles.firstLevelNode : ''
    }`

    if (node.hasOwnProperty('children')) {
      return (
        <Accordion
          className={className}
          key={node.order}
          open={path.includes(node.title.toLowerCase())}
          title={node.title}
        >
          <SidebarContent path={path} tree={node.children} />
        </Accordion>
      )
    }

    return (
      <Link className={className} key={node.order} to={node.slug}>
        {node.title}
      </Link>
    )
  })

  return orderBy(unorderedTree, 'key', 'asc')
}

export default function SidebarWrapper({ path, tree, isMobile, showSidebar, section }) {
  return (
    <Sidebar
      className={`sidebar ${isMobile && showSidebar ? 'onScreen' : ''} ${
        isMobile && !showSidebar ? 'offScreen' : ''
      }`}
    >
      <div className="sidebarContentWrapper">
        <SidebarContent path={path} tree={tree} />
      </div>
    </Sidebar>
  )
}
