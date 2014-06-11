var instanceCollectionOne = new CollectionOne();

var instanceCollectionTwo = new CollectionTwo();

var instanceCollectionThree = new CollectionThree();


var instanceListViewOne;

var instanceListViewTwo;

var instanceListViewThree;


instanceCollectionOne.fetch().done(function(){
	instanceCollectionOne.each(function(listitem){
		instanceListViewOne = new ListViewOne({model: listitem});
	})

	instanceListViewTwo = new ListViewTwo({ model: instanceCollectionTwo.first() })
	instanceListViewThree = new ListViewThree({ model: instanceCollectionThree.first() })
});

instanceCollectionTwo.fetch().done(function(){
	instanceCollectionTwo.each(function(listitem){
		instanceListViewTwo = new ListViewTwo({model: listitem});
	})

	instanceListViewOne = new ListViewOne({ model: instanceCollectionOne.first() })
	instanceListViewThree = new ListViewThree({ model: instanceCollectionThree.first() })
});

instanceCollectionThree.fetch().done(function(){
	instanceCollectionThree.each(function(listitem){
		instanceListViewThree = new ListViewThree({model: listitem});
	})

	instanceListViewTwo = new ListViewTwo({ model: instanceCollectionTwo.first() })
	instanceListViewOne = new ListViewOne({ model: instanceCollectionOne.first() })
});


// var photos = new PhotoCollection();
// var detailViewInstance;


// photos.fetch().done(function(){
//   photos.each(function(photo){

//     new ThumbnailView({model: photo});

//   })

//   detailViewInstance = new DetailView({ model: photos.first() })
// })
