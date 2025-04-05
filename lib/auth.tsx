import instance from "./api";

const TEST_EMAIL = "test98@email.com";
const TEST_PASSWORD = "12345678";

export async function signIn() {
  const res = await instance.post(`/auth/signIn`, {
    email: TEST_EMAIL,
    password: TEST_PASSWORD,
  });
  return res.data;
}
