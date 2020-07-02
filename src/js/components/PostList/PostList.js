import React from 'react'
import {getPosts} from '../../action-functions/JsonPlaceholder'
import { connect } from 'react-redux'

import './PostList.scss'

const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => dispatch(getPosts())
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export class ConnectedPost extends React.Component {
    componentDidMount(){
        this.props.getPosts()
    }

    render(){
        return (
            <ul className="postList">
                {this.props.posts.map(post => (
                    <li key={post.id} className="post">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedPost)