import { navigateTo } from 'gatsby-link'
import getSlug from 'speakingurl'
import React, { Component } from 'react'
import SortableTree, {
	addNodeUnderParent,
	changeNodeAtPath,
	removeNodeAtPath,
} from 'react-sortable-tree'
import 'react-sortable-tree/style.css'
import { toast } from 'react-toastify'

import { CustomTreeRenderer } from 'components/organisms'

class Sidebar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			editMode: { isEditing: false },
			treeData: [{ title: 'src things', children: [{ title: 'index.js' }] }],
		}

		this.insertNodeUnderParent = this.insertNodeUnderParent.bind(this)
		this.insertRootNode = this.insertRootNode.bind(this)
		this.removeNode = this.removeNode.bind(this)
		this.saveChanges = this.saveChanges.bind(this)
		this.toggleEditMode = this.toggleEditMode.bind(this)
	}

	static getNodeKey({ treeIndex }) {
		return treeIndex
	}

	insertRootNode() {
		if (this.state.editMode.isEditing) {
			toast.error('Please save changes before adding another category', {
				position: toast.POSITION.BOTTOM_RIGHT,
			})
		} else {
			this.setState(state => ({
				editMode: { isEditing: true, nodeTitle: '' },
				treeData: [...state.treeData, { children: [], expanded: true, title: '' }],
			}))
		}
	}

	insertNodeUnderParent(path) {
		const title = ''

		this.setState(state => ({
			editMode: { isEditing: true, nodeTitle: title },
			treeData: addNodeUnderParent({
				treeData: state.treeData,
				parentKey: path[path.length - 1],
				expandParent: true,
				getNodeKey: Sidebar.getNodeKey,
				newNode: { title },
			}).treeData,
		}))
	}

	removeNode(path) {
		this.setState(state => ({
			treeData: removeNodeAtPath({
				treeData: state.treeData,
				path,
				getNodeKey: Sidebar.getNodeKey,
			}),
		}))
	}

	saveChanges(previousSlug, title, node, parentNode, path) {
		this.setState(
			state => ({
				editMode: { isEditing: false, nodeTitle: title },
				treeData: changeNodeAtPath({
					getNodeKey: Sidebar.getNodeKey,
					treeData: state.treeData,
					path,
					newNode: { ...node, title },
				}),
			}),
			() => {
				console.log('This url', this.props.url)
				console.log('previousslug', previousSlug)

				if (previousSlug && this.props.url.includes(previousSlug)) {
					console.log('includes')
					const newUrl = parentNode
						? `/app/${getSlug(parentNode.title)}/${getSlug(title)}`
						: `/app/${getSlug(title)}`

					// navigateTo(newUrl) TODO
				}
			},
		)
	}

	toggleEditMode(nodeTitle) {
		this.setState({
			editMode: { isEditing: !this.state.editMode.isEditing, nodeTitle },
		})
	}

	render() {
		return (
			<div style={{ height: '100%', width: 500 }}>
				<button onClick={this.insertRootNode}>Add Category</button>

				<SortableTree
					treeData={this.state.treeData}
					onChange={treeData => this.setState({ treeData })}
					maxDepth={3}
					nodeContentRenderer={CustomTreeRenderer}
					generateNodeProps={() => ({
						currentUrl: this.props.topic,
						editMode: this.state.editMode,
						toggleEditMode: this.toggleEditMode,
						insertNodeUnderParent: this.insertNodeUnderParent,
						removeNode: this.removeNode,
						saveChanges: this.saveChanges,
					})}
				/>
			</div>
		)
	}
}

export default Sidebar
