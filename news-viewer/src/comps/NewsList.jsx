import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import APIKEY from '../config/newsApiConfig';
import usePromise from '../lib/usePromise';

// API를 요청하고 뉴스 데이터가 들어 있는 배열을
// 컴포넌트 배열로 변환하여 렌더링해 주는 컴포넌트

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and(max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const sampleArticle = {
//   title: '제목',
//   description: '내용',
//   url: 'https://google.com',
//   urlToImage: 'https://via.placeholder.com/160',
// };

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${APIKEY}`,
    );
  }, [category]);
  // const [articles, setArticles] = useState(null);
  // // 요청이 대기중일 때는 true, 요청이 끝나면 false
  // const [loading, setLoading] = useState(false);

  // useEffect를 사용하여 컴포넌트가 처음 렌더링되는 시점에 API 요청
  // 주의할점은 useEffect에 등록하는 함수에 async를 붙이면 안된다
  // useEffect에서 반환해야 하는 값은 뒷정리 함수이기 때문이다
  // useEffect 내부에서 async/await 을 사용하고 싶다면, 함수 내부에
  // async 키워드가 붙은 또 다른 함수를 만들어서 사용해야 한다

  // useEffect(() => {
  //   //async를 사용하는 함수 따로 선언
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const query = category === 'all' ? '' : `&category=${category}`;
  //       const response = await axios.get(
  //         `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${APIKEY}`,
  //       );
  //       setArticles(response.data.articles);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [category]);

  // 대기 중일 때
  if (loading) {
    return <NewsListBlock>대기 중..</NewsListBlock>;
  }
  // 아직 response 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }

  // 에러가 발생했을 때
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  // response 값이 유효할 때
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

/*
  map 함수를 사용하기 전에 꼭 !articles를 조회하여 해당 값이
  현재 null이 아닌지 검사해야 한다
  아직 데이터가 없을 때 null 에는 map 함수가 없기 때문에
  렌더링 과정에서 오류가 발생한다
*/

export default NewsList;
