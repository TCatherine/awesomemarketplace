
import React, {Component} from 'react';
import './css/profile.css'
import axios from 'axios';

export default class ProfileInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name : "unknown",
            second_name : "unknown",
            username: "unknown",
            email: "1@mail.ru",
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        
        const data = {
            first_name: this.state.first_name,
            last_name: this.state.second_name,
            email: this.state.email,
            username: this.state.username
        }

        var id = localStorage.getItem('id');
        var url = 'auth/update_profile/' + id + '/';
        axios.put(url, data).then(
            res => {
                console.log(data);
                this.setState({
                first_name : res.data.first_name,
                second_name : res.data.last_name,
                username: res.data.username,
                email: res.data.email
              });
              this.setState({
                first_second_name : this.state.first_name + ' ' + this.state.second_name
            });
            },
            error => {
                console.log(error.response);
            });
    }

    componentDidMount = () => {
        axios.get('auth/user/').then(
            res => {
                this.setState({
                    first_name : res.data.first_name,
                    second_name : res.data.last_name,
                    username: res.data.username,
                    email: res.data.email
                  });
                  this.setState({
                    first_second_name : this.state.first_name + ' ' + this.state.second_name
                });

            },
            err => { 
                console.log(err);
            });
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <input type='text' className='first-name' placeholder={this.state.first_name}
             onChange={e => this.setState({first_name: e.target.value})}/>
            <input type='text' className='second-name' placeholder={this.state.second_name}
             onChange={e => this.setState({second_name: e.target.value})}/>
            <input type='text' className='user-name' placeholder={this.state.username}
             onChange={e => this.setState({username: e.target.value})}/>
            <input type='text' className='user-email' placeholder={this.state.email}
             onChange={e => this.setState({email: e.target.value})}/>
            <button className='buttom-change-profile' >change</button>
        </form>    );
    }
}