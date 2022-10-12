//Display an array of objects in tabular form.

import React from 'react';

function Hook3() {
  const items = [{sid:'101', name:'Krishna'},
  {sid:'102', name:'Aadya', course:'CSE'},
  {sid:'103', name:'Hrudya',course:'IT'},
  {sid:'104', name:'Varun',course:'ECE'},
  {sid:'105', name:'Manasa',course:'IT'},
  {sid:'106', name:'Vijay', course:'CSE'}]; 
  return ( 
    <div>
     <table border="4" cellpadding="10px">
       { items.map((item)=> (
          <tr key={item.id}> 
          <td>{item.sid}</td> 
	  <td> {item.name} </td>
	  <td> {item.course} </td>
          </tr>
        )) }
      </table>
    </div>
  );
}

export default Hook3;