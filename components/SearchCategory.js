import React from 'react';
import ButtonDanger from './ButtonDanger';
import ButtonSucces from './ButtonSucces';

export default function SearchCategory(props) {
  const { dropdown, handlerSearch, handlerReset } = props;

  return (
    <form className="w-full max-w-lg" onSubmit={handlerSearch}>
      <div className="flex items-center border-b border-teal-500 py-5">
        <div className="inline-block relative w-80">
          <select name="category" defaultValue={"default"} className="block appearance-none w-full bg-white border border-teal-400 hover:border-teal-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="default" disabled>Categories</option>
            { dropdown.map((item, index) => (
                <option name={item} value={item} key={index}>
                  {item}
                </option>
              ))}
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-teal-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <input
          className="appearance-none bg-transparent border-none w-full text-teal-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          name="search"
          type="text"
          placeholder="Search categories"
          aria-label="Full name"
        />
        <div className=''>
       <ButtonSucces name="Search" />
       </div>
       <div className='px-3'>
       <ButtonDanger name="Reset" handler={handlerReset} />
       </div>
      </div>
    </form>
  );
}
