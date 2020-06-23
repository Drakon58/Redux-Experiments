import React from 'react'
import { connect } from 'react-redux'

import Article from '../Article/Article'

import './ArticleList.scss'

const mapStateToProps = state => {
    return { articles: state.articles }
}

const ConnectedArticleList = (props) => {
    return (
        <div className="bright">
            <table>
                <tbody>
                    {
                        props.articles.map(
                            (x, index) =>
                                <Article key={x.id} index={index + 1} title={x.title} />
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

const ArticleList = connect(mapStateToProps)(ConnectedArticleList);

export default ArticleList;