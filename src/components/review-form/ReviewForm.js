import React, { Component } from 'react';
import './ReviewForm.css';
import { Link } from 'react-router-dom';
import {RegisterFormPath, HomePath} from '../../constants/PathConstants'

export class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formDetails : {}
        }
    }
    ;
    componentDidMount() {
    this.setState({
        formDetails : this.props.location.state
    })
    if(!this.props.location.state) {
        this.props.history.push(HomePath);
    }
    }
    uploadImage = (e) => {
        this.setState({
            formDetails : {...this.state.formDetails, uploadedImage:URL.createObjectURL(e.target.files[0])}
        })
    }
    render() {
        return (
            <div className="container">
            <div className="row">
                <section className="text-right">
                    <div className="photo-upload-container mt-5" style={this.state.formDetails.uploadedImage ? {backgroundImage: 'url(' + this.state.formDetails.uploadedImage + ')', backgroundSize:'cover'} : {}}>
                    </div>
                    <div className="d-flex flex-column mt-2 text-center">
                    <button className="edit-btn"> Edit photo </button>
                    <input type='file' className="photo-input" onChange={this.uploadImage} accept="image/*" />
                    <Link className="edit-btn" to = {{pathname : RegisterFormPath, state : this.state.formDetails}}> Edit profile </Link>
                    </div>
                </section>
                <section className="col-md-7">
                    <div className="mt-5 register-form-container review-form-height">
        <p>I am <span className="highlighted-text">{this.state.formDetails.firstName} {this.state.formDetails.lastName}</span> and I am <span className="highlighted-text">above {this.state.formDetails.age} years</span> and you can send your emails to <span className="highlighted-text">{this.state.formDetails.email}</span> lives in the state
         of {this.state.formDetails.country}. I like to <span className="highlighted-text"> 
                          play {this.state.formDetails.interest?.length && 
                              this.state.formDetails.interest.map((interest, index) => {
                                  return (
                                  <span key={index}>{interest.label} {index < this.state.formDetails.interest.length - 2 && <i>,</i>} { index > 0 && index < this.state.formDetails.interest.length - 1 && <span> and </span> }</span>
                                  )
                              })
                          }
                          </span>. {this.state.formDetails.subscribe && <span>And please send me the news letters</span>}
                            And please reach out to me on my phone {this.state.formDetails.tel}.
                      </p>
                      <div className="text-center">
                      <button className="btn btn-primary register-btn text-center"> Agree</button>
                      </div>
                    </div>
                </section>
            </div>
           
        </div>
        )
    }
}

export default ReviewForm;
