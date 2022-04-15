import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { User } from '../api/types'
import Field from '../private/Field'


const UserProfile = (props: User) => {
    return (
       (
            <div className="user-profile-wrapper">
                <Field label="Name">
                    <span>{props.name}</span>
                </Field>
                <Field label="Email">
                    <span>{props.email}</span>
                </Field>
                <Field label="Company">
                    <span>{props.company.name}</span>
                </Field>
                <Field label="Phone">
                    <span>{props.phone}</span>
                </Field>
                <Field label="Address">
                    <span>{props.address.street} - </span>
                    <span>{props.address.city} - </span>
                    <span>{props.address.zipcode}</span>
                </Field>
            </div>
        )
    )
}

export default UserProfile
