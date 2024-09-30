export const styles: { [key: string]: React.CSSProperties } = {
    container: {
      width: "100%",
      maxWidth: "1000px",
      backgroundColor: "#F5F5F5",
      borderRadius: "20px",
      padding: "10px 20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "100px",
    },
    gridItem: {
      position: "relative",
      borderRadius: "15px",
      overflow: "hidden",
      cursor: "pointer",
      transition: "transform 0.3s ease",
    },
    image: {
      width: "100%",
      height: "auto",
      objectFit: "cover",
    },
    label: {
      position: "absolute",
      top: "10px",
      left: "10px",
      color: "#000",
      fontWeight: "bold",
      fontSize: "20px",
    },
    
  };
  export const text = {
    fontFamily: "Poppins",
            fontSize: { xs: "22px", md: "48px" },
            lineHeight: { xs: "38.4px", md: "57.6px" },
            marginTop: { xs: "20px", md: "40px" },
            marginBottom: { xs: "30px", md: "50px" },
  } 