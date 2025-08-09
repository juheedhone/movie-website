import { useState } from "react";

const Card = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  );
};

const App = () => {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="card-container">
      <h2>Function arrow component</h2>
      <Card title="star war" />
      <Card title="avatar" />
      <Card title="lion " />
    </div>
  );
};

export default App;
