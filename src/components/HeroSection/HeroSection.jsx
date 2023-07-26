import banner from "../../assets/Banner-image.png";
import bg from "../../assets/Rectangle-banner-bg.png";
const HeroSection = () => {
  return (
    <div
      className="bg-img"
      style={{
        height: "100%",
        backgroundColor: "#39B0E4",
      }}
    >
      <div className="row container mx-auto">
        <div className="col left text-light d-flex align-items-center">
          <div className="">
            <h1 style={{ fontFamily: "Montserrat", fontSize: 52 }}>
              Best IAS Coching For Geography
            </h1>
            <p className="" style={{ textShadow: "-3px -4px 3px black" }}>
              Success is simple. Do what’s right, the right way, at the right
              time and with right DIRECTION IAS ! Top Rank 2021 UPSC Result
              4th,Rank , 12th, Rank , 30th, Rank
            </p>
            <button
              type="button"
              className="outline-btn"
              style={{
                border: "1px solid black",

                color: "black",
              }}
            >
              Classroom Admission
            </button>
          </div>
        </div>
        <div className="col right mt-5">
          <div>
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={banner}
                    className="d-block c-img"
                    alt="..."
                    style={{ width: 584 }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={banner}
                    className="d-block c-img"
                    alt="..."
                    style={{ width: 584 }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={banner}
                    className="d-block c-img"
                    alt="..."
                    style={{ width: 584 }}
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
