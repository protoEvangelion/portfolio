import { App } from 'components/organisms'
import React from 'react'
import { Route } from 'react-router-dom'

const AppPage = () => (
	<div>
		<Route path="/app/:topic/:subtopic" component={App} />
	</div>
)

export default AppPage
