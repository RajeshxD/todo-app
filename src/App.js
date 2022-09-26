import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
