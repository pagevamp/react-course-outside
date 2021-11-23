import React, { ReactElement } from 'react';
import { ILayout } from 'types/app.types';

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    class?: string;
  }

  interface DetailedHTMLProps<T> {
    class?: string;
  }
}
