const AdmissionOpen = () => {
  return (
    <div
      className="text-light d-flex justify-content-end"
      style={{ backgroundColor: "#21409A" }}
    >
      <div className="d-flex p-2">
        <div className="" style={{ marginRight: 200 }}>
          <span className="text-decoration-underline fw-bold">
            #Admission Open:
          </span>{" "}
          Geography Optional (Online/ Offline) Admission Open : 10th, May 2023
        </div>

        <div className="me-3">
          <span
            className="fw-bold"
            style={{
              height: 5,
              width: 5,
              borderRadius: "50%",
              border: "1px solid white",
              padding: 2,
            }}
          >
            x
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdmissionOpen;
