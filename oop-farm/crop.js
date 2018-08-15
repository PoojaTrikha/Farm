// crops.js
class Wheat {
    constructor(acres) {
      this.acres = acres
    }
  
    getYieldInKg() {
      return Math.pow(this.acres * 1.5, 1.3)
    }
  }

class SugarCane{

    constructor(acres) {
        this.acres = acres
      }
    
      getYieldInKg() {
        return Math.pow(this.acres * 2.6,1.1)
      }

}

class Crop {
    constructor(acres) {
      this.acres = acres
    }
  }

 module.exports = { Wheat,Crop, SugarCane }