import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalData from "./PersonInfo";

function Edit() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [id, setId] = useState();
  const history = useNavigate();

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setId(localStorage.getItem("id"));
    setMail(localStorage.getItem("mail"));
  }, []);
  console.log(id);
  let res = PersonalData.find((item) => {
    return item.id === id;
  });
  console.log(res);
  const updateHandler = (e) => {
    e.preventDefault();
    let data = PersonalData[id];
    console.log(data);
    // data.email = mail;
    // data.name = name;
    history("/");
  };
  return (
    <>
      <form style={{ border: "5px solid red" }} onSubmit={updateHandler}>
        <div style={{ marginTop: "15px" }}>
          <label htmlFor="name">Name : </label>
          <input
            id="name"
            value={name}
            required
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="enter a name"
          />
        </div>
        <div style={{ marginTop: "15px" }}>
          <label htmlFor="mail">Email : </label>
          <input
            id="mail"
            value={mail}
            required
            onChange={(e) => setMail(e.target.value)}
            type="email"
            placeholder="enter an email"
          />
        </div>
        <br />
        <button style={{ margin: "15px 10px" }}>Update</button>
      </form>
    </>
  );
}

export default Edit;
