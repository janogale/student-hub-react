import React from "react";

export default function About() {
  return (
    <div className="about">
      <hr />
      <h2>About Student Hub</h2>
      <p>This is simple React App, Developed for Learning porpuse</p>
      <p>
        This App is Developed by{" "}
        <a href="https://elmicademy.com">Elmi Academy</a> Students , Web
        Development Class April, 2020
      </p>
      <p>
        Elmi Academy is a World class IT Training Center in Hargeisa,
        Somaliland.
      </p>
      <hr
        style={{
          borderBottom: "1px solid #f1f1f1",
          display: "block",
          margin: "50px 0",
          width: "100%",
        }}
      />
      <p>
        Teacher <a href="https://twitter.com/mmjanagale">Janagale</a>
      </p>
    </div>
  );
}
