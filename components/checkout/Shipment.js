import { Component } from 'react'
import { Grid, Segment, Button, Loader, Dimmer, Form, Input, Icon, Responsive, Header, Step, Label, Radio, Accordion, Table, Item, Image} from 'semantic-ui-react'
import 'react-credit-cards/es/styles-compiled.css'
import { formatMoney, sleep } from '../../lib/utils'

class Shipment extends Component {
  constructor() {
    super()
    this.state = {
      address: {
        segmentLoading: false,
        buttonLoading: false,
        status: 'ok'
      },
      shipmentOptions: [
        { key: '1', value: '1', title: 'Correios PAC', description: 'Até 12 dias úteis', price: 18.40, loading: false },
        { key: '2', value: '2', title: 'Jadlog Transportadora', description: 'Até 8 dias úteis', price: 24.90, loading: false },
        { key: '3', value: '3', title: 'Correios SEDEX', description: 'Até 6 dias úteis', price: 44.00, loading: false }
      ],
      selectedShipment: '1'
    }
  }
  handleShipmentChange = async (e) => {
    const shipmentIndex = this.state.shipmentOptions.findIndex(x => x.value === e.value);

    let newState = Object.assign({}, this.state);
    newState.shipmentOptions[shipmentIndex].loading = true;
    this.setState(newState)

    await sleep(500);

    newState = Object.assign({}, this.state);
    newState.shipmentOptions[shipmentIndex].loading = false;
    this.setState(newState)
    this.setState({ selectedShipment: e.value })
  }
  handleClickOnEditAddress = async (e) => {
    e.preventDefault();
    this.setState({ address: { segmentLoading: true, status: 'ok' }})
    await sleep(2000);
    this.setState({ address: { segmentLoading: false, status: 'editing' }})
  }
  handleClickOnEditAddress2 = async (e) => {
    e.preventDefault();
    this.setState({ address: { buttonLoading: true, status: 'editing' }})
    await sleep(2000);
    this.setState({ address: { status: 'ok', buttonLoading: false }})
  }
  render(){
    const shipmentOptionsList = this.state.shipmentOptions.map((shipment) =>
      <Segment key={shipment.key} onClick={() => this.handleShipmentChange(shipment)} style={{cursor: "pointer"}}>
        {shipment.loading && (
          <Dimmer active inverted>
            <Loader size='small'></Loader>
          </Dimmer>
        )}
        <Grid verticalAlign='middle'>
          <Grid.Row >
            <Grid.Column width={1}>
              <Radio
                name='radioGroup'
                value={shipment.value}
                checked={this.state.selectedShipment === shipment.value}
                onChange={this.handleShipmentChange}
              />
            </Grid.Column>
            <Grid.Column width={9}>
              <p style={{margin: 0, fontSize: '12px'}}><b>{shipment.title}</b></p>
              <p style={{margin: 0, fontSize: '11px'}}>{shipment.description}</p>
            </Grid.Column>
            <Grid.Column width={5}>
              <Label color='green' basic>{formatMoney(shipment.price)}</Label>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
    return (
      <>
        {(!this.props.mobile && this.state.address.status === 'ok') && (
          <Segment.Group >
            {this.state.address.segmentLoading && (
              <Dimmer active inverted>
                <Loader size='small'>Loading</Loader>
              </Dimmer>
            )}
            <Segment onClick={this.handleClickOnEditAddress} style={{cursor: "pointer"}}>
              <Header as='h4'>
                <Icon name='truck' />
                <Header.Content>
                  2. Entrega <Icon name='check' color='green'/>
                </Header.Content>
              </Header>
              <p style={{fontSize: '12px'}}>Cadastre ou selecione um endereço</p>
              <p>+ alterar entrega</p>
            </Segment>
            <Segment>
              <Header size='small' style={{margin: 0}}>Endereço para entrega:</Header>
              <p style={{margin: 0}}>Alameda Grajaú, 500 - Alphaville Industrial</p>
              <p style={{margin: 0}}>Barueri-SP | CEP 06454050</p>
              <p style={{margin: 0}}>AC: Jader Bruno Pereira Lima</p>
              <br></br>
              <Header size='small' style={{margin: 0}}>Forma de entrega selecionada:</Header>
              <p style={{margin: 0}}>Jadlog Package (Transportadora)</p>
              <p style={{margin: 0}}>R$ 29,00</p>
              <p style={{margin: 0}}>Prazo: até 12 dias úteis</p>
            </Segment>
          </Segment.Group>
        )}
        {(this.props.mobile || this.state.address.status === 'editing') && (
          <Segment.Group >
            <Segment>
              <Header as='h4'>
                <Icon name='truck' />
                <Header.Content>
                  2. Entrega <Icon name='check' color='green'/>
                </Header.Content>
              </Header>
              <p style={{fontSize: '12px'}}>Cadastre ou selecione um endereço</p>
              <p>+ novo endereço</p>
            </Segment>
            <Segment>
              <Form>
                <Form.Field>
                  Endereço de entrega:
                </Form.Field>
                <Segment.Group>
                  <Segment>
                    <Grid verticalAlign='middle'>
                      <Grid.Row>
                        <Grid.Column width={1}>
                          <Radio
                            name='radioGroup'
                            value='this'
                            checked={this.state.value === 'this'}
                            onChange={this.handleChange}
                          />
                        </Grid.Column>
                        <Grid.Column width={14}>
                          <p style={{margin: 0, fontSize: '11px'}}>Alameda Grajaú, 500 - Alphaville Industrial</p>
                          <p style={{margin: 0, fontSize: '11px'}}>Barueri-SP | CEP 06454050</p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Segment>
                  <Segment>
                    <Grid verticalAlign='middle'>
                      <Grid.Row>
                        <Grid.Column width={1}>
                          <Radio
                            name='radioGroup'
                            value='this'
                            checked={this.state.value === 'this'}
                            onChange={this.handleChange}
                          />
                        </Grid.Column>
                        <Grid.Column width={14}>
                          <p style={{margin: 0, fontSize: '11px'}}>Rua Rio Branco, 546 - Jardim Paulista</p>
                          <p style={{margin: 0, fontSize: '11px'}}>Ibitinga-SP | CEP 14940412</p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Segment>
                </Segment.Group>
              </Form>
            </Segment>
            <Segment>
              <Form>
                <Form.Field>
                  Forma de envio:
                </Form.Field>
                <Segment.Group>
                  {shipmentOptionsList}
                </Segment.Group>
              </Form>
            </Segment>
            <Segment>
              <Button fluid color='blue' onClick={this.handleClickOnEditAddress2} loading={this.state.address.buttonLoading}>
                Continuar<Icon name='arrow right'/>
              </Button>
            </Segment>
          </Segment.Group>
        )}
      </>
    )
  }
}
export default Shipment