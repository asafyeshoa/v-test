let LocalStorageServiceContainer;

class LocalStorageService {
	/**
	 * @param {string} key
	 * @param {any *} value
	 */
	write = (key, value) => localStorage.setItem(key, JSON.stringify(value));

	/**
	 * @param {string} key
	 * @returns { any * || null}
	 */
	read = (key) => {
		try {
			const value = localStorage.getItem(key);
			return value ? JSON.parse(value) : null;
		} catch (_error) {
			return null;
		}
	};

	/**
	 * @param {string} key
	 */
	remove = (key) => {
		try {
			localStorage.removeItem(key);
		} catch (error) {
			console.log(`Failed to remove key ${key}`);
		}
	};

	clearAll = () => localStorage.clear();
}

/** @returns {LocalStorageService} */
const initLocalStorageService = () => {
	if (!LocalStorageServiceContainer) {
		LocalStorageServiceContainer = new LocalStorageService();
	}
	return LocalStorageServiceContainer;
};

export default initLocalStorageService();
