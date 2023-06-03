/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import { InputBase } from "../InputBase/InputBase";
import "./Form.css";
import { OTHER_CARDS } from "../../constants";
import { cardNumberValidation } from "../../validations";

const INIT_CARD = {
	cardNum: "",
	cardHolder: "",
	expiry: "",
	cvc: "",
};

class Form extends React.Component {
	constructor() {
		super();

		this.state = {
			cardData: INIT_CARD,
			maxLength: OTHER_CARDS.length,
			error: {},
			cardType: null,
		};
	}

	findCardType = (cardNumber) => {
		const regexPattern = {
			MASTERCARD: /^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/,
			VISA: /^4[0-9]{2,}$/,
			AMERICAN_EXPRESS: /^3[47][0-9]{5,}$/,
			DISCOVER: /^6(?:011|5[0-9]{2})[0-9]{3,}$/,
		};
		for (const card in regexPattern) {
			if (cardNumber.replace(/[^\d]/g, "").match(regexPattern[card]))
				return card;
		}
		return "";
	};

	handleValidations = (type, value) => {
		let errorMsg;
		switch (type) {
			case "cardNum":
				errorMsg = cardNumberValidation(value);
				this.setState((prevState) => ({
					cardType: this.findCardType(value),
					error: {
						...prevState.error,
						cardError: errorMsg,
					},
				}));
				break;
			case "cardHolder":
				// checks for spaces and numbers
				// setState error
				break;
			case "expiry":
				// check date format
				// setState error
				break;
			case "cvc":
				// check min length
				// setState error
				break;
			default:
				break;
		}
	};

	handleBlur = (e) => this.handleValidations(e.target.name, e.target.value);

	handleInputData = (e) => {
		if (e.target.name === "cardNum") {
			let mask = e.target.value.split(" ").join("");
			if (mask.length) {
				mask = mask.match(new RegExp(".{1,4}", "g")).join(" ");
				this.setState((prevState) => ({
					cardData: { ...prevState.cardData, [e.target.name]: mask },
				}));
			} else {
				this.setState((prevState) => ({
					cardData: { ...prevState.cardData, [e.target.name]: "" },
				}));
			}
		} else {
			this.setState((prevState) => ({
				cardData: { ...prevState.cardData, [e.target.name]: e.target.value },
			}));
		}
	};

	render() {
		const inputData = [
			{ placeholder: "Card Number", name: "cardNum", type: "text" },
			{ placeholder: "Card Holder's Name", name: "cardHolder", type: "text" },
			{ placeholder: "Expiry Date (MM/YY)", name: "expiry", type: "text" },
			{ placeholder: "Security Code", name: "cvc", type: "text" },
		];

		return (
			<div>
				<h1>Add New Card</h1>
				<form>
					{inputData.length
						? inputData.map((item) => (
								<InputBase
									key={item.name}
									placeholder={item.placeholder}
									name={item.name}
									type={item.type}
									value={this.state.cardData && this.state.cardData[item.name]}
									onChange={this.handleInputData}
									autoComplete="off"
									maxLength={this.state.maxLength}
									onBlur={this.handleBlur}
								/>
						  ))
						: null}
					<div className="btn-wrapper">
						<InputBase type="submit" value="Add Card" />
					</div>
				</form>
			</div>
		);
	}
}

export default Form;
