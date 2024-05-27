const url = import.meta.env.VITE_BACKEND_URL

export const predict = async (data: {}) => {
    console.log("DATA:", data)
    return fetch(url + 'predict/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => {
        return response.json()
    })
    .catch((error) => {
        console.log('Error:', error)
    })
}