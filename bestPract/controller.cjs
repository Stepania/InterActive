function main() {
  let theCyclist;
  let theRide;

  theCyclist = new Cyclist();
  theRide = new Ride();

  theCyclist.addRide(50, new Date(), 6150, "Ashburton");
  theCyclist.addRide(25, new Date(), 5, "Countdown");
  theCyclist.addRide(60, new Date(), 55153, "Kaipoi");
  theCyclist.addRide(70, new Date(), 3150, "Rolleston");
  theCyclist.addRide(6, new Date(), 5000, "Sumner");
  theCyclist.addRide(70, new Date(), 48, "Volodka");
  theCyclist.addRide(70, new Date(), 2, "Suzran");
  theRide.calcSpeed(1000, 25);

  // console.log(theCyclist.calcSpeed());
  // console.log(theCyclist.getShorTrips(60));
  // theCyclist._setLocalStorage();
  // theCyclist._getLocalStorage();
  // console.log(theCyclist.getTotalDistance());
  // console.log(theCyclist.findRideById(5));
  // theCyclist.updateDescription(2, "trip to jopa");
  // theCyclist.undoDescription();
  // theCyclist.sortRidesDescrip();
  // theCyclist._setLocalStorage();
  // theCyclist._getLocalStorage();
  // theCyclist.removeRide(2);
  // theCyclist.removeRide(4);
  // theCyclist.removeRide(3);
  // theCyclist._setLocalStorage();

  // theCyclist.totalDistance();
  View.clr();
  View.out(theCyclist);
}
