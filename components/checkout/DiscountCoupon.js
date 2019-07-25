import { Component } from 'react'
import { Grid, Segment, Button, Loader, Dimmer, Form, Input, Icon, Responsive, Header, Step, Label, Radio, Accordion, Table, Item, Image} from 'semantic-ui-react'

class DiscountCoupon extends Component {
  constructor() {
    super()
  }
  render(){
    return (
      <>
        <Segment.Group>
          <Segment>
            <Header as='h4'>
              <Icon name='tag' />
              <Header.Content>
                Cupom de desconto
              </Header.Content>
            </Header>
            <p style={{fontSize: '12px'}}>Aplique o seu cupom de desconto:</p>
            <Form>
              <Form.Group widths='equal'>
                <Form.Field>
                  <Input icon value=''>
                    <input />
                    <Icon name='check' color='green'/>
                  </Input>
                </Form.Field>
              </Form.Group>
            </Form>
            <Button fluid color='black'>
              <Icon name='tag'/>Adicionar cupom 
            </Button>
          </Segment>
        </Segment.Group>
      </>
    )
  }
}
export default DiscountCoupon