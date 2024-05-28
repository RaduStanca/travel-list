import "./App.css";
import Logo from "./components/logo/Logo.jsx";
import Form from "./components/form/Form.jsx";
import PackingList from "./components/packinglist/PackingList.jsx";
import Status from "./components/status/Status.jsx";

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Status />
    </div>
  );
};

export default App;
