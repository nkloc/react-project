import React, { useEffect, useState } from 'react'
import { User } from '../api/types'
import { getAllUser } from '../api/user'
import UserProfile from './UserProfile'

const AllUsers = () => {
    const [users, setUsers] = useState<Array<User>>([])
    const [loading, setLoading] = useState(false)

    
    async function _getUsers() {
        const data = await getAllUser()
        setUsers(data)
        setLoading(false)
    }
    useEffect(() => {
        setLoading(true)
        _getUsers()
    }, [])

    function renderItem(values: User) {
        return (
            <div key={values.id}>
                <UserProfile {...values} />
            </div>
        )
    }
    
    if (loading) {
        return (
            <section className="hero">
                <div className="hero-body">
                    <p className="title">Loading ...</p>
                </div>
            </section>
        )
    }

    if (users.length === 0) {
        return (
            <section className="hero">
                <div className="hero-body">
                    <p className="title">No Users</p>
                </div>
            </section>
        )
    }

    return <ul className="User-list">{users.map(renderItem)}</ul>
}

export default AllUsers
