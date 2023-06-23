import { useState } from 'react';
import { Button, Card, Form, Input, Modal, Radio, Select, Space } from 'antd';
import styles from './styles.module.scss'
import api from '@/services/api';

export function CointsCard (props: any) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [value, setValue] = useState(0);
    const [form] = Form.useForm();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSumbit = async (dataValues: any) => {
    try {
        const response = await api.put(`/polices/${dataValues.rg}`,{
            dataValues
        })
        props.setCoints(response.data)
        form.resetFields()
        setValue(0)
        setIsModalOpen(false)
    }catch(err){
        console.log(err)
        
    }
  }
    return( 
        <>
            <Card style={{minWidth: 190, minHeight: 200, display:'flex', flexDirection:'column', alignItems: 'center', justifyContent:'center', boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', backgroundColor: "#003366", color:"#ffffff", fontSize: "18px",fontFamily: "Georgia" }}>
                <div className='flex flex-col gap-4 items-center'>
                    <p>{props.name}</p>
                    <p>{props.vagas} VAGAS</p>
                    <button disabled={props.vagas===0 ? true: false} onClick={showModal} className={props.vagas === 0 ? styles.buttonCardDisable: styles.buttonCard} >
                        Selecionar
                    </button>
                </div>
            </Card>
            <Modal   wrapClassName={styles.wrapperTeste} width={1000} style={{maxWidth: 'none', padding: 0, color:'#fff'}} footer={false} title={props.name} open={isModalOpen} onCancel={handleCancel}>
                <Form
                    form={form} 
                    onFinish={handleSumbit}
                    layout='vertical'
                    name="basic"
                    autoComplete="off"
                    style={{width: '100%', backgroundColor:"#333c6b", alignItems: 'flex-start', justifyContent:'flex-start', display: 'flex', flexDirection: 'column', gap:'10px', color:"red"}}
                >
                    <Form.Item
                        label="RG"
                        name="rg"
                        style={{width:'100%',color:'#fff', backgroundColor:"#333c6b", borderTop:"1px solid"}}
                        rules={[{ required: true, message: 'Por favor, insira seu RG!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="OPM"
                        name="opm"
                        style={{width:'100%', borderTop:"1px solid #fff", backgroundColor:"#333c6b"}}
                        rules={[{ required: true, message: 'Por favor, insira sua OPM!'}]}
                    >
                        <Card style={{width:'100%', backgroundColor:"#2b5b93", border:"1px solid #fff" }}>
                            <Radio.Group style={{width:'100%', backgroundColor: "#333c6b", display:'flex', flexWrap:'wrap', justifyContent:'center', border:"1px solid #fff"}} value={value} onChange={(e: any)=>setValue(e.target.value)}>
                                {props.opms.map((i: any)=>{
                                    return (
                                    <Radio style={{display:'flex', flexDirection:'column-reverse', maxWidth: 250, gap: 5, margin:"5px"}} key={i.id} disabled={i.vacancies ===0 ? true: false} value={i.id}>
                                        <Card style={{minWidth:250,fontSize:'38px', backgroundColor:"#2b5b93", color: "#fff", fontFamily:"Georgia"}}>
                                            <p>{i.name}</p>
                                            <p>{i.vacancies} VAGAS</p>
                                        </Card> 
                                    </Radio>)
                                })}
                            
                            </Radio.Group>
                        </Card>
                    </Form.Item>
                    <Form.Item style={{display:"flex", width:'100%', justifyContent:'center'}} >
                        <Button  htmlType="submit" style={{backgroundColor:"#fff", border:"1px solid #fff"}}>
                            CONFIRMAR
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
        )
}