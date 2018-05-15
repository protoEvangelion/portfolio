import { App } from 'components/organisms'
import React from 'react'
import { Route } from 'react-router-dom'

const AppPage = () => <Route path="/app/:topic" component={App} />

export default AppPage
