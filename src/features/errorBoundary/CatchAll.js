import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FadeAnim, Button, Row, Col } from 'styledComponents';
import { PAGES } from '../../pages';

export default class CatchAll extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  // eslint-disable-next-line no-unused-vars
  componentDidCatch(error) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <FadeAnim>
          <Link
            to={PAGES.ROOT}
            onClick={() => this.setState({ hasError: false })}
          >
            <Button type="button" style={{ maxWidth: 150, marginBottom: 20 }}>
              {'<-'}
            </Button>
          </Link>
          <Row>
            <Col style={{ textalign: 'center' }}>
              <h1>Oops! Something went wrong.</h1>
            </Col>
          </Row>
        </FadeAnim>
      );
    }

    return children;
  }
}

CatchAll.propTypes = {
  children: PropTypes.node.isRequired,
};
