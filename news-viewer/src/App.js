import React, { useState } from 'react';
import axios from 'axios';
import APIKEY from './config/newsApiConfig';

function App() {
  const [data, setData] = useState(null);
  // https://jsonplaceholder.typicode.com/ 에서 제공하는
  // 가짜 API를 호출하여 보기
  const onClick = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${APIKEY}`,
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
}

export default App;
