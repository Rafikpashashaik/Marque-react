import "./App.css";
import Js from "./Assets/JavascriptImg.png";
import java from "./Assets/Java.png";
import Angular from "./Assets/Angular.png";
import Oracle from "./Assets/Oracle.png";
import PostSQL from "./Assets/PostSQL.png";
import Spring from "./Assets/Spring.png";
import python from "./Assets/Python.png";
import Kotlin from "./Assets/Kotlin.png";
import cssHtml from "./Assets/cssHtml.png";
import cplus from "./Assets/C++.png";
import cAsh from "./Assets/C#.png";

function App() {
  return (
    <div className="App">
      <div className="MarqueeContainer">
        <div class="container ">
          <div class="row">
            <div class="col-md-6 order-md-first">
              <div class=" marquee-LeftSideMianTitle">Technologies</div>
              <div class=" marquee-LeftSideSubTitle">A Comprehensive Stack</div>
            </div>
            <div class="col-md-6 marquee-RightSide text-center ">
              Our specialists have extensive experience in working with the most
              popular technologies, universally suitable for the implementation
              of your innovative ideas
            </div>
          </div>
        </div>

        <div className="marquee">
          <div className="marquee__group">
            <img src={Js} alt="JAVASCRIPT IMG"></img>

            <img src={java} alt="JAVASCRIPT IMG"></img>

            <img src={python} alt="JAVASCRIPT IMG"></img>

            <img src={Kotlin} alt="JAVASCRIPT IMG"></img>

            <img src={Angular} alt="JAVASCRIPT IMG"></img>

            <img src={Oracle} alt="JAVASCRIPT IMG"></img>

            <img src={cssHtml} alt="JAVASCRIPT IMG"></img>

            <img src={Spring} alt="JAVASCRIPT IMG"></img>

            <img src={cplus} alt="JAVASCRIPT IMG"></img>

            <img src={cAsh} alt="JAVASCRIPT IMG"></img>

            <img src={PostSQL} alt="JAVASCRIPT IMG"></img>
          </div>
        </div>

        <div
          className="marquee marquee--borders"
          style={{ "--duration": "100s" }}
        >
          <div className="marquee marquee--reverse">
            <div className="marquee__group">
              <img src={Js} alt="JAVASCRIPT IMG"></img>

              <img src={java} alt="JAVASCRIPT IMG"></img>

              <img src={python} alt="JAVASCRIPT IMG"></img>

              <img src={Kotlin} alt="JAVASCRIPT IMG"></img>

              <img src={Angular} alt="JAVASCRIPT IMG"></img>

              <img src={Oracle} alt="JAVASCRIPT IMG"></img>

              <img src={cssHtml} alt="JAVASCRIPT IMG"></img>

              <img src={Spring} alt="JAVASCRIPT IMG"></img>

              <img src={cplus} alt="JAVASCRIPT IMG"></img>

              <img src={cAsh} alt="JAVASCRIPT IMG"></img>

              <img src={PostSQL} alt="JAVASCRIPT IMG"></img>
            </div>

            <div aria-hidden="true" className="marquee__group">
              <img src={Js} alt="JAVASCRIPT IMG"></img>

              <img src={java} alt="JAVASCRIPT IMG"></img>

              <img src={python} alt="JAVASCRIPT IMG"></img>

              <img src={Kotlin} alt="JAVASCRIPT IMG"></img>

              <img src={Angular} alt="JAVASCRIPT IMG"></img>

              <img src={Oracle} alt="JAVASCRIPT IMG"></img>

              <img src={cssHtml} alt="JAVASCRIPT IMG"></img>

              <img src={Spring} alt="JAVASCRIPT IMG"></img>

              <img src={cplus} alt="JAVASCRIPT IMG"></img>

              <img src={cAsh} alt="JAVASCRIPT IMG"></img>

              <img src={PostSQL} alt="JAVASCRIPT IMG"></img>
            </div>
          </div>
        </div>
      </div>
      <h6>Created by Rafi@Dev</h6>
    </div>
  );
}

export default App;
