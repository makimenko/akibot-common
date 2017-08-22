"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WorldElement_1 = require("./WorldElement");
var ThreeMaterialConstants;
(function (ThreeMaterialConstants) {
    ThreeMaterialConstants[ThreeMaterialConstants["THREE_NO_SHADING"] = 0] = "THREE_NO_SHADING";
    ThreeMaterialConstants[ThreeMaterialConstants["THREE_FLAT_SHADING"] = 1] = "THREE_FLAT_SHADING";
    ThreeMaterialConstants[ThreeMaterialConstants["THREE_SMOOTH_SHADING"] = 2] = "THREE_SMOOTH_SHADING";
})(ThreeMaterialConstants = exports.ThreeMaterialConstants || (exports.ThreeMaterialConstants = {}));
class Material extends WorldElement_1.WorldElement {
    constructor() {
        super(...arguments);
        this.color = "#0F0F0F";
        this.shading = ThreeMaterialConstants.THREE_FLAT_SHADING;
        this.opacity = 1;
        this.transparent = false;
        this.wireframe = false;
    }
}
exports.Material = Material;
//# sourceMappingURL=Material.js.map