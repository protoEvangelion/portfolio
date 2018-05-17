import React, { Component } from 'react'
import SortableTree, {
	addNodeUnderParent,
	changeNodeAtPath,
	removeNodeAtPath,
} from 'react-sortable-tree'
import { CustomTreeRenderer } from 'components/organisms'
// import FileExplorerTheme from 'react-sortable-tree-theme-minimal'
import 'react-sortable-tree/style.css'

const firstNames = [
	'Abraham',
	'Adam',
	'Agnar',
	'Albert',
	'Albin',
	'Albrecht',
	'Alexander',
	'Alfred',
	'Alvar',
	'Ander',
	'Andrea',
	'Arthur',
	'Axel',
	'Bengt',
	'Bernhard',
	'Carl',
	'Daniel',
	'Einar',
	'Elmer',
	'Eric',
	'Erik',
	'Gerhard',
	'Gunnar',
	'Gustaf',
	'Harald',
	'Herbert',
	'Herman',
	'Johan',
	'John',
	'Karl',
	'Leif',
	'Leonard',
	'Martin',
	'Matt',
	'Mikael',
	'Nikla',
	'Norman',
	'Oliver',
	'Olof',
	'Olvir',
	'Otto',
	'Patrik',
	'Peter',
	'Petter',
	'Robert',
	'Rupert',
	'Sigurd',
	'Simon',
]

class Sidebar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			editMode: { isEditing: false },
			treeData: [{ title: 'src things', children: [{ title: 'index.js' }] }],
		}

		this.saveChanges = this.saveChanges.bind(this)
		this.enterEditMode = this.enterEditMode.bind(this)
	}

	getNodeKey({ treeIndex }) {
		return treeIndex
	}

	saveChanges(title, node, path) {
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

	enterEditMode(nodeTitle) {
		this.setState({ editMode: { isEditing: true, nodeTitle } })
	}

	render() {
		const getRandomName = () => firstNames[Math.floor(Math.random() * firstNames.length)]

		return (
			<div style={{ height: '100%', width: 400 }}>
				<SortableTree
					treeData={this.state.treeData}
					onChange={treeData => this.setState({ treeData })}
					maxDepth={3}
					nodeContentRenderer={CustomTreeRenderer}
					generateNodeProps={({ node, path }) => ({
						currentUrl: this.props.topic,
						editMode: this.state.editMode,
						enterEditMode: this.enterEditMode,
						saveChanges: this.saveChanges,
						buttons: [
							<button
								onClick={() =>
									this.setState(state => ({
										treeData: addNodeUnderParent({
											treeData: state.treeData,
											parentKey: path[path.length - 1],
											expandParent: true,
											getNodeKey: this.getNodeKey,
											newNode: {
												title: `${getRandomName()} ${node.title.split(' ')[0]}sson`,
											},
										}).treeData,
									}))
								}
							>
								+
							</button>,
							<button
								onClick={() =>
									this.setState(state => ({
										treeData: removeNodeAtPath({
											treeData: state.treeData,
											path,
											getNodeKey: this.getNodeKey,
										}),
									}))
								}
							>
								-
							</button>,
						],
					})}
				/>
			</div>
		)
	}
}

export default Sidebar
