import React, {useState} from 'react';
import Navbar from "@/pages/admin/header/header";
import { useDispatch, useSelector } from 'react-redux';
import { addService, getService, updateService } from '@/store/service/actions';
import {Form, Input, Upload, Button, message} from 'antd';

import dynamic from "next/dynamic";
const ReactQuill = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const Index = () => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const [content, setContent] = useState({});

     function clickMe(id){
        // Its grdon
        try{
            fetch("https://infinite.geeklab.am/api/services/"+id)
            .then(x=>x.json())
            .then(data=>setContent(data))
        }catch(err){
            console.log(err)
        }
        // its grdon
    }
    
  const handleSubmit = (values) => {
    // Add the avatar to the form values
    const formData = new FormData();
    formData.append('content', content);
    dispatch(updateService.request(formData));
    form.resetFields();
    message.success('Blog successfully added!');
  };

  const handleContentChange = (value) => {
    // setContent(value);
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
                          <div className="item-dropdown" onClick={()=>clickMe(1)}>Limo Service in Malibu</div>
                          <div className="item-dropdown"  onClick={()=>clickMe(2)}>Limo Service in Studio City</div>
                          <div className="item-dropdown"  onClick={()=>clickMe(3)}>Limo Service in Encino</div>
                          <div className="item-dropdown" onClick={()=>clickMe(4)}>Limo Service in Beverly Hills</div>
                          <div className="item-dropdown" onClick={()=>clickMe(5)}>Limo Service in Long Beach</div>
                          <div className="item-dropdown" onClick={()=>clickMe(6)}>Limo Service in Hollywood</div>
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

                    <div>
                    </div>

                    <Form form={form} layout="vertical" onFinish={handleSubmit}>

                    <Form.Item label="Content" name="content">
                      <ReactQuill
                        value={content.content}
                        onChange={handleContentChange}
                        modules={{
                          toolbar: {
                            container: [
                              ['bold', 'italic', 'underline', 'strike'], // toggled buttons
                            ],
                          },
                        }}
                      />
                    </Form.Item>

                    </Form>
        </Navbar>
    )
}

export default Index;