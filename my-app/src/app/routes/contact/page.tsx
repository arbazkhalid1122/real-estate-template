'use client'
import { Col, Form, Input, Row } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import { VscLocation } from 'react-icons/vsc'
import styles from './style.module.scss'
import Pageheader from '@/app/common components/pageHeader';

function Contact() {
    const [form] = Form.useForm();
    const data = {
        title: 'Contact information',
        mainTitle: 'Contact Us',
      }

    return (
        <div>
           <Pageheader data ={data} />
            <div style={{ padding: '8vmax' }}>
                <div className={styles.container}>
                    <h1>Send Messages</h1>
                    <p>Huge number of propreties availabe here for buy, sell and Rent.<br /> Also you find here co-living property, lots opportunity</p>
                </div>

                <div className={styles.formcontainer}>
                    <div className={styles.setform}>
                        <Form layout="vertical" form={form}>
                            <Row gutter={16} >
                                <Col lg={12} md={24} sm={24} xs={24}>
                                    <Form.Item
                                        name={'field1-'}>
                                        <Input size='large' placeholder='Agency Title' />
                                    </Form.Item>
                                </Col>
                                <Col lg={12} md={24} sm={24} xs={24}>
                                    <Form.Item
                                        name={'field2-'}>
                                        <Input size='large' placeholder='Price $' />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row gutter={16} >
                                <Col lg={12} sm={24} xs={24}>
                                    <Form.Item
                                        name={'field1-'}>
                                        <Input size='large' placeholder='Agency Title' />
                                    </Form.Item>
                                </Col>
                                <Col lg={12} sm={24} xs={24}>
                                    <Form.Item
                                        name={'field2-'}>
                                        <Input size='large' placeholder='Price $' />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={24} md={24} sm={24} xs={24}>
                                    <TextArea rows={8}></TextArea>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div className={styles.imgContainer}>
                        <img src="/contact/map1.jpg" alt="" />
                    </div>
                </div>
                <div className={styles.buttonset}>
                    <button>Contact Us</button>
                </div>
                <br /><br />
                <div className={styles.cardconainer}>
                    <div className={styles.cards}>
                        <div><VscLocation /></div>
                        <div>
                            <h4>Address</h4>
                            <p>2104 Charmaine Lane Amarillo, New York</p>
                        </div>
                    </div>
                    <div className={styles.cards}>
                        <div><VscLocation /></div>
                        <div>
                            <h4>Address</h4>
                            <p>2104 Charmaine Lane Amarillo, New York</p>
                        </div>
                    </div>
                    <div className={styles.cards}>
                        <div><VscLocation /></div>
                        <div>
                            <h4>Address</h4>
                            <p>2104 Charmaine Lane Amarillo, New York</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Contact
