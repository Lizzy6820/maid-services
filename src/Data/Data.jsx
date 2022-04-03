import { LocalPhoneOutlined } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React, {useState,useEffect} from 'react';
import {images} from '../constants';
import './Data.css'


const maidData =[
    {name: 'Sandra High', work:"Baby-sitter", age:"26", Location:"Kampala",Gender:"female", Languages:"English, Luganda",imgUrl:images.maid1 },
    {name: 'Patience Low', work:"Elderly-care", age:"34", Location:"Kampala",Gender:"female", Languages:"English, Luganda, Langi" ,imgUrl:images.maid2 },
    {name: 'Dina Fer', work:"Home-basic-chores", age:"25", Location:"Jinja",Gender:"female", Languages:"English, Luganda, Lusoga" ,imgUrl:images.maid },
    {name: 'Kaylee Shalilo', work:"Baby-sitter", age:"39", Location:"Kampala",Gender:"female", Languages:"English, Luganda, Acholi" ,imgUrl:images.maid5 },
    {name: 'Mbau Kudzi', work:"Home-basic-chores", age:"29", Location:"Mbale",Gender:"male", Languages:"English, Luganda,Iteso" ,imgUrl:images.maid3},
    {name: 'Sanyu vera', work:"Elderly-care", age:"36", Location:"Mukono",Gender:"female", Languages:"English, Luganda" ,imgUrl:images.maid7 },
    {name: 'Imani Juu', work:"Baby-sitter", age:"22", Location:"Lugazi",Gender:"male", Languages:"English, Luganda, Swahili" ,imgUrl:images.maid4 },
    {name: 'Vincent Lugoye', work:"Elderly-care", age:"32", Location:"Wakiso",Gender:"male", Languages:"English, Luganda, Runyankole" ,imgUrl:images.maid8 },

] 

const Data = () => {
    const [filteredList, setFilteredList] =  useState(maidData);

    const [selectedWork, setSelectedWork] = useState("");
   
    const [selectedGender, setSelectedGender] = useState();
  
    const filterByWork = (filteredData) => {
     
      if (!selectedWork) {
        return filteredData;
      }
    
      const filteredWork = filteredData.filter(
        (maid) => maid.work.split(" ").indexOf(selectedWork) !== -1
      );
      return filteredWork;
    };
    
    const filterByGender = (filteredData) => {
      
      if (!selectedGender) {
        return filteredData;
      }
  
      const filteredGender = filteredList.filter(
        (maid) => maid.Gender === selectedGender
      );
      return filteredGender;
    };
  
    
  const handleWork = (event) => {
      setSelectedWork(event.target.value);
    };
    
    const handleGender = (event) => {
        const inputGender = (event.target.id);

        if (inputGender === selectedGender) {
          setSelectedGender("");
        } else {
          setSelectedGender(inputGender);
        }
    };

    useEffect(() => {
        var filteredData = filterByWork(maidData);
        filteredData = filterByGender(filteredData);
        setFilteredList(filteredData);
      },
       [selectedWork,selectedGender]);
      

  return (
    <div className="App">
      <div className="maid-filter">
      
        <div>Choose home care service:</div>
        <select
          id="maid-input"
          value={selectedWork}
          onChange={handleWork}
        >
          <option value="">All</option>
          <option value="Baby-sitter">Baby-sitter</option>
          <option value="Home-basic-chores">Home basic chores</option>
          <option value="Elderly-care">Elderly Care</option>
        </select>
      </div>
      <br />
      <div>Select gender below:</div>
      <div id="gender-options" onClick={handleGender}>
        <div
          className={selectedGender === 'male' ? "active-option" : "filter-option"}
          id="male"
        >
          Male
        </div>
        <div
          className={selectedGender === 'female' ? "active-option" : "filter-option"}
          id="female"
        >
          Female
        </div>
      </div>

      <div id="maid-list">
        {filteredList.map((item, index) => (
          <div className="maid-item" key={index}>
            <img className="maid-image" src={item.imgUrl} alt="maid-img" />
            <div className="maid-work">{`${item.work}`}</div>
            <div className="maid-name">{`${item.name}`}</div>
            <div className="maid-gender">{` ${item.Gender}`},{`${item.age}`}</div>
            <hr  />
            <div className="maid-languages">{`Languages: ${item.Languages}`}</div>
           <div className='icons'>
           <div> <LocalPhoneOutlined sx={{backgroundColor:'#d4a437', borderRadius:'50%', padding:"2px"}}/> </div>
           <div> <WhatsAppIcon sx={{backgroundColor:'#d4a437',marginLeft:'5px',borderRadius:'50%', padding:"1px"}} /> </div>
           </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Data