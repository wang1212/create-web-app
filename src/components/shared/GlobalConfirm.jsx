/*! Global confirm Component */

import React from 'react';
import { connect } from 'react-redux';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { set_confirms } from 'reduxs/Global.js';


type Props = {
	confirms: Array<Object>,
	set_confirms: Function
};

/**
 * Global Confirm Component
 *
 * @class Confirm
 * @extends {React.Component<Props>}
 */
class Confirm extends React.Component<Props> {

	constructor(props) {
		super(props);

		this.confirm = this.confirm.bind(this);
		this.cancel = this.cancel.bind(this);
	}

	confirm() {
		const { confirms } = this.props;

		confirms[0].y && confirms[0].y();
		this.props.set_confirms(confirms.slice(1));
	}

	cancel() {
		const { confirms } = this.props;

		confirms[0].n && confirms[0].n();
		this.props.set_confirms(confirms.slice(1));
	}

	render() {
		const { confirms } = this.props;

		if (!confirms.length) {
			return '';
		}

		return (
			<Modal isOpen={true} toggle={this.cancel} className="" backdrop="static" centered>
				<ModalHeader toggle={this.cancel}>
					{confirms[0].title}
				</ModalHeader>
				<ModalBody>
					{confirms[0].content}
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={this.confirm} className="mr-2">确认</Button>
					<Button color="secondary" onClick={this.cancel}>取消</Button>
				</ModalFooter>
			</Modal>
		);
	}

}


// Redux
const mapStateToProps: Function = state => ({
	confirms: state.Global.confirms
});

const mapDispatchToProps: Function = dispatch => ({
	set_confirms: confirms => dispatch(set_confirms(confirms))
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);