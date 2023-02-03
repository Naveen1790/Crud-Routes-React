import PersonalData from "./PersonInfo";
import './App.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Home = ()=> {
    const history = useNavigate()
const deleteHandler = id => {
        let filteredResults = PersonalData.map(item=>{
            return item.id
        }).indexOf(id)
        PersonalData.splice(filteredResults,1);
        history('/')
}

const editHandler = (id,name,mail)=>{
    localStorage.setItem('id',id);
    localStorage.setItem('name',name);
    localStorage.setItem('mail',mail)
}
  return (
    <>
    <table width='100%'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Gmail</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {PersonalData && PersonalData.length>0?(
            PersonalData.map(item=>(
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Link to='/edit'>
                  <button onClick={()=>editHandler(item.id,item.name,item.email)}>Edit</button>
                  </Link>
                  <button onClick={()=>deleteHandler(item.id)}>Delete</button>
                </td>
              </tr>  
            ))
        ):"No Data Available"}
      </tbody>
    </table>
 
   <Link to='/create'>
    <div className="wrapper">
   <button className="button">Create</button>
   </div>
   </Link>
  
    </>
  )
}

export default Home