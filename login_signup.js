/*공통 함수*/

function Email_focus_out(e) {
  //여기서 e는 focusout임.
  if (e.target == false || e) {
    //값이 없거나 이메일 유효성 검사
    //빨간테두리 의 css로 class네임 변경
    if (e.target == false) {
      //error.message class에 메시지 추가
    } else {
      //유효성 검사 x
      //error.message class에 “잘못된 이메일 형식입니다”  메시지 추가
    }
  }
}

function Password_focus_out(e, message) {
  if (e.target.value == "" || e.target.value.lenght < 8) {
    if (e.target.value == "") {
      message.prepend("비밀번호를 입력해주세요.");
    } else {
      message.prepend("비밀번호를 8자 이상 입력해주세요.");
    }
  }
}

function Button_inactive(e) {
  if (e) {
  }
}
// input 에 빈 값이 있거나 에러 메세지가 있으면  ‘로그인,회원가입’ 버튼은 비활성화 됩니다.
// Input 에 유효한 값을 입력하면  ‘로그인,회원가입' 버튼이 활성화 됩니다.

//로그인 버튼 함수 작성, 로그인 버튼 요소에 핸들러 등록,
//로그인 버튼 함수 (위의 input 요소에 에러메시지가 없고, 유효한 값일때 로그인 버튼 활성화 되게 )
// 활성화된 ‘로그인,회원가입’ 버튼을 누르면  “/items”,signin 로 이동

/*signup 함수 */
function Nickname_focus_out(e) {
  if (e.target.value == false) {
    //input에 빨강색 테두리와 아래에 “닉네임을 입력해주세요.”
  }
}

function Password_correct(e) {
  if (e) {
    // 비밀번호 input과 비밀번호 확인 input의 값이 다른 경우,
    //비밀번호 확인 input 아래에 “비밀번호가 일치하지 않습니다..” 에러 메세지를 보입니다.
  }
}

export {
  Email_focus_out,
  Password_focus_out,
  Button_inactive,
  Nickname_focus_out,
  Password_correct,
};
