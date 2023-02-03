import React,{useState} from 'react';
import PersonalData from './PersonInfo';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [name,setName] = useState('');
  const [mail,setMail] = useState('');
  const history = useNavigate()
  const addSubmitHandler = e => {
        e.preventDefault();
        PersonalData.push({
            id:Math.ceil(Math.random()*100+1),
            name:name,
            email:mail
        })
        setMail('');
        setName('');
        history('/')
  }
  return (
  <>
  <form style={{border:'5px solid red'}} onSubmit={addSubmitHandler}>
        <div style={{marginTop:'15px'}}>
        <label htmlFor='name'>Name : </label>
          <input id='name'
            value={name}
            required
            autoComplete='off'
            onChange={(e)=>setName(e.target.value)}
           type='text'placeholder='enter a name' />
        </div>
        <div style={{marginTop:'15px'}}>
        <label htmlFor='mail'>Email : </label>
          <input id='mail' 
          value={mail}
          required
          onChange={(e)=>setMail(e.target.value)}
          type='email'placeholder='enter an email' />
        </div>
        <br />
        <button style={{margin:'15px 10px'}}>Add</button>
      </form>
  </>
  )
}

export default Create