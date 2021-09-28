import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
});

/*
    모델 메서드
    모델에서 사용할 수 있는 함수로 2가지 종류가 있다
    첫번째는 인스턴스 메서드로, 모델을 통해 만든 문서 인스턴에서
        사용할 수 있는 함수
    두번째는 스태틱 메서드로 모델에서 바로 사용할 수 있는 함수
*/

// 인스턴스 메서드
// 작성할 때는 함수 내부에서 this에 접근해야 하기 때문에
// 화살표 함수가 아닌 function 키워드를 사용하여 구현해야 한다.
// 여기서 this는 문서 인스턴스를 가리킨다
UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result; // ture / false
};

UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

UserSchema.methods.generateToken = function () {
  const token = jwt.sign(
    // 첫번쨰 파라미터에는 토근 안에 집어넣고 싶은 데이터를 넣는다
    {
      _id: this._id,
      username: this.username,
    },
    process.env.JWT_SECRET, // 두번째 파라미터에는 JWT 암호를 넣는다
    {
      expiresIn: '7d', // 7일 동안 유효함
    },
  );
  return token;
};

// 스태틱 메서드
// 스태틱 함수에서의 this는 모델을 가리킨다
// 여기서는 User를 가리킴
UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};

const User = mongoose.model('User', UserSchema);
export default User;
