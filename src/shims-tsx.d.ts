import Vue, { VNode } from 'vue'

declare const BASE: string;

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
  namespace jest {
    interface Matchers<R> {
      toMatchImageSnapshot(): R
    }
  }
}
