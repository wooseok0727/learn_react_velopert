import Post from './models/post';

export default function createFakeData() {
  // 0,1 ... 39로 이루어진 배열을 생성한 후 포스트 데이터로 변환
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    // https://www.lipsum.com/ 에서 복사한 200자 이상의 텍스트
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Vestibulum luctus metus sed felis sollicitudin finibus. 
    Nam justo odio, sagittis eleifend consectetur in, ornare ut 
    lectus. Proin non porttitor justo. Maecenas at lobortis massa.
     Duis pretium sed nibh vel efficitur. Sed sit amet arcu dui. 
     Fusce a nisi vestibulum, mattis lacus quis, mattis massa. 
     Etiam tincidunt dictum urna, vel euismod mi mattis sit amet. 
     Proin non odio eros. Sed ornare porttitor dignissim.`,
    tags: ['가짜', '데이터'],
  }));
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
