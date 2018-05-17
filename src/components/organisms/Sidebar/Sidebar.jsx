import React, { Component } from 'react'
import SortableTree, {
	addNodeUnderParent,
	changeNodeAtPath,
	removeNodeAtPath,
} from 'react-sortable-tree'
import { CustomTreeRenderer } from 'components/organisms'
import 'react-sortable-tree/style.css'

class Sidebar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			editMode: { isEditing: false },
			treeData: [{ title: 'src things', children: [{ title: 'index.js' }] }],
		}

		this.insertNodeUnderParent = this.insertNodeUnderParent.bind(this)
		this.removeNode = this.removeNode.bind(this)
		this.saveChanges = this.saveChanges.bind(this)
		this.toggleEditMode = this.toggleEditMode.bind(this)
	}

	getNodeKey({ treeIndex }) {
		return treeIndex
	}

	insertNodeUnderParent(path) {
		const title = ''

		this.toggleEditMode(title)

		this.setState(state => ({
			treeData: addNodeUnderParent({
				treeData: state.treeData,
				parentKey: path[path.length - 1],
				expandParent: true,
				getNodeKey: this.getNodeKey,
				newNode: { title },
			}).treeData,
		}))
	}

	removeNode(path) {
		this.setState(state => ({
			treeData: removeNodeAtPath({
				treeData: state.treeData,
				path,
				getNodeKey: this.getNodeKey,
			}),
		}))
	}

	saveChanges(title, node, path) {
		this.toggleEditMode(title)

		this.setState(state => ({
			editMode: { isEditing: false, nodeTitle: title },
			treeData: changeNodeAtPath({
				getNodeKey: this.getNodeKey,
				treeData: state.treeData,
				path,
				newNode: { ...node, title },
			}),
		}))
	}

	toggleEditMode(nodeTitle) {
		this.setState({
			editMode: { isEditing: !this.state.editMode.isEditing, nodeTitle },
		})
	}

	render() {
		return (
			<div style={{ height: '100%', width: 500 }}>
				<SortableTree
					treeData={this.state.treeData}
					onChange={treeData => this.setState({ treeData })}
					maxDepth={3}
					nodeContentRenderer={CustomTreeRenderer}
					generateNodeProps={({ node, path }) => ({
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
