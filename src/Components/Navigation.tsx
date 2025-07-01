import { NavLink } from "react-router";

export const Navigation = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <p style={{ fontFamily: "monospace", fontSize: "3rem" }}>
          Elliot´s Spelvärld
        </p>
        <ul style={{ listStyleType: "none" }}>
          <li
            style={{
              fontFamily: "montserrat",
              fontSize: "2rem",
              textDecoration: "none",
            }}
          >
            <NavLink
              to={"/"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Alla spel
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
