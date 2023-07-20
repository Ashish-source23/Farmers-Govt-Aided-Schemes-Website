import React from "react";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div>
          <div className="homeBlock1">
            <div className="container1">
              <h5>Welcome to the Farmer Government-Aided Schemes WebApp!</h5>
              <h3>Empowering Farmers for a Prosperous Future</h3>
              <p>
                Discover a wealth of government-aided schemes designed to
                support and uplift farmers across our nation. This interactive
                web application is your gateway to accessing vital information,
                resources, and benefits that can transform your farming
                practices and enhance your agricultural journey. Explore the
                numerous opportunities available to you and unlock the potential
                for growth and success in your farming endeavors.
              </p>
            </div>
            <div>
              <img
                className="homeImage"
                src="../../images/home1.jpg"
                alt="Icon"
              ></img>
            </div>
          </div>

          <div className="homeBlock2">
            <div className="container2">
              <h3> Key Features:</h3>
              <ol>
                <li>
                  <span> Detailed Scheme Information : </span> Dive deep into
                  each scheme to gain a thorough understanding of eligibility
                  criteria, application procedures, funding details, and
                  associated benefits. Stay informed and make informed decisions
                  about the schemes that best align with your farming goals.
                </li>
                <li>
                  <span> News and Updates : </span>
                  Stay up-to-date with the latest news, policy changes, and
                  updates related to agricultural schemes and initiatives. Be
                  the first to know about new opportunities and stay informed
                  about any modifications that may impact your farming
                  operations.
                </li>
                <li>
                  <span> Community Collaboration : </span>
                  Connect with a vibrant community of fellow farmers, share
                  experiences, seek advice, and foster meaningful
                  collaborations. Engage in discussions, exchange knowledge, and
                  support one another in your collective pursuit of agricultural
                  excellence.
                </li>
              </ol>
            </div>
            <div>
              <img
                className="homeImage2"
                src="../../images/home2.jpg"
                alt="Icon"
              ></img>
            </div>
          </div>

          <div className="homeBlock3">
            <div className="container3">
              <p>Experience the Power of Government-Aided Schemes in Farming</p>
              <p>
                We believe in empowering farmers through accessible information
                and providing them with the necessary tools to thrive in a
                dynamic agricultural landscape. With our Farmer Government-Aided
                Schemes WebApp, you can unlock the immense potential offered by
                government support.
              </p>
              <p>
                Maximize your farming outcomes, boost productivity, and embark
                on a path towards a prosperous future. Start exploring the world
                of government-aided schemes and transform your farming journey
                today!
              </p>
            </div>
            <div>
              <img
                className="homeImage3"
                src="../../images/home3.jpg"
                alt="Icon"
              ></img>
            </div>
          </div>
          <p className="tc">
            <span>*T&C :</span> This web app is designed to provide information
            and assistance related to government-aided schemes. Please refer to
            the respective scheme guidelines and authorities for official
            updates and application processes.
          </p>
        </div>
      </div>
    </>
  );
}
