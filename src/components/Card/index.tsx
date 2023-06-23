import styles from './styles.module.scss'
import { useState } from 'react';
import { Button, Card, Checkbox, Form, Input, Modal, Select } from 'antd';

export function CointsCard (props: any) {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
    return( 
        <>
            <Card style={{minWidth: 150, minHeight: 200, display:'flex', flexDirection:'column', alignItems: 'center', justifyContent:'center', boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                <div className='flex flex-col gap-4 items-center'>
                    <p>{props.name}</p>
                    <p>{props.vagas} VAGAS</p>
                    <button disabled={props.vagas===0 ? true: false} onClick={showModal} className={props.vagas === 0 ? styles.buttonCardDisable: styles.buttonCard} >
                        Selecionar
                    </button>
                </div>
            </Card>
            <Modal footer={false} title={props.name} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    layout='vertical'
                    name="basic"
                    autoComplete="off"
                    style={{width: '100%', alignItems: 'flex-start', justifyContent:'flex-start', display: 'flex', flexDirection: 'column', gap:'10px'}}
                >
                    <Form.Item
                        label="RG"
                        name="rg"
                        style={{width:'100%'}}
                        rules={[{ required: true, message: 'Por favor, insira seu RG!' }]}
                    >
                        <Input  maxLength={2} type='number'  style={{maxWidth:'150px'}}/>
                    </Form.Item>
                    <Form.Item
                        label="OPM"
                        name="opm"
                        style={{width:'100%'}}
                        rules={[{ required: true, message: 'Por favor, insira sua OPM!'}]}
                    >
                        <Select style={{maxWidth:'250px'}}  options={props.opms.map((i: any)=>{
                            return {
                                value: i.name,
                                label: i.name,
                                disabled: i.vacancies === 0 ? true : false
                            }
                        })}>
                            
                        </Select>
                    </Form.Item>
                    <Form.Item style={{display:"flex", width:'100%', justifyContent:'flex-end'}} >
                        <Button  htmlType="submit">
                            CONFIRMAR
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
        )
}