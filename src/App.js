// import cardimg from "./Images/cardimg.jpg"
import "./App.css";
import Card_img from "./Components/Card_img.js";
import Card_info from "./Components/Card_info";
import Card_content from "./Components/Card_content";
import Card_footer from "./Components/Card_footer";


export default function App() {
  return (
    <div>
      <h1>Challenge is Ready to Go_#ReactisOsm!!!</h1>
      <div className="Card">
        <Card_img />
        <Card_info />
        <Card_content/>
        <Card_footer/>
      </div>
    </div>
  );
}
