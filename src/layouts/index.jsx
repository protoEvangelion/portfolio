import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Header } from 'components/organisms'

import './base.scss'

const Layout = ({ children, data }) => (
	<main style={{ height: '100%' }}>
		<Helmet
			title={data.site.siteMetadata.title}
			meta={[
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'sample, something' },
			]}
		/>

		<Header />

		{children()}
	</main>
)

Layout.propTypes = {
	children: PropTypes.func,
}

export default Layout

export const query = graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`
