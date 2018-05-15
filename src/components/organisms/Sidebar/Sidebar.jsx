import React, { Component } from 'react'
import SortableTree, { addNodeUnderParent, removeNodeAtPath } from 'react-sortable-tree'
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
			treeData: [{ title: 'src things', children: [{ title: 'index.js' }] }],
		}
	}

	render() {
		const getNodeKey = ({ treeIndex }) => treeIndex
		const getRandomName = () => firstNames[Math.floor(Math.random() * firstNames.length)]

		return (
			<div style={{ height: '100%', width: 300 }}>
				<SortableTree
					treeData={this.state.treeData}
					onChange={treeData => this.setState({ treeData })}
					maxDepth={3}
					nodeContentRenderer={CustomTreeRenderer}
					generateNodeProps={({ node, path }) => ({
						currentUrl: this.props.topic,
						buttons: [
							<button
								onClick={() =>
									this.setState(state => ({
										treeData: addNodeUnderParent({
											treeData: state.treeData,
											parentKey: path[path.length - 1],
											expandParent: true,
											getNodeKey,
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
											getNodeKey,
										}),
									}))
								}
							>
								-
							</button>,
						],
					})}
					// theme={FileExplorerTheme}
				/>
			</div>
		)
	}
}

export default Sidebar
