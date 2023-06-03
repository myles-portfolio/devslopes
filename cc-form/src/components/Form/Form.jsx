/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import { InputBase } from "../InputBase/InputBase";
import "./Form.css";
import { OTHER_CARDS } from "../../constants";
import {
	cardExpiryValidation,
	cardHolderNameValidation,
	cardNumberValidation,
	securityCodeValidation,
} from "../../validations";

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
						cardNumberError: errorMsg,
					},
				}));
				break;
			case "cardHolder":
				errorMsg = cardHolderNameValidation(value);
				this.setState((prevState) => ({
					error: { ...prevState.error, cardHolderError: errorMsg },
				}));
				break;
			case "expiry":
				errorMsg = cardExpiryValidation(value);
				this.setState((prevState) => ({
					error: { ...prevState.error, cardExpiryError: errorMsg },
				}));
				break;
			case "cvc":
				errorMsg = securityCodeValidation(3, value);
				this.setState((prevState) => ({
					error: { ...prevState.error, cardSecCodeError: errorMsg },
				}));
				break;
			default:
				break;
		}
	};

	handleBlur = ({ target: { name, value } }) =>
		this.handleValidations(name, value);

	handleInputData = ({ target: { name, value } }) => {
		if (name === "cardNum") {
			let mask = value.split(" ").join("");
			if (mask.length) {
				mask = mask.match(new RegExp(".{1,4}", "g")).join(" ");
				this.setState((prevState) => ({
					cardData: { ...prevState.cardData, [name]: mask },
				}));
			} else {
				this.setState((prevState) => ({
					cardData: { ...prevState.cardData, [name]: "" },
				}));
			}
		} else {
			this.setState((prevState) => ({
				cardData: { ...prevState.cardData, [name]: value },
			}));
		}
	};

	checkErrorBeforeSave = () => {
		const { cardData } = this.state;
		let errorValue = {};
		let isError = false;
		Object.keys(cardData).forEach((value) => {
			if (!cardData[value].length) {
				errorValue = { ...errorValue, [`${value}Error`]: "Required" };
				isError = true;
			}
		});
		this.setState({ error: errorValue });
		return isError;
	};

	handleAddCard = (e) => {
		e.preventDefault();
		const errorCheck = this.checkErrorBeforeSave();
		if (!errorCheck) {
			this.setState({
				cardData: INIT_CARD,
				cardType: null,
			});
		}
	};

	render() {
		const { cardData, error, cardType, maxLength } = this.state;

		const inputData = [
			{
				placeholder: "Card Number",
				name: "cardNum",
				type: "text",
				error: "cardNumberError",
			},
			{
				placeholder: "Card Holder's Name",
				name: "cardHolder",
				type: "text",
				error: "cardHolderError",
			},
			{
				placeholder: "Expiry Date (MM/YY)",
				name: "expiry",
				type: "text",
				error: "cardExpiryError",
			},
			{
				placeholder: "Security Code",
				name: "cvc",
				type: "text",
				error: "cardSecCodeError",
			},
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
									value={cardData && cardData[item.name]}
									onChange={this.handleInputData}
									autoComplete="off"
									maxLength={maxLength}
									onBlur={this.handleBlur}
									isCard={item.name === "cardNum"}
									cardType={cardType}
									error={error}
									errorMsg={
										error && error[item.error] && error[item.error].length > 1
											? error[item.error]
											: null
									}
								/>
						  ))
						: null}
					<div className="btn-wrapper">
						<InputBase className="btn" type="submit" value="Add Card" />
					</div>
				</form>
			</div>
		);
	}
}

export default Form;
