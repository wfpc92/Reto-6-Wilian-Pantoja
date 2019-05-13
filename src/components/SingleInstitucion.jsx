import React, { Component } from 'react'
import {Segment, Header} from 'semantic-ui-react';

export default class SingleInstitucion extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Segment>
          <Header>
            Institucion {this.props.institucion}   
          </Header>
        </Segment>
      </div>
    )
  }
}
