import { Component } from 'react'
import { Grid, Segment, Icon } from 'semantic-ui-react'

class Steps extends Component {
  constructor() {
    super()
  }
  render(){
    return (
      <>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Segment.Group >
              <Segment onClick={this.handleClickOnEditUser} style={{cursor: "pointer"}}>
                1. Dados Pessoais <Icon name='check' color='green'/>
              </Segment>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column>
            <Segment.Group >
              <Segment onClick={this.handleClickOnEditUser} style={{cursor: "pointer"}}>
                2. Entrega <Icon name='check' color='green'/>
              </Segment>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column>
            <Segment.Group >
              <Segment onClick={this.handleClickOnEditUser} style={{cursor: "pointer"}}>
                1. Pagamento <Icon name='check' color='green'/>
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid.Row>
      </>
    )
  }
}
export default Steps