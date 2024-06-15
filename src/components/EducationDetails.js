import React, { useState } from 'react';

function EducationDetails({ educationDetails, onChange, onSubmit }) {
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const Errors = {};
        if (!educationDetails.degree) {
            Errors.degree = "⚠ please select your degree ...";
        }
        if (!educationDetails.fieldOfStudy) {
            Errors.fieldOfStudy = "⚠ please enter your field of study ...";
        }
        if (!educationDetails.university) {
            Errors.university = "⚠ please enter your university ...";
        }
        if (!educationDetails.graduationYear) {
            Errors.graduationYear = "⚠ please enter your graduation year ...";
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
                <h3 className="alert alert-primary text-center">Education Details</h3>
                <div className="employee-form">
                    <div className="form-group">
                        <label htmlFor="degree">Degree :- </label>
                        <select name="degree" id="degree" className="form-control" value={educationDetails.degree} onChange={onChange}>
                            <option value="selected">Selected</option>
                            <option value="bca">BCA</option>
                            <option value="ba"> BA</option>
                            <option value="bba">BBA</option>
                            <option value="bsc">BSC</option>
                            <option value="mba">MBA</option>
                            <option value="mca">MCA</option>
                            <option value="b.tech"> B.Tech</option>
                            <option value="m.tech">M.Tech</option>
                            <option value="mbbs">MBBS</option>
                        </select>
                        {errors.degree && <span className="text-danger">{errors.degree}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="fieldOfStudy">Field of Study :- </label>
                        <input type="text" className="form-control" name="fieldOfStudy" id="fieldOfStudy" placeholder="Please enter your degree Field of Study ..." value={educationDetails.fieldOfStudy} onChange={onChange} />
                        {errors.fieldOfStudy && <span className="text-danger">{errors.fieldOfStudy}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="university">University/Institution :- </label>
                        <input type="text" className="form-control" name="university" id="university" placeholder="Please enter your University / Institution ..." value={educationDetails.university} onChange={onChange} />
                        {errors.university && <span className="text-danger">{errors.university}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="graduationYear">Graduation Year :- </label>
                        <input type="text" className="form-control" name="graduationYear" id="graduationYear" placeholder="Please enter your Graduation Year ..." value={educationDetails.graduationYear} onChange={onChange} />
                        {errors.graduationYear && <span className="text-danger">{errors.graduationYear}</span>}
                    </div>

                    <div className="form-group">
                        <button type="button" className="btn btn-primary mr-2" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EducationDetails;