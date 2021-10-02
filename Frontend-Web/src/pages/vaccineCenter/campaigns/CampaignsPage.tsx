import React from "react";
import { Container, Col, Row } from "reactstrap";
import Footer from "../../../components/footer/Footer";
import FooterBottom from "../../../components/footer/FooterBottom";
import AdminHeader from "../../../components/header/AdminHeader";
import "../../../index.css";
import Sidebar from "./../Sidebar";
import Campaigns from "./Campaigns";

const CampaignsPage = () => {
	return (
		<>
			<AdminHeader userType="Vaccine center" />
			<Container className="admin-container">
				<Row>
					<Col lg="3">
						<Sidebar />
					</Col>
					<Col lg="9">
						<Campaigns />
					</Col>
				</Row>
			</Container>
			<Footer />
			<FooterBottom />
		</>
	);
};

export default CampaignsPage;