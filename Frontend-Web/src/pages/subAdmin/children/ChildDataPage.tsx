import React from "react";
import { Container, Col, Row } from "reactstrap";
import Footer from "../../../components/footer/Footer";
import FooterBottom from "../../../components/footer/FooterBottom";
import AdminHeader from "../../../components/header/AdminHeader";
import "../../../index.css";
import Sidebar from "./../Sidebar";
import ChildData from "./ChildData";

const ChildDataPage = () => {
	return (
		<>
			<AdminHeader userType="Sub admin" />
			<Container className="admin-container">
				<Row>
					<Col lg="3">
						<Sidebar height="1300px" />
					</Col>
					<Col lg="9">
						<ChildData />
					</Col>
				</Row>
			</Container>
			<Footer />
			<FooterBottom />
		</>
	);
};

export default ChildDataPage;
