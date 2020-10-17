import React from 'react';

export default props => {

	const smallUrl = `https://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;

	const bigUrl = `https://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;

	return (
		<div style={{display: 'flex', justifyContent: 'center', padding: '50px 0'}}>
			<button onClick={() => props.onSelect(smallUrl)} className="btn btn-success">32 элемента</button>
			<button onClick={() => props.onSelect(bigUrl)} className="btn btn-danger">1000 элементов</button>
		</div>
	)
}
