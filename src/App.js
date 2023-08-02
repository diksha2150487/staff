import logo from "./logo.svg";
import "./App.css";
import img1 from "./image/Group (8).png";
import img2 from "./image/Frame.png";
import img3 from "./image/Frame (1).png";
import img4 from "./image/Vector (16).png";
import img5 from "./image/check 1.png";
import img6 from "./image/Group 72887.png";
import img7 from "./image/Group 71310.png";
import img8 from "./image/Group 71314.png";
import img9 from "./image/Group 71318.png";
import img10 from "./image/Group 71321.png";

import { AiOutlineArrowRight } from "react-icons/ai";
function App() {
  return (
    <div>
      <div className="staff-paper">
        <div className="local-left">
          <p className="staff">STAFF </p>
          <p className="beery">AUGMENTATION</p>
          <p className="velly">
            Expect the best technology and UI/UX design resources on demand from
            us.
          </p>
        </div>
        <div className="local-right">
          {/* <img src={img1} alt="img" className="three-circle" /> */}
        </div>
      </div>
      {/* *************************************************** */}
      <div className="white-main-goo">
        <p className="cabe">CAPABILITIES</p>
        <div className="fourth-main-line">
          <div className="one-hole">
            <div className="same">
              <p className="product">Digital Product </p>
              <img src={img1}></img>
            </div>
            <p className="kity">Engineering</p>
            <p className="API">UI/UX | Frontend | API | Web | Mobile | Dev</p>
          </div>
          <div className="one-hole" id="narrow">
            <div className="same">
              <p className="product">Digital </p>
              <img src={img2}></img>
            </div>
            <p className="kity">Transformation</p>
            <p className="API" id="cogy">
              SEO | SEM | Creative & Design Media | Email & Marketing Automation
            </p>
          </div>
          <div className="one-hole">
            <div className="same">
              <p className="product">Quality</p>
              <img src={img3}></img>
            </div>
            <p className="kity"> Engineering</p>
            <p className="API">UI/UX | Frontend | API | Web | Mobile | Dev</p>
          </div>
          <div className="one-hole">
            <div className="same">
              <p className="product">E-Commerce</p>
              <img src={img4}></img>
            </div>
            <p className="API">UI/UX | Frontend | API | Web | Mobile | Dev</p>
          </div>
        </div>
      </div>
      {/* ****************************************************** */}
      <div class="container8">
        <div class="leftcontainer8">
          <h3>BENEFITS </h3>
          <div class="uptime">
            <img src={img5} />
            <h5>Industry-leading junior, mid-level, and senior talent</h5>
          </div>
          <div class="uptime">
            <img src={img5} />
            <h5>Motivated, productive, and talented resources</h5>
          </div>
          <div class="uptime">
            <img src={img5} />
            <h5>Availability, reliability, and quality guaranteed</h5>
          </div>
          <div class="uptime">
            <img src={img5} />
            <h5>
              Team members fully versed in using the Agile Scrum methodology
            </h5>
          </div>
          <div class="uptime">
            <img src={img5} />
            <h5>Paying only for what you need</h5>
          </div>
          <div class="uptime">
            <img src={img5} />
            <h5>Better control over existing staff</h5>
          </div>
          <button class="call1">
            Request A Call
            <AiOutlineArrowRight id="line-arrow" />
          </button>
        </div>
        <div class="rightcontainer8">
          <img src={img6} />
        </div>
      </div>
      {/* *************************************************** */}
      <div class="cont-process">
        <p className="plogy">THE PROCESS</p>
        <div class="onerow">
          <div className="secondrow" id="boximg">
            <p className="need" id="dolt">
              Determining
            </p>
            <p className="bord" id="liam">
              Need
            </p>
            <img src={img7} id="joo" />
          </div>
          <div class="secondrow" id="lia">
            <p className="need" id="toll">
              Sourcing{" "}
            </p>
            <p className="bord" id="walt">
              Talent
            </p>
            <img src={img8} id="rob" />
          </div>
          <div class="secondrow" id="flok">
            <p className="need" id="hell">
              On{" "}
            </p>
            <p className="bord" id="mist">
              Boarding
            </p>
            <img src={img9} id="eko" />
          </div>
          <div class="secondrow" id="kylo">
            <p className="need" id="volo">
              Get Your Projects
            </p>
            <p className="bord" id="faq-lo">
              {" "}
              Delivered
            </p>
            <img src={img10} id="funny" />
          </div>
        </div>
      </div>
      {/* ******************************************************** */}
      <div className="container-c">
        <div class="left-row">
          <h1>Contact Us</h1>
          <h4>Please complete the below form. we will get in touch with you</h4>
          <div class="input-container">
            <div class="styled-input wide">
              <input class="inp" type="text" placeholder="Name*" required />
              <input
                class="inp"
                type="text"
                placeholder="Phone number*"
                required
              />
            </div>
            <div class="styled-input wide">
              <input
                class="inp-1"
                type="email"
                placeholder="Email Address*"
                required
              />
              <input
                class="inp-1"
                type="text"
                placeholder="Location*"
                required
              />
            </div>
            <div class="styled-input wide">
              <input class="inp-2" required placeholder="Business Name"></input>
            </div>
            <div class="styled-input wide">
              <input class="inp-3" required placeholder="Message"></input>
            </div>
          </div>
          <br />
          <div id="form-btn" class="btn-lrg submit-btn">
            Submit <i class="fa-solid fa-arrow-right" id="submit-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
