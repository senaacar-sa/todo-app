import "./App.css";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
function App() {
  return (
    <div className="app">
      <Header title="Senanın Görevleri" subtitle='Bugün neler yapacaksın?'/>
      <TodoList/>
    </div>
  );
}

export default App;
