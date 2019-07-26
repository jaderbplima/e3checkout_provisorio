import { Component } from 'react'
import { Grid, Segment, Button, Loader, Dimmer, Form, Input, Icon, Responsive, Header, Step, Label, Radio, Accordion, Table, Item, Image} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { showUserEdit, finishUserEdit } from '../../actions/checkout'

import 'react-credit-cards/es/styles-compiled.css'


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class User extends Component {
  constructor() {
    super()
  }
  handleClickOnEdit = (e) => {
    e.preventDefault();
    console.log('handleClickOnEdit')
    const { showUserEdit } = this.props
    showUserEdit()
  }
  handleClickOnButton = async (e) => {
    e.preventDefault();
    console.log('handleClickOnButton')
    const { finishUserEdit } = this.props
    finishUserEdit()
  }
  render(){
    const disabled = this.props.userSegment.view == 'disabled' ? true : false
    return (
      <>
        {(['enabled', 'disabled'].includes(this.props.userSegment.view)) && (
          <Segment.Group>
            {this.props.userSegment.loading && (
              <Dimmer active inverted>
                <Loader size='small'>Loading</Loader>
              </Dimmer>
            )}
            <Segment disabled={disabled} onClick={this.handleClickOnEdit} style={{cursor: "pointer"}}>
              <Header as='h4'>
                <Icon name='user' />
                <Header.Content>
                  1. Dados Pessoais <Icon name='check' color='green'/>
                </Header.Content>
              </Header>
              <p style={{fontSize: '12px'}}>Solicitamos apenas as informações essenciais para a realização da compra. </p>
              <p>+ alterar informações</p>
            </Segment>
            <Segment disabled={disabled}>
              <Header size='small' style={{margin: 0}}>Jader Bruno Pereira Lima</Header>
              <p style={{margin: 0}}>jaderpereiralima@gmail.com</p>
              <p style={{margin: 0}}>CPF 39137790862</p>
              <p style={{margin: 0}}>16 98114-7732</p>
            </Segment>
          </Segment.Group>
        )}
        {(this.props.userSegment.view === 'edit') && (
          <Segment.Group >
            {this.props.userSegment.loading && (
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
              <Button fluid color='blue' onClick={this.handleClickOnButton} loading={this.props.userSegment.buttonLoading}>
                Continuar<Icon name='arrow right'/>
              </Button>
            </Segment>
          </Segment.Group>
        )}
      </>
    )
  }
}

function mapStateToProps (store) {
  const { checkoutState } = store
  const { userSegment } = checkoutState
  return { userSegment }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ showUserEdit, finishUserEdit }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)