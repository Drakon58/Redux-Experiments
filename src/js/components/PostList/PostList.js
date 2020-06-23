import React from 'react'
import {getPosts} from '../../action-functions/JsonPlaceholder'
import { connect } from 'react-redux'

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
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.getPosts()
    }

    render(){
        return (
            <ul>
                {this.props.posts.map(post => (
                    <li key={post.id}>
                        <div><h3>{post.title}</h3></div>
                        <div>{post.body}</div>
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