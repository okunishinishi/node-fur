/**
 * Graphic for banner.
 * @augments Graphic
 * @memberof module:fur/lib/drawing/graphics
 * @constructor BannerGraphic
 */

"use strict";

var Graphic = require('./graphic'),
    h = require('./_helper'),
    mixins = require('../../mixins'),
    styleWithFont = require('../../styling/style_with_font');


module.exports = Graphic.define(
    /** @lends BannerGraphic.prototype */
    {
        toSvgData: function () {
            var s = this,
                data = Graphic.prototype.toSvgData.apply(s, arguments);
            var width = s.size().width,
                height = s.size().height;
            var color = s.color();
            var text = s.text() || s.name();

            var reversed = true;
            data.style = [
                styleWithFont(s.font())
            ];
            data.g = [
                {
                    //Background
                    rect: h.bgRect(width, height, {
                        fill: reversed ? color : 'white'
                    })
                },
                {
                    text: h.centerText(width / 2, height / 2, text, {
                        fill: reversed ? 'white' : color,
                        'font-size': height * 0.75
                    })
                }
            ];
            return data;
        }
    },
    [
        mixins.colorAttrMix,
        mixins.textAttrMix,
        mixins.styleAttrMix,
        mixins.fontAttrMix,
    ]
);