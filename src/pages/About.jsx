import NavBarWithLogin from "../components/NavBarWithLogin";

const About = () => {
  return (
    <>
      <NavBarWithLogin />
      <h3 className="container mt-4">This is About page</h3>
      <div className="container mt-4">
        Company policy and details should be included here
      </div>
    </>
  );
};

export default About;
