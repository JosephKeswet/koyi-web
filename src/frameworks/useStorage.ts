import Cookies from "js-cookie";

export function useStorage() {
  function getCookies(key: string) {
    const cookie = Cookies.get(key);
    return cookie ? JSON.parse(cookie) : null;
  }

  function saveCookie(key: string, value: string) {
    Cookies.set(key, value);
  }

  return {
    getCookies,
    saveCookie,
  };
}
