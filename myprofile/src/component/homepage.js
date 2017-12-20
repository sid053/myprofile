import React, { Component } from 'react';
import '../App.css';
import {Image} from 'react-bootstrap';
import image from '../images/image1.jpg';

class Carosel extends Component {


    render() {
        return (
            <div>
                <div className="container-fluid bg-1 text-center">
                    <h3 className="margin">Who Am I?</h3>
                    <Image src={image} className="img-responsive img-circle margin"
                     alt="Bird" width="350" height="350" style={{display:"inline"}}/>
                    <h3>I'm an Programmer</h3>
                </div>

                <div className="container-fluid bg-2 text-center">
                    <h3 className="margin">What Am I?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <a href="" className="btn btn-default btn-lg">
                        <span className="glyphicon glyphicon-search"></span> Search
                    </a>
                </div>


                <div className="container-fluid bg-3 text-center">
                    <h3 className="margin">Where To Find Me?</h3><br/>
                    <div className="row">
                        <div className="col-sm-4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Image src="birds1.jpg" className="img-responsive margin" style={{width:"100%"}} alt="Image"/>
                        </div>
                        <div className="col-sm-4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Image src="birds2.jpg" className="img-responsive margin" style={{width:"100%"}} alt="Image"/>
                        </div>
                        <div class="col-sm-4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Image src="birds3.jpg" className="img-responsive margin" style={{width:"100%"}} alt="Image"/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}



export default Carosel ;