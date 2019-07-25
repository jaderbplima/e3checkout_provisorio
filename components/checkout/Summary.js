import { Component } from 'react'
import { Grid, Segment, Button, Loader, Dimmer, Form, Input, Icon, Responsive, Header, Step, Label, Radio, Accordion, Table, Item, Image} from 'semantic-ui-react'

class Summary extends Component {
  constructor() {
    super()
  }
  render(){
    return (
      <>
        <Segment.Group>
          <Segment>
            <Header as='h4'>
              <Icon name='info' />
              <Header.Content>
                Resumo do pedido
              </Header.Content>
            </Header>
            <Table basic='very' celled>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Header as='h5' image>
                      <Header.Content>
                        Subtotal
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell textAlign='right'>R$ 169,00</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Header as='h5'>
                      <Header.Content>
                        Descontos
                        <Header.Subheader>(Cupom aplicado)</Header.Subheader>
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell textAlign='right'> - R$ 17,00</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Header as='h5'>
                      <Header.Content>
                        Descontos
                        <Header.Subheader>(Boleto)</Header.Subheader>
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell textAlign='right'> - R$ 6,60</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Header as='h5'>
                      <Header.Content>
                        Frete
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell textAlign='right'> + R$ 24,90</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Header as='h5'>
                      <Header.Content>
                        Total
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell textAlign='right'>
                    <Header as='h3' color='green'>
                      <Header.Content>
                        R$ 158,40
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <p>Items do pedido:</p>
            <Item.Group divided>
              <Item>
                <Item.Image size='tiny' src='/images/wireframe/image.png' />
                <Item.Content verticalAlign='middle'>
                  <p>Kit de Almofadas Alure</p>
                  <p>1 unidade - R$ 79,90</p>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image size='tiny' src='/images/wireframe/image.png' />
                <Item.Content verticalAlign='middle'>
                  <p>Cobre Leito Camafeu</p>
                  <p>1 unidade - R$ 51,00</p>
                </Item.Content>
              </Item>
              <Item>
                <Item.Image size='tiny' src='/images/wireframe/image.png' />
                <Item.Content verticalAlign='middle'>
                  <p>Cortina Florence</p>
                  <p>1 unidade - R$ 20,99</p>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        </Segment.Group>     
      </>
    )
  }
}
export default Summary