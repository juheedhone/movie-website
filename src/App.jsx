import { useEffect, useState } from "react";

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been Liked : ${hasLiked} `);
  });
  return (
    <div className="card">
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

const App = () => {
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
