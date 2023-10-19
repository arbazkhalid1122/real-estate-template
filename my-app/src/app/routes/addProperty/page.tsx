'use client'
import React from 'react';
import styles from './style.module.scss'
import { Form, Input, Button, Row, Col, Upload, Radio } from 'antd';
import { GoFileDirectory } from 'react-icons/go';
import { RadioTitle1, RadioTitle2 } from '../../../app/data';
import store from '@/app/store/store';
import '../contact/style.module.scss'
const Add = () => {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const { postFeaturProperty } = store.featureProperty;



  const RadioGroup = ({ title }: any) => (
    <div className='d-flex'>
      <div className='d-flex flex-column'>
        {title.map((name: any, index: any) => (
          <Radio key={index}>{name}</Radio>
        ))}
      </div>
    </div>
  );

  const getVal = (val: any) => {
    const data = {
      ...val,
      imageSrc: '/properties/properties6.webp',
      cameraCount: 4,
      addedDate: 'Added: 25 November, 2021',

    }
    postFeaturProperty(data)
    form.resetFields()
  }


  return (
    <div>
      <div className={styles.property}>
        <p>Property ADD</p>
        <h1>Add Property</h1>
        <p>Huge number of propreties availabe here for buy and sell also you can find here co-living property as you like</p>
      </div>
      <div className={styles.antdform}>
        <Form form={form} onFinish={getVal} layout="vertical" >
          <Row gutter={16} >
            <Col lg={16} sm={24} xs={24}>
              <Form.Item
                name={'title'}
                label={'Property Title '}
                rules={[
                  {
                    required: true,
                    message: 'Please enter the Property Title',
                  },
                ]}>
                <Input size='large' placeholder='Agency Title' />
              </Form.Item>
            </Col>
            <Col lg={8} sm={24} xs={24}>
              <Form.Item
                name={'price'}
                label={'Price'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter Price',
                  },
                ]}>
                <Input size='large' placeholder='Price $' />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item label={'Property Description '}>
                <TextArea rows={18} placeholder='write your text' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16} >
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name={'location'}
                label={'Location'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter the Property Title',
                  },
                ]}>
                <Input size='large' placeholder='Address line 1' />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item className={`${styles.formitem} mt-2`}>
                <Input size='large' className={`${styles.setlabel}`} placeholder='Address line 2' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16} >
            <Col lg={12} sm={24} xs={24}>
              <Form.Item>
                <Input className={styles.setlabel} size='large' placeholder='Address line 1' />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item>
                <Input className={styles.setlabel} size='large' placeholder='Address line 2' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} >
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                label={'Property Type'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter the Property Title',
                  },
                ]}>
                <Input size='large' placeholder='Duplex vila' />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                label={'Property Status'}
                name={'status'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter the Property Title',
                  },
                ]}>
                <Input size='large' placeholder='Sale' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} >
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                label={'Property Info'}
                name={'sqFootage'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter the Property Title',
                  },
                ]}>
                <Input size='large' placeholder='Area(sqft)' />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                className='mt-2'
                name={'bedrooms'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter Number of Bedrooms',
                  },
                ]}>
                <Input className={styles.setlabel} size='large' type='number' placeholder='Number of Bedrooms' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} >
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name={'bathrooms'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter Number of Bathrooms',
                  },
                ]}>
                <Input className={styles.setlabel} size='large' type='number' placeholder='Number of Bathrooms' />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name={'carSpaces'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter Number of Garage',
                  },
                ]}>
                <Input className={styles.setlabel} size='large' type='number' placeholder='Number of Garage' />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <label htmlFor="">Add Images</label>
            <Col className={styles.setcol} lg={24} md={24} sm={24} xs={24}>
              <Form.Item>
                <Upload>
                  <Button icon={<GoFileDirectory />}>Click to Upload</Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <label htmlFor="">Add Videos</label>
            <Col className={styles.setcol} lg={24} md={24} sm={24} xs={24}>
              <Form.Item>
                <Upload>
                  <Button icon={<GoFileDirectory />}>Click to Upload</Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>

      <div className={styles.container2}>
        <div>
          <h1 className={styles.label}>Property Aminities</h1>
          <div className='d-flex'>
            <RadioGroup title={RadioTitle1} />
            <RadioGroup title={RadioTitle2} />
          </div>
        </div>
        <div>
          <h1 className={styles.label}>Map</h1>
          <div className={styles.setimg}>
            <img src="/properties/map.avif" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.addproperty}>
        <button type="submit" onClick={() => form.submit()}>Add Property</button>
      </div>
    </div>
  );
};

export default Add;


