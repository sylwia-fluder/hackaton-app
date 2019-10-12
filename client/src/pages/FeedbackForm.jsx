import React from 'react';
import classNames from 'classnames';
import style from '../styles/FeedbackForm.scss';

const FeedbackForm = () => {

    // const questionStyles = classNames(style.question, style.container-fluid, question-button);

    return (
       <div>
        <div className="text-center"><h3 className="title m-0"><strong>SPRINT FEEDBACK</strong></h3></div>
        <div className="mt-2 col-11 d-flex flex-wrap flex-row mx-auto text-center justify-content-start container-fluid">
            <div className="mt-3 question-rate col-3 mx-auto container">
                <div className="row">
                    <p className="question w-100 mx-auto col">How would you rate the cooperation with this person?</p>
                </div>
                <div className="row justify-content-center mb-4" >
                    <label className="radio col-0 p-0">1 <input type="radio" name="optradio"/></label>
                    <label className="radio col-0 p-0">2 <input type="radio" name="optradio"/></label>
                    <label className="radio col-0 p-0">3 <input type="radio" name="optradio"/></label>
                    <label className="radio col-0 p-0">4 <input type="radio" name="optradio"/></label>
                    <label className="radio col-0 p-0">5 <input type="radio" name="optradio"/></label>
                </div>    
            </div>
            <div className="mt-3 question-rate col-3 mx-auto container">
                <div className="row">
                    <p className="question w-100 mx-auto col">How likely you are to cooperate with this person again?</p>
                </div>
                <div className="row justify-content-center" >
                    <label className="radio col-0 p-0">1 <input type="radio" name="optradio"/></label>
                    <label className="radio col-0 p-0">2 <input type="radio" name="optradio"/></label>
                    <label className="radio col-0 p-0">3 <input type="radio" name="optradio"/></label>
                    <label className="radio col-0 p-0">4 <input type="radio" name="optradio"/></label>
                    <label className="radio col-0 p-0">5 <input type="radio" name="optradio"/></label>
                </div>    
            </div>
            <div className="mt-3 question-rate col-3 mx-auto container">
                <div className="row">
                    <p className="question w-100 mx-auto col">How would you rate the first impression?</p>
                </div>
                <div className="row justify-content-center" >
                    <label className="radio col-0 p-0">1 <input type="radio" name="optradio"/></label>
                    <label className="radio col-0 p-0">2 <input type="radio" name="optradio"/></label>
                    <label className="radio col-0 p-0">3 <input type="radio" name="optradio"/></label>
                    <label className="radio col-0 p-0">4 <input type="radio" name="optradio"/></label>
                    <label className="radio col-0 p-0">5 <input type="radio" name="optradio"/></label>
                </div>    
            </div>
            <div className="mt-3 question-rate col-3 mx-auto container">
                <div className="row">
                    <p className="question w-100 mx-auto col">OVERALL<br/>
                     GRADE: <br/></p>
                </div>
                <div className="row justify-content-center" >
                    <label className="radio col-0 p-0">1 <input type="radio" name="optradio"/></label>
                    <label className="radio col-0 p-0">2 <input type="radio" name="optradio"/></label>
                    <label className="radio col-0 p-0">3 <input type="radio" name="optradio"/></label>
                    <label className="radio col-0 p-0">4 <input type="radio" name="optradio"/></label>
                    <label className="radio col-0 p-0">5 <input type="radio" name="optradio"/></label>
                </div>    
            </div>

            <div className="question-rate col-3 mx-auto container mb-4">
                <div className="row">
                    <p className="question w-100 mx-auto col">Your personal advice for this person:</p>
                </div>
                <div className="row">
                     <div className="form-group mx-auto">
                        <textarea className="form-control" placeholder="Answer..." id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                </div>    
            </div>
            <div className="question-rate col-3 mx-auto container">
                <div className="row">
                    <p className="question w-100 mx-auto col">What would be the one thing, that this person could improve on?</p>
                </div>
                <div className="row">
                     <div className="form-group mx-auto">
                        <textarea className="form-control" placeholder="Answer..." id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                </div>    
            </div>
            <div className="question-rate col-3 mx-auto container">
                <div className="row">
                    <p className="question w-100 mx-auto col">What are the major good traits of this person?</p>
                </div>
                <div className="row">
                     <div className="form-group mx-auto">
                        <textarea className="form-control" placeholder="Answer..." id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                </div>    
            </div>
            <div className="question-rate col-3 mx-auto container">
                <div className="row">
                    <p className="question w-100 mx-auto col">Describe one problem you ran into and how you solved it.</p>
                </div>
                <div className="row">
                     <div className="form-group mx-auto">
                        <textarea className="form-control" placeholder="Answer..." id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                </div>    
            </div>

            <div className="question-rate col-12 mx-auto container">
                <div className="row">
                    <p className="question w-100 mx-auto col">OTHER</p>
                </div>
                <div className="row">
                     <div className="col-6 form-group mx-auto">
                        
                        <textarea className="form-control" placeholder="Answer..." id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                </div>    
            </div>
            <div className="col-12 mb-3">
                <button className="question-button">CLOSE</button>
            </div>
        </div>
        </div>  
    );
};

export default FeedbackForm;