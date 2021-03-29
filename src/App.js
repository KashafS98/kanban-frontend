import "./App.css";
import Header from "./containers/Header";
import Board from "./containers/Board";
import { Provider } from "react-redux";
import store from "./models/store";
import {IconContext} from 'react-icons'
import { secondaryColor } from "./utils/constants";

function App() {
  return (
    <Provider store={store}>
      <IconContext.Provider value={{ color: secondaryColor, className: "puffin-icons", style: {cursor:'pointer'} }}>
      <div className="App">
        <Header />
        <Board />
      </div>
      </IconContext.Provider>
    </Provider>
  );
}

export default App;
