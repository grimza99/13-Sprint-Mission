import // Email_focus_out,
// Password_focus_out,
// Button_inactive,
"./login_signup.js";

const Input = document.querySelectorAll(".input_area"); //input 태그 선택
const Error_message = document.querySelectorAll(".error_message"); //에러메시지 뜰곳 선택
const Btn = document.querySelector("#login_botton");
const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

//이메일 유효성 검사 함수
function email_check(email) {
  return pattern.test(email);
}

//이메일 함수
function Email_focus_out(e) {
  const text = document.createElement("a");
  if (e.target.value == "") {
    Input[0].classList.toggle("input_red_border");
    if (Error_message[0].textContent) {
      Error_message[0].remove();
    }
    text.textContent = "이메일을 입력해주세요.";
    Error_message[0].prepend(text);
  } else if (email_check(e.target.value) == false) {
    Input[0].classList.toggle("input_red_border");
    if (Error_message[0].textContent) {
      Error_message[0].remove();
    }
    Error_message[0].prepend("잘못된 이메일 형식입니다.");
  } else {
    Error_message[0].remove();
    Input[0].classList.remove("input_red_border");
  }
}

//비밀번호 함수
function Password_focus_out(e) {
  //중복 코드 정리필요, boder 가끔 사라지는 부분 수정 필요
  const text = document.createElement("a");
  if (e.target.value == "") {
    Input[1].classList.toggle("input_red_border");
    if (Error_message[1].textContent) {
      Error_message[1].remove();
    }
    text.textContent = "비밀번호를 입력해주세요.";
    Error_message[1].prepend(text);
  } else if (e.target.value.length < 8) {
    Input[1].classList.toggle("input_red_border");
    if (Error_message[1].textContent) {
      Error_message[1].remove();
    }
    Error_message[1].prepend("비밀번호를 8자 이상 입력해주세요.");
  } else {
    Error_message[1].remove();
    Input[1].classList.remove("input_red_border");
  }
}

// //버튼 함수
// function Button_inactive (e) {
//   if
//   Btn
// }

//이벤트 핸들러 등록
Input[1].addEventListener("focusout", Password_focus_out);
Input[0].addEventListener("focusout", Email_focus_out);
// Btn.addEventListener("focusout", Email_focus_out);
