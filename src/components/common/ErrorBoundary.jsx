import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { failed: false }; }
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (this.state.failed) return <div className="empty-state" role="alert">Something went wrong while loading this page. Please refresh and try again.</div>;
    return this.props.children;
  }
}
