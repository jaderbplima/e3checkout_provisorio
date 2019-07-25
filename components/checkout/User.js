import { Component } from 'react'
import { Grid, Segment, Button, Loader, Dimmer, Form, Input, Icon, Responsive, Header, Step, Label, Radio, Accordion, Table, Item, Image} from 'semantic-ui-react'
import 'react-credit-cards/es/styles-compiled.css'

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class User extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        segmentLoading: false,
        buttonLoading: false,
        status: 'ok'
      },
    }
  }
  handleClickOnEditUser = async (e) => {
    e.preventDefault();
    this.setState({ user: { segmentLoading: true, status: 'ok' }})
    await sleep(2000);
    this.setState({ user: { segmentLoading: false, status: 'editing' }})
  }
  handleClickOnEditUser2 = async (e) => {
    e.preventDefault();
    this.setState({ user: { buttonLoading: true, status: 'editing' }})
    await sleep(2000);
    this.setState({ user: { status: 'ok', buttonLoading: false }})
  }
  render(){
    return (
      <>
        {(!this.props.mobile && this.state.user.status === 'ok') && (
          <Segment.Group >
            {this.state.user.segmentLoading && (
              <Dimmer active inverted>
                <Loader size='small'>Loading</Loader>
              </Dimmer>
            )}
            <Segment onClick={this.handleClickOnEditUser} style={{cursor: "pointer"}}>
              <Header as='h4'>
                <Icon name='user' />
                <Header.Content>
                  1. Dados Pessoais <Icon name='check' color='green'/>
                </Header.Content>
              </Header>
              <p style={{fontSize: '12px'}}>Solicitamos apenas as informações essenciais para a realização da compra. </p>
              <p>+ alterar informações</p>
            </Segment>
            <Segment>
              <Header size='small' style={{margin: 0}}>Jader Bruno Pereira Lima</Header>
              <p style={{margin: 0}}>jaderpereiralima@gmail.com</p>
              <p style={{margin: 0}}>CPF 39137790862</p>
              <p style={{margin: 0}}>16 98114-7732</p>
            </Segment>
          </Segment.Group>
        )}
        {(this.props.mobile || this.state.user.status === 'editing') && (
          <Segment.Group >
            {this.state.user.segmentLoading && (
              <Dimmer active inverted>
                <Loader size='small'>Loading</Loader>
              </Dimmer>
            )}
            <Segment>
              <Header as='h4'>
                <Icon name='user' />
                <Header.Content>
                  1. Dados Pessoais <Icon name='check' color='green'/>
                </Header.Content>
              </Header>
              <p style={{fontSize: '12px'}}>Solicitamos apenas as informações essenciais para a realização da compra. </p>
            </Segment>
            <Segment>
              <Form>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Nome Completo</label>
                    <Input icon value='Jader Bruno Pereira Lima'>
                      <input />
                      <Icon name='check' color='green'/>
                    </Input>
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>E-mail</label>
                    <Input icon value='jaderpereiralima@gmail.com'>
                      <input />
                      <Icon name='check' color='green'/>
                    </Input>
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>CPF</label>
                    <Input icon value='39137790862'>
                      <input />
                      <Icon name='check' color='green'/>
                    </Input>
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Telefone ou Celular</label>
                    <Input icon value='16 98114-7732'>
                      <input />
                      <Icon name='check' color='green'/>
                    </Input>
                  </Form.Field>
                </Form.Group>
              </Form>
            </Segment>
            <Segment>
              <Button fluid color='blue' onClick={this.handleClickOnEditUser2} loading={this.state.user.buttonLoading}>
                Continuar<Icon name='arrow right'/>
              </Button>
            </Segment>
          </Segment.Group>
        )}
      </>
    )
  }
}

export default User