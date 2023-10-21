import React from "react";

function TutorialBuyCar() {
  const data = [
    {
      title: "Temukan Mobil Anda",
      desc: "Semua mobil kami telah disanitasi sebelum dan setelah test drive, untuk membuat pengalaman Anda aman dan nyaman.",
    },
    {
      title: "Test Drive",
      desc: "Pilih untuk mengambil mobil Anda di CARSOME Experience Center terdekat atau kami kirimkan langsung ke rumah Anda.",
    },
    {
      title: "Pengiriman Langsung Ke Rumah",
      desc: "Temukan mobil impian Anda secara online yang telah kami pilih melalui proses inspeksi professional.",
    },
    {
      title: "Pembelian Tanpa Khawatir",
      desc: "Nikmati jaminan uang kembali dalam 5 hari ketika Anda membeli mobil dari CARSOME.",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "50px",
        marginTop: "50PX",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "30px",
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              width: "500px",
              height: "400px",
              boxShadow: "13px 7px 20px -3px rgba(0,0,0,0.1)",
              padding: "20px",
              backgroundColor: "#f6f6f6",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              borderRadius: "20PX",
            }}
          >
            <div
              style={{
                width: "120px",
                height: "120px",
                border: "1px solid black",
              }}
            ></div>
            <div
              style={{
                height: "30%",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                {" "}
                {item.title}
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#b3b3b3",
                }}
              >
                {item.desc}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TutorialBuyCar;
