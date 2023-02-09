import React, {useState} from "react";
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./products";
import {v4 as uuid} from 'uuid';
import {Link, useNavigate} from 'react-router-dom'

function AddProduct() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    let history = useNavigate();

    const handleSubmit=(e) =>{
        e.preventDefault();

        const ids=uuid();
        let uniqueId = ids.slice(0,8);

        let a= name,
        b=age;

        Products.push({id: uniqueId, Name:a ,Age:b});

        history("/");

    }

    return (
        <div>
            <Form className="d-grid gap-2" style={{margin: "15rem"}}>
                <Form.Group className=" mb-3" controleID='forName'>
                    <Form.Control type='text' placeholder="entrer nom" required
                                  onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className=" mb-3" controleID='forAge'>
                    <Form.Control type='text' placeholder="entrer l'age" required
                                  onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Button type={"submit"} onClick={(e) => handleSubmit(e)}>Submit</Button>

            </Form>
        </div>

    )
}

export default AddProduct;