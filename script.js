let objs = (function () {
    class basicInfo {
        constructor(name, buildYear) {
            this.name = name;
            this.buildYear = buildYear;
        }

    }

    class park extends basicInfo {
        constructor(name, buildYear, trees, parkArea) {
            super(name, buildYear);
            this.trees = trees;
            this.parkArea = parkArea;
        };
        treeDensity() {
            let density = this.trees / this.parkArea;
            return density;
        }
        parkAge() {
            let date = new Date().getFullYear - this.buildYear;
            return date;
        }
    }
    class streets extends basicInfo {
        constructor(name, buildYear, streetLength, streetSize = 'normal') {
            super(name, buildYear);
            this.streetLength = streetLength;
            this.streetSize = streetSize;
        }

    }
    return {
        getPark: function (name, buildYear, trees, parkArea) {
            return new park(name, buildYear, trees, parkArea);
        },
        getStreets: function (name, buildYear, streetLength, streetSize) {
            return new streets(name, buildYear, streetLength, streetSize);
        }
    }
})();
