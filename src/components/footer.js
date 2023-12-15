

function Footer() {
  const myDate = new Date();
  const currentYear = myDate.getFullYear();

  return (
    <div
      style={{ backgroundColor: "rgb(140, 77, 249)"}}
      className="p-4 text-center fw-bold text-white"
    >
      <p>
        Copyright &copy; {currentYear} {" "}
        <a
          href="https://ls.linkedin.com/in/paballo-molati-075313220"
          className="text-white"
        >
          Paballo Molati
        </a>{" "}
        | All rights reserved
      </p>
    </div>
  );
}

export default Footer;
