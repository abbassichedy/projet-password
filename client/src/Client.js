import React, { Component } from 'react'
import Navebar from './composant/Navebar'

export default class Client extends Component {
    render() {
        return (
            <div>
               <Navebar/> 
                <div className='from-register'>
<h1 className='title'>Register : <span className='workers'>Clients</span></h1>
<form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">First Name</label>
      <input type="email" className="form-control" id="inputEmail4"/>
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Last Name</label>
      <input type="password" className="form-control" id="inputPassword4"/>
    </div>
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4"/>
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4"/>
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Ariana</option>
        <option>Béja</option>
        <option>Ben Arous</option>
        <option>Bizerte</option>
        <option>Gabès</option>
        <option>Gafsa</option>
        <option>Jendouba</option>
        <option>Kairouan</option>
        <option>Kasserine</option>
        <option>Kébili</option>
        <option>Le Kef</option>
        <option>Mahdia</option>
        <option>La Manouba</option>
        <option>Médenine</option>
        <option>Monastir</option>
        <option>Nabeul</option>
        <option>Sfax</option>
        <option>Sidi Bouzid</option>
        <option>Siliana</option>
        <option>Sousse</option>
        <option>Tataouine</option>
        <option>Tozeur</option>
        <option>Tunis</option>
        <option>Zaghouan</option>
      </select>
    </div>
  </div>
  <div className="form-group">
  </div>
  <button type="submit" className="btn btn-danger">Sign in</button>
</form>
</div>
    )
}}
            </div>
        )
    }
}
