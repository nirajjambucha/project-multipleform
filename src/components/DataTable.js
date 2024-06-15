import React from 'react';

function DataTable({ userData, onEdit, onDelete }) {
    return (
        <div>
            <div>
                <h3 className="alert alert-primary text-center mt-4">Submitted Data</h3>
                <div>
                    {userData.map((data, index) => (
                        <div className="card mb-3" key={index}>
                            <div className="card-body bg-light">
                                <h3 className="alert alert-dark mt-4 card-title">USER - {index + 1}</h3>
                                <hr />
                                <p>
                                    <strong>First Name</strong>
                                    <strong>:-</strong>
                                    <strong>{data.userDetails.firstName}</strong>
                                </p>
                                <hr/>

                                <p>
                                    <strong>Last Name</strong>
                                    <strong>:-</strong>
                                    <strong>{data.userDetails.lastName}</strong>
                                </p>
                                <hr/>

                                <p>
                                    <strong>Country</strong>
                                    <strong>:-</strong>
                                    <strong>{data.userDetails.country}</strong>
                                </p>
                                <hr/>

                                <p>
                                    <strong>Language</strong>
                                    <strong>:-</strong>
                                    <strong>{data.userDetails.language}</strong>
                                </p>
                                <hr/>

                                <p>
                                    <strong>Interests</strong>
                                    <strong>:-</strong>
                                    <strong>{data.userDetails.interests?.join(", ")}</strong>
                                </p>
                                <hr/>

                                <p>
                                    <strong>Degree</strong>
                                    <strong>:-</strong>
                                    <strong>{data.educationDetails.degree}</strong>
                                </p>
                                <hr/>

                                <p>
                                    <strong>Field of Study</strong>
                                    <strong>:-</strong>
                                    <strong>{data.educationDetails.fieldOfStudy}</strong>
                                </p>
                                <hr/>

                                <p>
                                    <strong>University/Institution</strong>
                                    <strong>:-</strong>
                                    <strong>{data.educationDetails.university}</strong>
                                </p>
                                <hr/>

                                <p>
                                    <strong>Graduation Year</strong>
                                    <strong>:-</strong>
                                    <strong>{data.educationDetails.graduationYear}</strong>
                                </p>
                                <hr/>

                                <p>
                                    <strong>Employment</strong>
                                    <strong>:-</strong>
                                    <strong>{data.jobDetails.jobTitle}</strong>
                                </p>
                                <hr/>

                                <p>
                                    <strong>Company</strong>
                                    <strong>:-</strong>
                                    <strong>{data.jobDetails.company}</strong>
                                </p>
                                <hr/>

                                <p>
                                    <strong>Job Location</strong>
                                    <strong>:-</strong>
                                    <strong>{data.jobDetails.jobLocation}</strong>
                                </p>
                                <hr/>

                                <p>
                                    <strong>Job Description</strong>
                                    <strong>:-</strong>
                                    <strong>{data.jobDetails.jobDescription}</strong>
                                </p>
                                <hr/>

                                <div>
                                    <strong>File</strong>
                                    <strong>:-</strong>
                                    <br />
                                    <img src={data.userDetails?.profile} alt='profile' style={{ width: "150px", height: "auto" }} />
                                </div>
                                <hr/>

                                <div className="mt-3">
                                    <button className="btn btn-sm btn-success mr-3" onClick={() => onEdit(index)}><i className="fas fa-edit mr-1"></i>Edit</button>
                                    <button type="button" className="btn btn-sm btn-danger" onClick={() => onDelete(index)}><i className="fas fa-trash mr-1"></i>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DataTable;

// import React from 'react';

// function DataTable({ userData, onEdit, onDelete }) {
//     return (
//         <div>
//             <div>
//                 <h3 className="alert alert-primary text-center mt-4">Submitted Data</h3>
//                 <div className="table-responsive">
//                     <table className="table table-striped">
//                         <thead>
//                             <tr>
//                                 <th>First Name</th>
//                                 <th>Last Name</th>
//                                 <th>Country</th>
//                                 <th>Language</th>
//                                 <th>Interests</th>
//                                 <th>Degree</th>
//                                 <th>Field of Study</th>
//                                 <th>Uni/Insti</th>
//                                 <th>Graduation Year</th>
//                                 <th>Employment</th>
//                                 <th>Company</th>
//                                 <th>Job Location</th>
//                                 <th>Job Description</th>
//                                 <th>File</th>
//                                 <th>Edit</th>
//                                 <th>Delete</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {userData.map((data, index) => (
//                                 <tr key={index}>
//                                     <td>{data.userDetails.firstName}</td>
//                                     <td>{data.userDetails.lastName}</td>
//                                     <td>{data.userDetails.country}</td>
//                                     <td>{data.userDetails.language}</td>
//                                     <td>{data.userDetails.interests?.join(" , ")}</td>
//                                     <td>{data.educationDetails.degree}</td>
//                                     <td>{data.educationDetails.fieldOfStudy}</td>
//                                     <td>{data.educationDetails.university}</td>
//                                     <td>{data.educationDetails.graduationYear}</td>
//                                     <td>{data.jobDetails.jobTitle}</td>
//                                     <td>{data.jobDetails.company}</td>
//                                     <td>{data.jobDetails.jobLocation}</td>
//                                     <td>{data.jobDetails.jobDescription}</td>
//                                     <td>
//                                         <img src={data.userDetails?.profile} alt='profile' style={{width: "150px", height : "auto"}}/>
//                                     </td>
//                                     <td><button className="btn btn-sm btn-success mr-3" onClick={() => onEdit(index)}><i className="fas fa-edit mr-1"></i>Edit</button></td>
//                                     <td><button type="button" className="btn btn-sm btn-danger" onClick={() => onDelete(index)}><i className="fas fa-trash mr-1"></i>Delete</button></td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default DataTable;