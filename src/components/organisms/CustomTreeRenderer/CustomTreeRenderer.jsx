/* eslint-disable */

/*
* Base component from
* https://github.com/frontend-collective/react-sortable-tree/blob/master/src/node-renderer-default.js
* Uses `nodeContentRenderer` prop
* Customizing to hook into Gatsby routing
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isDescendant } from 'react-sortable-tree'
import Link from 'gatsby-link'
import getSlug from 'speakingurl'

function classnames(...classes) {
	return classes.filter(Boolean).join(' ')
}

class CustomTreeRenderer extends Component {
	constructor(props) {
		super(props)

		const nodeTitle = props.title || props.node.title

		this.state = {
			previousSlug: getSlug(nodeTitle),
			textInputValue: nodeTitle,
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSave = this.handleSave.bind(this)
	}

	handleChange(e) {
		this.setState({ textInputValue: e.target.value })
	}

	handleSave(node, parentNode, path) {
		this.props.saveChanges(
			this.state.previousSlug,
			this.state.textInputValue,
			node,
			parentNode,
			path,
		)

		this.setState({ previousSlug: getSlug(this.state.textInputValue) })
	}

	render() {
		const {
			currentUrl,
			scaffoldBlockPxWidth,
			toggleChildrenVisibility,
			connectDragPreview,
			connectDragSource,
			isDragging,
			canDrop,
			canDrag,
			node,
			title,
			subtitle,
			draggedNode,
			path,
			treeIndex,
			isSearchMatch,
			isSearchFocus,
			buttons,
			className,
			style,
			didDrop,
			treeId,
			isOver, // Not needed, but preserved for other renderers
			parentNode, // Needed for dndManager
			// custom props
			editMode,
			toggleEditMode,
			insertNodeUnderParent,
			removeNode,
			saveChanges,
			...otherProps
		} = this.props

		const nodeTitle = title || node.title
		const nodeSubtitle = subtitle || node.subtitle

		let handle
		if (canDrag) {
			if (typeof node.children === 'function' && node.expanded) {
				// Show a loading symbol on the handle when the children are expanded
				//  and yet still defined by a function (a callback to fetch the children)
				handle = (
					<div className="rst__loadingHandle">
						<div className="rst__loadingCircle">
							{[...new Array(12)].map((_, index) => (
								<div
									// eslint-disable-next-line react/no-array-index-key
									key={index}
									className="rst__loadingCirclePoint"
								/>
							))}
						</div>
					</div>
				)
			} else {
				// Show the handle used to initiate a drag-and-drop
				handle = connectDragSource(<div className="rst__moveHandle" />, {
					dropEffect: 'copy',
				})
			}
		}

		const isDraggedDescendant = draggedNode && isDescendant(draggedNode, node)
		const isLandingPadActive = !didDrop && isDragging

		/* Custom variables */

		const isEditing = editMode.isEditing && editMode.nodeTitle == nodeTitle

		const handleKeyPress = e => {
			if (e.key === 'Enter') {
				saveChanges(this.state.textInputValue, node, path)
			}
		}

		/* -----------------*/

		return (
			<div style={{ height: '100%' }} {...otherProps}>
				{toggleChildrenVisibility &&
					node.children &&
					(node.children.length > 0 || typeof node.children === 'function') && (
						<div>
							<button
								type="button"
								aria-label={node.expanded ? 'Collapse' : 'Expand'}
								className={node.expanded ? 'rst__collapseButton' : 'rst__expandButton'}
								style={{ left: -0.5 * scaffoldBlockPxWidth }}
								onClick={() =>
									toggleChildrenVisibility({
										node,
										path,
										treeIndex,
									})
								}
							/>

							{node.expanded &&
								!isDragging && (
									<div style={{ width: scaffoldBlockPxWidth }} className="rst__lineChildren" />
								)}
						</div>
					)}

				<div className="rst__rowWrapper">
					{/* Set the row preview to be used during drag and drop */}
					{connectDragPreview(
						<div
							className={classnames(
								'rst__row',
								isLandingPadActive && 'rst__rowLandingPad',
								isLandingPadActive && !canDrop && 'rst__rowCancelPad',
								isSearchMatch && 'rst__rowSearchMatch',
								isSearchFocus && 'rst__rowSearchFocus',
								className,
							)}
							style={{
								opacity: isDraggedDescendant ? 0.5 : 1,
								...style,
							}}
						>
							{handle}

							<div
								className={classnames(
									'rst__rowContents',
									!canDrag && 'rst__rowContentsDragDisabled',
								)}
							>
								<div className="rst__rowLabel">
									{isEditing ? (
										<input
											autoFocus
											onChange={this.handleChange}
											onKeyPress={handleKeyPress}
											type="text"
											value={this.state.textInputValue}
										/>
									) : (
										<Link
											to={
												parentNode
													? `/app/${getSlug(parentNode.title)}/${getSlug(nodeTitle)}`
													: `/app/${getSlug(nodeTitle)}`
											}
										>
											<span
												className={classnames(
													'rst__rowTitle',
													node.subtitle && 'rst__rowTitleWithSubtitle',
												)}
											>
												{typeof nodeTitle === 'function'
													? nodeTitle({
															node,
															path,
															treeIndex,
													  })
													: nodeTitle}
											</span>
										</Link>
									)}

									{nodeSubtitle && (
										<span className="rst__rowSubtitle">
											{typeof nodeSubtitle === 'function'
												? nodeSubtitle({
														node,
														path,
														treeIndex,
												  })
												: nodeSubtitle}
										</span>
									)}
								</div>

								<div className="rst__rowToolbar">
									{/* Custom Buttons  */}

									{isEditing ? (
										<button onClick={() => this.handleSave(node, parentNode, path)}>save</button>
									) : (
										<button onClick={() => toggleEditMode(nodeTitle)}>edit</button>
									)}

									<button onClick={() => insertNodeUnderParent(path)}>+</button>

									<button onClick={() => removeNode(path)}>-</button>

									{/* End Custom Buttons */}

									{buttons.map((btn, index) => (
										<div
											key={index} // eslint-disable-line react/no-array-index-key
											className="rst__toolbarButton"
										>
											{btn}
										</div>
									))}
								</div>
							</div>
						</div>,
					)}
				</div>
			</div>
		)
	}
}

