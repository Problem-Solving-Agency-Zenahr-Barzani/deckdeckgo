/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface DeckgoDeck {
    'blockSlide': (block: boolean) => Promise<void>;
    'cloneBackground': boolean;
    'doPrint': () => Promise<void>;
    'embedded': boolean;
    'getActiveIndex': () => Promise<number>;
    'getLength': () => Promise<number>;
    'initSlideSize': () => Promise<void>;
    'isBeginning': () => Promise<boolean>;
    'isEnd': () => Promise<boolean>;
    'isMobile': () => Promise<boolean>;
    'keyboard': boolean;
    'pager': boolean;
    'pagerPercentage': boolean;
    'slideNext': (slideAnimation?: boolean, emitEvent?: boolean) => Promise<void>;
    'slidePrev': (slideAnimation?: boolean, emitEvent?: boolean) => Promise<void>;
    'slideTo': (index: number, speed?: number, emitEvent?: boolean) => Promise<void>;
    'toggleFullScreen': () => Promise<void>;
  }
  interface DeckgoDeckAttributes extends StencilHTMLAttributes {
    'cloneBackground'?: boolean;
    'embedded'?: boolean;
    'keyboard'?: boolean;
    'onSlideDrag'?: (event: CustomEvent<number>) => void;
    'onSlideNextDidChange'?: (event: CustomEvent<number>) => void;
    'onSlidePrevDidChange'?: (event: CustomEvent<number>) => void;
    'onSlideToChange'?: (event: CustomEvent<number>) => void;
    'onSlideWillChange'?: (event: CustomEvent<number>) => void;
    'onSlidesDidLoad'?: (event: CustomEvent) => void;
    'pager'?: boolean;
    'pagerPercentage'?: boolean;
  }

  interface DeckgoGif {
    'alt': string;
    'fullscreen': boolean;
    'lazyLoadContent': () => Promise<void>;
    'src': string;
  }
  interface DeckgoGifAttributes extends StencilHTMLAttributes {
    'alt'?: string;
    'fullscreen'?: boolean;
    'src'?: string;
  }

  interface DeckgoSocial {
    'fullUrl': string;
    'github': string;
    'lazyLoadContent': () => Promise<void>;
    'linkedin': string;
    'medium': string;
    'twitter': string;
  }
  interface DeckgoSocialAttributes extends StencilHTMLAttributes {
    'fullUrl'?: string;
    'github'?: string;
    'linkedin'?: string;
    'medium'?: string;
    'twitter'?: string;
  }

  interface DeckgoYoutube {
    'frameTitle': string;
    'height': number;
    'lazyLoadContent': () => Promise<void>;
    'pause': () => Promise<void>;
    'play': () => Promise<void>;
    'src': string;
    'updateIFrame': (width: number, height: number) => Promise<void>;
    'width': number;
  }
  interface DeckgoYoutubeAttributes extends StencilHTMLAttributes {
    'frameTitle'?: string;
    'height'?: number;
    'src'?: string;
    'width'?: number;
  }

  interface DeckgoPager {
    'activeIndex': number;
    'length': number;
    'percentage': boolean;
  }
  interface DeckgoPagerAttributes extends StencilHTMLAttributes {
    'activeIndex'?: number;
    'length'?: number;
    'percentage'?: boolean;
  }

  interface DeckgoSlideAuthor {
    'afterSwipe': () => Promise<void>;
    'beforeSwipe': (_enter: boolean) => Promise<boolean>;
    'imgAlt': string;
    'imgSrc': string;
    'lazyLoadContent': () => Promise<void>;
  }
  interface DeckgoSlideAuthorAttributes extends StencilHTMLAttributes {
    'imgAlt'?: string;
    'imgSrc'?: string;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
  }

  interface DeckgoSlideChart {
    'afterSwipe': () => Promise<void>;
    'area': boolean;
    'beforeSwipe': (_enter: boolean) => Promise<boolean>;
    'datePattern': string;
    'grid': boolean;
    'height': number;
    'innerRadius': number;
    'lazyLoadContent': () => Promise<void>;
    'marginBottom': number;
    'marginLeft': number;
    'marginRight': number;
    'marginTop': number;
    'range': string[];
    'separator': string;
    'smooth': boolean;
    'src': string;
    'ticks': number;
    'type': string;
    'width': number;
    'yAxisDomain': string;
  }
  interface DeckgoSlideChartAttributes extends StencilHTMLAttributes {
    'area'?: boolean;
    'datePattern'?: string;
    'grid'?: boolean;
    'height'?: number;
    'innerRadius'?: number;
    'marginBottom'?: number;
    'marginLeft'?: number;
    'marginRight'?: number;
    'marginTop'?: number;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'range'?: string[];
    'separator'?: string;
    'smooth'?: boolean;
    'src'?: string;
    'ticks'?: number;
    'type'?: string;
    'width'?: number;
    'yAxisDomain'?: string;
  }

  interface DeckgoSlideCode {
    'afterSwipe': () => Promise<void>;
    'anchor': string;
    'anchorZoom': string;
    'beforeSwipe': (_enter: boolean) => Promise<boolean>;
    'hideAnchor': boolean;
    'language': string;
    'lazyLoadContent': () => Promise<void>;
    'src': string;
  }
  interface DeckgoSlideCodeAttributes extends StencilHTMLAttributes {
    'anchor'?: string;
    'anchorZoom'?: string;
    'hideAnchor'?: boolean;
    'language'?: string;
    'onScrolling'?: (event: CustomEvent<boolean>) => void;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'src'?: string;
  }

  interface DeckgoSlideContent {
    'afterSwipe': () => Promise<void>;
    'beforeSwipe': (enter: boolean) => Promise<boolean>;
    'lazyLoadContent': () => Promise<void>;
    'reveal': boolean;
    'revealShowFirst': boolean;
  }
  interface DeckgoSlideContentAttributes extends StencilHTMLAttributes {
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'reveal'?: boolean;
    'revealShowFirst'?: boolean;
  }

  interface DeckgoSlideGif {
    'afterSwipe': () => Promise<void>;
    'alt': string;
    'beforeSwipe': (_enter: boolean) => Promise<boolean>;
    'fullscreen': boolean;
    'lazyLoadContent': () => Promise<void>;
    'src': string;
  }
  interface DeckgoSlideGifAttributes extends StencilHTMLAttributes {
    'alt'?: string;
    'fullscreen'?: boolean;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'src'?: string;
  }

  interface DeckgoSlideQrcode {
    'afterSwipe': () => Promise<void>;
    'beforeSwipe': (_enter: boolean) => Promise<boolean>;
    'content': string;
    'lazyLoadContent': () => Promise<void>;
  }
  interface DeckgoSlideQrcodeAttributes extends StencilHTMLAttributes {
    'content'?: string;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
  }

  interface DeckgoSlideSplit {
    'afterSwipe': () => Promise<void>;
    'beforeSwipe': (enter: boolean) => Promise<boolean>;
    'lazyLoadContent': () => Promise<void>;
    'reveal': boolean;
    'revealShowFirst': boolean;
  }
  interface DeckgoSlideSplitAttributes extends StencilHTMLAttributes {
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'reveal'?: boolean;
    'revealShowFirst'?: boolean;
  }

  interface DeckgoSlideTitle {
    'afterSwipe': () => Promise<void>;
    'beforeSwipe': (enter: boolean) => Promise<boolean>;
    'lazyLoadContent': () => Promise<void>;
    'reveal': boolean;
    'revealShowFirst': boolean;
  }
  interface DeckgoSlideTitleAttributes extends StencilHTMLAttributes {
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'reveal'?: boolean;
    'revealShowFirst'?: boolean;
  }

  interface DeckgoSlideYoutube {
    'afterSwipe': () => Promise<void>;
    'beforeSwipe': (_enter: boolean) => Promise<boolean>;
    'height': number;
    'lazyLoadContent': () => Promise<void>;
    'pause': () => Promise<void>;
    'play': () => Promise<void>;
    'src': string;
    'toggle': () => Promise<void>;
    'width': number;
  }
  interface DeckgoSlideYoutubeAttributes extends StencilHTMLAttributes {
    'height'?: number;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'src'?: string;
    'width'?: number;
  }
}

