import React, { Component } from 'react'
import Pic from './Pic'
import Content from './Content'
import Radium from 'radium'

//styles are below component
const styles = {
  display: 'inline-block',
  height: '150px',
  width: '480px',
  margin: '20px',
  paddingLeft: 0,
  background: '#6441a4',
  transition: 'background 0.5s',
  ':hover': {
    cursor: 'pointer'
  }
}

class Free extends Component {
  renderStreams(data) {
    if(data != null) {
      return data.map((stream, i) => {
        const condition = () => stream.stream != null
        const url = condition() ? stream.stream.channel.url : 'https://www.twitch.tv/freecodecamp'
        const image = condition() ? stream.image : 'https://goo.gl/7IDjKg'
        const title = condition() ? stream.title : 'freeCodeCamp'
        const game = condition() ? stream.stream.game : 'N/A'
        const viewers = condition() ? stream.stream.viewers : 'N/A'
        const live = condition() ? true : false
        return (
          <div key={i} style={styles}>
            <a href={url} style={{textDecoration: 'none'}}>
              <Pic src={image} alt={title} key={image}/>
              <Content
                key={title}
                title={title}
                game={game}
                viewers={viewers}
                live={live} />
            </a>
          </div>
        )
      })
    }
  }
  render() {
    return (
      <div className="col-xs-12" style={{textAlign: 'center'}}>
        {this.renderStreams(this.props.free)}
      </div>
    )
  }
}


export default Free = Radium(Free)
