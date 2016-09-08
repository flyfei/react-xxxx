import React from 'react'
import { Container, Row, Col } from 'components/grids'
import Button from 'components/Button'
import Card from 'components/Card'
import Tag from 'components/Tag'
import Title from 'components/Title'

const AppCard = () => (
  <Row>
    <Col xs="8" md="12">
      <img src="http://v-man.app.xiaoyun.com/images/v.png" style={{ width: '100%' }} />
    </Col>
    <Col xs="16" md="12">
      <div style={{ width: '80%', marginBottom: 30 }}>
        <img src="http://qrcode.app.xiaoyun.com/QrCode/v1/app/198867/qrcode/240x240" style={{ width: '100%', padding: 15, background: '#f2f2f2', borderRadius: 3 }} />
        <small style={{ textAlign: 'center', display: 'block' }}>扫码可下载app</small>
      </div>
    </Col>
  </Row>
)

const Left = () => (
  <Col lg="17">
    <Row>
      <Col sm="24">
        <Card>
          <Title type="danger" to="/" inline>
            时代在召唤
          </Title>
          <Tag type="primary">云端</Tag>
          <Tag>基础版</Tag>
          <hr />
          <Row>
            <Col sm="24" md="12">
              <AppCard />
            </Col>
            <Col sm="24" md="12">
              <AppCard />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col sm="6">
        <Card type="primary" icon="&#xe609;">
          <p>
            注册用户(人)
          </p>
          <h3>8999</h3>
        </Card>
      </Col>
      <Col sm="6">
        <Card type="danger" icon="&#xe61f;">
          card content
        </Card>
      </Col>
      <Col sm="6">
        <Card type="success" icon="&#xe623;">
          card content
        </Card>
      </Col>
      <Col sm="6">
        <Card type="warning" icon="&#xe624;">
          card content
        </Card>
      </Col>
    </Row>
    <Row>
      <Col sm="24">
        <Button to="/">CLICK</Button>
        &emsp;
        <Button type="primary">primary</Button>
        &emsp;
        <Button type="danger" loading>danger</Button>
        &emsp;
        <Button type="warning">warning</Button>
        &emsp;
        <Button type="success">success</Button>
      </Col>
    </Row>
  </Col>
)

const Right = () => (
  <Col lg="7">
    <Card>
      xxxxx
    </Card>
  </Col>
)

export default () => (
  <Container>
    <Row>
      <Left />
      <Right />
    </Row>
  </Container>
)

