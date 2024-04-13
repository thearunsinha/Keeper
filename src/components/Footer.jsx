import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made with Love by Arun Sinha</p>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
