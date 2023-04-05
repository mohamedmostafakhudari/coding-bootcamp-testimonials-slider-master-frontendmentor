import { useState } from "react";
import Main from "./sections/Main";
function App() {
  return (
    <div className="App font-body h-full">
      <Main />
      <footer className="bg-white text-textPrimary ">
        <p className="text-center text-sm">
          &copy; <span>Mohamed Mostafa</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
