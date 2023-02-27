import './App.css';
import {ChatProvider} from "./context/ChatContext"
import Container from "./components/container/Container"

function App() {
  return (
    <div className="App">
      <ChatProvider>
        <Container/>
      </ChatProvider>
    </div>
  );
}

export default App;
