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

        <div className="me-3 d-flex align-items-center">
          <i className="fa-regular fa-circle-xmark"></i>
        </div>
      </div>
    </div>
  );
};

export default AdmissionOpen;
