/* eslint-disable react/prop-types */
import "./InputBase.css";
import { CARD, CARD_ICON } from "../../constants";

export const InputBase = ({ errorMsg, error, cardType, isCard, ...props }) => (
	<label>
		{errorMsg && <div className="error">{errorMsg}</div>}
		<input className="input-root" {...props} />
		{(!error || !error.cardError) && isCard && CARD.includes(cardType) && (
			<img
				style={{
					position: "absolute",
					top: "2px",
					right: "10px",
					width: "50px",
					height: "33px",
				}}
				src={CARD_ICON[cardType]}
				alt="card"
			/>
		)}
	</label>
);
