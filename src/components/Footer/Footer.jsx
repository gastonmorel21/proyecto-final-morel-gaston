import "./Footer.css";
import IconWhat from "../../img/whatsapp.png";
function Footer() {
  return (
    <footer>
      <div>
        <p>
          Sitio web diseñado por{" "}
          <strong>Gaston morel</strong>
        </p>
      </div>
      <img className="redes" src={IconWhat} alt="acceso a Whatsapp"></img>
      <div></div>
    </footer>
  );
}

export default Footer;
