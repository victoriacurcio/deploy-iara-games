export async function mockLogin(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "12345678") {
        resolve({ success: true, token: "fake-jwt-token" });
      } else {
        reject({ success: false, message: "Usuário ou senha incorretos" });
      }
    }, 1000);
  });
}
