import * as React from 'react';
import './App.css';

const App = () => {

  const [tempData, setTempData] = React.useState(null);
  
  async function getData() {
    try {
      const response = await fetch("/accounts");
      const data = await response.json();
      setTempData(data)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {tempData && Array.isArray(tempData) ?  (
        tempData.map((item, index) => (
          <div key={index}>
            <p>{item.id}</p>
            <p>{item.username}</p>
            <p>{item.role}</p>
          </div>
          ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
