import React from 'react';
import { Route } from 'react-router-dom';
// import NewsList from './comps/NewsList';
// import Categories from './comps/Categories';
import NewsPage from './pages/NewsPage';

const App02 = () => {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => setCategory(category), []);

  // return (
  //   <>
  //     <Categories category={category} onSelect={onSelect} />
  //     <NewsList category={category} />
  //   </>
  // );

  return <Route path="/:category?" component={NewsPage} />;
};

export default App02;
