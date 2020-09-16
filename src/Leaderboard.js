import React from "react";
import "./styles.css";


class Leaderboard extends React.Component {
	render() {
		var data = this.props.data || [],
			rows1 = [];
		 rows1 = new Array(data.length > 10 ? 10 : data.length).fill(0).map((z, i) => {
			var id = data[i]._id,
				un = data[i].name,
				en = data[i].rating,
				oc = () => {
					window.open('http://www.rewards1.com/forums-profile.php?user_id=' + id, '_blank')
				};
			return (
				<li key={i} onClick={oc}>
					<mark>{un} </mark>
					<small>{en} </small>
				</li>
			);
		});
		return (
			<div className='leaderboard'>
				<h1>{this.props.title || 'Leaderboard WiE Unravel'}</h1>
				<ol>{rows1}</ol>
			</div>
		)
	}
}

export default Leaderboard