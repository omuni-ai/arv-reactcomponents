class Attachs {
  constructor(params) {
    let selector = document.querySelector(params);
    if (selector.length === undefined) {
      selector = [selector];
    }
    let i = 0;
    this.length = selector.length;
    this.version = '0.0.1';
    if (typeof params === 'string') {
      for (; i < this.length; i += 1) {
        this[i] = selector[i];
      }
    } else {
      this[0] = params;
      this.length = 1;
    }

    this.addClass = this.addClass.bind(this);
  }

  attr(attrName) {
    const elem = this[0];
    return elem.getAttribute(attrName);
  }

  hasClass(className) {
    const elem = this[0];
    if (
      elem.getAttribute('class') !== null &&
      elem.getAttribute('class').split(' ').indexOf(className) >= 0
    ) {
      return true;
    }

    return false;
  }

  addClass(className) {
    let len = this.length;
    while (len !== 0) {
      len -= 1;
      const elem = this[len];
      if (elem.getAttribute('class') === null || elem.className.trim.length === 0) {
        elem.className = className;
      } else if (elem.getAttribute('class').split(' ').indexOf(className) <= 0) {
        elem.className = `${elem.className} ${className}`;
      }
    }
  }

  removeClass(className) {
    const r = new RegExp(`(?:^| )(${className})(?:| )`);
    let len = this.length;
    while (len !== 0) {
      len -= 1;
      const elem = this[len];
      elem.className = elem.className.replace(r, '').replace(/\s{2,}/g, ' ');
    }
  }
}

const DomSelector = (params) => {
  const AttachsConstructor = new Attachs(params);
  return AttachsConstructor;
};

DomSelector.fn = Attachs.prototype;

export default DomSelector;
