import React from "react";
import { Container, Col, Row } from "reactstrap";
import { IoMdAddCircle } from "react-icons/io";
import { GiLoveInjection } from "react-icons/gi";
import { FaUserEdit } from "react-icons/fa";
import { SiCampaignmonitor } from "react-icons/si";
import { AiFillFolderAdd } from "react-icons/ai";
import "../index.css";
import VaccineCenterHeader from ".././components/header/VaccineCenterHeader";
import Footer from ".././components/footer/Footer";
import FooterBottom from ".././components/footer/FooterBottom";
import ViewVaccineStock from "../components/vaccineStock/ViewVaccineStock";
import { Link } from "react-router-dom";

const VaccineStockPage = () => {
	const iconSize = 20;
	return (
		<div className="hospital-dashboard">
			<VaccineCenterHeader />
			<Container className="hospital-container">
				<Row>
					<Col lg="3" className="sidebar">
						<ul>
							<li>
								<Link className="link" to="/vaccinecenter">
									<FaUserEdit size={iconSize} className="sidebar-icon" />
									Update Child Vaccine
								</Link>
							</li>
							<li>
								<a>
									<Link className="link" to="/vaccinecenter/campaigns">
										<SiCampaignmonitor size={iconSize} className="sidebar-icon" />
										View Campaigns
									</Link>
								</a>
							</li>
							<li>
								<Link className="link" to="/vaccinecenter/campaigns/add">
									<AiFillFolderAdd size={iconSize} className="sidebar-icon" />
									Add Campaign
								</Link>
							</li>
							<li>
								<Link className="link active-link" to="/vaccinecenter/vaccines">
									<GiLoveInjection size={iconSize} className="sidebar-icon" />
									Vaccine Stock
								</Link>
							</li>
							<li>
								<Link className="link" to="/vaccinecenter/vaccines/add">
									<IoMdAddCircle size={iconSize} className="sidebar-icon" />
									Add Vaccine Stock
								</Link>
							</li>
						</ul>
					</Col>
					<Col lg="9" className="data-table">
						<ViewVaccineStock />
					</Col>
				</Row>
			</Container>
			<Footer />
			<FooterBottom />
		</div>
	);
};

export default VaccineStockPage;