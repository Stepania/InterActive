let Ride = require("./Ride.cjs");
let Cyclist = require("./model.cjs");

describe("Cyclist", function() {
  let theCyclist;

  beforeEach(() => {
    theCyclist = new Cyclist();
  });

  describe("An empty Cyclist", function() {
    test("should have a .ridesCount property", function() {
      expect(
        Object.prototype.hasOwnProperty.call(theCyclist, "rideCount")
      ).toBeTruthy();
    });

    test("should have a ride count of 0", function() {
      const count = theCyclist.rideCount;
      expect(count).toBe(0);
    });

    test("should have an .allMyRides property", function() {
      expect(
        Object.prototype.hasOwnProperty.call(theCyclist, "allMyRides")
      ).toBeTruthy();
    });

    test("should have an array for the .allMyRides ", function() {
      expect(Array.isArray(theCyclist.allMyRides)).toBeTruthy();
    });

    test("should have nothing in the allMyRides array", function() {
      const arraySize = theCyclist.allMyRides.length;
      expect(arraySize).toBe(0);
    });
  });
});
