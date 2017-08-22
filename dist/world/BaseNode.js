"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class BaseNode extends __1.WorldElement {
    constructor(name, parentNode, geometry, transformation, stickToParent) {
        super();
        this.name = name;
        this.parentNode = parentNode;
        this.geometry = geometry;
        this.transformation = transformation;
        this.stickToParent = stickToParent;
        this.childs = Array();
        if (this.parentNode != undefined)
            this.parentNode.attachChild(this);
    }
    toString() {
        return "Node(" + this.name + ", stickToParent=" + this.stickToParent + ")";
    }
    attachChild(childNode) {
        this.childs.push(childNode);
        childNode.parentNode = this;
    }
}
exports.BaseNode = BaseNode;
//# sourceMappingURL=BaseNode.js.map