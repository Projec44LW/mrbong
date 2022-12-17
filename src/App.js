import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">

        <div className="content">
              <h1>Under Construction</h1>
	            <h3>This website is currently under construction and will launch December 25th 2022! Please fill out the form to receive the files.</h3>

            <form action="https://formspree.io/f/mpzeaqjb" method="POST" className="form-container">
              <input type="text" name="Name" placeholder="Full Name" required />
              <input type="text" name="Email" placeholder="Email" required />
              <textarea name="Message" placeholder="Message" required></textarea>
              <button type="submit" className="button">Send</button>
            </form>
        </div>
    </div>
  );
}

export default App;
