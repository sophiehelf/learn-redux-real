import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class Booklist extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
					key={book.title} 
					onClick={() => this.props.selectBook(book)}
					className='list-group-item'>
					{book.title}</li>			
			)
		})
	}

	render() {
		return (
			<ul className='list-grou col-sm-4'>
			{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	// whatever is returned shows up as book lists' props
	return {
		books: state.books
	}
}

// anything returned from this function will end up as props in the BookList container
function mapDispatchToProps(dispatch) {
	// when selectBook is called, result should be passed to all of our reducers
	return bindActionCreators( { selectBook: selectBook}, dispatch)
}

// promote BookList to a container. Needs to know abt this new dispatch method
// selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)