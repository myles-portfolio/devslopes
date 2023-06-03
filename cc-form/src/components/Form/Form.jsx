/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import { InputBase } from "../InputBase/InputBase";
import "./Form.css";

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
			maxLength: 19,
		};
	}

	handleInputData = (e) => {
		this.setState((prevState) => ({
			cardData: { ...prevState.cardData, [e.target.name]: e.target.value },
		}));
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
