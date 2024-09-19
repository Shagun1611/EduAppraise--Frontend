import React, { useContext, useState } from 'react';
import AppraisalModalContext from '../../context/Appraisal Modal/Context';
import styles from './AppraisalModal.module.scss';

const AppraisalModal = () => {

    const { modalData, setModalData } = useContext(AppraisalModalContext);
    
    const sections = [
        {
            title: "Personal Details",
            elements: [
                {
                    title: "Name",
                    editable: false,
                    value: modalData.facultyName
                },
                {
                    
                }
            ]
        }
    ];
    const [ formData, setFormData ] = useState(sections);

    return (
        modalData && 
        <section className={styles.modalContainer}>
            {/* 
                Name
                Designation
                phoneNo
                email
                department
                dateOfAppointment
                dateOfLastPromotion
                Courses Taught
                Publications
                Projects
                Certifications
                Goals
                Progress
                performanceRating
            */}
            <h2>Your Appraisal</h2>
            
        </section>
    )
}

export default AppraisalModal;
