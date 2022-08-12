import React from 'react';
import AddPerson from './AddPerson';
import DisplayWelcome from './DisplayWelcome';
import SearchCategory from './SearchCategory';
import Table from './Table';
import styles from '../styles/Home.module.css';
import { getData, getDataFilter, postDataAdd } from '../pages/api/axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { getAllEmployes } from '../services/getData';

export default  function Main() {
  const [persons, setPerson] = useState([]);
  const [dropdownItems, setItems] = useState([]);

  useEffect(() => {
    onGetData()
  }, []);

  const onGetData =()=>{
    getAllEmployes().then(data =>{
      setPerson(data);
      setItems(Object.keys(data[0]));

    })
  } 

  const OnSearch = async (e) => {
    e.preventDefault();
    const data = {
      search: e.target.elements.search.value,
      category: e.target.elements.category.value,
    };

    await getDataFilter(data.category, data.search).then((res) => {
      setPerson(res);
    });
  };

  const OnReset = async (e) => {
    e.preventDefault()
    await getData().then((responce) => {
      setPerson(responce);
      setItems(Object.keys(responce[0]));
    });
  };

  const onDelete = (even) => {
    const data = persons.filter((item) =>item.id !== parseInt(even.target.id));
    setPerson(data)
  };

  const onAdding = (even) => {
    even.preventDefault();
    const data = {
      name: even.target.name.value,
      job: even.target.job.value,
      city: even.target.city.value,
      email: even.target.email.value,
      phone: even.target.phone.value,
      id: nanoid()
    };

    postDataAdd(data)
    .then((res) => {
      console.log('Data show in post - ', res);
      // onGetData()
      const employee = res.data;
      // message.success(
      //   `Succesefuly add new employee! Name: ${employee.name}, Email: ${employee.email},  Job ${employee.job}, City ${employee.city}. `
      // );
    })
    .catch((error) => {
      console.error(error);
      // message.error(`Failed add new employee! `);
    });
  }

  return (
    <main className={styles.main}>
      <DisplayWelcome />
      <SearchCategory
        dropdown={dropdownItems}
        handlerSearch={OnSearch}
        handlerReset={OnReset}
      />
      <div className="grid grid-rows-2 grid-flow-col gap-2 py-10">
        <AddPerson  handlerAdd={onAdding}/>
        <Table handlerDelete={onDelete} data={persons} />
      </div>
    </main>
  );
}