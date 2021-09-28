import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String], // 문자열로 이루어진 배열
  publishedDate: {
    type: Date,
    default: Date.now, // 현재 날짜를 기본값으로 지정
  },
});

/*
    Schema Type
    String : 문자열
    Number : 숫자
    Date : 날짜
    Buffer : 파일을 담을 수 있는 버퍼
    Boolean : true 또는 false 값
    Mixed(Schema.Types.Mixed) 어떤 데이터도 넣을 수 있는 형식
    ObjectId(Schema.Types.ObjectId) : 객체아이디, 주로 다른 객체를 참조할때 넣음
    Array : 배열 형태의 값으로 [] 감싸서 사용

    ex)
    const AuthorSchema = new Schema({
        name : String,
        email : String,
    });
    const BookSchema = new Schema({
        title : String,
        description: String,
        authors: [AuthorSchema],
        meta : {
            likes: Number,
        },
        extra: Schema.Types.Mixed
    })

    이렇게 스키마 내부에 다른 스키마를 내장 시킬수도 있다
*/

// 첫번쨰 파라미터는 스키마이름, 두번쨰 파라미터는 스키마 객체
// 스키마 이름을 정해주면 그 이름의 복수 형태로 컬렉션을 만든다

// 이 컨벤션을 따르고 싶지 않다면 세번쨰 파라미터에 원하는 이름을 입력
// 이런 경우 첫번쨰 파라미터로 넣어준 이름은
// 나중에 다른 스키마에서 현재 스키마를 참조해야 하는 상황에서 사용된다
const Post = mongoose.model('Post', PostSchema);
export default Post;
