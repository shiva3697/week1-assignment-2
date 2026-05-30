import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import CustomButton from "./components/CustomButton";
import ContactForm from "./components/ContactForm";

import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <h1>Shiva</h1>
        <p> Full Stack Web Developer | AIML Student</p>
      </header>

      <section className="section">
        <h2>About Me</h2>
        <p>
          I am a B.Tech CSE student specializing in AI & ML with a strong
          interest in Full Stack Development.
        </p>
      </section>

      <section className="section">
        <h2>Education</h2>
        <div className="card">
          <h3>B.Tech CSE (AIML)</h3>
          <p>Deenbandhu Chhotu Ram University of Science and Technology</p>
          <p>2023 - 2027</p>
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="card">
          <h3>Mentrova App</h3>
          <p>Mentorship platform built using React Native.</p>
        </div>

        <div className="card">
          <h3>Portfolio Website</h3>
          <p>Responsive website built using React.</p>
        </div>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <p>Email: shivasingh3697@gmail.com</p>
        <p>GitHub: github.com/shiva3697</p>
      </section>
      <hr style={{ margin: "40px 0" }} />

<hr style={{ margin: "40px 0" }} />

<Header title="React Components Assignment" />

<section className="section">
  <h2>Reusable Components</h2>

  <Card
    title="Portfolio Website"
    description="Created using React, HTML and CSS."
  />

  <Card
    title="Mentrova App"
    description="Built using React Native."
  />

  <CustomButton
    text="Click Me"
    onClick={() => alert("Button Component Working!")}
  />

  <br /><br />

  <h3>Form Component (useState Example)</h3>

  <ContactForm />
</section>

<Footer />
    </div>
  );
}

export default App;