import React from 'react';
import './LandingPage.scss'; // Import your CSS for layout and design
import Slider from "react-slick"; // Import the slider
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css";
import body_image from './assets/landing_body.png';
import imgslider1 from './assets/imgslider2.png';
import imgslider3 from './assets/imgslider1.png';
import imgslider2 from './assets/imgslider3.png';
import logo from './assets/logo.png'
const LandingPage = () => {
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000, // Change image every 5 seconds
	};

	return (
		<div className="landing-container">
			{/* Header Section */}
			<header>
				<div className="logo"><img src={logo} alt="logo" />EduAppraise</div>
				<nav>
					<ul>
						<li><button class="log">Login</button></li>
						<li><button class="reg">Sign up</button></li>
					</ul>
				</nav>
			</header>

			{/* Content Section */}
			<div className='gradient-body'>
				<div className="content">
					<div className="text-section">
						<h1>Automated System for Faculty Career Advancements</h1>
						<p>EduAppraise revolutionizes faculty career advancements with a streamlined, automated system for self-appraisal and administrative evaluation. Our platform enables faculty to easily update their activities in real time, ensuring timely, transparent evaluations. Designed for simplicity and efficiency, EduAppraise gives administrators instant access to the latest information, facilitating faster decision-making and fostering continuous growth.</p>
						<button>Get Started</button>
					</div>

					<div className="image-section">
						<div className="phone-mockup">
							<img src={body_image} alt="Phone mockup" />
						</div>
					</div>
				</div>

				{/* Slider Section */}
				<div className="slider-container">
					<Slider {...sliderSettings}>
						<div className="slide">
							<div className="slide-content">
								<div className="slide-text">
									<h2>Empowering Faculty Advancement</h2>
									<p>Welcome to the future of faculty self-appraisal! Our automated system modernizes traditional processes, offering a secure and user-friendly platform for faculty members to update their activities in real-time. Embrace a new era of efficiency and transparency in career evaluations</p>
								</div>
								<div className="slide-image">
									<img src={imgslider1} alt="Slide 1" />
								</div>
							</div>
						</div>
						<div className="slide">
							<div className="slide-content">
								<div className="slide-text">
									<h2>Real-Time Updates, Real-Time Impact</h2>
									<p>Say goodbye to paper-based delays! Our system allows faculty to log their research, seminars, and projects instantly. Administrators gain immediate access to the latest information, ensuring timely and informed decision-making. Experience real-time responsiveness like never before.</p>
								</div>
								<div className="slide-image">
									<img src={imgslider3} alt="Slide 2" />
								</div>
							</div>
						</div>
						<div className="slide">
							<div className="slide-content">
								<div className="slide-text">
									<h2>Comprehensive Management at Your Fingertips</h2>
									<p>Effortlessly manage faculty self-appraisal with our intuitive admin panel. View, sort, and manage submissions with ease. Download reports in PDF format for streamlined record-keeping and analysis. Simplify the appraisal process and focus on fostering continuous improvement.</p>
								</div>
								<div className="slide-image">
									<img src={imgslider2} alt="Slide 3" />
								</div>
							</div>
						</div>
					</Slider>
				</div>

				{/* Quote Cards Section */}
				<div className="quote-cards">
					<div className="quote-card">
						<p>"This platform revolutionized our faculty appraisals! The real-time features save so much time and effort."</p>
						<h4>- Dr. Ayesha Malik</h4>
					</div>
					<div className="quote-card">
						<p>"Our administrative burden has significantly decreased. Managing faculty records has never been easier!"</p>
						<h4>- John Doe, Administrator</h4>
					</div>
					<div className="quote-card">
						<p>"The intuitive design makes it simple to update my activities. No more delays, everything is streamlined!"</p>
						<h4>- Prof. Sarah Khan</h4>
					</div>
				</div>
			</div>

			{/* Footer Section */}
			<footer>
				<div className="footer-content">
					<p>&copy; 2024 EduAppraise. All Rights Reserved.</p>
					<div className="footer-links">
						<a href="/">Privacy Policy</a>
						<a href="/">Terms of Service</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default LandingPage;
