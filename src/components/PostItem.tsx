import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Post, User } from '../api/types'

const PostItem = (props: Post) => {
    const [user, setUser] = useState<User | null>(null)

    return (
        <Link to={`/post/${props.id}`} key={`key-${props.id}`}>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img
                            src={
                                props.postImageUrl ||
                                'https://picsum.photos/1280/960'
                            }
                            alt="Placeholder image"
                        />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4 post-title">
                                {props.title}
                            </p>
                        </div>
                    </div>
                    <div className="content post-content">{props.body}</div>
                    {user && (
                        <footer className="card-footer">
                            <Link
                                to={`/users/${user.id}`}
                                className="card-footer-item"
                            >
                                {user ? user.name : 'not defined'}
                            </Link>
                        </footer>
                    )}
                </div>
            </div>
        </Link>
    )
}

export default PostItem
