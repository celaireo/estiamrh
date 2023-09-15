import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ListEmployes() {
    const [APIData, setAPIData] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    useEffect(() => {
<<<<<<< HEAD
        axios.get(`http://localhost:8000/employes`).then((response) => {
=======
        axios.get(`http://localhost:3002/posts`).then((response) => {
>>>>>>> 3eb9b7d29964cbe8226703933cbc6a966c30b7f2
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
<<<<<<< HEAD
        let { Id_employe, Nom_employe, Prenom_employe, Email_Employe } = data;
        localStorage.setItem('ID', Id_employe);
        localStorage.setItem('First Name', Prenom_employe);
        localStorage.setItem('Last Name', Nom_employe );
        localStorage.setItem('Email', Email_Employe)
    }

    const getData = (e) => {
        axios.get(`http://localhost:8000/employes?q=${e}`).then((getData) => {
=======
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    const getData = (e) => {
        axios.get(`http://localhost:3002/posts?q=${e}`).then((getData) => {
>>>>>>> 3eb9b7d29964cbe8226703933cbc6a966c30b7f2
                setAPIData(getData.data);
            });
    };

<<<<<<< HEAD
    const onDelete = (Id_employe) => {
        axios.delete(`http://localhost:8000/employes/${Id_employe}`).then(() => {
=======
    const onDelete = (id) => {
        axios.delete(`http://localhost:3002/posts/${id}`).then(() => {
>>>>>>> 3eb9b7d29964cbe8226703933cbc6a966c30b7f2
            getData();
        })
    }

    const like = (data) => {
        data.like += 1;
<<<<<<< HEAD
        axios.put(`http://localhost:8000/employes/${data.Id_employe}`, data)
=======
        axios.put(` http://localhost:3002/posts/${data.id}`, data)
>>>>>>> 3eb9b7d29964cbe8226703933cbc6a966c30b7f2
    }
    
    const dislike = (data) => {
            data.dislike += 1;
<<<<<<< HEAD
            axios.put(`http://localhost:8000/employes/${data.Id_employe}`, data)
=======
            axios.put(` http://localhost:3002/posts/${data.id}`, data)
>>>>>>> 3eb9b7d29964cbe8226703933cbc6a966c30b7f2
    }
        
    const jadore = (data) => {
            data.jadore += 1;
<<<<<<< HEAD
            axios.put(`http://localhost:8000/employes/${data.Id_employe}`, data)
=======
            axios.put(` http://localhost:3002/posts/${data.id}`, data)
>>>>>>> 3eb9b7d29964cbe8226703933cbc6a966c30b7f2
    }
    

    return (
    
        <div>
            <input
            type="text"
            placeholder="Search"
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          <button type="sublimt" onSelect={getData(searchTxt)}>
          <i class="fa-solid fa-magnifying-glass"></i>
          </button>

            <Table singleLine>
                <Table.Header>
                    <Table.Row>
<<<<<<< HEAD
                        <Table.HeaderCell>Prenom</Table.HeaderCell>
                        <Table.HeaderCell>Nom</Table.HeaderCell>
=======
                        <Table.HeaderCell>Nom</Table.HeaderCell>
                        <Table.HeaderCell>Prenom</Table.HeaderCell>
>>>>>>> 3eb9b7d29964cbe8226703933cbc6a966c30b7f2
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>Administrateur</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                        <Table.HeaderCell>Like  /  Dislike  /  jadore</Table.HeaderCell>
                        

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
<<<<<<< HEAD
                                <Table.Cell>{data.Prenom_employe}</Table.Cell>
                                <Table.Cell>{data.Nom_employe}</Table.Cell>
                                <Table.Cell>{data.Email_Employe}</Table.Cell>
=======
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
>>>>>>> 3eb9b7d29964cbe8226703933cbc6a966c30b7f2
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Link to='/modifEmployes'>
                                    <Table.Cell> 
                                        <Button onClick={() => setData(data)}><i class="fa-solid fa-pen"></i></Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
<<<<<<< HEAD
                                    <Button onClick={() => onDelete(data.Id_employe)}><i class="fa-solid fa-trash"></i></Button>
=======
                                    <Button onClick={() => onDelete(data.id)}><i class="fa-solid fa-trash"></i></Button>
>>>>>>> 3eb9b7d29964cbe8226703933cbc6a966c30b7f2
                                </Table.Cell>
                                <Table.Cell>
                                    <Button onClick={() => like(data)}> <i class="fa-solid fa-thumbs-up"></i> {data.like}</Button>
                                    <Button onClick={() => dislike(data)}> <i class="fa-solid fa-thumbs-down"></i> {data.dislike}</Button>
                                    <Button onClick={() => jadore(data)}> <i class="fa-solid fa-heart"></i> {data.jadore}</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
