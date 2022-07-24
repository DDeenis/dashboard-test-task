import React from "react";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { Dashboard } from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <div className="p-8 w-full">
        <AppHeader
          user={{
            name: "Jones Ferdinand",
            avatar: "https://i.imgur.com/4VYNScu.png",
          }}
          hasNotifications
        />
        <main></main>
      </div>
    </div>
  );
}

export default App;
