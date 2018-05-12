import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Header } from 'components/organisms'

import { withPrefix } from 'gatsby-link'

import './base.css'

const Layout = ({ children, data }) => (
	<div>
		{/* <Helmet
			title={data.site.siteMetadata.title}
			meta={[
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'sample, something' },
			]}
			link={[
				{
					rel: 'stylesheet',
					href: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/codemirror.css',
				},
				{ rel: 'stylesheet', href: 'https://cdn.firebase.com/libs/firepad/1.4.0/firepad.css' },
			]}
			script={[
				{ src: withPrefix('codemirror/lib/codemirror.js') },
				{
					src: withPrefix('codemirror/mode/javascript/javascript.js'),
				},
				{ src: 'https://cdn.firebase.com/libs/firepad/1.4.0/firepad.min.js' },
			]}
		/> */}

		<Header />

		{children()}
	</div>
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
