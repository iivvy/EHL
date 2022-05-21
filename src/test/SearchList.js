import React from 'react';
import Datatable from '../components/datatable/Datatable';
// import Card from './Card';

function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map( person =>  <Datatable key={person.id} person={person} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;