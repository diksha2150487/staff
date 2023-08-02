import logo from "./logo.svg";
import "./App.css";
import img1 from "./image/Group (8).png";
import img2 from "./image/Frame.png";
import img3 from "./image/Frame (1).png";
import img4 from "./image/Vector (16).png";
import img5 from "./image/check 1.png";
import img6 from "./image/Group 72887.png";

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
    </div>
  );
}

export default App;
