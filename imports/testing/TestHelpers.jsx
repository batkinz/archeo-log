import React from 'react';
import { render } from 'react-dom';

const withDiv = function withDiv(callback) {
    const el = document.createElement('div');
    document.body.appendChild(el);
    try {
        callback(el);
    } finally {
        document.body.removeChild(el);
    }
};
export const withRenderedComponent = function withRenderedComponent(comp, props, callback) {
    withDiv((el) => {
        render(React.createElement(comp, props), el);
        callback(el);
    });
};

export function check(done, f) {
    try {
        f();
        done();
    } catch (e) {
        done(e);
    }
}
