import DSCN6494 from "./DSCN6494.png"
import DSCN6508 from "./DSCN6508.png"
import IMG_1527 from "./IMG_1527.png"
import IMG_1528 from "./IMG_1528.png"
import IMG_6316 from "./IMG_6316.JPG"
import IMG_6676 from "./IMG_6676.JPG"
import "./App.css";

function App() {
  return (
    <>
      <div className="bday">HAPPY BIRTHDAY</div>
      <div className="name">JOEL ALABI</div>

      <div className="wrapper">
        <div className="img-area">
        <div className="single-img">
          <div className="single-img img-one">
            <img src={DSCN6494} alt=" "/>
          </div> 
          <div className="single-img">
          <div className="single-img img-two">
            <img src={DSCN6508} alt=" "/>
            </div>
          </div>
          <div className="single-img">
          <div className="single-img img-three">
            <img src={IMG_1527} alt=" "/>
          </div>
          </div>
        
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
