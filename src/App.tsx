import { createQuery } from "react-query-kit";
import axios from "axios";

const delay = (ms = 300) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const fetchData = async () => {
  const { data } = await delay(1000).then(() =>
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
  );
  return data;
};

const useTestQuery = createQuery({ queryKey: ["test"], fetcher: fetchData });

const App = () => {
  const { data } = useTestQuery({ enabled: false });

  return (
    <div>
      <h1>Test Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
