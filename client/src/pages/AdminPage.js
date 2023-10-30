import React from "react";
import Entry from "../components/Entry";

const AdminPage = () => {
  const xxx = [{ email: "asdasd@gmail.com", password: "admooed443#" }];
  return (
    <div className="admin-page">
      <h1>Admin Panel</h1>
      <hr />
      <div className="accounts">
        {xxx.map((e, i) => {
          return (
            <Entry
              key={`id${i + 1}`}
              index={i + 1}
              email={e.email}
              password={e.password}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AdminPage;
