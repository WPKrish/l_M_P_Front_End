import NavBarWithLogin from "../components/NavBarWithLogin";
import Main from "../assest/main.png";

const Home = () => {
  return (
    <>
      <NavBarWithLogin />

      <div
        className="container mt-4"
        style={{
          color: "#020001",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
          fontfamily: "Roboto",
          fontsize: "101px",
          fontstyle: "normal",
          fontweight: "700",
          lineheight: "104px" /* 102.97% */,
        }}
      >
        <h1>Labor Management</h1>
        <h1>System</h1>
        <p>
          "Welcome to our Labor Management System, where efficiency meets
          excellence.{" "}
        </p>
        <p>
          {" "}
          Our platform is designed to streamline workforce management, providing
          you with powerful tools to optimize productivity, manage schedules,
          and empower your team. With user-friendly features and robust
          functionality, our system is the key to achieving seamless labor
          management. Take control of your workforce, enhance collaboration, and
          elevate your business to new heights with our cutting-edge Labor
          Management System."
        </p>
      </div>

      <div
        className="container mt-4"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img
          src={Main}
          alt="Description"
          style={{
            width: "393px",
            height: "233px",
            filter: 'brightness(60%)',
            borderRadius: "0px 100px",
            background: "lightgray 50% / cover no-repeat",
            boxShadow: "10px 10px 5px 5px rgba(0, 0, 0, 0.50)",
          }}
        />
      </div>
    </>
  );
};

export default Home;
