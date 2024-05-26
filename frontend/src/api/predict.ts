export const predict = async (data: {}) => {
    return fetch('http://localhost:8000/predict/', {
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