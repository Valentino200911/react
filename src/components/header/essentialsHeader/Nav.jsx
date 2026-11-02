import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSunPlantWilt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import RouteNavList from "./RouteNavList";
import Logo from "./Logo";
import { useAuth } from "../../../hooks/user/AuthContext";
import Button from "../../generalComponents/cards/essentialsCard/Button";

//Por cuestiones de estilo, preferí no dejar un mensaje de "Bienvenidos tras el login"

function Nav() {
  const {logout, isAuthenticated} = useAuth();

  const navigate = useNavigate();

  const handleRegisterUser = () => {
    navigate("/auth/register");
  };

  const handleLoginUser = () => {
    navigate("/auth/login");
  };

  const handleLogoutUser = () => {
    alert("Sesión cerrada");
    logout();
    navigate("/");
  };

  return (
    <nav className="navBar navList">
      <div className="buttonContainer">
        {!isAuthenticated && (
          <Button
            type="#"
            id="register"
            buttonText="Registrarse"
            className="faculty-glyphic-regular"
            onClick={handleRegisterUser}
          />
        )}

        {!isAuthenticated && (
          <Button
            type="#"
            id="login"
            buttonText="Iniciar sesión"
            className="faculty-glyphic-regular"
            onClick={handleLoginUser}
          />
        )}

        {isAuthenticated && (
          <Button
            type="#"
            id="logout"
            buttonText="Cerrar sesión"
            className="faculty-glyphic-regular"
            onClick={handleLogoutUser}
          />
        )}
      </div>

      <ul className="navList">
        <Logo />

        <RouteNavList
          icon={faBars}
          iconColor="rgb(0, 147, 255)"
          navText="Página Principal"
          route="/"
        />

        <RouteNavList
          icon={faHouse}
          navText="Cabañas"
          iconColor="rgb(210, 171, 28)"
          route="/cabañas"
        />

        <RouteNavList
          icon={faLocationDot}
          navText="Servicios Turísticos y Ubicación"
          iconColor="rgb(191, 36, 36)"
          route="/serviciosturisticos"
        />

        {isAuthenticated && (
          <RouteNavList
            icon={faEnvelope}
            navText="Contacto"
            iconColor="rgb(253, 90, 2)"
            route="/contacto"
          />
        )}

        {isAuthenticated && (
          <RouteNavList
            icon={faEnvelope}
            navText="Reservación"
            iconColor="rgb(18, 190, 156)"
            route="/reservacion"
          />
        )}        

        {isAuthenticated && (
          <RouteNavList
            icon={faSunPlantWilt}
            navText="Naturaleza"
            iconColor="rgb(80, 208, 37)"
            route="/naturaleza"
          />
        )}
      </ul>
    </nav>
  );
}

export default Nav;
