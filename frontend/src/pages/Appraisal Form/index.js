import React, { useState } from 'react';
import Modal from 'react-modal'; // Correct import
import './AppraisalForm.css';
import { useNavigate } from 'react-router-dom'

// import PayCommissionCalculator from "../Component/PayCommissionCalculator.jsx"


const InputField = ({ label, name, value, onChange, type = "text", placeholder, options }) => (
	<div className="form-group full-width">
		<label>{label}</label>
		{options ? (
			<select
				name={name}
				value={value}
				onChange={onChange}
				className="input-line"
			>
				<option value="">Select</option>
				{options.map(option => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		) : (
			<input
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className="input-line"
			/>
		)}
	</div>
);

const FormSection = ({ title, children }) => (
	<section className="form-section">
		<h2>{title}</h2>
		{children}
	</section>
);
// const CustomModal=({message,onClose})=>{
//   <div className='modal-overlay'>
//     <div className='modal'>
//       <h2>{message}</h2>
//       <button onClick={onClose}>Close</button>
//     </div>
//   </div>
// }



const AppraisalForm = () => {
	const [formData, setFormData] = useState({

		name: '',
		designation: '',
		department: '',
		phoneNo: '',
		email: '',
		dateOfAppointment: '',
		dateOfLastPromotion: '',
		coursesTaught: [''],
		publications: [''],
		projects: '',
		certifications: [''],
		goals: [{ goal: '', progress: '' }],
		performanceRating: '',

	});

	const [isSubmitted, setIsSubmitted] = useState(false); // State for controlling the modal

	const departments = [
		'Computer Science & Engineering',
		'Mechanical Engineering',
		'Civil Engineering',
		'Electrical Engineering',
		'Business Administration',
		'English Literature',
		'Chemistry'
	];

	const courses = {
		'Computer Science & Engineering': [
			'Data Structures and Algorithms', 'Operating Systems', 'Database Management Systems',
			'Computer Networks', 'Software Engineering', 'Theory of Computation', 'Compiler Design',
			'Object-Oriented Programming', 'Computer Architecture and Organization', 'Machine Learning'
		],
		'Mechanical Engineering': [
			'Engineering Mechanics', 'Thermodynamics', 'Fluid Mechanics', 'Strength of Materials',
			'Theory of Machines', 'Manufacturing Processes', 'Heat and Mass Transfer', 'Machine Design',
			'Materials Science and Engineering', 'Automobile Engineering'
		],
		'Electrical Engineering': [
			'Engineering Mechanics', 'Thermodynamics', 'Fluid Mechanics', 'Strength of Materials',
			'Theory of Machines', 'Manufacturing Processes', 'Heat and Mass Transfer', 'Machine Design',
			'Materials Science and Engineering', 'Control Systems'
		],
		'Civil Engineering': [
			'Engineering Mechanics', 'Structural Analysis', 'Concrete Technology', 'Construction Management',
			'Soil Mechanics and Foundation Engineering', 'Surveying', 'Hydraulics and Fluid Mechanics',
			'Environmental Engineering', 'Transportation Engineering', 'Steel Structures'
		],
		'Business Administration': [
			'Principles of Management', 'Organizational Behavior', 'Marketing Management', 'Financial Accounting',
			'Management Accounting', 'Business Economics', 'Operations Management', 'Human Resource Management',
			'Business Law and Ethics', 'Strategic Management'
		],
		'English Literature': [
			'Introduction to Literary Studies', 'British Literature', 'American Literature', 'World Literature',
			'Shakespearean Studies', 'Poetry Analysis', 'Drama Studies', 'Fiction and Novel Studies',
			'Literary Theory and Criticism', 'Modern and Contemporary Literature'
		],
		'Chemistry': [
			'General Chemistry', 'Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry',
			'Analytical Chemistry', 'Biochemistry', 'Spectroscopy and Instrumental Analysis', 'Chemical Kinetics',
			'Thermodynamics', 'Environmental Chemistry'
		]
	};

	const handleDepartmentChange = (e) => {
		const department = e.target.value;
		setFormData({
			...formData,
			department,
			coursesTaught: [''] // Reset courses taught when department changes
		});
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};


	const handleArrayChange = (index, arrayName, value) => {
		const updatedArray = [...formData[arrayName]];
		updatedArray[index] = value;
		setFormData({
			...formData,
			[arrayName]: updatedArray,
		});
	};

	const addArrayField = (arrayName) => {
		setFormData({
			...formData,
			[arrayName]: [...formData[arrayName], ''],
		});
	};

	const handleGoalChange = (index, field, value) => {
		const updatedGoals = [...formData.goals];
		updatedGoals[index][field] = value;
		setFormData({
			...formData,
			goals: updatedGoals,
		});
	};

	const addGoalField = () => {
		setFormData({
			...formData,
			goals: [...formData.goals, { goal: '', progress: '' }],
		});
	};

	// const handleInputChange = (e) => {
	//   const { name, value } = e.target;
	//   setFormData({
	//     ...formData,
	//     [name]: value,
	//   });
	// };

	const handleSubmit = async (e) => {
		e.preventDefault();

		const missingFields = [];

		if (!formData.name) missingFields.push('Name');
		if (!formData.designation) missingFields.push('Designation');
		if (!formData.department) missingFields.push('Department');
		if (!formData.phoneNo) missingFields.push('Phone Number');
		if (!formData.email) missingFields.push('Email');
		if (!formData.dateOfAppointment) missingFields.push('Date of Appointment');
		if (!formData.coursesTaught.some(course => course.trim())) missingFields.push('Courses Taught');
		if (!formData.publications.some(publication => publication.trim())) missingFields.push('Publications');
		if (!formData.projects.trim()) missingFields.push('Projects');
		if (!formData.certifications.some(cert => cert.trim())) missingFields.push('Certifications');
		if (!formData.goals.some(goal => goal.goal.trim() && goal.progress.trim())) missingFields.push('Goals');
		if (!formData.performanceRating) missingFields.push('Performance Rating');

		if (missingFields.length > 0) {
			alert(`Please fill out the following fields: ${missingFields.join(', ')}`);
			return;
		}

		try {
			const response = await fetch('https://eduappraise-backend.onrender.com/api/appraisal/create', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData), // Send form data as JSON
			});

			if (response.ok) {
				setIsSubmitted(true);
				console.log('Form data submitted:', formData);
			} else {
				const errorData = await response.json();
				alert('Failed to submit the form: ' + errorData.error);
			}
		} catch (error) {
			alert('An error occurred while submitting the form: ' + error.message);
		}
	};

	const closeModal = () => {
		setIsSubmitted(false);
	};
	const departmentCourses = courses[formData.department] || [];
	const navigate = useNavigate();
	return (

		<div className="App">


			<h1>Faculty Self-Appraisal Form</h1>
			<form onSubmit={handleSubmit} className="form-container">

				<FormSection title="Personal Details">
					<InputField
						label="Name:"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						placeholder="Enter your name"
					/>
					<InputField
						label="Designation:"
						name="designation"
						value={formData.designation}
						onChange={handleInputChange}
						placeholder="Enter your designation"
					/>
					<InputField
						label="Phone Number:"
						name="phoneNo"
						value={formData.phoneNo}
						onChange={handleInputChange}
						placeholder="Enter your phone number"
					/>
					<InputField
						label="Email ID:"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						placeholder="Enter your email id"
					/>
					<InputField
						label="Department:"
						name="department"
						value={formData.department}
						onChange={handleDepartmentChange}
						options={departments}
					/>
					<div className="date-container">
						<InputField
							label="Date of Appointment:"
							name="dateOfAppointment"
							value={formData.dateOfAppointment}
							onChange={handleInputChange}
							type="date"
						/>
						<InputField
							label="Date of Last Promotion (if any):"
							name="dateOfLastPromotion"
							value={formData.dateOfLastPromotion}
							onChange={handleInputChange}
							type="date"
						/>
					</div>
				</FormSection>

				<FormSection title="Professional Details">
					<h5>Courses Taught</h5>
					{formData.coursesTaught.map((course, index) => (
						<InputField
							key={index}
							label={`Course ${index + 1}:`}
							name={`course${index}`}
							value={course}
							onChange={(e) => handleArrayChange(index, 'coursesTaught', e.target.value)}
							options={departmentCourses}
						/>
					))}
					<button type="button" className="add-button" onClick={() => addArrayField('coursesTaught')}>
						Add Another Course
					</button>

					<h5>Publications</h5>
					{formData.publications.map((publication, index) => (
						<InputField
							key={index}
							label={`Publication ${index + 1}:`}
							name={`publication${index}`}
							value={publication}
							onChange={(e) => handleArrayChange(index, 'publications', e.target.value)}
							placeholder={`Enter publication ${index + 1}`}
						/>
					))}
					<button type="button" className="add-button" onClick={() => addArrayField('publications')}>
						Add Another Publication
					</button>

					<InputField
						label="Projects:"
						name="projects"
						value={formData.projects}
						onChange={handleInputChange}
						placeholder="Enter projects"
					/>

					<h5>Certifications</h5>
					{formData.certifications.map((certification, index) => (
						<InputField
							key={index}
							label={`Certification ${index + 1}:`}
							name={`certification${index}`}
							value={certification}
							onChange={(e) => handleArrayChange(index, 'certifications', e.target.value)}
							placeholder={`Enter certification ${index + 1}`}
						/>
					))}
					<button type="button" className="add-button" onClick={() => addArrayField('certifications')}>
						Add Another Certification
					</button>
				</FormSection>

				<FormSection title="Goals">
					{formData.goals.map((goal, index) => (
						<div key={index}>
							<InputField
								label={`Goal ${index + 1}:`}
								name={`goal${index}`}
								value={goal.goal}
								onChange={(e) => handleGoalChange(index, 'goal', e.target.value)}
								placeholder="Enter your goal"
							/>
							<InputField
								label="Progress:"
								name={`progress${index}`}
								value={goal.progress}
								onChange={(e) => handleGoalChange(index, 'progress', e.target.value)}
								placeholder="Track your progress"
							/>
						</div>
					))}
					<button type="button" className="add-button" onClick={addGoalField}>
						Add Another Goal
					</button>
				</FormSection>

				<FormSection title="Performance Rating">
					<InputField
						label="Rate your performance based on student feedback (out of 5):"
						name="performanceRating"
						value={formData.performanceRating}
						onChange={handleInputChange}
						type="number"
						min="1"
						max="5"
						placeholder="Enter your rating"
					/>
				</FormSection>

				<button className='pay' onClick={() => {
					navigate('/pay')
				}}  >Pay</button>


				<button type="submit" className="submit-button">Submit Appraisal</button>
			</form>

			<Modal
				isOpen={isSubmitted}
				onRequestClose={closeModal}
				style={{
					overlay: { background: 'rgba(0, 0, 0, 0.75)' },
					content: {
						color: 'green',
						width: '400px',
						height: '200px',
						margin: 'auto',
						textAlign: 'center',
						padding: '20px',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					},
				}}
			>
				<h2>Form has been successfully submitted!</h2>
				<button className="close-button" onClick={closeModal}>Close</button>
			</Modal>
		</div>
	);
}

export default AppraisalForm;
