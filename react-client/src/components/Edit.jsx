import React, { Component } from 'react'
import axios from "axios"

export default class Edit extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : "",
            adress: "",
            price : "",
            imageUrl : "",
            body : ""
        }
        this.put= this.put.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({
        [e.target.name] : e.target.value
        })

    }
    put(){
        console.log(this.state)
        axios.put(`http://localhost:3000/api/user/announce/${this.props.item}`,this.state)
        .then((data)=>console.log(data))
     .catch(err=>console.log(err))
    }


    render() {
        return (
            <div className="post">
            <div className="create">
          <div className="create-editor">
          <h2>Make Change</h2>
                Title<input className="create-input" name = "title" onChange = {this.handleChange} type="text" />
                Adress<input className="create-input" name = "adress" onChange = {this.handleChange} type="text" />
                Price<input className="create-input" name = "price" onChange = {this.handleChange} type="text" />
                ImgUrl<input className="create-input" name = "imageUrl" onChange = {this.handleChange} type="text" />
                Body<input className="create-input" name = "body" onChange = {this.handleChange} type="text" />
                <button id = "savechange" onClick = {()=>this.put()}>Save Change</button>
            </div>
            </div>
            </div>
        )
    }
}
