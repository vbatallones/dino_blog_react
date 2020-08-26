import React, { Component } from 'react';
import './App.css';
//import components
import Comment from './Comment.js';

class Dino extends Component {
	// Set an initial state in your component that contains content or body for posts.
	constructor(props) {
		super();
		this.state = {
      body: props.body,
      // add a temporary body with just empty string for now until we write something in the form.
      tempBody: ""
		};
	}

	//if you don't use arrow function you have to bind it.
	// this.handleBodyEdit = this.handleBodyEdit.bind(this)
	// handleBodyEdit = function () {
	//   console.log(this.state)
	// }

	// updating comment.
	handleBodyEdit = () => {
		// open an alert takes a value.
		let input = prompt(`What is the new body of this article?`);
		console.log(input);
		// Take the user inputted value into the alert box and use that return value to update the state of the body or content of your post.
		this.setState({ body: input });
	};
  // this is the event for form 
  handleFormEdit = e => {
    e.preventDefault()
    this.setState({ body: this.state.tempBody})
  }


	render() {
		let allComments = this.props.comment.map((c, i) => {
			return <Comment key={i} body={c} />;
		});
		console.log(allComments);
		return (
			<div className={'App'}>
				<h1>{this.props.title}</h1>
				<p>by {this.props.author}</p>
				<p>{this.state.body}</p>
				<hr />


        {/* updating comment with form. react in form don't play nicely */}
				<form onSubmit={this.handleFormEdit}>
					<h5>New body Content</h5>
					<input type="text" name="body" onChange={e => this.setState({tempBody: e.target.value})}/>
          <input type="submit"/>
				</form>
        {/* ----------------------------------- */}


				{/* //Add a button to somewhere in your page (up to you which component to add to!. 
        //This button should onClick */}
				<button onClick={this.handleBodyEdit}>
					Edit the body of this article
				</button>
				<h3>Comments:</h3>
				{allComments}
			</div>
		);
	}
}

export default Dino;

// to console log the onclick event and check if it is running
// <button onClick={() => console.log('🍑')}>Edit the body of this article</button>
