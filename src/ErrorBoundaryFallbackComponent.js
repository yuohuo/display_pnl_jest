/** @flow */

import React from 'react';

type Props = {
  componentStack: string,
  error: Error,
};

const toTitle = (error: Error, componentStack: string): string => {
  return `${error.toString()}\n\nThis is located at:${componentStack}`;
};

const ErrorBoundaryFallbackComponent = ({ componentStack, error }: Props) => (
    <table className="center">
          <tbody>
            <tr className="row_order">
              <td>Message</td>
            </tr>
            <tr className="row_name">
              <td>{toTitle(error, componentStack)}</td>
            </tr>
          </tbody>
    </table>
);

const style = {
  height: '100%',
  maxHeight: '100vh',
  width: '100%',
  maxWidth: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: '#C00',
  color: '#FFF',
  boxSizing: 'border-box',
  cursor: 'help',
};

const svgStyle = {
  fill: 'currentColor',
  flex: '1 1 auto',
};

export default ErrorBoundaryFallbackComponent;