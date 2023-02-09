import React, {Fragment} from "react";
import {Button,Table} from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./products";
import {Link, useNavigate} from 'react-router-dom'

function Home(){

    let history= useNavigate();

    const handleDelete=(id) => {
        var index = Products.map(function(p){
            //return product from this id
            return p.id
        }).indexOf(id);

        //remove product in id=index
        Products.splice(index,1);

        //go to default url
        history('/')
   }

    function handleEdit(id, name, age) {
        localStorage.setItem('Id',id);
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
    }

    return(
        <Fragment>
            <div style={{margin: "10rem"}}>
                <Table stripped="true" bordered hover size="sm">
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Age</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            Products && Products.length >0
                            ?
                                Products.map((item)=>{
                                    return(
                                        <tr>
                                            <td>
                                                {item.Name}
                                            </td>
                                            <td>
                                                {item.Age}
                                            </td>
                                            <td>
                                                <Link to={'edit'}>
                                                    <Button onClick={()=>handleEdit(item.id,item.Name,item.Age)} variant="info">EDIT</Button>
                                                </Link>

                                                &nbsp;
                                                <Button onClick={()=>handleDelete(item.id)} variant="danger">DELETE</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "No data available"
                        }
                    </tbody>
                </Table>
                <br/>
                <br/>
                <Link className='d-grid grap-2' to={'/create'}>
                    <Button size="lg" >Create</Button>
                </Link>


            </div>

        </Fragment>
    )
}

export default Home;