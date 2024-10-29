const url = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000/'

export const predict = async (data: {}) => {
    console.log("DATA:", data)
    return fetch(url + 'predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => {
        console.log('Response:', response)
        return response.json()
    })
    .catch((error) => {
        console.log('Error:', error)
    })
}