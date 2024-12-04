import Cookies from "js-cookie";

export function useStorage() {
	// Retrieves cookies and parses them. If invalid JSON, returns as a plain string.
	function getCookies(key: string) {
		const cookie = Cookies.get(key);
		try {
			return cookie ? JSON.parse(cookie) : null;
		} catch (error) {
			// If cookie is not valid JSON, return it as is
			return cookie || null;
		}
	}

	// Saves values to cookies, ensuring they are stringified JSON.
	function saveCookie(key: string, value: any) {
		if (typeof value !== "string") {
			// Stringify non-string values
			value = JSON.stringify(value);
		}
		Cookies.set(key, value);
	}

	return {
		getCookies,
		saveCookie,
	};
}
