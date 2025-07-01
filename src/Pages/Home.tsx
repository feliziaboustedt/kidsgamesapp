import { NavLink } from "react-router";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#d0eaf7",
          height: "20rem",
          alignItems: "center",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "auto",
            gap: "1.5rem",
          }}
        >
          <li>
            <NavLink
              to={"/colorgame"}
              style={{
                textDecoration: "none",
                color: "black",
                fontFamily: "montserrat",
              }}
            >
              🎨 Välj rätt färg
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/bubblepop"}
              style={{
                textDecoration: "none",
                color: "black",
                fontFamily: "montserrat",
              }}
            >
              🫧 BubblePop
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/catchthebubble"}
              style={{
                textDecoration: "none",
                color: "black",
                fontFamily: "montserrat",
              }}
            >
              🟡 Fånga Bubblan
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/guesstheanimal"}
              style={{
                textDecoration: "none",
                color: "black",
                fontFamily: "montserrat",
              }}
            >
              🐶 Gissa Djuret
            </NavLink>
          </li>
        </ul>
      </section>
    </>
  );
};
