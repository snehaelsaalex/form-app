import React, { Component } from 'react'
import './RegisterForm.css'
import { ReviewFormPath } from '../../constants/PathConstants';
import {country, state, interest, address} from '../../constants/Data';
import Select from 'react-select';


export class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName : '',
            lastName : '',
            age : "13",
            email : '',
            tel : '',
            countryState : '',
            country : '',
            address : '',
            interest : [],
            uploadedImage : null,
            addressDetail : { 
                address1 : '',
                address2 : ''
            }, 
            subscribe: false,
            firstNameError: '',
            lastNameError: '',
            emailError:'',
            telError: '',
            countryStateError : '',
            countryError : '',
            addressError : '',
            interestError : '',
            uploadedImageError : '',
            address1Error:'',
            address2Error:''
        }
    }
    componentDidMount() {
        let routerState = this.props.location.state;
        if(routerState) {
            this.setState({
                firstName : routerState.firstName,
                lastName : routerState.lastName,
                age : routerState.age,
                email : routerState.email,
                tel : routerState.tel,
                countryState : routerState.countryState,
                country : routerState.country,
                address : routerState.address,
                interest : routerState.interest,
                uploadedImage : routerState.uploadedImage,
                addressDetail : { 
                    address1 : routerState.addressDetail.address1,
                    address2 : routerState.addressDetail.address2,
                }, 
                subscribe:  routerState.subscribe,
            })
        }
    }
    uploadImage = (e) => {
    this.setState({
        uploadedImage : URL.createObjectURL(e.target.files[0])
    })
    }
    validateForm = () => {
        let regex = /^([a-zA-Z]){0,20}$/;

        let isError = false;
        let error = {
            firstNameError: '',
            lastNameError: '',
            emailError:'',
            telError: '',
            countryStateError : '',
            countryError : '',
            addressError : '',
            interestError : '',
            uploadedImageError : '',
            address1Error:'',
            address2Error:''
        }
        if(!this.state.firstName) {
            isError = true
            error.firstNameError = 'Required'
        } else if(!regex.test(this.state.firstName)) {
            isError = true
            error.firstNameError = 'The firstname must be alphabetic and should not exceed 20 characters'
        }
        if(!this.state.lastName) {
            isError = true
            error.lastNameError = 'Required'
        }
        if(!this.state.email) {
            isError = true
            error.emailError = 'Required'
        }
        if(!this.state.tel) {
            isError = true
            error.telError = 'Required'
        }
        if(!this.state.countryState) {
            isError = true
            error.countryStateError = 'Required'
        }
        if(!this.state.country) {
            isError = true
            error.countryError = 'Required'
        }
        if(!this.state.address) {
            isError = true
            error.addressError = 'Required'
        }
        if(!this.state.interest.length) {
            isError = true
            error.interestError = 'Required'
        }
        if(!this.state.uploadedImage) {
            isError = true
            error.uploadedImageError = 'Required'
        }
        if(!this.state.addressDetail.address1) {
            isError = true
            error.address1Error = 'Required'
        }
        if(!this.state.addressDetail.address2) {
            isError = true
            error.address2Error = 'Required'
        }
      

        if(isError) {
            this.setState({
                ...this.state,
                ...error
            })
        }

        return isError;
    }
    onSubmit = (e) => {
        const error = this.validateForm();
        if(!error) {
            this.props.history.push({
                pathname: ReviewFormPath,
                state: this.state
            });
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <section className="text-right">
                        <div className="photo-upload-container mt-5" style={this.state.uploadedImage ? {backgroundImage: 'url(' +this.state.uploadedImage + ')',backgroundSize: 'cover' } : {}}>
                            {   !this.state.uploadedImage &&
                            <>
                                <span className = "photo-upload-text">Upload your photo</span>
                            <input type='file' className="photo-upload-input" onChange={this.uploadImage} accept="image/*" />
                            </>
                            }

                        </div>
                        {this.state.uploadedImageError &&
                                    <div className="error-message text-center">{this.state.uploadedImageError}</div>
                                    }
                    </section>
                    <section className="col-md-9 ">
                        <form className="mt-5 register-form-container" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-row">
                            <label className="mr-2 form-name-label col-md-1 text-right">Name</label>
                            <div className="form-group col-md-3">
                                <input type="text" className="form-control form-input" onChange={(e) => this.setState({firstName:e.target.value})} placeholder="First name" value={this.state.firstName} />
                                {this.state.firstNameError &&
                                    <div className="error-message">{this.state.firstNameError}</div>
                                    }
                            </div>
                            <div className="form-group col-md-3">
                                    <input type="text" className="form-control form-input" onChange={(e) => this.setState({lastName:e.target.value})} placeholder="Last name" value={this.state.lastName} />
                                    {this.state.lastNameError &&
                                    <div className="error-message">{this.state.lastNameError}</div>
                                    }
                            </div>
                            </div>
                            <div className="form-row">
                            <label className="mr-2 form-name-label col-md-1 text-right">Age</label>
                            <input type="range" min="13" max="45" step='1' value={this.state.age} onChange={(e) => this.setState({age:e.target.value})} className="slider" id="ageRange" />
                            </div>
                            <div className="d-flex justify-content-around age-seperation-container">
                            <div>
                                <div className="seperation"></div>
                                13-19
                            </div>
                            <div>
                            <div className="seperation"></div>
                                20-29
                            </div>
                            <div>
                            <div className="seperation"></div>
                                30-45
                            </div>
                            <div>
                            <div className="seperation margin-left"></div>
                                45 & above
                            </div>
                            </div>
                            <div className="form-row">
                            <label className="mr-2 form-name-label col-md-1 text-right">Email</label>
                            <div className="form-group col-md-9">
                                    <input type="email" className="form-control form-input" placeholder="Email" onChange={(e) => this.setState({email:e.target.value})} value={this.state.email} />
                                    {this.state.emailError &&
                                    <div className="error-message">{this.state.emailError}</div>
                                    }
                            </div>
                            </div>
                            <div className="form-row">
                            <label className="mr-2 form-name-label col-md-1 text-right">Tel</label>
                            <div className="form-group col-md-9">
                                    <input type="text" className="form-control form-input" placeholder="Telephone" onChange={(e) => this.setState({tel:e.target.value})} value={this.state.tel}  />
                                    {this.state.telError &&
                                    <div className="error-message">{this.state.telError}</div>
                                    }
                            </div>
                            </div>
                            <div className="form-row">
                            <label className="mr-2 form-name-label col-md-1 text-right">State</label>
                            <div className="form-group col-md-9">

                                  <select className="form-control form-input" disabled = {!this.state.country} onChange={(e) => {this.setState({countryState : e.target.value}); }} value={this.state.countryState} >
                                  <option value="" disabled >Select state</option>
                                  { this.state.country &&
                                    state.find(state => state.country === this.state.country).state.map((state, index) => {
                                        return ( 
                                            <option key = {index} value={state}>
                                                {state}
                                            </option>
                                        )
                                    })
                                    }
                                  </select>
                                  {this.state.countryStateError &&
                                    <div className="error-message">{this.state.countryStateError}</div>
                                    }
                            </div>
                            </div>
                            <div className="form-row">
                            <label className="mr-2 form-name-label col-md-1 text-right">Country</label>
                            <div className="form-group col-md-9">
                            <select className="form-control form-input" onChange={(e) => this.setState({country:e.target.value})} value={this.state.country} >
                            <option value="" disabled >Select country</option>

                                    { 
                                    country.map((country, index) => {
                                        return (
                                            <option key = {index} value={country}>
                                                {country}
                                            </option>
                                        )
                                    })
                                    }
                                  </select>
                                  {this.state.countryError &&
                                    <div className="error-message">{this.state.countryError}</div>
                                    }
                            </div>
                            </div>
                            <div className="form-row">
                            <label className="mr-2 form-name-label col-md-1 text-right">Address</label>
                            <div className="form-group col-md-9">
                            <select className="form-control form-input" onChange={(e) => this.setState({address:e.target.value})} value={this.state.address} >
                            <option value="" disabled >Select address</option>

                                    { 
                                    address.map((address, index) => {
                                        return (
                                            <option key = {index} value={address}>
                                                {address}
                                            </option>
                                        )
                                    })
                                    }
                                  
                            </select>
                            {this.state.addressError &&
                                    <div className="error-message">{this.state.addressError}</div>
                                    }
                            {
                                        this.state.address && 
                                        <div className="form-row mt-3">
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control form-input" onChange={(e) => this.setState({addressDetail : {...this.state.addressDetail ,address1 : e.target.value}})} placeholder={this.state.address === 'Home' ? 'Home Address1' : 'Company Address1'} value={this.state.addressDetail.address1} />
                                            {this.state.address1Error &&
                                            <div className="error-message">{this.state.address1Error}</div>
                                            }
                                        </div>
                                        <div className="form-group col-md-6">
                                        <input type="text" className="form-control form-input" onChange={(e) => this.setState({addressDetail : {...this.state.addressDetail ,address2 : e.target.value}})} placeholder={this.state.address === 'Home' ? 'Home Address2' : 'Company Address2' } value={this.state.addressDetail.address2} />
                                        {this.state.address2Error &&
                                            <div className="error-message">{this.state.address2Error}</div>
                                            }
                                        </div>
                                        </div>

                            }

                            </div>
                            </div>
                            <div className="form-row">
                            <label className="mr-2 form-name-label col-md-1 text-right">Interests</label>
                            <div className="form-group col-md-9">
                                    <Select
                                        value={this.state.interest}
                                        onChange={(value) => this.setState({interest:value})}
                                        options={interest}
                                        isMulti
                                        className="form-input"
                                    />
                                    {this.state.interestError &&
                                    <div className="error-message">{this.state.interestError}</div>
                                    }
                            </div>
                            </div>
                            <div className="form-row">
                            <div className="col-sm-1 text-right">
                                    <input type="checkbox" checked={this.state.subscribe} onChange={(e) => {this.setState({subscribe:e.target.checked})}} className="checkbox" id="subscribe" />
                                </div>
                                <div className="col-sm-9">
                                    <label htmlFor="subscribe" className="ml-2">Subscribe to the news letter</label>
                                </div>
                            </div>
                            <div className="text-right">
                            <button className="btn btn-primary register-btn mb-3" onClick = {this.onSubmit}>Submit</button>
                            </div>
                        </form>
                    </section>
                </div>
               
            </div>
        )
    }
}

export default RegisterForm
