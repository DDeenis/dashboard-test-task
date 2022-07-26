import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { InfoCards } from "./components/InfoCards/InfoCards";
import { UsersPage } from "./layout/UserPage/UsersPage";

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
        <main>
          <InfoCards>
            <InfoCards.Card title="Active" value="60" />
            <InfoCards.Card title="Online" value="16" />
            <InfoCards.Card title="Filtered" value="43" />
            <InfoCards.Card title="Banned" value="64" />
          </InfoCards>
          <Routes>
            <Route path="/" element={<Navigate to={"/users"} />} />
            <Route path="/users" element={<UsersPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
