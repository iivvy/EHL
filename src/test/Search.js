import { DateRange } from '@mui/icons-material';
import React, { useState } from 'react';
import Datatable from '../components/datatable/Datatable';
import { userRows } from '../datatablesource';
// import Scroll from './Scroll';
// import SearchList from './SearchList';
import  './search.css'
function Sear() {
  const [query, setQuery] = useState('');
  const search =(data) => {
    return data.filter(item=>item.username.toLowerCase().includes(query)); 
  }


  // const [searchField, setSearchField] = useState("");
  // const [searchShow, setSearchShow] = useState(false);

  // const filteredPersons = details.filter(
  //   person => {
  //     return (
  //       person
  //       .username
  //       .toLowerCase()
  //       .includes(searchField.toLowerCase()) ||
  //       person
  //       .email
  //       .toLowerCase()
  //       .includes(searchField.toLowerCase())
  //     );
  //   }
  // );

  // const handleChange = e => {
  //   setSearchField(e.target.value);
  //   if(e.target.value===""){
  //     setSearchShow(false);
  //   }
  //   else {
  //     setSearchShow(true);
  //   }
  // };

  // function searchList() {
  // 	if (searchShow) {
	//   	return (
	//   		<Scroll>
	//   			<SearchList filteredPersons={filteredPersons} />
	//   		</Scroll>
	//   	);
	//   }
  // }

  return (
    <section className="garamond">
			
			<div className="pa2">
				<input 
					className="cont"
					type = "search" 
					placeholder = "Search People" 
					onChange = {(e) => setQuery(e.target.value)}
				/>
        <Datatable data={search(userRows)}/>
			</div>
			{/* {searchList()} */}
		</section>
  );
}

export default Sear;