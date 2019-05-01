import Link from 'next/link'
import React from 'react'
import { Container, Row, Col, Button, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap'
import Page from '../components/page'
import Layout from '../components/layout'

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} navmenu={false} container={false}>
        <Jumbotron>
          <Container>
            <h1 className="display-3 text-center">Lets Get Wheelman!</h1>
            <p className="lead text-center">Custom T-Shirts, Hats and Stickers you can be proud of.</p>
          </Container>
        </Jumbotron>
        <Container>
          <h2 className="text-center display-4 mt-5 mb-2">Featured Gear</h2>
          <Row className="pb-5">
            <Col xs="12" sm="4" className="pt-5">
              <h3 className="text-center mb-4">T-Shirts</h3>
              <ListGroup>
                <ListGroupItem><a className="text-dark" href="https://expressjs.com">Express</a></ListGroupItem>
                <ListGroupItem><a className="text-dark" href="https://www.npmjs.com/package/express-sessions">Express Sessions</a></ListGroupItem>
                <ListGroupItem><a className="text-dark" href="https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)">CSRF Tokens</a></ListGroupItem>
                <ListGroupItem><a className="text-dark" href="https://www.owasp.org/index.php/HttpOnly">HTTP Only Cookies</a></ListGroupItem>
              </ListGroup>
            </Col>
            <Col xs="12" sm="4" className="pt-5">
              <h3 className="text-center mb-4">Hats</h3>
              <ListGroup>
                <ListGroupItem><a className="text-dark" href="http://www.passportjs.org">Passport</a></ListGroupItem>
                <ListGroupItem><Link href="/examples/authentication"><a className="text-dark">Email Sign In</a></Link></ListGroupItem>
                <ListGroupItem><Link href="/examples/authentication"><a className="text-dark">oAuth (Facebook, Google, Twitter…)</a></Link></ListGroupItem>
                <ListGroupItem><a className="text-dark" href="https://www.npmjs.com/package/next-auth">NextAuth</a></ListGroupItem>
              </ListGroup>
            </Col>
            <Col xs="12" sm="4" className="pt-5">
              <h4 className="text-center mb-4">Stickers</h4>
              <ListGroup>
                <ListGroupItem><a className="text-dark" href="https://getbootstrap.com">Bootstrap 4.0</a></ListGroupItem>
                <ListGroupItem><a className="text-dark" href="http://reactstrap.github.io/">Reactstrap</a></ListGroupItem>
                <ListGroupItem><a className="text-dark" href="https://ionicframework.com/docs/ionicons/">Ionicons</a></ListGroupItem>
                <ListGroupItem><a className="text-dark" href="http://sass-lang.com/">SASS</a></ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}