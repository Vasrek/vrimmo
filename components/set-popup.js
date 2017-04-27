/* global AFRAME */

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */
AFRAME.registerComponent('set-popup', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'selector'},
    opa: {type: 'number'},
    width: {type: 'number'},
    height: {type: 'number'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    el.addEventListener(data.on, function () {
        // Set image.
        console.log("lol");
        data.target.setAttribute('material', 'src', data.src, data.opa, data.width, data.height);
    });
  }});