const { overArgs } = require("lodash");

const winston = require("../../config/winston"),
	mongoose = require("mongoose"),
	children = mongoose.model("Children"),
	vaccine = mongoose.model("Vaccine"),
	users = mongoose.model("userAccounts"),
	assignVaccineTo = mongoose.model("assignVaccineTo"),
	orgVaccines = mongoose.model("organizationVaccines");

let admin = (req, res, next) => {
	try {
		return res.json({
			message: "Admin dashboard",
			data: {},
		});
	} catch (err) {
		winston.error(err);
		res.redirect("/error");
	}
};

let viewChildren = async (req, res, next) => {
	try {
		return res.json({
			message: "Children data",
			data: await children.find({}),
		});
	} catch (err) {
		winston.error(err);
		res.redirect("/error");
	}
};

let viewChild = async (req, res, next) => {
	try {
		return res.json({
			message: "Child data",
			data: await children.findOne({ _id: req.params.id }),
		});
	} catch (err) {
		winston.error(err);
		res.redirect("/error");
	}
};

let viewVaccines = async (req, res, next) => {
	try {
		return res.json({
			message: "Vaccines data",
			data: await vaccine.find({}),
		});
	} catch (err) {
		winston.error(err);
		res.redirect("/error");
	}
};

let addVaccine = async (req, res, next) => {
	try {
		const newVaccine = await new vaccine(req.body).save();

		return res.json({
			message: "Vaccine added successfully.",
			data: { vaccine: newVaccine },
		});
	} catch (err) {
		winston.error(err);
		res.redirect("/error");
	}
};

let updateVaccine = async (req, res, next) => {
	try {
		const newVaccine = await vaccine.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
		return res.json({
			message: "Vaccine updated successfully.",
			data: { vaccine: newVaccine },
		});
	} catch (err) {
		winston.error(err);
		res.redirect("/error");
	}
};

let deleteVaccine = async (req, res, next) => {
	await vaccine.findByIdAndDelete({ _id: req.params.id });
	try {
		return res.json({
			message: "Vaccine deleted successfully.",
			data: {},
		});
	} catch (err) {
		winston.error(err);
		res.redirect("/error");
	}
};

let viewHospitals = async (req, res, next) => {
	try {
		return res.json({
			message: "hospitals",
			data: await users.find({ userType: "hospital" }),
		});
	} catch (err) {
		winston.error(err);
		res.redirect("/error");
	}
};

let viewVaccineCenters = async (req, res, next) => {
	try {
		return res.json({
			message: "vaccine centers",
			data: await users.find({ userType: "vaccine center" }),
		});
	} catch (err) {
		winston.error(err);
		res.redirect("/error");
	}
};

let viewSubAdmins = async (req, res, next) => {
	try {
		return res.json({
			message: "sub admins",
			data: await users.find({ userType: "sub admin" }),
		});
	} catch (err) {
		winston.error(err);
		res.redirect("/error");
	}
};

let addSubAdmin = async (req, res, next) => {
	try {
		const newUser = await new users(req.body).save();
		return res.json({
			message: "Sub admin added successfully.",
			data: {
				user: newUser,
			},
		});
	} catch (err) {
		winston.error(err);
		res.redirect("/error");
	}
};

let updateSubAdmin = async (req, res, next) => {
	try {
		const newSubAdmin = await users.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
		return res.json({
			message: "Sub admin updated successfully.",
			data: {
				subAdmin: newSubAdmin,
			},
		});
	} catch (err) {
		winston.error(err);
		res.redirect("/error");
	}
};

let deleteSubAdmin = async (req, res, next) => {
	try {
		await users.findByIdAndDelete({ _id: req.params.id });
		return res.json({
			message: "sub admin deleted successfully.",
			data: {},
		});
	} catch (err) {
		winston.error(err);
		res.redirect("/error");
	}
};

