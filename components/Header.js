import Link from 'next/link'
import { Menu, Container, Image } from 'semantic-ui-react'
import styled from "styled-components";

const CustomMenu = styled(Menu)`
  &&& {
    background-color: palevioletred

    &:hover {
      background-color: blue;
    }
  }
`;

export default () => (
  <Menu fixed='top' size='huge' inverted>
    <Container text>
      <Link href='/' prefetch passHref>
        <Menu.Item as='a' header>
          <Image
            size='mini'
            src='/static/moltin-light-hex.svg'
            style={{ marginRight: '1.5em' }}
          />
          Checkout
        </Menu.Item>
      </Link>
    </Container>
  </Menu>
)