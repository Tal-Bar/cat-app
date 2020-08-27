import React, { Component } from 'react';
import RecipesNavbar from '../conponents/RecipesNavbar';
import { Redirect } from 'react-router-dom';
import './E-card.css'


class ECardPage extends Component {
    render() {
        const {activeUser, handleLogout} = this.props;

        if (!activeUser) {
            return <Redirect to="/"/>
        }
        return (
            <div>
                 <RecipesNavbar activeUser={activeUser} handleLogout={handleLogout}/>
                <div>
                    <div className="form-title"><h1>E-card form</h1></div>
                    <div className="main">

                        <form>

                            <div className="info">
                                <h2 >First Name</h2>
                                <input type="rext" name="firstname"/>

                                <h2 >Last Name</h2>
                                <input type="rext" name="lastname"/>

                                <h2 >Location</h2>
                                <input type="text" name="lacation"/>

                                {/* <h2 >Email</h2>
                                <input type="email" name="email"/> */}

                                <h2 >Phone</h2>
                                <input type="numper" name="phone"/>

                                <h2 >Date</h2>
                                <input type="date" name="date"/>

                                <h2 >Description</h2>
                                <textarea id="description" rows="5" maxlength="370"></textarea>
                                {/* <input id="description" type="text" name="description"/> */}

                            </div>

                            <div className="radio-main">
                                <h2 className="cat-radio-Title">Cat Age</h2>
                                <div className="cat-radio">
                                    <input type="radio" id="adult" name="age" value="adult"/>
                                    <label for="male">Adult</label>
                                    <input type="radio" id="kitten" name="age" value="kitten"/>
                                    <label for="female">Kitten</label>
                                    <input type="radio" id="unknown" name="age" value="unknown"/>
                                    <label for="other">Unknown</label> 
                                </div>

                                <h2 className="cat-radio-Title">Cat Type</h2>
                                <div className="cat-radio">
                                    <input type="radio" id="Feral cat" name="type" value="Feral cat"/>
                                    <label for="Feral cat">Feral cat</label>
                                    <input type="radio" id="house cat" name="type" value="house cat"/>
                                    <label for="house cat">House cat</label>
                                    <input type="radio" id="unknown" name="type" value="unknown"/>
                                    <label for="other">Unknown</label> 
                                </div>
                                <div className="add-file-main">
                                <label className="add-file" for="exampleInputFile">Add Photo</label>
                                <input type="file" id="InputFile"/>
                                </div>
                            </div>

                                
                            
                            <button type="button">Send</button> 

                                {/* <h2 >Subject</h2>
                            <select className="option" name="subject">
                                <option disabled="disabled" selected="selected" value="">Choose option</option>
                                <option value="">Subject 1</option>
                                <option value="">Subject 2</option>
                                <option value="">Subject 3</option>
                            </select> */}

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ECardPage;