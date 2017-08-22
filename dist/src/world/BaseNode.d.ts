import { Geometry, NodeTransformation3D, WorldElement } from "..";
export declare class BaseNode extends WorldElement {
    name: string;
    private parentNode;
    geometry: Geometry | undefined;
    transformation: NodeTransformation3D | undefined;
    stickToParent: boolean | undefined;
    childs: BaseNode[];
    constructor(name: string, parentNode?: BaseNode | undefined, geometry?: Geometry | undefined, transformation?: NodeTransformation3D | undefined, stickToParent?: boolean | undefined);
    toString(): string;
    attachChild(childNode: BaseNode): void;
}