CustomTreeRenderer.defaultProps = {
	isSearchMatch: false,
	isSearchFocus: false,
	canDrag: false,
	toggleChildrenVisibility: null,
	buttons: [],
	className: '',
	style: {},
	parentNode: null,
	draggedNode: null,
	canDrop: false,
	title: null,
	subtitle: null,
}

CustomTreeRenderer.propTypes = {
	node: PropTypes.shape({}).isRequired,
	title: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
	subtitle: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
	path: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
	treeIndex: PropTypes.number.isRequired,
	treeId: PropTypes.string.isRequired,
	isSearchMatch: PropTypes.bool,
	isSearchFocus: PropTypes.bool,
	canDrag: PropTypes.bool,
	scaffoldBlockPxWidth: PropTypes.number.isRequired,
	toggleChildrenVisibility: PropTypes.func,
	buttons: PropTypes.arrayOf(PropTypes.node),
	className: PropTypes.string,
	style: PropTypes.shape({}),

	// Drag and drop API functions
	// Drag source
	connectDragPreview: PropTypes.func.isRequired,
	connectDragSource: PropTypes.func.isRequired,
	parentNode: PropTypes.shape({}), // Needed for dndManager
	isDragging: PropTypes.bool.isRequired,
	didDrop: PropTypes.bool.isRequired,
	draggedNode: PropTypes.shape({}),
	// Drop target
	isOver: PropTypes.bool.isRequired,
	canDrop: PropTypes.bool,
}

export default CustomTreeRenderer
