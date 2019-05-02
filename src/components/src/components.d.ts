/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  role,
} from './components/button/button.role';
import {
  cols,
} from './components/column/column.cols';
import {
  gutter,
} from './components/grid/grid.gutter';
import {
  level,
} from './components/title/title.level';


export namespace Components {

  interface QButton {
    'disabled': boolean;
    'ghost': boolean;
    'htmlType': boolean;
    'role': role;
  }
  interface QButtonAttributes extends StencilHTMLAttributes {
    'disabled'?: boolean;
    'ghost'?: boolean;
    'htmlType'?: boolean;
    'role'?: role;
  }

  interface QCaption {}
  interface QCaptionAttributes extends StencilHTMLAttributes {}

  interface QCheckbox {
    'checked': boolean;
    'disabled': boolean;
    'intermediate': boolean;
    'name': string;
    'tabindex': number;
    'value': string | number;
  }
  interface QCheckboxAttributes extends StencilHTMLAttributes {
    'checked'?: boolean;
    'disabled'?: boolean;
    'intermediate'?: boolean;
    'name'?: string;
    'onChanged'?: (event: CustomEvent<string | number | boolean>) => void;
    'tabindex'?: number;
    'value'?: string | number;
  }

  interface QGridColumn {
    /**
    * Defines column pulling
    */
    'pull': cols | undefined;
    /**
    * Defines column pushing
    */
    'push': cols | undefined;
    /**
    * Defines general column size
    */
    'size': cols | undefined;
    /**
    * Defines large column size
    */
    'sizeLg': cols | undefined;
    /**
    * Defines medium column size
    */
    'sizeMd': cols | undefined;
    /**
    * Defines small column size
    */
    'sizeSm': cols | undefined;
    /**
    * Defines extra small column size
    */
    'sizeXs': cols | undefined;
  }
  interface QGridColumnAttributes extends StencilHTMLAttributes {
    /**
    * Defines column pulling
    */
    'pull'?: cols | undefined;
    /**
    * Defines column pushing
    */
    'push'?: cols | undefined;
    /**
    * Defines general column size
    */
    'size'?: cols | undefined;
    /**
    * Defines large column size
    */
    'sizeLg'?: cols | undefined;
    /**
    * Defines medium column size
    */
    'sizeMd'?: cols | undefined;
    /**
    * Defines small column size
    */
    'sizeSm'?: cols | undefined;
    /**
    * Defines extra small column size
    */
    'sizeXs'?: cols | undefined;
  }

  interface QGrid {
    'gutter': gutter | undefined;
  }
  interface QGridAttributes extends StencilHTMLAttributes {
    'gutter'?: gutter | undefined;
  }

  interface QInput {
    'default': string;
    'name': string;
    'placeholder': string;
    'prefixes': Array<any>;
    'suffixes': Array<any>;
    'type': string;
  }
  interface QInputAttributes extends StencilHTMLAttributes {
    'default'?: string;
    'name'?: string;
    'placeholder'?: string;
    'prefixes'?: Array<any>;
    'suffixes'?: Array<any>;
    'type'?: string;
  }

  interface QLabel {}
  interface QLabelAttributes extends StencilHTMLAttributes {}

  interface QRadio {
    'checked': boolean;
    'disabled': boolean;
    'name': string;
    'tabindex': number;
    'value': string | number;
  }
  interface QRadioAttributes extends StencilHTMLAttributes {
    'checked'?: boolean;
    'disabled'?: boolean;
    'name'?: string;
    'tabindex'?: number;
    'value'?: string | number;
  }

  interface QSample {}
  interface QSampleAttributes extends StencilHTMLAttributes {}

  interface QText {}
  interface QTextAttributes extends StencilHTMLAttributes {}

  interface QTitle {
    /**
    * Defines general column size
    */
    'level': level;
    'spaceless': boolean;
  }
  interface QTitleAttributes extends StencilHTMLAttributes {
    /**
    * Defines general column size
    */
    'level'?: level;
    'spaceless'?: boolean;
  }

  interface QToggle {
    'switched': boolean;
  }
  interface QToggleAttributes extends StencilHTMLAttributes {
    'onChanged'?: (event: CustomEvent<boolean>) => void;
    'switched'?: boolean;
  }
}

