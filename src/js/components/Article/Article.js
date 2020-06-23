import React from 'react'

const Article = (props) => {
    return (
        <tr key={props.id}>
            <td className="tableIndex">{props.index}</td><td>{props.title}</td>
        </tr>
    )
}

export default Article;