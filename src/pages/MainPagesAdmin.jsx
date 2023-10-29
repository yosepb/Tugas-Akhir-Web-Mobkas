import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ListMobilAdmin from "../Component/ListMobilAdmin";
import WidgetNavbarAdmin from "../components/WidgetNavbarAdmin";
import configApi from "../config.api";
import Footer from "../Component/Footer";

function MainPagesAdmin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Memeriksa apakah token ada saat komponen dimuat
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const response = await fetch(`${configApi.BASE_URL}/users/check-token`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
      });

      if (response.ok) {
        // Token valid, pengguna terotentikasi
        setIsLoggedIn(true);
      } else {
        // Token tidak valid atau tidak ada
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error:", error);
      // Token tidak valid atau tidak ada
      setIsLoggedIn(false);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <WidgetNavbarAdmin />
          <Container>
            <h3 className="text-end mt-3">
              <i>Halo Admin!</i>
            </h3>
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  backgroundColor: "#fff",
                  position: "relative",
                }}
              >
                <ListMobilAdmin />
              </div>
            </div>
          </Container>
          <Footer />
        </>
      ) : (
        <Container>
          <h3 className="ml-3 mt-3">
            <i>
              Anda harus <a href="/admin/login">login</a>
            </i>
          </h3>
        </Container>
      )}
    </>
  );
}

export default MainPagesAdmin;
