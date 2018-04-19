import React from 'react';

class StorePicker extends React.Component{

	render(){
		
		return (
			<form className="store-selector">
			<p>Please enter Store name </p>
			<input tpye="text" required placeholder="Enter your store name"/>
			<button type="submit">Visit Store</button>
			</form>
		)
	}
}

export default StorePicker;