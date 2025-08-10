import React from "react";
function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-6 mt-5">
          <img src={imageUrl}  />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            {" "}
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{marginLeft:"3rem"}}>Learn More</a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{marginLeft:"3rem"}}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
            <a href="/"></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
