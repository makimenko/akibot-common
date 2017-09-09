import { assert, expect } from 'chai';
import * as common from "..";

describe('Serialization and Deserialization', () => {


  function testSerializeDeserialize(obj: any): void {
    var jsonText: string = common.SerializationUtils.jsonStringify(obj);
    var resultMessage: common.Message = common.SerializationUtils.deserialize(common.SerializationUtils.jsonParse(jsonText), common);
    var jsonTextAfter: string = common.SerializationUtils.jsonStringify(resultMessage);
    //console.log(jsonText);
    //console.log(jsonTextAfter);
    assert.equal(jsonText, jsonTextAfter);
  }


  it("Deserialize simple Message", function () {
    var jsonString: string = '{"$name":"Message"  }';
    var json = common.SerializationUtils.jsonParse(jsonString);

    var message: common.Message = common.SerializationUtils.deserialize(json, common);
    assert.equal(message.$name, common.Message.name);
  });

  it("Serialize-Deserialize OrientationRequest", function () {
    // Serialize:
    var orientationRequest: common.OrientationRequest = new common.OrientationRequest();
    orientationRequest.timeout = 1234;
    orientationRequest.targetAngle = new common.Angle(1.23);


    var jsonText: string = common.SerializationUtils.jsonStringify(orientationRequest);
    var jsonText2: string = JSON.stringify(orientationRequest); // intentionally use direct JSON here
    assert.equal(jsonText, '{"$name":"OrientationRequest","targetAngle":{"$name":"Angle","radians":1.23},"timeout":1234}');
    assert.equal(jsonText2, '{"$name":"OrientationRequest","targetAngle":{"$name":"Angle","radians":1.23},"timeout":1234}');

    // Deserialize:
    var orientationRequest2: common.OrientationRequest = common.SerializationUtils.deserialize(common.SerializationUtils.jsonParse(jsonText), common);
    assert.equal(orientationRequest2.$name, "OrientationRequest");
    assert.equal(orientationRequest2.timeout, 1234);
    var expectedAngle: common.Angle = new common.Angle(1.23);
    if (orientationRequest2.targetAngle != undefined) {
      assert.equal(orientationRequest2.targetAngle.radians, expectedAngle.radians);
    } else {
      assert.fail();
    }
    var jsonText3: string = common.SerializationUtils.jsonStringify(orientationRequest);
    assert.equal(jsonText3, jsonText);
  });


  it("Make sure that all Elements are serializable", function () {
    testSerializeDeserialize(new common.Element());
    testSerializeDeserialize(new common.Dimension2D(1, 2));
    testSerializeDeserialize(new common.Dimension3D(1, 2, 3));
    testSerializeDeserialize(new common.Distance(100.9991, new common.Angle(0.1), true));
    testSerializeDeserialize(new common.Line2D(new common.Point2D(1, 2), new common.Point2D(3, 4)));
    testSerializeDeserialize(new common.Line3D(new common.Point3D(1, 2, 3), new common.Point3D(4, 5, 6)));
  });

  it("Make sure that all Messages are serializable", function () {
    testSerializeDeserialize(new common.Message());
    testSerializeDeserialize(new common.GyroscopeAutoIntervalCommand(123));
    testSerializeDeserialize(new common.GyroscopeValueResponse(common.AngleUtils.createAngleFromDegrees(7)));
    testSerializeDeserialize(new common.OrientationRequest(common.AngleUtils.createAngleFromDegrees(55), common.AngleUtils.createAngleFromDegrees(10), 123));
    testSerializeDeserialize(new common.OrientationResponse(true, common.AngleUtils.createAngleFromDegrees(78)));
    testSerializeDeserialize(new common.RobotTransformationEvent(new common.NodeTransformation3D(new common.Vector3D(1, 2, 3), new common.Vector3D(4, 5, 6), new common.Vector3D(7, 8, 9))));
    testSerializeDeserialize(new common.DistanceAutoIntervalCommand(1000));
    testSerializeDeserialize(new common.DistanceValueResponse(new common.Distance(100, new common.Angle(1), false)));
    testSerializeDeserialize(new common.GridUpdateEvent([[1, 2], [3, 4]]));
    testSerializeDeserialize(new common.GyroscopeCalibrationRequest(5000, 500));
    testSerializeDeserialize(new common.GyroscopeCalibrationResponse(new common.Vector3D(1, 0.000001, -3)));
  });

  it("Test not serializable ($name is missing)", function () {
    class SampleOfBadClass { kuku: string; }
    assert.throws(function () { testSerializeDeserialize(new SampleOfBadClass()) }, Error);
  });

  it("Test not serializable (class is not included into common mudule)", function () {
    class SampleOfBadClass2 extends common.Message { kuku: string; };
    assert.throws(function () { testSerializeDeserialize(new SampleOfBadClass2()) }, Error);
  });

  it("Test enums", function () {
    testSerializeDeserialize(new common.WheelCommand(common.WHEEL_SET_DIRECTION.Stop));
    testSerializeDeserialize(new common.WheelCommand(common.WHEEL_SET_DIRECTION.Left));
  });

  it("Serialize Array", function () {
    var data = [1, 2];
    var jsonText: string = common.SerializationUtils.jsonStringify(data);
    var jsonText2: string = JSON.stringify(data);
    var expected: string = '[1,2]';
    assert.equal(jsonText, expected, "Compare SerializationUtils");
    assert.equal(jsonText2, expected, "Compare JSON native");
  });

  it("Serialize Multi-Array", function () {
    var data = [[1, 2], [3, 4]];
    var jsonText: string = common.SerializationUtils.jsonStringify(data);
    var jsonText2: string = JSON.stringify(data);
    var expected: string = '[[1,2],[3,4]]';
    assert.equal(jsonText, expected, "Compare SerializationUtils");
    assert.equal(jsonText2, expected, "Compare JSON native");
  });

  it("Serialize Grid", function () {
    // Serialize:
    var gridConfig = new common.GridConfiguration(2, 10, 1, new common.Vector3D(0, 0, 0));
    var gridNode = new common.GridNode(gridConfig);
    gridNode.data = [[-1, -1], [-1, -1]];

    var jsonText: string = common.SerializationUtils.jsonStringify(gridNode);
    var jsonText2: string = JSON.stringify(gridNode);
    var expected: string = '{"$name":"GridNode","gridConfiguration":{"$name":"GridConfiguration","cellCount":2,"cellSizeMm":10,"maxObstacleCount":1,"offsetVector":{"$name":"Vector3D","x":0,"y":0,"z":0},"unknownValue":-1,"emptyValue":0},"data":[[-1,-1],[-1,-1]]}';
    assert.equal(jsonText, expected, "Compare SerializationUtils");
    assert.equal(jsonText2, expected, "Compare native JSON");
  });

  it("Make sure that all WorldElement are serializable", function () {
    testSerializeDeserialize(new common.WorldElement());
    var gridConfig = new common.GridConfiguration(10, 50, 2, new common.Vector3D(0, 1, -1));
    var gridNode = new common.GridNode(gridConfig);

    var robotNode = new common.RobotNode("filename.dat", new common.NodeTransformation3D());
    testSerializeDeserialize(new common.WorldNode(gridNode, robotNode));

    testSerializeDeserialize(new common.GridConfiguration(10, 50, 2, new common.Vector3D(0, 1, -1)));
    testSerializeDeserialize(new common.Material());
  });

});