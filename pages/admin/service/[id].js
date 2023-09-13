import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import Navbar from "@/pages/admin/header/header";
import { useDispatch, useSelector } from 'react-redux';
import { addService, getService, updateService } from '@/store/service/actions';
import {Form, Input, Upload, Button} from 'antd';
import { useRouter } from 'next/router';


const Index = () => {
    const [service, setService] = useState({});
    const router = useRouter();
    const { id } = router.query;
    useEffect(()=>{
        fetch("https://infinite.geeklab.am/api/services/"+id)
            .then(x=>x.json())
            .then(data=>setService(data))
    },[id])

  const dispatch = useDispatch();

  const [form] = Form.useForm();
    
  const handleSubmit = (values) => {
    // Add the avatar to the form values
    const formData = new FormData();
    formData.append('content', content);
    dispatch(updateService.request({formData}));
    form.resetFields();
    message.success('Service successfully updated!');
  };

    return(
        <Navbar>
            <h1>Service</h1>
            <div className="item-dropdown">
                      <p>
                        Served Areas
                      </p>
                      <div className="sub-dropdown2">
                        <div className="sub-dropdown-content2">
                          <div className="item-dropdown"><Link  href="/admin/service/1">Limo Service in Malibu</Link></div>
                          <div className="item-dropdown"><Link  href="/admin/service/2">Limo Service in Studio City</Link></div>
                          <div className="item-dropdown"><Link  href="/admin/service/3">Limo Service in Encino</Link></div>
                          <div className="item-dropdown"><Link  href="/admin/service/4">Limo Service in Beverly Hills</Link></div>
                          <div className="item-dropdown"><Link  href="/admin/service/5">Limo Service in Long Beach</Link></div>
                          <div className="item-dropdown"><Link  href="/admin/service/6">Limo Service in Hollywood</Link></div>
                        </div>
                      </div>
                    </div>
                    <div className="item-dropdown">
                      <p>Luxury Limo Los Angeles</p>
                    </div>
                    <div className="item-dropdown">
                      <p>LAX Limo Service</p>
                    </div>
                    <div className="item-dropdown">
                      <p>Beverly Hills Limo Service</p>
                    </div>
                    <div className="item-dropdown">
                      <p>Concert and Event Limo Service</p>
                    </div>
                    <div className="item-dropdown">
                      <p>Dropdown</p>
                    </div>
                    <div className="item-dropdown">
                      <p>Executive Sedan Service</p>
                    </div>
                    <div className="item-dropdown">
                      <p>Occasions</p>
                    </div>

                   
                    <Form form={form} layout="vertical" onFinish={handleSubmit}>
                        <textarea name='content' style={{width:'100%', height:'200px', padding:'10px'}} >
                            {service.content}
                        </textarea>  
                        <br/>       
                        <Button type='primary'>Update</Button>              
                    </Form>
        </Navbar>
    )
}

export default Index;