import React from "react"
import { connect } from 'react-redux'
import { addArticle } from '../../modules/index'
import './Form.scss'

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    }
}

class ConnectedForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const {title} = this.state;
        this.props.addArticle({title, id: title});
        this.setState({title:""})
    }

    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className="dark">
                <div>
                    <label htmlFor="title">Article Title</label>
                    <input type="text" id="title" value={title} onChange={this.handleChange}></input>
                </div>
                <button type="submit">SAVE</button>
            </form>
        )
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;