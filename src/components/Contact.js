import React from "react";

import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h2>To Learn IT Deeply</h2>
      <hr />
      <h3>
        Come and Join us at{" "}
        <a href="https://elmicademy.com">Elmi Academy IT Center</a> - Hargeisa
      </h3>
      <h4>Courses Offered in Elmi Academy</h4>
      <div className="courses">
        <div>
          <h4>Web Developent</h4>
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Node JS</li>
          </ul>
        </div>
        <div>
          <h4>Computer Networking</h4>
          <ul>
            <li>Cisco CCNA</li>
            <li>Cisco CCNA Security</li>
            <li>Cisco CCNP</li>
          </ul>
        </div>
        <div>
          <h4>Graphics Design</h4>
          <ul>
            <li>Adobe Photoshope</li>
            <li>Adobe Premiere</li>
            <li>Video Editing</li>
          </ul>
        </div>
      </div>

      <div className="address">
        <address>
          <p>
            <strong>Elmi Academy Address</strong>
          </p>
          <hr />
          <br />
          Emarat Al-khayr First Floor - Room No. 104
          <br />
          Hargeisa, Somaliland
          <br />
          <abbr title="Telesom">Phone:</abbr> (063) 4594530
          <br />
          <abbr title="Somtel">Phone:</abbr> (065) 7280066
          <br />
          Email: info@elmicademy.com
        </address>
      </div>
      <hr />
      <p>
        This App is Developed by{" "}
        <a href="https://elmicademy.com">Elmi Academy</a> Students , Web
        Development Class April, 2020
      </p>
      <p>
        Teacher <a href="https://twitter.com/mmjanagale">Janagale</a>
      </p>
    </div>
  );
}
