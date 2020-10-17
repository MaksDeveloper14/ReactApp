import React from 'react';


const btn = {
	marginBottom: '10px'
}

export default props => {
	return (<input type="button" style={btn} onClick={()=>props.add()} value="Добавить" />)
}