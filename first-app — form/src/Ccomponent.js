import React, { Component } from 'react'
import Button from '@mui/material/Button';

export default class Ccomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: "",
            items: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            input: this.state.input,
            items: [...this.state.items, this.state.input]

        })

    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
                <ul>
                    {this.state.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <Button color="secondary">Secondary</Button>
                <Button variant="contained" color="success">
                    Success
                </Button>
                <Button variant="outlined" color="error">
                    Error
                </Button>
            </div>
        )
    }
}


