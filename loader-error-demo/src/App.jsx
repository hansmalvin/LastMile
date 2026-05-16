import { useState } from "react";
import './App.css'
import Loader from "./components/Loader";
import ErrorView from "./components/ErrorView";
import ProfileCard from "./components/ProfileCard";

const fetchMockData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({
          name: "Budi",
          email: "budi@email.com",
        });
      } else {
        reject("Failed to retrieve data");
      }
    }, 2000);
  });
};

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleFetch = () => {
    setIsLoading(true);
    setError(null);
    setData(null);

    fetchMockData()
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  if (isLoading) return <Loader />;
  if (error) return <ErrorView message={error} onRetry={handleFetch} />;
  if (data) return <ProfileCard data={data} />;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Loader Error Demo</h1>
      <button onClick={handleFetch}>Fetch Data</button>
    </div>
  );
}

export default App;