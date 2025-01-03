export const getToken = async (key) => {
  try {
    let token = null;
    const Cookies = require("universal-cookie");
    const cookies = new Cookies();
    token = cookies.get(key) || null;

    return token;
  } catch (e) {}
};

export const deleteToken = async (key) => {
  try {
    const Cookies = require("universal-cookie");
    const cookies = new Cookies();
    cookies.remove(key);
  } catch (e) {}
};

export const setToken = async (key, token) => {
  try {
    const Cookies = require("universal-cookie");
    const cookies = new Cookies();
    cookies.set(key, token, {
      sameSite: "lax",
      path: "/",
      maxAge: 2147483647,
    });
  } catch (e) {}
};
