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
      <div className="row">
        {data.map((info, index) => {
          return (
            <div key={index} className="col d-flex">
              <div className="img">
                <img src={info.img} alt="img" />
              </div>
              <div className="details">
                <h2>{info.title}</h2>
                <p>{info.details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achieve;
