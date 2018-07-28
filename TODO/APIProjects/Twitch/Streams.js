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
    cursor: 'pointer',
  }
}

class Streams extends Component {
  renderStreams(data) {
    if(data != null) {
      return data.map((stream, i) => {
        const url = stream.stream.channel.url
        const image = stream.image
        const title = stream.title
        const game = stream.stream.game != '' ? stream.stream.game : 'N/A'
        const viewers = stream.stream.viewers
        const live = stream.stream != null ? true : false
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
    } else {
        return <i style={{color: '#00ffc0', marginTop: '50px'}} className="fa fa-spinner fa-pulse fa-5x" aria-hidden="true"></i>
    }
  }
  render() {
    return (
      <div className="col-xs-12" style={{textAlign: 'center'}}>
        {this.renderStreams(this.props.data)}
      </div>
    )
  }
}


export default Streams = Radium(Streams)
