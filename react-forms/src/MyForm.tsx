import React from "react";

interface MyFormState {
	value: string;
}

class MyForm extends React.Component<object, MyFormState> {
	constructor(props: object) {
		super(props);
		this.state = { value: "" };
	}

	onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		console.log(this.state.value);
		this.setState({ value: "" });
	};

	onChange = (
		event: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		event.preventDefault();
		const value = event.target.value;
		this.setState({ value: value });
	};

	render() {
		return (
			<form className="myForm" onSubmit={this.onSubmit}>
				<label>
					Name:
					<input
						type="text"
						name="name"
						value={this.state.value}
						onChange={this.onChange}
					/>
				</label>
				<label htmlFor="">Leave a Comment:</label>
				<textarea
					name=""
					id=""
					value={this.state.value}
					onChange={this.onChange}
				></textarea>
				<label htmlFor="">Choose Animal:</label>
				<select name="animals" id="animals" onChange={this.onChange}>
					<option value="dog">dog</option>
					<option value="cat">cat</option>
					<option value="snake">snake</option>
					<option value="bird">bird</option>
				</select>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default MyForm;
