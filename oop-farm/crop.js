// crops.js
class Crop {
    constructor(acres) {
     this.acres = acres
   }
 }

class Wheat extends Crop {
    getYieldInKg() {
      return Math.pow(this.acres * 1.5, 1.3)
    }
  }

class SugarCane extends Crop{
    getYieldInKg() {
        return Math.pow(this.acres * 2.6,1.1)
      }

}


 module.exports = { Wheat, Crop, SugarCane }