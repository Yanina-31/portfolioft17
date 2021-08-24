import { useState } from "react";
import { StyledNavbar, StyledNavigation } from "../styled/Navbar";

export const Navbar = () => {
    const [isDarkTheme, setisDarkTheme] = useState(false);
  return (
    <StyledNavbar darktheme={isDarkTheme}>
      <h1>MiNombre</h1>
      <StyledNavigation>
          <button onClick={() => setisDarkTheme(!isDarkTheme)}>Cambiar</button>
        <a href="#tecnologias">Tecnologias</a>
        <a href="#skills">Skills</a>
        <a href="#trabajos">Trabajos</a>
        <a href="#acerca">Acerca de mi</a>
      </StyledNavigation>
    </StyledNavbar>
  );
};
