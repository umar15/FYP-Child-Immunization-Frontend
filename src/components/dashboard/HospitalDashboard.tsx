import React from "react";
import { Container, Col, Row } from "reactstrap";
import ViewChildren from "../child/ViewChildren";
import { BsPeopleFill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { IoPersonAdd } from "react-icons/io5";
import { GiLoveInjection } from "react-icons/gi";
import { FaUserEdit } from "react-icons/fa";
import "../../index.css";
import HospitalHeader from "../header/HospitalHeader";
import Footer from "../footer/Footer";
import FooterBottom from "../footer/FooterBottom";
import { Link } from "react-router-dom";

const HospitalDashboard = () => {
	const iconSize = 20;
	return (
		<div className="hospital-dashboard">
			<HospitalHeader />
			<Container className="hospital-container">
				<Row>
					<Col lg="3" className="sidebar">
						<ul>
							<li>
								<Link className="link" to="/hospital/children">
									<BsPeopleFill size={iconSize} className="sidebar-icon" />
									View Children
								</Link>
							</li>
							<li>
								<Link className="link" to="/hospital/children/add">
									<IoPersonAdd size={iconSize} className="sidebar-icon" />
									Add child
								</Link>
							</li>
							<li>
								<Link className="link" to="/hospital/vaccines">
									<GiLoveInjection size={iconSize} className="sidebar-icon" />
									Vaccine Stock
								</Link>
							</li>
							<li>
								<Link className="link" to="/hospital/vaccines/add">
									<IoMdAddCircle size={iconSize} className="sidebar-icon" />
									Add vaccine stock
								</Link>
							</li>
							<li>
								<Link className="link" to="/hospital">
									<FaUserEdit size={iconSize} className="sidebar-icon" />
									Update Child Vaccine
								</Link>
							</li>
						</ul>
					</Col>
					<Col lg="9" className="data-table">
						<ViewChildren />
					</Col>
				</Row>
			</Container>
			<Footer />
			<FooterBottom />
		</div>
	);
};

export default HospitalDashboard;
