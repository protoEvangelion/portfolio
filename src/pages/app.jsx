import { App } from 'components/organisms'
import React from 'react'
import { Route } from 'react-router-dom'

const AppPage = () => (
	<div>
		<Route path="/app/:path" component={App} />
	</div>
)

export default AppPage
