import React, {useEffect, useState} from "react";
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./products";
import {v4 as uuid} from 'uuid';
import {Link, useNavigate} from 'react-router-dom'

function EditProduct() {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    let history = useNavigate();

    var index = Products.map(function (p) {
        //return product from this id
        return p.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Products[index];
        a.Name = name;
        a.Age = age;

        history("/");

    }

    useEffect(() => {
        setId(localStorage.getItem('Id'));
        setName(localStorage.getItem('Name'));
        setAge(localStorage.getItem('Age'));

    }, []);


    return (
        <div>
            <Form className="d-grid gap-2" style={{margin: "15rem"}}>
                <Form.Group className=" mb-3" controleID='forName'>
                    <Form.Control type='text' placeholder="entrer nom" value={name} required
                                  onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className=" mb-3" controleID='forAge'>
                    <Form.Control type='text' placeholder="entrer l'age" value={age} required
                                  onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Button type={"submit"} onClick={(e) => handleSubmit(e)}>Update</Button>
            </Form>
        </div>
    )
}

export default EditProduct;
