import // Email_focus_out,
// Password_focus_out,
// Button_inactive,
"./login_signup.js";

const Email = document.querySelector("#user_email"); //input 태그 선택
const password = document.querySelector("#password"); //input 태그 선택
const Error_message = document.querySelectorAll(".error_message"); //에러메시지 뜰곳 선택
const Btn = document.querySelector("#login_button");
const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

Btn.addEventListener("click", () => {
  if (!Btn.disabled) {
    location.href = "./items.html";
  }
});
// Btn.disabled = false;

//이메일 유효성 검사 함수
function email_check(email) {
  return pattern.test(email);
}
//비밀번호 8자리 이상 체크  함수
function password_checked(password) {
  return password.length > 7;
}

//이메일 함수
function Email_focus_out(e) {
  const text = document.createElement("a");
  if (e.target.value == "") {
    e.target.classList.toggle("input_red_border");
    if (Error_message[0].textContent) {
      Error_message[0].remove();
    }
    text.textContent = "이메일을 입력해주세요.";
    Error_message[0].prepend(text);
  } else if (email_check(e.target.value) == false) {
    e.target.classList.toggle("input_red_border");
    if (Error_message[0].textContent) {
      Error_message[0].remove();
    }
    Error_message[0].prepend("잘못된 이메일 형식입니다.");
  } else {
    Error_message[0].remove();
    e.target.classList.remove("input_red_border");
  }
}

//비밀번호 함수
function Password_focus_out(e) {
  //중복 코드 정리필요, boder 가끔 사라지는 부분 수정 필요
  const text = document.createElement("a");
  if (e.target.value == "") {
    e.target.classList.toggle("input_red_border");
    if (Error_message[1].textContent) {
      Error_message[1].remove();
    }
    text.textContent = "비밀번호를 입력해주세요.";
    Error_message[1].prepend(text);
  } else if (e.target.value.length < 8) {
    e.target.classList.toggle("input_red_border");
    if (Error_message[1].textContent) {
      Error_message[1].remove();
    }
    Error_message[1].prepend("비밀번호를 8자 이상 입력해주세요.");
  } else {
    Error_message[1].remove();
    e.target.classList.remove("input_red_border");
  }
}

//버튼 함수
function Button_inactive(e) {
  switch (email_check(Email.value) && password_checked(password.value)) {
    case true:
      Btn.disabled = false;

      break;
    case false:
      Btn.disabled = true;

      break;
  }
  console.log(Btn.disabled);
}

//이벤트 핸들러 등록
password.addEventListener("focusout", Password_focus_out);
Email.addEventListener("focusout", Email_focus_out);
Email.addEventListener("keyup", Button_inactive);
password.addEventListener("keyup", Button_inactive);
