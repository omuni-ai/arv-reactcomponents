import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter, {
  registerLanguage,
} from "react-syntax-highlighter/prism-light";
import jsx from "react-syntax-highlighter/languages/prism/jsx";
import prism from "react-syntax-highlighter/styles/prism/prism";
import { Button, Modal, Toastr } from "../../components";

registerLanguage("jsx", jsx);

const fetchUrl = `/api/getComponentData`;
class ShowCode extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showCodeIsOpen: false,
      code: null,
    };

    this.data = { componentFilePath: `${props.fileName}` };
    this.showCodeMsg = this.showCodeMsg.bind(this);
  }

  fetchData() {
    if (!this.state.code) {
      fetch(fetchUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.data),
      })
        .then(response => response.text())
        .then(text => {
          this.setState({ code: text });
        });
    }
  }

  showCodeMsg(bool) {
    this.setState({
      showCodeIsOpen: bool,
    });
    Toastr.clearAll();
    this.fetchData();
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
          {code ? (
            <SyntaxHighlighter language="javascript" style={prism}>
              {`${code}`}
            </SyntaxHighlighter>
          ) : null}
        </Modal>
      </div>
    );
  }
}

ShowCode.propTypes = {
  fileName: PropTypes.string.isRequired,
};

export default ShowCode;
