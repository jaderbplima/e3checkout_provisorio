import { Component } from 'react'
import { Grid, Segment, Button, Form, Input, Icon, Responsive, Header, Label, Radio, Accordion, Select, Dimmer, Loader } from 'semantic-ui-react'
import Cards from 'react-credit-cards';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import 'react-credit-cards/es/styles-compiled.css'
import { formatMoney, sleep } from '../../lib/utils'
import { incSubTotal } from '../../actions/checkout'


class Payment extends Component {
  constructor() {
    super()
    this.handleChangeOnCardForm = this.handleChangeOnCardForm.bind(this);
    this.state = {
      card: {
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focused: 'number'
      },
      installmentOptions: [
        { key: '1', value: '1', text: '1x de R$ 158,90' },
        { key: '2', value: '2', text: '2x de R$ 76,82' },
        { key: '3', value: '3', text: '3x de R$ 45,90' },
      ],
      selectedPaymentMethod: 'boleto',
      paymentMethodLoading: false
    }
  }
  handlePaymentMethodChange = async (e) => {
    let newState = Object.assign({}, this.state);
    newState.paymentMethodLoading = true;
    this.setState(newState)

    await sleep(500);

    newState = Object.assign({}, this.state);
    newState.paymentMethodLoading = false;
    this.setState(newState)

    this.setState({ selectedPaymentMethod: e })
  }
  handleChangeOnCardForm(e) {
    e.preventDefault();
    let newState = Object.assign({}, this.state);
    newState.card[e.target.name] = e.target.value;
    newState.card.focused = e.target.name;
    this.setState(newState)
  }

