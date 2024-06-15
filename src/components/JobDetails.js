import React, { useState } from 'react';

function JobDetails({ jobDetails, onChange, onSubmit }) {
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const Errors = {};
        if (!jobDetails.jobTitle) {
            Errors.jobTitle = "⚠ please enter your job title ...";
        }
        if (!jobDetails.company) {
            Errors.company = "⚠ please enter your company name ...";
        }
        if (!jobDetails.jobLocation) {
            Errors.jobLocation = "⚠ please enter your job location ...";
        }
        if (!jobDetails.jobDescription) {
            Errors.jobDescription = "⚠ please enter your job description ...";
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
                <h3 className="alert alert-primary text-center">Job Details</h3>
                <div className="employee-form">
                    <div className="form-group">
                        <label htmlFor="jobTitle">Employment :- </label>
                        <input type="text" className="form-control" name="jobTitle" id="jobTitle" placeholder="Please enter your Job Name ..." value={jobDetails.jobTitle} onChange={onChange} />
                        {errors.jobTitle && <span className="text-danger">{errors.jobTitle}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="company">Company Name :- </label>
                        <input type="text" className="form-control" name="company" id="company" placeholder="Please enter your Company Name ..." value={jobDetails.company} onChange={onChange} />
                        {errors.company && <span className="text-danger">{errors.company}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="jobLocation">Job Location :- </label>
                        <input type="text" className="form-control" name="jobLocation" id="jobLocation" placeholder="Please enter your Job Location ..." value={jobDetails.jobLocation} onChange={onChange} />
                        {errors.jobLocation && <span className="text-danger">{errors.jobLocation}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="jobDescription">Job Description :- </label>
                        <textarea className="form-control" name="jobDescription" id="jobDescription" placeholder="Please enter your Job Description ..." value={jobDetails.jobDescription} onChange={onChange} />
                        {errors.jobDescription && <span className="text-danger">{errors.jobDescription}</span>}
                    </div>

                    <div className="form-group">
                        <button type="button" className="btn btn-primary mr-2" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobDetails;