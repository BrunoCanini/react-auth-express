async function fetchApi(path, method = "GET", body = null){

    const response = await fetch(import.meta.env.VITE_API_URL + path, {
        method,
        body: body ? JSON.stringify(body) : null,
        headers: {
            "Content-type": "application/json"
        }
    });

    if(!response.ok){
        throw new Error("qualcosa è andato storto")
    }

    const data = response.json()

    return data
}

export default fetchApi;