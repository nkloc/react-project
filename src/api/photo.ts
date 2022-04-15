import { API_Picture } from './types'

const base_url = 'https://picsum.photos/v2/list'

async function getAllPicture(): Promise<Array<API_Picture>> {
    // Get all picture
    // [TODO] remove this return to use a fetch API
    const response = await fetch(`${base_url}`)
    return await response.json()
}

async function getPicture(id: API_Picture['id']): Promise<Array<API_Picture>> {
    // Get a picture
    // [TODO] remove this return to use a fetch API
    const response = await fetch(`${base_url}/${id}`)
    return await response.json()
   
}

export { getAllPicture, getPicture }
