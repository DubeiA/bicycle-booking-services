import css from './typography.module.css';

import { createElement } from 'react';
import classNames from 'classnames';

export const Typography = props => {
  const { element, className = '', bold, children } = props;

  return createElement(
    element,
    {
      className: classNames(className, css[bold]),
    },
    children
  );
};
