"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const common = require("..");
describe('Serialization and Deserialization', () => {
    function testSerializeDeserialize(obj) {
        var jsonText = common.SerializationUtils.jsonStringify(obj);
        var resultMessage = common.SerializationUtils.deserialize(common.SerializationUtils.jsonParse(jsonText), common);
        var jsonTextAfter = common.SerializationUtils.jsonStringify(resultMessage);
        //console.log(jsonText);
        //console.log(jsonTextAfter);
        chai_1.assert.equal(jsonText, jsonTextAfter);
    }
    it("Deserialize simple Message", function () {
        var jsonString = '{"$name":"Message"  }';
        var json = common.SerializationUtils.jsonParse(jsonString);
        var message = common.SerializationUtils.deserialize(json, common);
        chai_1.assert.equal(message.$name, common.Message.name);
    });
    it("Serialize-Deserialize OrientationRequest", function () {
        // Serialize:
        var orientationRequest = new common.OrientationRequest();
        orientationRequest.timeout = 1234;
        orientationRequest.targetAngle = new common.Angle();
        orientationRequest.targetAngle.radians = 1.23;
        var jsonText = common.SerializationUtils.jsonStringify(orientationRequest);
        var jsonText2 = JSON.stringify(orientationRequest); // intentionally use direct JSON here
        chai_1.assert.equal(jsonText, '{"$name":"OrientationRequest","targetAngle":{"$name":"Angle","radians":1.23},"timeout":1234}');
        chai_1.assert.equal(jsonText2, '{"$name":"OrientationRequest","targetAngle":{"$name":"Angle","radians":1.23},"timeout":1234}');
        // Deserialize:
        var orientationRequest2 = common.SerializationUtils.deserialize(common.SerializationUtils.jsonParse(jsonText), common);
        chai_1.assert.equal(orientationRequest2.$name, "OrientationRequest");
        chai_1.assert.equal(orientationRequest2.timeout, 1234);
        var expectedAngle = new common.Angle();
        expectedAngle.radians = 1.23;
        if (orientationRequest2.targetAngle != undefined) {
            chai_1.assert.equal(orientationRequest2.targetAngle.radians, expectedAngle.radians);
        }
        else {
            chai_1.assert.fail();
        }
        var jsonText3 = common.SerializationUtils.jsonStringify(orientationRequest);
        chai_1.assert.equal(jsonText3, jsonText);
    });
    it("Make sure that all Elements are serializable", function () {
        testSerializeDeserialize(new common.Element());
        testSerializeDeserialize(new common.Dimension2D(1, 2));
        testSerializeDeserialize(new common.Dimension3D(1, 2, 3));
        testSerializeDeserialize(new common.Distance(100.22));
        testSerializeDeserialize(new common.Line2D(new common.Point2D(1, 2), new common.Point2D(3, 4)));
        testSerializeDeserialize(new common.Line3D(new common.Point3D(1, 2, 3), new common.Point3D(4, 5, 6)));
    });
    it("Make sure that all Message are serializable", function () {
        testSerializeDeserialize(new common.Message());
        testSerializeDeserialize(new common.GyroscopeAutoIntervalCommand(123));
        testSerializeDeserialize(new common.GyroscopeValueResponse(common.AngleUtils.createAngleFromDegrees(7)));
        testSerializeDeserialize(new common.OrientationRequest(common.AngleUtils.createAngleFromDegrees(55), common.AngleUtils.createAngleFromDegrees(10), 123));
        testSerializeDeserialize(new common.OrientationResponse(true, common.AngleUtils.createAngleFromDegrees(78)));
    });
    it("Test not serializable ($name is missing)", function () {
        class SampleOfBadClass {
        }
        chai_1.assert.throws(function () { testSerializeDeserialize(new SampleOfBadClass()); }, Error);
    });
    it("Test not serializable (class is not included into common mudule)", function () {
        class SampleOfBadClass2 extends common.Message {
        }
        ;
        chai_1.assert.throws(function () { testSerializeDeserialize(new SampleOfBadClass2()); }, Error);
    });
    it("Test enums", function () {
        testSerializeDeserialize(new common.WheelCommand(common.WHEEL_DIRECTION.Stop));
        testSerializeDeserialize(new common.WheelCommand(common.WHEEL_DIRECTION.Left));
    });
    it("Serialize Array", function () {
        var data = [1, 2];
        var jsonText = common.SerializationUtils.jsonStringify(data);
        var jsonText2 = JSON.stringify(data);
        var expected = '[1,2]';
        chai_1.assert.equal(jsonText, expected, "Compare SerializationUtils");
        chai_1.assert.equal(jsonText2, expected, "Compare JSON native");
    });
    it("Serialize Multi-Array", function () {
        var data = [[1, 2], [3, 4]];
        var jsonText = common.SerializationUtils.jsonStringify(data);
        var jsonText2 = JSON.stringify(data);
        var expected = '[[1,2],[3,4]]';
        chai_1.assert.equal(jsonText, expected, "Compare SerializationUtils");
        chai_1.assert.equal(jsonText2, expected, "Compare JSON native");
    });
    it("Serialize Grid", function () {
        // Serialize:
        var gridConfig = new common.GridConfiguration(2, 10, 1, new common.Vector3D(0, 0, 0));
        var gridNode = new common.GridNode(gridConfig);
        gridNode.data = common.GridUtils.createGridData(gridConfig.cellCount, gridConfig.unknownValue);
        var jsonText = common.SerializationUtils.jsonStringify(gridNode);
        var jsonText2 = JSON.stringify(gridNode);
        var expected = '{"$name":"GridNode","gridConfiguration":{"$name":"GridConfiguration","cellCount":2,"cellSizeMm":10,"maxObstacleCount":1,"offsetVector":{"$name":"Vector3D","x":0,"y":0,"z":0},"unknownValue":-1,"emptyValue":0},"data":[[-1,-1],[-1,-1]]}';
        chai_1.assert.equal(jsonText, expected, "Compare SerializationUtils");
        chai_1.assert.equal(jsonText2, expected, "Compare native JSON");
    });
    it("Make sure that all WorldElement are serializable", function () {
        testSerializeDeserialize(new common.WorldElement());
        var gridConfig = new common.GridConfiguration(10, 50, 2, new common.Vector3D(0, 1, -1));
        var gridNode = new common.GridNode(gridConfig);
        gridNode.data = common.GridUtils.createGridData(2, gridConfig.unknownValue);
        var robotNode = new common.RobotNode("filename.dat", new common.NodeTransformation3D());
        testSerializeDeserialize(new common.WorldNode(gridNode, robotNode));
        testSerializeDeserialize(new common.GridConfiguration(10, 50, 2, new common.Vector3D(0, 1, -1)));
        testSerializeDeserialize(new common.Material());
    });
});
//# sourceMappingURL=serialize.test.js.map