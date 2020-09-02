import React, { Component } from 'react';
import Navbar from '../conponents/Navbar';
import { Redirect } from 'react-router-dom';
import './UsersList.css'
import usersJson from '../data/users.json'
import UserCard from '../conponents/UserCard';

class UsersList extends Component {


    constructor(props) {
        super(props);
        this.state={
            userCards:[],
            searchText:'',
            searchTypeRadio:null
        }
        this.handleSearch=this.handleSearch.bind(this)
        this.handleRadio=this.handleRadio.bind(this)
    }


    handleSearch(event){
        let str=event.target.value
        this.setState({searchText:str})
    }
    handleRadio(event){
        this.setState({searchTypeRadio:event.target.value})
    }

    componentDidMount(){
        this.setState({userCards:[...usersJson,...this.props.userCards]},()=>{
            console.log('userList state',this.state.userCards)
        })
    }
    render() {
        const {activeUser, handleLogout,userCards} = this.props;
        console.log('userCards',userCards)

        if (!activeUser) {
            return <Redirect to="/"/>
        }
        
      
        return (
            <div>
                <Navbar activeUser={activeUser} handleLogout={handleLogout}/>
                <div className="user-list-main">
              
                <div className="filter-user-list">
                    <input type="text" onChange={this.handleSearch}/>
                    <div className="user-radio-container" onChange={this.handleRadio}>
                        <label>Cat-Feeder</label>
                        <input type="radio" name="searchTypeRadio" value='feeder' />
                        <label>Cat-Catcher</label>
                        <input type="radio" name="searchTypeRadio" value='Cat-Catcher'/>
                        <label>Cat-Foster</label>
                        <input type="radio" name="searchTypeRadio" value='Cat-carer'/>

                    </div>



                </div>


                <div className ="users-container">
                  {
                     this.state.userCards.filter(user=>{
                         if(user.fname.toLowerCase().includes(this.state.searchText.toLowerCase())){
                            if(!this.state.searchTypeRadio){
                                return true
                            }
                            if(( user.type===this.state.searchTypeRadio))
                             return true
                         }
                         
                     }).map((user,i)=>{
                          return <UserCard key={user.fname+i} user={user}/>
                      })
                  }
                {/*   {
                      userCards.map((user,i)=>{
                        return <UserCard key={user.name+i} user={user}/> 
                      })
                  }  */}
                </div>
                
            </div>
            </div>
        );
    }
}

export default UsersList;