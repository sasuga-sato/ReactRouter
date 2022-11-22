import { BrowserRouter, Link } from "react-router-dom";

import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    // このコンポーネントで囲った配下でルーティングを有効にする
    <BrowserRouter>
      <div className="App">
        {/* aタグと同じようなものでLinkを表現してくれるもの */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <Link to="/Page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
