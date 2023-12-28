export function createRequester(apiUrl: string) {
    function request<T = unknown>(endpoint: string, options?: RequestInit) {
        const url = apiUrl + endpoint

        return fetch(url, options).then((response) => {
            if (response.ok) {
                return response.json() as Promise<T>
            }
            return Promise.reject(`Ошибка ${response.status}`)
        })
    }

    return request
}
