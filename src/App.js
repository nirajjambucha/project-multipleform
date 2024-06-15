import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import EducationDetails from './components/EducationDetails';
import JobDetails from './components/JobDetails';
import DataTable from './components/DataTable';

function App() {
    const [userDetails, setUserDetails] = useState({});
    const [educationDetails, setEducationDetails] = useState({});
    const [jobDetails, setJobDetails] = useState({});
    const [userData, setUserData] = useState([]);
    const [currentFormIndex, setCurrentFormIndex] = useState(0);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setUserDetails(State => ({
                ...State,
                [name]: checked ? [...(State[name] || []), value] : (State[name] || []).filter(item => item !== value)
            }));
        } else {
            if (currentFormIndex === 0) {
                setUserDetails(State => ({ ...State, [name]: value }));
            } else if (currentFormIndex === 1) {
                setEducationDetails(State => ({ ...State, [name]: value }));
            } else if (currentFormIndex === 2) {
                setJobDetails(State => ({ ...State, [name]: value }));
            }
        }
    };

    const fileChange = (e) => {
        let file = e.target.files[0]
        let url = URL.createObjectURL(file)
        setUserDetails({ ...userDetails, profile: url })
    }

    const handleSubmit = () => {
        if (currentFormIndex === 0) {
            setCurrentFormIndex(1);
        } else if (currentFormIndex === 1) {
            setCurrentFormIndex(2);
        } else if (currentFormIndex === 2) {
            setUserData(Data => [...Data, { userDetails, educationDetails, jobDetails }]);
            setUserDetails({});
            setEducationDetails({});
            setJobDetails({});
            setCurrentFormIndex(3);
        }
    };

    const handleNext = () => {
        setCurrentFormIndex(index => index + 1);
    };

    const handleBack = () => {
        setCurrentFormIndex(0);
    };

    const handleEdit = (index) => {
        const { userDetails, educationDetails, jobDetails } = userData[index];
        setUserDetails(userDetails);
        setEducationDetails(educationDetails);
        setJobDetails(jobDetails);
        setCurrentFormIndex(0);
    };

    const handleDelete = (index) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this data?");
        if (confirmDelete) {
            const updatedUserData = [...userData];
            updatedUserData.splice(index, 1);
            setUserData(updatedUserData);
        }
    };

    return (
        <div className="container">
            {currentFormIndex === 0 && (
                <ContactForm userDetails={userDetails} onChange={handleChange} onSubmit={handleSubmit} fileChange={fileChange} />
            )}

            {currentFormIndex === 1 && (
                <EducationDetails educationDetails={educationDetails} onChange={handleChange} onSubmit={handleSubmit} />
            )}

            {currentFormIndex === 2 && (
                <JobDetails jobDetails={jobDetails} onChange={handleChange} onSubmit={handleSubmit} />
            )}

            {currentFormIndex === 3 && (
                <div>
                    <DataTable userData={userData} onEdit={handleEdit} onDelete={handleDelete} />
                    <div style={{ marginTop: "-1px" }}>
                        <button onClick={handleBack} className="btn btn-success mt-3 ml-1"> <i className="fa fa-chevron-circle-left" style={{ fontSize: "20px", margin: "3px" }} ></i>Back</button>
                    </div>
                </div>
            )}

            {currentFormIndex < 3 && currentFormIndex > 0 && (
                <div className='container1' style={{ marginTop: "-1px" }}>
                    <button onClick={handleBack} className="btn btn-success mt-3 ml-3"> <i className="fa fa-chevron-circle-left" style={{ fontSize: "20px", margin: "3px" }} ></i> Back </button>
                    <button onClick={handleNext} className="btn btn-danger mt-3 ml-3">Next <i   className="fa fa-chevron-circle-right" style={{ fontSize: "20px", margin: "3px" }} ></i></button>
                </div>
            )}

            {currentFormIndex === 0 && (
                <div className='container1' style={{ marginTop: "-1px" }}>
                    <button onClick={handleNext} className="btn btn-danger mt-3 ml-3">Next <i className="fa fa-chevron-circle-right" style={{ fontSize: "20px", margin: "3px" }} ></i></button>
                </div>
            )}
        </div>
    );
}

export default App;