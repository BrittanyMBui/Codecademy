app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'This is a string.';
  $scope.promo = 'Another string.';
	$scope.products = [
    									{
                        		name: 'The Book of Trees',
                        		price: 19,
                        		pubdate: new Date('2014', '03', '08'),
                        		cover: 'img/the-book-of-trees.jpg',
                        		likes: 0,
                        		dislikes: 0
                      
                      		},
    									{
                        		name: 'Program or be Programmed',
                        		price: 8,
                        		pubdate: new Date('2013', '08', '01'),
                        		cover: 'img/program-or-be-programmed.jpg',
                        		likes: 0,
                        		dislikes: 0
                      		},
    									{
    										name: 'To Kill a Mockingbird',
                        		price: 8,
                        		pubdate: new Date('1960', '01', '01'),
                             cover: 'img/program-or-be-programmed.jpg',
                        		likes: 0,
                        		dislikes: 0
                      		},
    									{
                        		name: 'Catcher in the Rye',
                        		price: 10,
                        		pubdate: new Date('1960', '01', '01'),
                        		cover: 'img/the-book-of-trees.jpg',
                        		likes: 0,
                        		dislikes: 0
                     		 	}
  
    								]
  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
   
  };
 
}]);
