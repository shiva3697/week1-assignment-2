function CustomButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#0f766e",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}

export default CustomButton;