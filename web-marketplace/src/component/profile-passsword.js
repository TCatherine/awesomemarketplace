
import React, {Component} from 'react';
import './css/profile.css'
import axios from 'axios';

export default class ProfilePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            old_password: "",
            confirm_password: "",
            new_password: ""
        }  
    }

    handleSubmit = e => {
        e.preventDefault();
        
        const data = {
            old_password: this.old_password,
            password2: this.confirm_password,
            password: this.new_password
        }
        var id = localStorage.getItem('id');
        var url = 'auth/change_password/' + id + '/';
        axios.put(url, data).then(
            res => {
                console.log(res)
                localStorage.setItem('access', res.data.access);
                this.setState({loggedIn: true});
                }
                )
            .catch((error) => {
                console.log(error.response);
                var check = (data) => {if (data && Array.isArray(data)) return data[0]; return data};

                this.setState({
                    error_old_password : check(error.response.data.username),
                    error_new_password : check(error.response.data.password),
                    error_confirm_password: check(error.response.data.detail)
                })
            }
        )
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='old-password' align="left">
                    <label className='name-password'>old password</label>
                    <input type='text' className='input-password' placeholder='*** ***'
                    onChange={e => this.old_password = e.target.value}/>
                    <label className='error'>{this.state.error_old_password}</label>
                </div>
                <div className='new-password' align="left">
                    <label className='name-password'>new password</label>
                    <input type='text' className='input-password' placeholder='*** ***'
                    onChange={e => this.new_password = e.target.value}/>
                    <label className='error'>{this.state.error_new_password}</label>
                </div>
                <div className='confirm-password' align="left">
                    <label className='name-password'>confirm password</label>
                    <input type='text' className='input-password' placeholder='*** ***'
                    onChange={e => this.confirm_password = e.target.value}/>
                    <label className='error'>{this.state.error_confirm_password}</label>
                </div>
                <button className='buttom-change-password'>change password</button>
            </form>);
    }
}