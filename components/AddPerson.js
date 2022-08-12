import React from 'react';
import ButtonSucces from './ButtonSucces';
import Input from './Input';

function AddPerson({handlerAdd}) {
  return (
    <div className="row-span-3">
      <form className="w-full max-w-sm" onSubmit={handlerAdd}>
        <Input type="text" id="name" name="Name" />
        <Input type="text" id="job" name="Job" />
        <Input type="text" id="city" name="City" />
        <Input type="email" id="email" name="Email" />
        <Input type="number" id="phone" name="Phone" />
        <ButtonSucces name="Add more"/>
      </form>
    </div>
  );
}

export default AddPerson;
