import React from 'react';
import {
	View,
	Image,
	Picker,
	Text,
	StyleSheet
} from 'react-native';
import NavImage from '../components/NavImage';

const defaultState = {
	selectedOptions: 'Test'
}

const styles = {
	branTitle: {
		textAlign: 'left',
		backgroundColor: 'white',
		color: 'darkblue',
		lineHeight: 30,
		fontSize: 18,
	},
	picker: {
		height: 75,
		width: 375,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		opacity: 0.36,
		backgroundColor: '#BCC6D2'
	},
	pickerOne: {
		textAlign: 'right',
		marginRight: 20,
	},
	pickerTwo: {
		textAlign: 'right',
		marginRight: 20,
	}
}

export default class TopNavBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			// Whats currently selected in the dropdown menu
			selectedOption: defaultState
		};
  }

	render() {
		const { selectedOption } = this.state;
		const { style } = this.props;

		return (
			<View style={style.NavBar}>
				<NavImage />
				<Text style={styles.branTitle}>AIG Retirement Services</Text>
				<View
					style={styles.picker}
					selectedValue={selectedOption}
					onValueChange={(option) => this.setState({ selectedOption: option })}>
					<Text style={styles.pickerOne} label='Test'>Call</Text>
					<Text style={styles.pickerTwo} label='Another Test'>Chat</Text>
				</View>
			</View>
		)
	}
}