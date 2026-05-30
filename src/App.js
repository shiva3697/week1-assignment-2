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
        <h1>Sachin</h1>
        <p> Full Stack Web Developer</p>
      </header>

      <section className="section">
        <h2>About Me</h2>
        <p>
         I am a B.Tech CSE student passionate about web development and
building technology solutions that improve user safety and experience.
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
  <h3>Protegeo - Tourist Safety Platform</h3>
  <p>
    A responsive website designed to help tourists access emergency
    services, location tracking, and safety information.
  </p>
</div>

<div className="card">
  <h3>Responsive Travel Website</h3>
  <p>
    Developed a mobile-friendly travel information website using
    HTML, CSS, JavaScript, and React.
  </p>
</div>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <p>Email: sachin@example.com</p>
        <p>GitHub: github.com/sachin</p>
      </section>
      <hr style={{ margin: "40px 0" }} />

<hr style={{ margin: "40px 0" }} />

<Header title="React Components Assignment" />

<section className="section">
  <h2>Reusable Components</h2>

  <Card
 title="Protegeo"
 description="Tourist safety platform developed using React."
/>

  <Card
 title="Responsive Travel Website"
 description="Mobile-friendly travel website."
/>
<CustomButton
  text="Explore Project"
  onClick={() => alert("Welcome to Protegeo!")}
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