declare global {
  interface StencilElementInterfaces {
    'QButton': Components.QButton;
    'QCaption': Components.QCaption;
    'QCheckbox': Components.QCheckbox;
    'QGridColumn': Components.QGridColumn;
    'QGrid': Components.QGrid;
    'QInput': Components.QInput;
    'QLabel': Components.QLabel;
    'QRadio': Components.QRadio;
    'QSample': Components.QSample;
    'QText': Components.QText;
    'QTitle': Components.QTitle;
    'QToggle': Components.QToggle;
  }

  interface StencilIntrinsicElements {
    'q-button': Components.QButtonAttributes;
    'q-caption': Components.QCaptionAttributes;
    'q-checkbox': Components.QCheckboxAttributes;
    'q-grid-column': Components.QGridColumnAttributes;
    'q-grid': Components.QGridAttributes;
    'q-input': Components.QInputAttributes;
    'q-label': Components.QLabelAttributes;
    'q-radio': Components.QRadioAttributes;
    'q-sample': Components.QSampleAttributes;
    'q-text': Components.QTextAttributes;
    'q-title': Components.QTitleAttributes;
    'q-toggle': Components.QToggleAttributes;
  }


  interface HTMLQButtonElement extends Components.QButton, HTMLStencilElement {}
  var HTMLQButtonElement: {
    prototype: HTMLQButtonElement;
    new (): HTMLQButtonElement;
  };

  interface HTMLQCaptionElement extends Components.QCaption, HTMLStencilElement {}
  var HTMLQCaptionElement: {
    prototype: HTMLQCaptionElement;
    new (): HTMLQCaptionElement;
  };

  interface HTMLQCheckboxElement extends Components.QCheckbox, HTMLStencilElement {}
  var HTMLQCheckboxElement: {
    prototype: HTMLQCheckboxElement;
    new (): HTMLQCheckboxElement;
  };

  interface HTMLQGridColumnElement extends Components.QGridColumn, HTMLStencilElement {}
  var HTMLQGridColumnElement: {
    prototype: HTMLQGridColumnElement;
    new (): HTMLQGridColumnElement;
  };

  interface HTMLQGridElement extends Components.QGrid, HTMLStencilElement {}
  var HTMLQGridElement: {
    prototype: HTMLQGridElement;
    new (): HTMLQGridElement;
  };

  interface HTMLQInputElement extends Components.QInput, HTMLStencilElement {}
  var HTMLQInputElement: {
    prototype: HTMLQInputElement;
    new (): HTMLQInputElement;
  };

  interface HTMLQLabelElement extends Components.QLabel, HTMLStencilElement {}
  var HTMLQLabelElement: {
    prototype: HTMLQLabelElement;
    new (): HTMLQLabelElement;
  };

  interface HTMLQRadioElement extends Components.QRadio, HTMLStencilElement {}
  var HTMLQRadioElement: {
    prototype: HTMLQRadioElement;
    new (): HTMLQRadioElement;
  };

  interface HTMLQSampleElement extends Components.QSample, HTMLStencilElement {}
  var HTMLQSampleElement: {
    prototype: HTMLQSampleElement;
    new (): HTMLQSampleElement;
  };

  interface HTMLQTextElement extends Components.QText, HTMLStencilElement {}
  var HTMLQTextElement: {
    prototype: HTMLQTextElement;
    new (): HTMLQTextElement;
  };

  interface HTMLQTitleElement extends Components.QTitle, HTMLStencilElement {}
  var HTMLQTitleElement: {
    prototype: HTMLQTitleElement;
    new (): HTMLQTitleElement;
  };

  interface HTMLQToggleElement extends Components.QToggle, HTMLStencilElement {}
  var HTMLQToggleElement: {
    prototype: HTMLQToggleElement;
    new (): HTMLQToggleElement;
  };

  interface HTMLElementTagNameMap {
    'q-button': HTMLQButtonElement
    'q-caption': HTMLQCaptionElement
    'q-checkbox': HTMLQCheckboxElement
    'q-grid-column': HTMLQGridColumnElement
    'q-grid': HTMLQGridElement
    'q-input': HTMLQInputElement
    'q-label': HTMLQLabelElement
    'q-radio': HTMLQRadioElement
    'q-sample': HTMLQSampleElement
    'q-text': HTMLQTextElement
    'q-title': HTMLQTitleElement
    'q-toggle': HTMLQToggleElement
  }

  interface ElementTagNameMap {
    'q-button': HTMLQButtonElement;
    'q-caption': HTMLQCaptionElement;
    'q-checkbox': HTMLQCheckboxElement;
    'q-grid-column': HTMLQGridColumnElement;
    'q-grid': HTMLQGridElement;
    'q-input': HTMLQInputElement;
    'q-label': HTMLQLabelElement;
    'q-radio': HTMLQRadioElement;
    'q-sample': HTMLQSampleElement;
    'q-text': HTMLQTextElement;
    'q-title': HTMLQTitleElement;
    'q-toggle': HTMLQToggleElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