declare global {
  interface StencilElementInterfaces {
    'DeckgoDeck': Components.DeckgoDeck;
    'DeckgoGif': Components.DeckgoGif;
    'DeckgoSocial': Components.DeckgoSocial;
    'DeckgoYoutube': Components.DeckgoYoutube;
    'DeckgoPager': Components.DeckgoPager;
    'DeckgoSlideAuthor': Components.DeckgoSlideAuthor;
    'DeckgoSlideChart': Components.DeckgoSlideChart;
    'DeckgoSlideCode': Components.DeckgoSlideCode;
    'DeckgoSlideContent': Components.DeckgoSlideContent;
    'DeckgoSlideGif': Components.DeckgoSlideGif;
    'DeckgoSlideQrcode': Components.DeckgoSlideQrcode;
    'DeckgoSlideSplit': Components.DeckgoSlideSplit;
    'DeckgoSlideTitle': Components.DeckgoSlideTitle;
    'DeckgoSlideYoutube': Components.DeckgoSlideYoutube;
  }

  interface StencilIntrinsicElements {
    'deckgo-deck': Components.DeckgoDeckAttributes;
    'deckgo-gif': Components.DeckgoGifAttributes;
    'deckgo-social': Components.DeckgoSocialAttributes;
    'deckgo-youtube': Components.DeckgoYoutubeAttributes;
    'deckgo-pager': Components.DeckgoPagerAttributes;
    'deckgo-slide-author': Components.DeckgoSlideAuthorAttributes;
    'deckgo-slide-chart': Components.DeckgoSlideChartAttributes;
    'deckgo-slide-code': Components.DeckgoSlideCodeAttributes;
    'deckgo-slide-content': Components.DeckgoSlideContentAttributes;
    'deckgo-slide-gif': Components.DeckgoSlideGifAttributes;
    'deckgo-slide-qrcode': Components.DeckgoSlideQrcodeAttributes;
    'deckgo-slide-split': Components.DeckgoSlideSplitAttributes;
    'deckgo-slide-title': Components.DeckgoSlideTitleAttributes;
    'deckgo-slide-youtube': Components.DeckgoSlideYoutubeAttributes;
  }


  interface HTMLDeckgoDeckElement extends Components.DeckgoDeck, HTMLStencilElement {}
  var HTMLDeckgoDeckElement: {
    prototype: HTMLDeckgoDeckElement;
    new (): HTMLDeckgoDeckElement;
  };

  interface HTMLDeckgoGifElement extends Components.DeckgoGif, HTMLStencilElement {}
  var HTMLDeckgoGifElement: {
    prototype: HTMLDeckgoGifElement;
    new (): HTMLDeckgoGifElement;
  };

  interface HTMLDeckgoSocialElement extends Components.DeckgoSocial, HTMLStencilElement {}
  var HTMLDeckgoSocialElement: {
    prototype: HTMLDeckgoSocialElement;
    new (): HTMLDeckgoSocialElement;
  };

  interface HTMLDeckgoYoutubeElement extends Components.DeckgoYoutube, HTMLStencilElement {}
  var HTMLDeckgoYoutubeElement: {
    prototype: HTMLDeckgoYoutubeElement;
    new (): HTMLDeckgoYoutubeElement;
  };

  interface HTMLDeckgoPagerElement extends Components.DeckgoPager, HTMLStencilElement {}
  var HTMLDeckgoPagerElement: {
    prototype: HTMLDeckgoPagerElement;
    new (): HTMLDeckgoPagerElement;
  };

  interface HTMLDeckgoSlideAuthorElement extends Components.DeckgoSlideAuthor, HTMLStencilElement {}
  var HTMLDeckgoSlideAuthorElement: {
    prototype: HTMLDeckgoSlideAuthorElement;
    new (): HTMLDeckgoSlideAuthorElement;
  };

  interface HTMLDeckgoSlideChartElement extends Components.DeckgoSlideChart, HTMLStencilElement {}
  var HTMLDeckgoSlideChartElement: {
    prototype: HTMLDeckgoSlideChartElement;
    new (): HTMLDeckgoSlideChartElement;
  };

  interface HTMLDeckgoSlideCodeElement extends Components.DeckgoSlideCode, HTMLStencilElement {}
  var HTMLDeckgoSlideCodeElement: {
    prototype: HTMLDeckgoSlideCodeElement;
    new (): HTMLDeckgoSlideCodeElement;
  };

  interface HTMLDeckgoSlideContentElement extends Components.DeckgoSlideContent, HTMLStencilElement {}
  var HTMLDeckgoSlideContentElement: {
    prototype: HTMLDeckgoSlideContentElement;
    new (): HTMLDeckgoSlideContentElement;
  };

  interface HTMLDeckgoSlideGifElement extends Components.DeckgoSlideGif, HTMLStencilElement {}
  var HTMLDeckgoSlideGifElement: {
    prototype: HTMLDeckgoSlideGifElement;
    new (): HTMLDeckgoSlideGifElement;
  };

  interface HTMLDeckgoSlideQrcodeElement extends Components.DeckgoSlideQrcode, HTMLStencilElement {}
  var HTMLDeckgoSlideQrcodeElement: {
    prototype: HTMLDeckgoSlideQrcodeElement;
    new (): HTMLDeckgoSlideQrcodeElement;
  };

  interface HTMLDeckgoSlideSplitElement extends Components.DeckgoSlideSplit, HTMLStencilElement {}
  var HTMLDeckgoSlideSplitElement: {
    prototype: HTMLDeckgoSlideSplitElement;
    new (): HTMLDeckgoSlideSplitElement;
  };

  interface HTMLDeckgoSlideTitleElement extends Components.DeckgoSlideTitle, HTMLStencilElement {}
  var HTMLDeckgoSlideTitleElement: {
    prototype: HTMLDeckgoSlideTitleElement;
    new (): HTMLDeckgoSlideTitleElement;
  };

  interface HTMLDeckgoSlideYoutubeElement extends Components.DeckgoSlideYoutube, HTMLStencilElement {}
  var HTMLDeckgoSlideYoutubeElement: {
    prototype: HTMLDeckgoSlideYoutubeElement;
    new (): HTMLDeckgoSlideYoutubeElement;
  };

  interface HTMLElementTagNameMap {
    'deckgo-deck': HTMLDeckgoDeckElement
    'deckgo-gif': HTMLDeckgoGifElement
    'deckgo-social': HTMLDeckgoSocialElement
    'deckgo-youtube': HTMLDeckgoYoutubeElement
    'deckgo-pager': HTMLDeckgoPagerElement
    'deckgo-slide-author': HTMLDeckgoSlideAuthorElement
    'deckgo-slide-chart': HTMLDeckgoSlideChartElement
    'deckgo-slide-code': HTMLDeckgoSlideCodeElement
    'deckgo-slide-content': HTMLDeckgoSlideContentElement
    'deckgo-slide-gif': HTMLDeckgoSlideGifElement
    'deckgo-slide-qrcode': HTMLDeckgoSlideQrcodeElement
    'deckgo-slide-split': HTMLDeckgoSlideSplitElement
    'deckgo-slide-title': HTMLDeckgoSlideTitleElement
    'deckgo-slide-youtube': HTMLDeckgoSlideYoutubeElement
  }

  interface ElementTagNameMap {
    'deckgo-deck': HTMLDeckgoDeckElement;
    'deckgo-gif': HTMLDeckgoGifElement;
    'deckgo-social': HTMLDeckgoSocialElement;
    'deckgo-youtube': HTMLDeckgoYoutubeElement;
    'deckgo-pager': HTMLDeckgoPagerElement;
    'deckgo-slide-author': HTMLDeckgoSlideAuthorElement;
    'deckgo-slide-chart': HTMLDeckgoSlideChartElement;
    'deckgo-slide-code': HTMLDeckgoSlideCodeElement;
    'deckgo-slide-content': HTMLDeckgoSlideContentElement;
    'deckgo-slide-gif': HTMLDeckgoSlideGifElement;
    'deckgo-slide-qrcode': HTMLDeckgoSlideQrcodeElement;
    'deckgo-slide-split': HTMLDeckgoSlideSplitElement;
    'deckgo-slide-title': HTMLDeckgoSlideTitleElement;
    'deckgo-slide-youtube': HTMLDeckgoSlideYoutubeElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
