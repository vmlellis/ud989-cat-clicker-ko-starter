var initialsCats = [
  {
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
    nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']
  },
  {
    name: 'Tiger',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    nicknames: ['Tiger']
  },
  {
    name: 'Scaredy',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    nicknames: ['Casper']
  },
  {
    name: 'Shadow',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    nicknames: ['Shooby']
  },
  {
    name: 'Sleepy',
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    nicknames: ['Zzzzz']
  }
]

var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount || 0);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution || '');
  this.nicknames = ko.observableArray(data.nicknames);

  this.title = ko.computed(function() {
    var title;
    var clicks = this.clickCount();
    if (clicks < 10) {
      title = 'Newborn';
    } else if (clicks < 50) {
      title = 'Infant';
    } else if (clicks < 100) {
      title = 'Child';
    } else if (clicks < 200) {
      title = 'Teen';
    } else if (clicks < 500) {
      title = 'Adult';
    } else  {
      title = 'Ninja';
    }
    return title;
  }, this);
}

var ViewModel = function() {
  var self = this;

  this.catList = ko.observableArray([]);

  initialsCats.forEach(function(catItem) {
    self.catList.push( new Cat(catItem) );
  })

  this.currentCat = ko.observable( this.catList()[0] );

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  }

  this.setCat = function(clickedCat) {
    self.currentCat(clickedCat);
  }
}

ko.applyBindings(new ViewModel());
