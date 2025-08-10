import React from "react";

function Hero() {
  return (
    <section className="container-fluide p-5" id="supportHero">
      <div className="container " style={{ padding: "0px 7rem" }}>
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h4>Support Portal</h4>
          <a href="#" className="text-white text-decoration-underline">
            Track Tickets
          </a>
        </div>

        <div className="row ">
          <div className="col-md-7 mb-4  " >
            <h2 className="fs-4 mb-5">
              Search for an answer or browse help topics to create a ticket
            </h2>
            <input
              className=" mb-3"
              style={{
                width: "100%",
                padding: "20px 20px",
                borderRadius: "10px",
                border: "none",
              }}
              type="text"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected.."
            />
            <div className="d-flex flex-wrap gap-2 mb-5">
              <a href="#" className="text-white ">
                Track account opening
              </a>
              <a href="#" className="text-white ">
                Track segment activation
              </a>
              <a href="#" className="text-white">
                Intraday margins
              </a>
              <a href="#" className="text-white ">
                Kite user manual
              </a>
            </div>
          </div>

          <div className="col-md-5" >
            <h2 className="fs-4 mb-3">Featured</h2>
            <ol className="ps-3">
              <li className="mb-3">
                <a href="#" className="text-white ">
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>
              <li>
                <a href="#" className="text-white ">
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
