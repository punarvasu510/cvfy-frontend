import React, {PropTypes} from 'react';
import RepoCard from '../stateless/cards';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import toastr from 'toastr';

toastr.options.closeButton = true;

class InputComponentsList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showDockerModalState: false,
      inputFieldName: '',
      inputTarget: ''
    };
    this.socket = props.socket;
    this.toggleDockerModalShow = this.toggleDockerModalShow.bind(this);
    this.updateInputName = this.updateInputName.bind(this);
    this.updateInputTarget = this.updateInputTarget.bind(this);
  }

  componentWillMount() {
  }

  toggleDockerModalShow() {
    this.setState({showDockerModalState: !this.state.showDockerModalState});
  }

  updateInputName(event) {
    this.setState({inputFieldName: event.target.value});
  }

  updateInputTarget(event) {
    this.setState({inputTarget: event.target.value});
  }

  render() {
    const action = [
      <FlatButton
        label="OK"
        key="1"
        primary
        keyboardFocused
        onTouchTap={this.toggleDockerModalShow}
      />
    ];

    return (
      <div>
        <RepoCard
          header={'Input Form'}
          key={1}
          heading="Props"
          accessType={this.state.inputFieldName || "Type: File Upload - Name: None"}
          Language={this.state.inputTarget || "Target: None"}
          button_label="Modify"
          onDeployClick={() => this.toggleDockerModalShow()}/>
        <Dialog
          title="Modify Props"
          actions={action}
          modal
          open={this.state.showDockerModalState}
          onRequestClose={this.toggleDockerModalShow}>
          <input type="file"
                 name={this.state.inputFieldName} /> ==> &nbsp;&nbsp;
          <TextField
            hintText="Name of the file upload field"
            type="text"
            value={this.state.inputFieldName}
            onChange={this.updateInputName} /><br />
          <TextField
            hintText="Url of backend code"
            type="text"
            value={this.state.inputTarget}
            onChange={this.updateInputTarget} /><br />
        </Dialog>
      </div>);
  }
}

InputComponentsList.propTypes = {
  socket: PropTypes.object.isRequired
};

export default InputComponentsList;