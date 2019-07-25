import { Component } from 'react'
import { Grid, Segment, Button, Loader, Dimmer, Form, Input, Icon, Responsive, Header, Step, Label, Radio, Accordion, Table, Item, Image} from 'semantic-ui-react'

import User from './checkout/User'
import Address from './checkout/Address'
import Payment from './checkout/Payment'
import DiscountCoupon from './checkout/DiscountCoupon';
import Summary from './checkout/Summary';
import Steps from './checkout/Steps';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class Checkout extends Component {
  constructor() {
    super()
		this.state = {
      user: {
        segmentLoading: false,
        buttonLoading: false,
        status: 'ok'
      },
      address: {
        segmentLoading: false,
        buttonLoading: false,
        status: 'editing'
      },
    }
  }
  render(){
    return (
      <>
        {/* MOBILE */}
        <Responsive as={Grid} maxWidth={991}>
          <Grid>
            <Steps />
            <Grid.Row>
              <Grid.Column>
                <User mobile={true}/>
                <Address mobile={true}/>
                <Payment mobile={true}/>
                <DiscountCoupon />
                <Summary />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
        {/* COMPUTER */}
        <Responsive as={Grid} minWidth={992}>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
                <User />
                <Address />
              </Grid.Column>
              <Grid.Column>
                <Payment />
              </Grid.Column>
              <Grid.Column>
                <DiscountCoupon />
                <Summary />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </>
    )
  }
}

export default Checkout