import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = ({ post, error, loading }) => {
  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생</PostViewerBlock>;
  }

  // 로딩 중이거나 아직 포스트 데이터 없을 때
  if (loading || !post) {
    return null;
  }
  const { title, body, user, publishedDate, tags } = post;

  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo
          username={user.username}
          publishedDate={publishedDate}
          hasMarginTop
        />
        <Tags tags={tags} />
      </PostHead>
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </PostViewerBlock>
  );
};

export default PostViewer;

/*
    리액트에서  <div>{html}</div> 와 같이 HTML을
    그대로 렌더링하는 형태로 JSX를 작성하면 HTML 태그가 적용되지 않고
    일반 텍스트 형태로 나타나버린다
    따라서 HTML 을 적용하고 싶다면 dangerouslySetInnerHTML 이라는
    props를 설정해서 써야한다
*/
