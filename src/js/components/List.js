import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {articles:state.articles}
}

const ConnectedList = ({articles}) => {
    return (
        <ol>
            {articles.map(x => <li key={x.id}>{x.title}</li>)}
        </ol>
    )
}

const List = connect(mapStateToProps)(ConnectedList);

export default List;