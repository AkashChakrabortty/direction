import me from "../../assets/Group1.png";
const Achieve = () => {
  const data = [
    {
      img: me,
      title: "Main Examination",
      details:
        "Geography is one of the most popular options. It owes this to its multidisciplinary characteristics.",
    },
    {
      img: me,
      title: "Test Series",
      details:
        "Geography Test series to provide answer framing and time management skills.",
    },
    {
      img: me,
      title: "Postal Programme",
      details:
        "The institute in its commitment of extending support to the aspirants has initiated correspondence guidelines.",
    },
    {
      img: me,
      title: "GS (Modules)",
      details:
        "General Studies Geography is divided into 3 parts including pre-cum-main",
    },
  ];

  return (
    <div>
      <h1 className="text-center fs-1 my-5">
        Achieve Excellence with <br /> Our Programmes
      </h1>
      <div className="">
        {data.map((data, index) => {
          return (
            <div key={index} className="col-lg-6 col-md-6">
              <div className="row">
                <div className="left card-bg"></div>
                <div className="right"></div>
                {/* <div className="col card-img">
                  <img src={data.img} alt="img" />
                </div>
                <div className="col details">
                  <h2>{data.title}</h2>
                  <p>{data.details}</p>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achieve;
