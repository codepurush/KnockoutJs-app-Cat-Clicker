var initialCats = [{
        clickCount: 0,
        name: "Veena",
        imgSrc: "img/cat.jpg",
        imgAttribution: "Google",
        nickNames: [{
            name: "Veena"
        }, {
            name: "Purush"
        }, {
            name: "Uma"
        }]
    },
    {
        clickCount: 0,
        name: "Uma",
        imgSrc: "img/cat2.jpg",
        imgAttribution: "Google",
        nickNames: [{
            name: "Veena"
        }, {
            name: "Purush"
        }, {
            name: "Uma"
        }]
    },
    {
        clickCount: 0,
        name: "Tarun",
        imgSrc: "img/cat3.jpg",
        imgAttribution: "Google",
        nickNames: [{
            name: "Veena"
        }, {
            name: "Purush"
        }, {
            name: "Uma"
        }]
    },
    {
        clickCount: 0,
        name: "Purush",
        imgSrc: "img/cat4.jpg",
        imgAttribution: "Google",
        nickNames: [{
            name: "Veena"
        }, {
            name: "Purush"
        }, {
            name: "Uma"
        }]
    },
    {
        clickCount: 0,
        name: "Elango",
        imgSrc: "img/cat5.jpg",
        imgAttribution: "Google",
        nickNames: [{
            name: "Veena"
        }, {
            name: "Purush"
        }, {
            name: "Uma"
        }]
    }
]

var Cat = function(data) {
    // observables
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    //array
    this.nickNames = ko.observableArray(data.nickNames);
    // Computed observables
    this.level = ko.computed(function() {
        if (this.clickCount() < 10) {
            level = "Newborn";
            return level;
        } else if (this.clickCount() < 20) {
            level = "Little One";
            return level;
        } else if (this.clickCount() < 30) {
            level = "Crazy Cat";
            return level;
        } else if (this.clickCount() < 40) {
            level = "Wild One";
            return level;
        } else {
            level = "Not a cat anymore";
            return level;
        };
    }, this);

}
// Make Cats show up in a list
// Make Currentcat change as the cat is clicked
//
var ViewModel = function() {
    var self = this;
    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);
    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

    this.setCat = function(clickedCat) {
        self.currentCat(clickedCat);
    };
}
ko.applyBindings(new ViewModel());
