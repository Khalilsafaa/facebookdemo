import React, { useState } from "react";
import Entry from "../components/Entry";

const AdminPage = () => {
  const xxx = [{ email: "asdasd@gmail.com", password: "admooed443#" }];
  const [data, setData] = useState([{}])
  const getInfo = async () => {
    const res = await axios.get(`${uri}/api/info`).then(setData(res.data))
  }
  return (
    <div className="admin-page">
      <h1>Admin Panel</h1>
      <button onClick={() => getInfo()}>Refresh</button>
      <hr />
      <div className="accounts">
        {data.map((e, i) => {
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
