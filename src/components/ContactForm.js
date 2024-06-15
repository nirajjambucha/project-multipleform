import React, { useState } from 'react';

function ContactForm({ userDetails, onChange, onSubmit, fileChange }) {
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const Errors = {};
        if (!userDetails.firstName) {
            Errors.firstName = "⚠ please enter your first name ...";
        }
        if (!userDetails.lastName) {
            Errors.lastName = "⚠ please enter your last name ...";
        }
        if (!userDetails.country) {
            Errors.country = "⚠ please enter your country ...";
        }
        if (!userDetails.language) {
            Errors.language = "⚠ please enter your language ...";
        }
        if (!userDetails.interests) {
            Errors.interests = "⚠ please enter your language ...";
        }
        if (!userDetails.profile) {
            Errors.profile = "⚠ please enter your profile ...";
        }

        setErrors(Errors);
        return Object.keys(Errors).length === 0;
    };

    const handleSubmit = () => {
        const isValid = validateForm();
        if (isValid) {
            onSubmit();
        }
    };

    return (
        <div>
            <div className="container container1">
                <h3 className="alert alert-primary text-center">Contact Form</h3>
                <div className="employee-form">
                    <div className="form-group">
                        <label htmlFor="fname">First name :- </label>
                        <input type="text" className="form-control" name="firstName" id="fname" value={userDetails.firstName} onChange={onChange} placeholder="Please enter your name..." />
                        {errors.firstName && <span className="text-danger">{errors.firstName}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="lname">Last name :- </label>
                        <input type="text" className="form-control" name="lastName" id="lname" value={userDetails.lastName} onChange={onChange} placeholder="Please enter your name..." />
                        {errors.lastName && <span className="text-danger">{errors.lastName}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="country">Country :- </label>
                        <select name="country" id="country" className="form-control" value={userDetails.country} onChange={onChange}>
                            <option value="Selected">Selected</option>
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>
                        {errors.country && <span className="text-danger">{errors.country}</span>}
                    </div>

                    <div className="form-group">
                        <p>Please select your favorite web language :-</p>
                        <div>
                            <input type="radio" name="language" id='html' value="HTML" checked={userDetails.language === "HTML"} onChange={onChange} />
                            <label htmlFor="html" className="ml-2">HTML</label><br />

                            <input type="radio" name="language" id='css' value="CSS" checked={userDetails.language === "CSS"} onChange={onChange} />
                            <label htmlFor="css" className="ml-2">CSS</label><br />

                            <input type="radio" name="language" id='javascript' value="javaScript" checked={userDetails.language === "javaScript"} onChange={onChange} />
                            <label htmlFor="javascript" className="ml-2">javaScript</label>
                        </div>
                        {errors.language && <span className="text-danger">{errors.language}</span>}
                    </div>

                    <div className="form-group">
                        <p>Please select your interests :- </p>
                        <div>
                            <input type="checkbox" name="interests" id="interest1" value="Sports" checked={(userDetails.interests || []).includes("Sports")} onChange={(e) => onChange(e)} />
                            <label htmlFor="interest1" className="ml-2">Sports</label><br />

                            <input type="checkbox" name="interests" id="interest2" value="Music" checked={(userDetails.interests || []).includes("Music")} onChange={(e) => onChange(e)} />
                            <label htmlFor="interest2" className="ml-2">Music</label><br />

                            <input type="checkbox" name="interests" id="interest3" value="Movies" checked={(userDetails.interests || []).includes("Movies")} onChange={(e) => onChange(e)} />
                            <label htmlFor="interest3" className="ml-2">Movies</label>
                        </div>
                        {errors.interests && <span className="text-danger">{errors.interests}</span>}
                    </div>


                    <div className="form-group">
                        <p>Your picture File :- </p>
                        <input type="file" className="form-control-file" name="file" id="file" onChange={fileChange} />
                        {errors.profile && <span className="text-danger">{errors.profile}</span>}
                    </div>

                    <div className="form-group">
                        <button type="button" className="btn btn-primary mr-2" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;