//import React from 'react';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

function DrugFormOne() {
    const [date, setDate] = useState(new Date());
    
  const handleChange = date => setDate(date);

  return (
    <div className='drugone'>        
       <form>
      <fieldset>         
        <lable>
            <p>Date of Birth (YYYY-MM-DD)</p>
        </lable>
       <DatePicker key="birthday" dateFormat="yyyy/MM/dd" selected={date} onChange={handleChange} /><br />
       <label>
           <p>Gestational Age</p>
           <input key="gestationalAge"  type="number" name="gestationalAge" />
         </label><br />
         <lable>Sex</lable>
         <DropdownButton key="sex" title="Dropdown button" aria-required>
            <Dropdown.Item value="male" >Male</Dropdown.Item>
            <Dropdown.Item value="female" >Female</Dropdown.Item>
        </DropdownButton><br />
        <label>
           <p>Height</p>
           <input key="height" type="number" name="height" />
        </label><br />
        <label>
           <p>Weight</p>
           <input key="weight" type="number" name="Weight" />
         </label><br />
         <label>
           <p>BMI</p>
           <input key="bmi" type="number" name="bmi" />
         </label><br />
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default DrugFormOne