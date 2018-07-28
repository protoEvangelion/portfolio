import React from 'react'
import { TwitterButton } from 'react-social'

export default (props) => {
	const link = props.quote.quoteLink
	const text = props.quote.quoteText
	return(
	<div>
		<TwitterButton
			style={{border: 'none', background: 'white', padding: '0', margin: '0 0 20px 0', outline: 'none', cursor: 'pointer'}}
			url={link}
		  message={`${text} #coolquotes`}>
				<i className="fa fa-twitter-square fa-3x" aria-hidden="true" style={{color: '#0084b4'}}></i>
		</TwitterButton>
	</div>
	)
}
