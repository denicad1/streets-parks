let objs = (function () {

    //this is just a super for the other classes. it really isn't needed but I did it anyway
    class basicInfo {
        constructor(name, buildYear) {
            this.name = name;
            this.buildYear = buildYear;
        }

    }
    //park obj
    class park extends basicInfo {
        constructor(name, buildYear, trees, parkArea) {
            //basicInfo
            super(name, buildYear);
            this.trees = trees;
            this.parkArea = parkArea;
        };
        //method for tree density
        treeDensity() {
            let density = this.trees / this.parkArea;
            return density;
        }
        //method for park age
        parkAge() {
            let date = new Date().getFullYear - this.buildYear;
            return date;
        }
    }
    //street obj
    class streets extends basicInfo {
        constructor(name, buildYear, streetLength, streetSize = 'normal') {
            //basicInfo
            super(name, buildYear);
            this.streetLength = streetLength;
            this.streetSize = streetSize;
        }

    }
    return { //need to change these to set
        getPark: function (name, buildYear, trees, parkArea) {
            return new park(name, buildYear, trees, parkArea);
        },
        getStreets: function (name, buildYear, streetLength, streetSize) {
            return new streets(name, buildYear, streetLength, streetSize);
        }
    }
})();
/*may need to add arrays to add these objects too or maybe a map but i don't think a map would be the best choice.
might need to add methods to streets class for calculations but I don't think they would fit there that weill
*/
