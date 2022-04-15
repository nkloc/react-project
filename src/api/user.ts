import axios from 'axios'
import { User } from './types'

const base_url = 'http://localhost:3004/users'

async function getAllUser(): Promise<Array<User>>{
    // Get all users
    // [TODO] remove this return to use a fetch API
    const response = await fetch(`${base_url}`)
    return await response.json()
}

async function getUser(id: User['id']): Promise<User> {
    // Get a user
    // [TODO] remove this return to use a fetch API
    const response = await fetch(`${base_url}/${id}`)
    return await response.json()
}

async function createUser(user: User): Promise<User> {
    // create a new User
    // [TODO] remove this return to use a fetch API
    const { data } = await axios.post(`${base_url}`, user)
    return data
}

async function updateUser(user: User): Promise<User> {
    // update a existing User
    // [TODO] remove this return to use a fetch API
    const { data } = await axios.put(`${base_url}/${user.id}`, user)
    return data
}

async function deleteUser(user: User): Promise<User['id']> {
    // delete a existing User
    // [TODO] remove this return to use a fetch API
    const { data } = await axios.delete(`${base_url}/${user.id}`)
    return data
}

export { getAllUser, getUser, deleteUser, updateUser, createUser }
