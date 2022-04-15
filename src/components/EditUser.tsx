import React, { useEffect, useReducer, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getUser, updateUser, createUser, deleteUser } from '../api/user'
import { User } from '../api/types'
import { getAllUser } from '../api/user'
import Field from '../private/Field'

type FormEvent =
    | React.ChangeEvent<HTMLTextAreaElement>
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLSelectElement>

type FormData = { name: string; value: string | number | undefined | {}}

const formReducer = (state: User, event: FormData) => {
    return {
        ...state,
        [event.name]: event.value,
    }
}

const EditUser = () => {
    const [users, setUsers] = useState<Array<User>>([])
    const [formData, setFormData] = useReducer(
        formReducer,
        {} as User
    )
    let { id } = useParams()
    const navigate = useNavigate() 

    async function _getUser(id: number) {
        const data = await getUser(id)
        convertToFormData(data)
    }
    
    useEffect(() => {
        _getUser(Number(id))
    }, [id])

    async function handleAddOrCreateUser(
        event: React.FormEvent<HTMLFormElement>
    ) {
        // remove default reloading page
        event.preventDefault()

        if (id) {
            await updateUser(formData as User)
        } else {
            await createUser(formData)
        }

        // back to Home
        navigate('/')
    }

    // async function handleDeleteUser() {
    //     await deleteUser(Number(user.id))
    //     // back to Home
    //     navigate('/')
    // }

    function handleChange(event: FormEvent) {
        //
        const value =
            event.target.name === 'userId'
                ? Number(event.target.value)
                : event.target.value
        setFormData({
            name: event.target.name,
            value,
        })
    }

    function convertToFormData(users: User): void {
        // helper to convert users data into formData
        // use it before set formData with API data
        // ex: convertToFormData(data):
        ;(Object.keys(users) as Array<keyof typeof users>).map((key) => {
            setFormData({
                name: key,
                value: users[key],
            })
        })
    }

    async function _getUsers() {
        const data = await getAllUser()
        setUsers(data)
    }

    useEffect(() => {
        _getUsers()
    }, [])

    // async function handleDeleteUser() {
    //     await deleteUser(Number(user.id))
    //     // back to Home
    //     navigate('/')
    // }

    return (
        <>
            <form className="post-form" onSubmit={handleAddOrCreateUser}>
                <Field label="Name">
                    <input
                        onChange={handleChange}
                        name="name"
                        className="input"
                        type="text"
                        placeholder="Text input"
                        value={formData.name}
                    />
                </Field>
                <Field label="Email">
                    <textarea
                        onChange={handleChange}
                        name="email"
                        className="textarea"
                        placeholder="e.g. Hello world"
                        value={formData.email}
                    />
                </Field>
                {/* <Field label="Company">
                    <textarea
                        onChange={handleChange}
                        name="name"
                        className="textarea"
                        placeholder="e.g. Hello world"
                        value={formData.company.name}
                    />
                </Field> */}
                <Field label="Phone">
                    <textarea
                        onChange={handleChange}
                        name="phone"
                        className="textarea"
                        placeholder="e.g. Hello world"
                        value={formData.phone}
                    />
                </Field>
                <span>Pas réussi à faire des fields avec des values de type formData."object".any </span>
                {/* <Field label="Address">
                    <textarea
                        onChange={handleChange}
                        name="street"
                        className="textarea"
                        placeholder="e.g. Hello world"
                        value={formData.address.street}
                    />
                    <textarea
                        onChange={handleChange}
                        name="suite"
                        className="textarea"
                        placeholder="e.g. Hello world"
                        value={formData.address.suite}
                    />
                    <textarea
                        onChange={handleChange}
                        name="zipcode"
                        className="textarea"
                        placeholder="e.g. Hello world"
                        value={formData.address.zipcode}
                    />
                    <textarea
                        onChange={handleChange}
                        name="city"
                        className="textarea"
                        placeholder="e.g. Hello world"
                        value={formData.address.city}
                    />
                </Field> */}

                {/* {!!id && (
                    <Field label="Extra actions">
                        <button
                            type="button"
                            className="button is-warning"
                            onClick={handleDeleteUser}
                        >
                            Delete post
                        </button>
                    </Field>
                )} */}

                <div className="field is-grouped is-grouped-centered">
                    <p className="control">
                        <button type="submit" className="button is-primary">
                            Submit
                        </button>
                    </p>
                    <p className="control">
                        <Link to="/" className="button is-light">
                            Cancel
                        </Link>
                    </p>
                </div>
            </form>
        </>
    )

}

export default EditUser
