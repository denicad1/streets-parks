{

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
            //calculate the current age of the parks
            this.parkAge = () => {
                let date = new Date().getFullYear() - this.buildYear;
                return date;
            }
        };
        //method for tree density
        treeDensity() {
            let density = this.trees / this.parkArea;
            return density;
        }

    };
    //street obj
    class streets extends basicInfo {
        constructor(name, buildYear, streetLength, streetSize = 'normal') {
            //basicInfo
            super(name, buildYear);
            this.streetLength = streetLength;
            this.streetSize = streetSize;
        }

    };
    //arrays to hold either streets or parks
    let arrOfParks = [];
    let arrOfStreets = [];
    let park1 = new park('park1', 1994, 2000, 2000);
    let park2 = new park('park2', 1956, 950, 1200);
    let park3 = new park('park3', 1820, 3500, 9000);
    let street1 = new streets('birch', 1945, 1000, 'big');
    let street2 = new streets('pine', 1933, 2000, 'small');
    let street3 = new streets('elm', 1921, 2300, 'tiny');
    let street4 = new streets('teek', 1974, 1000);
    //populate arrays
    function pushToArr(arrOf, ...objs) {
        objs.forEach(cur => {
            arrOf.push(cur);
        })

    }
    pushToArr(arrOfParks, park1, park2, park3);
    pushToArr(arrOfStreets, street1, street2, street3, street4);
    console.log(`------ Park Report -------------`)
    //find average of all parks
    function averageAgeOfParks(arrOfParks) {
        let avg = arrOfParks.reduce((sum, el) => {
            return sum + el.parkAge();
        }, 0);

        console.log(`The average age of all the parks is : ${(avg / arrOfParks.length).toFixed(2)}`);
    }
    averageAgeOfParks(arrOfParks);
    arrOfParks.forEach(cur => {
        console.log(`the tree density for ${cur.name} is ${cur.treeDensity().toFixed(2)}`);
    })


    //find which parks have over 1000 trees
    function treeAmountOver1000(arrOfParks) {
        arrOfParks.forEach((cur) => {
            (cur.trees > 1000) ? console.log(`${cur.name} has more than 1000 trees`): null;

        });
    }
    treeAmountOver1000(arrOfParks);
    // total length of streets. tried to use on parks but stopped trying to get that to work right now
    function total(arr, param) {
        let avg = arr.reduce((sum, el) => {

            return sum + el[param];
        }, 0);

        return avg;
    }

    console.log(`-------- Streets Report --------- `);

    //find the average for the length of the streets. want to get this to work for trees as well
    function average(callback, arr) {
        //callback function is total from above

        console.log(`Our 4 streets have a total length of ${callback.toFixed(2)} and our average is ${(callback/arr.length).toFixed(2)}`);
    }
    //string is to select value from objects
    average(total(arrOfStreets, 'streetLength'), arrOfStreets)
    arrOfStreets.forEach(cur => {
        console.log(`${cur.name}, built in ${cur.buildYear}, is a ${cur.streetSize} street`);
    })

};
