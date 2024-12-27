import {
  Email_focus_out,
  // Password_focus_out,
  Button_inactive,
} from "./login_signup.js";

const Input = document.querySelectorAll(".input_area"); //input 태그 선택
const Error_message = document.querySelectorAll(".error_message"); //에러메시지 뜰곳 선택

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

Input[1].addEventListener("focusout", Password_focus_out);
