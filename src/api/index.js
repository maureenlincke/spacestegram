export const BASE_URL = 'https://api.nasa.gov'
export const KEY = 'api_key=xZbUOjcbXTbNIZ6srfGagLPRM00UJxL3NkBARSYO'

export async function fetchObjects() {
    const url = `${ BASE_URL }/planetary/apod?${ KEY }`

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}