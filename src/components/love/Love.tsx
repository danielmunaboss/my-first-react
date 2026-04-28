import "./Love.css";
import logo from "../../assets/image/DMA LOGO.jpg";
import card from "../../assets/image/com.card.jpg";
const Love = () => {
  return (
    <div>
      <h1 className="love">i love myself</h1>
      <img className="logo" src={logo} />
      <img src={card} />
      <div>
        <h2 className="bg-img">hello nigeria</h2>
      </div>
      <div className="value"></div>
      <div>
        <h4 style={{ color: "red", fontSize: "50px" }}>hello africa</h4>
      </div>
    </div>
  );
};

export default Love;
