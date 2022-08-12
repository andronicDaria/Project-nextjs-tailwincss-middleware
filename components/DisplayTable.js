import React from 'react';
import ButtonDanger from './ButtonDanger';

export default function DisplayTable(props) {
  const { data, handler } = props;
  const keys = Object.keys(data[0]);

  return (
    <div className="row-span-2 rounded-lg border-t border-b border-l border-r overflow-auto  border-gray-400 p-4 h-[45rem]">
      <table className="table-fixed">
        <thead>
          <tr>
            {keys.map((title) => (
              <th key={title} className="w-24 px-4 py-2">
                {title}
              </th>
            ))}
            <th key="Actions" className="w-40 px-4 py-2">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{person.id}</td>
              <td className="border px-4 py-2">{person.Job}</td>
              <td className="border px-4 py-2">{person.City}</td>

              <td className="border px-4 py-2">{person.Name}</td>
              <td className="border px-4 py-2">{person.Email}</td>
              <td className="border px-4 py-2">{person.DateCreated}</td>
              <td className="border px-4 py-2">{person['Phone Number']}</td>

              <td className="border px-8 py-2">
                <ButtonDanger id={person.id} name="Delete" handler={handler}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