let assignVaccine = async (req, res, next) => {
	try {
		const org = await users.findOne({ _id: req.params.id });
		// console.log("Organization: ", org);
		if (!org) {
			throw "No organization found with that name.";
		}

		const Vaccine = await vaccine.find({ _id: req.body.vaccine });
		if (!Vaccine) {
			throw "No vaccine available with this name.";
		}
		console.log("Vaccine: ", Vaccine);

		const organizationVacc = await orgVaccines.findOne({ organization: org._id });
		console.log("Organization vaccines: ", organizationVacc);

		console.log("type of quantity: ", typeof req.body.quantity);

		const orgVacc = {
			organization: org,
			vaccines: {
				polio: {
					quantity:
						Vaccine[0].name === "polio"
							? parseInt(req.body.quantity) + organizationVacc.vaccines.polio.quantity
							: organizationVacc.vaccines.polio.quantity,
				},
				diphtheria: {
					quantity:
						Vaccine[0].name === "diphteria"
							? parseInt(req.body.quantity) + organizationVacc.vaccines.diphtheria.quantity
							: organizationVacc.vaccines.diphtheria.quantity,
				},
				homophiles: {
					quantity:
						Vaccine[0].name === "homophiles"
							? parseInt(req.body.quantity) + organizationVacc.vaccines.homophiles.quantity
							: organizationVacc.vaccines.homophiles.quantity,
				},
				rotaVirus: {
					quantity:
						Vaccine[0].name === "rotaVirus"
							? parseInt(req.body.quantity) + organizationVacc.vaccines.rotaVirus.quantity
							: organizationVacc.vaccines.rotaVirus.quantity,
				},
				measles: {
					quantity:
						Vaccine[0].name === "measles"
							? parseInt(req.body.quantity) + organizationVacc.vaccines.measles.quantity
							: organizationVacc.vaccines.measles.quantity,
				},
				hepatitisA: {
					quantity:
						Vaccine[0].name === "hepatitusA"
							? parseInt(req.body.quantity) + organizationVacc.vaccines.hepatitisA.quantity
							: organizationVacc.vaccines.hepatitisA.quantity,
				},
				hepatitisB: {
					quantity:
						Vaccine[0].name === "hepatitusB"
							? parseInt(req.body.quantity) + organizationVacc.vaccines.hepatitisB.quantity
							: organizationVacc.vaccines.hepatitisB.quantity,
				},
				papillomaVirus: {
					quantity:
						Vaccine[0].name === "papillomaVirus"
							? parseInt(req.body.quantity) + organizationVacc.vaccines.papillomaVirus.quantity
							: organizationVacc.vaccines.papillomaVirus.quantity,
				},
				influenza: {
					quantity:
						Vaccine[0].name === "influenza"
							? parseInt(req.body.quantity) + organizationVacc.vaccines.influenza.quantity
							: organizationVacc.vaccines.influenza.quantity,
				},
			},
		};
		console.log("Org vacc: ", orgVacc);

		if (Vaccine[0].quantity > 0) {
			const assignedVaccine = await new assignVaccineTo({
				vaccine: req.body.vaccine,
				date: req.body.date,
				quantity: req.body.quantity,
				organization: org,
			}).save();

			const remainingVaccine = Vaccine[0].quantity - req.body.quantity;
			await vaccine.findOneAndUpdate(
				{ _id: req.body.vaccine },
				{ $set: { quantity: remainingVaccine } },
				{ new: true }
			);

			await orgVaccines.findOneAndUpdate({ _id: organizationVacc._id }, orgVacc, { new: true });

			return res.json({
				message: "vaccine assigned successfully.",
				data: {
					assignedVaccine,
					orgVaccineDetails: orgVacc,
				},
			});
		} else {
			return res.json({
				message: "The vaccine is not available currently.",
				data: {},
			});
		}
	} catch (err) {
		winston.error(err);
		res.redirect("/error");
	}
};

let futureCases = (req, res, next) => {
	try {
		return res.json({
			message: "future cases",
			data: {},
		});
	} catch (err) {
		winston.error(err);
		res.redirect("/error");
	}
};

let futureVaccineNeeds = (req, res, next) => {
	try {
		return res.json({
			message: "future vaccine needs",
			data: {},
		});
	} catch (err) {
		winston.error(err);
		res.redirect("/error");
	}
};

module.exports = {
	admin,
	viewChildren,
	viewChild,
	viewVaccines,
	addVaccine,
	updateVaccine,
	deleteVaccine,
	viewHospitals,
	viewVaccineCenters,
	viewSubAdmins,
	addSubAdmin,
	deleteSubAdmin,
	updateSubAdmin,
	futureCases,
	futureVaccineNeeds,
	assignVaccine,
};