import logo from "./logo.svg";
import "./App.css";
import img1 from "./image/Layer 0 (1).png";
import img2 from "./image/Mask group (1).png";
import img3 from "./image/Layer 1 (1).png";
import img4 from "./image/Group 71929 (1).png";
import img5 from "./image/Layer 1 6 (1).png";
import img6 from "./image/protrucks 1 (1).png";
import img7 from "./image/Layer 1 (1).png";
import img8 from "./image/Group 71929 (1).png";
import img9 from "./image/Layer 1 6 (1).png";
import img10 from "./image/protrucks 1 (1).png";
import img11 from "./image/Rectangle 18297 (2).png";
import img12 from "./image/Rectangle 18298.png";
import img13 from "./image/Group 1000007475.png";
import img14 from "./image/Group 1000007474.png";
import img15 from "./image/Group 1000007473.png";
function App() {
  return (
    <div>
      <div className="staff-paper">
        <div className="local-left">
          <p className="velly">
            Our experts have been working alongside in-house teams for over a
            decade.
          </p>
        </div>
        <div className="local-right">
          <div className="dove-bb">
            <img src={img1} className="jorry" alt="logo"></img>
            <hr className="dark-line" />
            <img src={img2} className="kick" alt="logo"></img>
          </div>
          <div className="Dment">
            <img src={img7} className="guns" alt=""></img>
            <hr className="dark-line" />
            <img src={img8} className="nijia" alt=""></img>
          </div>
          <div className="trunks">
            <img src={img9} className="rely" alt=""></img>
            <hr className="dark-line" />
            <img src={img10} className="pro" alt=""></img>
          </div>
        </div>
      </div>
      {/* *************************************************** */}
      <div className="group-main">
        <div className="looft">
          <div className="contact">
            <p className="in-house">
              Want to boost your in-house development team? See how we can help.
            </p>
            <button className="bord">
              <p className="call">Schedule a Call</p>
            </button>
          </div>
        </div>
      </div>
      {/* ****************************************************** */}
      <div className="our-hightlight">
        <div className="safolo-left">
          <p className="seamless">Our process. Simple, seamless, streamlined</p>
          <img src={img12} id="group-men"></img>
        </div>
        <div className="safolo-right">
          <div className="circle-part">
            <img src={img13} className="phone-box"></img>
            <hr className="dotted" />
            <img src={img14} className="phone-box"></img>
            <hr className="dotted" />
            <img src={img15} className="phone-box"></img>
            <hr className="dotted" />
            <hr id="short" />
          </div>

          <div className="step-part">
            <div className="discover-main">
              <p className="ylo">STEP 1</p>
              <p className="tile">Complete a discovery call.</p>
              <p className="toggle">
                Tell us more about your business on a discovery call. We’ll
                discuss your project requirements, success criteria, timescale,
                budget and required skill sets to see if we can help.
              </p>
            </div>
            <div className="doveloper-main">
              <p className="ylo">STEP 2</p>
              <p className="tile">Get the developers you need.</p>
              <p className="toggle">
                In just days, we’ll hand-select experts based on your needs and
                required expertise.
              </p>
            </div>
            <div className="onbord-main">
              <p className="ylo">STEP 3</p>
              <p className="tile">Onboard and scale as required.</p>
              <p className="toggle">
                Our team joins yours, and hits the ground running. Onboard your
                new team members, manage performance, and scale your headcount
                as needed.
              </p>
            </div>

            <button className="scale">Schedule a Call</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
