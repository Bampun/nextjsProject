import React, { useState } from 'react'




export default function Form() {
  const [count, setCount] = useState(0);

  function clicked () {
    setCount(count +1);
  }

  return (
    <div className='contact-form'>
      <div className="container">
      <h2>Contact Form</h2>
        <form className="form">
          <label >First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
            required
          />

          <label>Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
            required
          />
          <label>Last Name</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your E-mail.."
            required
          />

          <label >Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>

          <input type="submit" value="Submit"/>
          
        </form>
        {/* <Button variant="contained" className='btn-jquery' onClick={clicked}>check {count}</Button> */}
      </div>
    </div>
  )
}