  incrementSubtotal = () => {
    const { incSubTotal } = this.props
    incSubTotal()
  }
  render(){
    return (
      <>
        <Segment.Group >
          <Segment>
            <Header as='h4'>
              <Icon name='credit card' />
              <Header.Content>
                3. Pagamento
              </Header.Content>
            </Header>
            <p style={{fontSize: '12px'}}>Escolha abaixo uma forma de pagamento</p>
            <Accordion styled>
              <Accordion.Title active={true} onClick={() => this.handlePaymentMethodChange('creditCard')}>
                {this.state.paymentMethodLoading && (
                  <Dimmer active inverted>
                    <Loader size='small'>Loading</Loader>
                  </Dimmer>
                )}
                <Grid >
                  <Grid.Row verticalAlign='middle'>
                    <Grid.Column width={1}>
                      <Radio
                        name='radioGroup'
                        value='this'
                        checked={this.state.selectedPaymentMethod === 'creditCard'}
                        onChange={this.handleChange}
                      />
                    </Grid.Column>
                    <Grid.Column width={14}>
                      <p><Icon name='credit card' /><b>Cartão de crédito</b></p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Accordion.Title>
              <Accordion.Content active={this.state.selectedPaymentMethod === 'creditCard'}>
                {(!this.props.mobile) && (
                  <Responsive minWidth={1200}>
                    <Cards
                      number={this.state.card.number}
                      name={this.state.card.name}
                      expiry={this.state.card.expiry}
                      cvc={this.state.card.cvc}
                      focused={this.state.card.focused}
                    />
                    <br></br>
                  </Responsive>
                )}
                {(this.props.mobile) && (
                  <>
                    <Cards
                      number={this.state.card.number}
                      name={this.state.card.name}
                      expiry={this.state.card.expiry}
                      cvc={this.state.card.cvc}
                      focused={this.state.card.focused}
                    />
                    <br></br>
                  </>
                )}
                <Form size='tiny'>
                  <Form.Group>
                    <Form.Field width={10}>
                      <label>Número do cartão</label>
                      <Input icon placeholder='' name='number' value={this.state.card.number} onChange={this.handleChangeOnCardForm}>
                        <input />
                        <Icon name='check' color='green'/>
                      </Input>
                    </Form.Field>
                    <Form.Field width={6}>
                      <label>Validade</label>
                      <Input icon placeholder='MM/AA' name='expiry' value={this.state.card.expiry} onChange={this.handleChangeOnCardForm}>
                        <input />
                        <Icon name='check' color='green'/>
                      </Input>
                    </Form.Field>
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Field width={10}>
                      <label>Nome impresso no cartão</label>
                      <Input icon name='name' value={this.state.card.name} onChange={this.handleChangeOnCardForm}>
                        <input />
                        <Icon name='check' color='green'/>
                      </Input>
                    </Form.Field>
                    <Form.Field width={6}>
                      <label>CVC</label>
                      <Input icon name='cvc' value={this.state.card.cvc} onChange={this.handleChangeOnCardForm}>
                        <input />
                        <Icon name='check' color='green'/>
                      </Input>
                    </Form.Field>
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Field>
                      <label>CPF do titular</label>
                      <Input icon value='391.377.908-62'>
                        <input />
                        <Icon name='check' color='green'/>
                      </Input>
                    </Form.Field>
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Field>
                      <label>Parcelas</label>
                      <Select placeholder='' options={this.state.installmentOptions} />
                    </Form.Field>
                  </Form.Group>
                </Form>
                <Button fluid color='green'>
                  <Icon name='lock'/>Comprar agora 
                </Button>
              </Accordion.Content>
              <Accordion.Title active={true} onClick={() => this.handlePaymentMethodChange('boleto')}>
                <Grid>
                  <Grid.Row verticalAlign='middle'>
                    <Grid.Column width={1}>
                      <Radio
                        name='radioGroup'
                        value='this'
                        checked={this.state.selectedPaymentMethod === 'boleto'}
                        onChange={this.handleChange}
                      />
                    </Grid.Column>
                    <Grid.Column width={14}>
                      <p><Icon name='barcode' /><b>Boleto</b></p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Accordion.Title>
              <Accordion.Content active={this.state.selectedPaymentMethod === 'boleto'}>
                <p>
                  Somente quando recebermos a confirmação, em até 48h após o pagamento, seguiremos com o envio das suas compras. 
                  O prazo de entrega passa a ser contado somente após a confirmação do pagamento.
                </p>
                <Header size='small' style={{margin: 0}} color='green'>Valor do boleto: R$ 169,00</Header>
                <Button fluid color='green' onClick={() => this.incrementSubtotal()}>
                  <Icon name='lock'/>Comprar agora 
                </Button>
              </Accordion.Content>
              <Accordion.Title active={true} onClick={() => this.handlePaymentMethodChange('deposit')}>
                <Grid>
                  <Grid.Row verticalAlign='middle'>
                    <Grid.Column width={1}>
                      <Radio
                        name='radioGroup'
                        value='this'
                        checked={this.state.selectedPaymentMethod === 'deposit'}
                        onChange={this.handleChange}
                      />
                    </Grid.Column>
                    <Grid.Column width={14}>
                      <p><Icon name='money' /><b>Depósito bancário</b></p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid> 
              </Accordion.Title>
              <Accordion.Content active={this.state.selectedPaymentMethod === 'deposit'}>
                <p>
                  Selecione o banco abaixo:
                </p>
                <Segment.Group>
                  <Segment>
                    <Grid verticalAlign='middle'>
                      <Grid.Row >
                        <Grid.Column width={1}>
                          <Radio
                            name='radioGroup'
                            value='this'
                            checked={this.state.value === 'this'}
                            onChange={this.handleChange}
                          />
                        </Grid.Column>
                        <Grid.Column width={9}>
                          <p><b>Bradesco</b></p>
                        </Grid.Column>
                        <Grid.Column width={3}>
                          <Label color='red' basic>Logo</Label>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Segment>
                  <Segment>
                    <Grid verticalAlign='middle'>
                      <Grid.Row >
                        <Grid.Column width={1}>
                          <Radio
                            name='radioGroup'
                            value='this'
                            checked={this.state.value === 'this'}
                          />
                        </Grid.Column>
                        <Grid.Column width={9}>
                          <p><b>Banco do Brasil</b></p>
                        </Grid.Column>
                        <Grid.Column width={3}>
                          <Label color='yellow' basic>Logo</Label>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Segment>
                  <Segment>
                    <Grid verticalAlign='middle'>
                      <Grid.Row >
                        <Grid.Column width={1}>
                          <Radio
                            name='radioGroup'
                            value='this'
                            checked={this.state.value === 'this'}
                          />
                        </Grid.Column>
                        <Grid.Column width={9}>
                          <p><b>Santander</b></p>
                        </Grid.Column>
                        <Grid.Column width={3}>
                          <Label color='red' basic>Logo</Label>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Segment>
                </Segment.Group>
                <Header size='small' style={{margin: 0}} color='green'>Valor do depósito: R$ 169,00</Header>
                <Button fluid color='green'>
                  <Icon name='lock'/>Comprar agora 
                </Button>
              </Accordion.Content>
            </Accordion>
          </Segment>
        </Segment.Group>      
      </>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ incSubTotal }, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Payment)