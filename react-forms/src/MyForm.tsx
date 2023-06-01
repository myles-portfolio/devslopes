import React from "react";

class MyForm extends React.Component {
	onSubmit = (event: { target: { [x: string]: { value: string } } }) => {
		console.log(event.target["name"].value);
	};

	render() {
		return (
			<form>
				<label>
					Name:
					<input type="text" name="name" />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default MyForm;
