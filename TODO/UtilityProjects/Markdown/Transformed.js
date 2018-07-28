import React from 'react'
import Radium from 'radium'

// TODO: Actual default values
// var md = require('markdown-it')({
//   breaks: true,
//   html: false, //reduce xss attacks
// })
//   .use(require('markdown-it-prism'))
//   .use(require('markdown-it-emoji'))

const styles = {
  container: {
    border: '1px solid lightblue',
    borderRadius: '0',
    width: '50%',
    height: '90%',
    display: 'inline-block',
    padding: '10px 0 0 10px',
    textAlign: 'left',
    overflow: 'scroll',
  }
}

// let Transformed = ({markdown}) => {
//
//   function markitup() {
//     let rawMarkup = md.render(markdown)
// 		return {
// 			__html: rawMarkup
// 		}
//   }
//
//   return(
//     <div style={styles.container}>
//       <div id="previewMarkdown" dangerouslySetInnerHTML={markitup()}></div>
//     </div>
//   )
// }
//
// Transformed.propTypes = {
//   markdown: React.PropTypes.string
// }
//
// export default Transformed = Radium(Transformed)
