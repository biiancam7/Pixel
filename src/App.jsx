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
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        margin: 0,
        padding: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Efeito de luz suave */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <h1
        style={{
          color: "#ffffff",
          fontSize: "2.5rem",
          fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
          fontWeight: "600",
          letterSpacing: "0.02em",
          textShadow: "0 2px 4px rgba(0,0,0,0.3)",
          marginBottom: "1rem",
          opacity: 0.9,
          animation: "fadeIn 2s ease-out",
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
          width: "65px",
          height: "65px",
          fontSize: "2.2rem",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          position: "fixed",
          bottom: "40px",
          right: "40px",
          padding: 0,
          outline: "none",
          boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
          zIndex: 1000,
          animation: "pulseButton 2s infinite cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 6px 24px rgba(37, 211, 102, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(37, 211, 102, 0.4)";
        }}
      >
        <i className="fab fa-whatsapp" style={{ 
          fontSize: "2rem",
          lineHeight: 0,
          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
        }}></i>
      </button>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 0.9;
              transform: translateY(0);
            }
          }

          @keyframes pulseButton {
            0% {
              transform: scale(1);
              box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
            }
            50% {
              transform: scale(1.05);
              box-shadow: 0 6px 24px rgba(37, 211, 102, 0.5);
            }
            100% {
              transform: scale(1);
              box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
            }
          }
        `}
      </style>
    </div>
  )
}

export default App
