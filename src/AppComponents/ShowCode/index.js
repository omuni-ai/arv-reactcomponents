import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Toastr } from "../../components";

class ShowCode extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showCodeIsOpen: false,
      code: null,
      fetchUrl: `http://localhost:3000/api/getComponentData`,
      data: { componentFilePath: `${props.fileName}` },
    };

    this.showCodeMsg = this.showCodeMsg.bind(this);
  }

  fetchData() {
    if (!this.state.code) {
      fetch(this.state.fetchUrl, {
        method: "POST",
        body: JSON.stringify(this.state.data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(response => response.text())
        .then(text => {
          this.setState({
            code: text,
          });
        });
    }
  }

  showCodeMsg(bool) {
    this.setState({
      showCodeIsOpen: bool,
    });
    Toastr.clearAll();
  }

  render() {
    const { code } = this.state;
    const { showCodeIsOpen } = this.state;
    return (
      <div className="nw-showcode-container">
        <Button
          className="nwc-btn-sm nwc-btn-notification"
          onClick={() => {
            this.showCodeMsg(true);
            this.fetchData();
          }}
        >
          Show Code
        </Button>
        <Modal
          className="nw-modal"
          isOpen={showCodeIsOpen}
          onClose={() => {
            this.showCodeMsg(false);
          }}
        >
          <pre>
            <code>
              <div>{`${code}`}</div>
            </code>
          </pre>
        </Modal>
      </div>
    );
  }
}

ShowCode.propTypes = {
  fileName: PropTypes.string.isRequired,
};

export default ShowCode;
