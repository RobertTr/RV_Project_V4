/* eslint-disable import/no-extraneous-dependencies */

import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const dom = new JSDOM();

global.window = dom.window;
global.document = dom.window.document;

global.Headers = jest.fn();

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();
