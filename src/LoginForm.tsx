import config  from './config.json';
import React, { FC, useState, useEffect } from 'react';


import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Input, Label, Col } from 'reactstrap';
interface LoginFormProps {
    setShowDetails: any;

}
const LoginForm: FC<LoginFormProps> = ({ setShowDetails}) => {
   
     
    const [modal, setModal] = useState(true);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const toggle = () => {
       setModal(!modal);
    };
    
    const handleNameChange = (e: any) => {
       setUser(e.target.value);
    }

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
     }
    const handleLogin = () => {
       
        if ( (user == config.user) && (password == config.password)) {
           setShowDetails(true);
        }
       setModal(false);
    };

    const handleCancel = () => {
       setModal(false);
    };

    return (<>
    
    <Modal
    toggle={toggle}
    isOpen={modal}
  >
    <ModalHeader toggle={toggle}>
      Login
    </ModalHeader>
    <ModalBody>
    <Form>
        <FormGroup row>
            <Label
            for="exampleName"
            sm={2}
            >
            Username
        </Label>
        <Col sm={10}>
            <Input
                id="exampleName"
                 name="username"
                 placeholder="enter a username"
                type="text"
                value={user}
                onChange={handleNameChange}
            />
        </Col>
    </FormGroup>
    <FormGroup row>
            <Label
                for="examplePassword"
                sm={2}
            >
             Password
            </Label>
            <Col sm={10}>
            <Input
                 id="examplePassword"
                name="password"
             placeholder="Enter password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
            />
            </Col>
  </FormGroup>
  </Form>
    </ModalBody>
    <ModalFooter>
      <Button
        color="primary"
        onClick={ handleLogin}
      >
        Login
      </Button>
      {' '}
      <Button onClick={handleCancel}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal></>);
}

export default LoginForm;

