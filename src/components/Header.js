function Header({ title }) {
  return (
    <div
      style={{
        backgroundColor: "#0f766e ",
        color: "white",
        padding: "15px",
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      <h2>{title}</h2>
    </div>
  );
}

export default Header;