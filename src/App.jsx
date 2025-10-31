function App() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5585991480021', '_blank');
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1a1a1a",
        margin: 0,
        padding: 0,
        gap: "2rem",
      }}
    >
      <h1
        style={{
          color: "#e0e0e0",
          fontSize: "1.5rem",
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontWeight: "400",
          letterSpacing: "0.05em",
        }}
      >
        Olá, mundo!
      </h1>

      <button
        onClick={handleWhatsAppClick}
        style={{
          backgroundColor: "#25D366",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          fontSize: "2rem",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all 0.3s ease",
          animation: "float 3s ease-in-out infinite",
          boxShadow: "0 4px 12px rgba(37, 211, 102, 0.3)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1) translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 6px 16px rgba(37, 211, 102, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1) translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 211, 102, 0.3)";
        }}
      >
        <i className="fab fa-whatsapp"></i>
      </button>

      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }
        `}
      </style>
    </div>
  )
}

export default App
