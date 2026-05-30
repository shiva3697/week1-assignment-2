import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <p>{name}</p>
    </div>
  );
}

export default ContactForm;