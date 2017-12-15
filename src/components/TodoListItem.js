import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      isComplete: this.props.isComplete
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.showDelete = this.showDelete.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
	}
  componentWillReceiveProps(nextProps){
      if(nextProps.text !== this.props.text){
          this.setState({text:nextProps.text});
      }
      if(nextProps.isComplete !== this.props.isComplete){
          this.setState({isComplete:nextProps.isComplete});
      }
  }
	handleDelete(){
		this.props.onDeleteItem(this.props.id);

	}
  handleEdit(e){
    this.setState({
			text: e.target.value
		}, () => {
      this.props.onEditItem({
        key: this.props.id,
        val: this.state.text
      });
    });
	}
  handleCheckbox(e){
    if(e.target.checked){
      this.props.onEditItem({
        key: this.props.id,
        val: this.state.text,
        checked: true
      });
    }else{
      // this.setState({
  		// 	isComplete: false
  		// }, () => {
        this.props.onEditItem({
          key: this.props.id,
          val: this.state.text,
          checked: false
        });
      // });
    }
	}
  showDelete() {
    let removeBtn = this.deleteButton;
    removeBtn.classList.remove("is-invisible");
  }
  hideDelete() {
    let removeBtn = this.deleteButton;
    removeBtn.className += " is-invisible";
  }


  componentWillMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  componentDidMount() {
     this.textedit.setAttribute("contentEditable", true);
  }


  handleClick = e => {
    if(!ReactDOM.findDOMNode(this).contains(e.target) && e.target.type !== 'submit') {
      this.hideDelete()
    };
  }


  render() {
    return (
      <li>
        <div className="field is-grouped">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" onChange={this.handleCheckbox} checked={this.state.isComplete ? 'checked' : ''}/>
            </label>
          </div>
          <div className={"control is-expanded " + (this.state.isComplete ? 'is-scratched' : '') }>
            <p  aria-multiline="true" className="todo-item" onChange={this.handleEdit} onClick={this.showDelete} ref={(r) => { this.textedit = r; }} >{this.state.text}</p>
          </div>
          <div className="control">
            <a className="delete is-pulled-right is-invisible" onClick={this.handleDelete} ref={(input) => {this.deleteButton = input }}  > </a>
          </div>
        </div>

      </li>
    );
  }
};

export default TodoListItem;
