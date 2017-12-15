import React, { Component } from 'react';


class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
	}
  handleSubmit(e){
		e.preventDefault();
    let text = this.state.item;
    if(text.length > 0 && text.trim()){
      this.props.onAddClick({ text: text.trim(), isComplete: false });
  		this.setState({item: ''});
    }

		return;
	}
	onChange(e){
		this.setState({
			item: e.target.value
		});
	}
  render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="field has-addons">
          <div className="control is-expanded">
            <input name="todoInput" className="input is-large" type='text' ref='item' onChange={this.onChange} value={this.state.item}/>
          </div>
          <div className="control">
            <input className="button is-info is-large" type='submit' value='Add'/>

          </div>
        </div>
			</form>
		);
	}
};

export default TodoForm;
