const HeroSection = () => {
  return (
    <div className="" style={{ height: "75vh", backgroundColor: "#39B0E4" }}>
      <div className="d-flex">
        <div className="left text-light">
          <h1 style={{ fontFamily: "Montserrat", fontSize: 52 }}>
            Best IAS Coching For Geography
          </h1>
          <p className="" style={{ textShadow: "-3px -4px 3px black" }}>
            Success is simple. Do what’s right, the right way, at the right time
            and with right DIRECTION IAS ! Top Rank 2021 UPSC Result 4th,Rank ,
            12th, Rank , 30th, Rank
          </p>
          <button
            type="button"
            className="btn p-2"
            style={{
              border: "1px solid black",
              borderRadius: "30%",
              backgroundColor: "white",
            }}
          >
            Classroom Admission
          </button>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default HeroSection;
