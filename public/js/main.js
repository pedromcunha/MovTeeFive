var app=angular.module("trailerParke",["appFiltersModule","appControllerModule","appDirectiveModule","appFactoriesModule","ngRoute","ui.bootstrap"]),searchInput;app.config(["$routeProvider",function(e){e.when("/",{templateUrl:"../templates/trailer-listings.html",controller:"videoListingController"}).when("/register",{templateUrl:"../templates/register.html"})}]),app.constant("apiKeys",{youtubeAPI:"AIzaSyDYhqH1guvlxxocuttrwxE2kkvYefu0cqo",rottenTomatoesAPI:"4cwjthjq2hyxz7amh6jj5p4p"}),function(){var e=angular.module("appControllerModule",[]);e.controller("headerController",["$scope","$sce","apiKeys","rottenTomatoesService","youtubeApiService","sharedVideos",function(e,t,r,o,n,a){e.autocompleteSearch=function(t){var n="http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey="+r.rottenTomatoesAPI+"&q="+t.split(" ").join("+")+"&page_limit=5&callback=JSON_CALLBACK",a=[],i="";t.length>5?o.getRatings(n).success(function(t){e.ShowAutoSuggestions=!0;var r,o;if(t.movies.length>0){for(var n=0;n<t.movies.length;n++)r=t.movies[n].ratings.critics_score,o=t.movies[n].title,""!=o&&o.length<33?i=o:o.length>36&&(i=o.slice(0,36)+"..."),-1!=r&&o.length>0&&a.push({title:i,rating:r});e.AutoSuggestions=a}}).error(function(){console.log("err")}):(e.AutoSuggestions="",e.Ratings="")},e.submitSearch=function(r){var o,i=e.searchText;if(void 0==r)var r=e.searchText,o="https://gdata.youtube.com/feeds/api/videos?q="+i.split(" ").join("+")+"+official+trailer&v=2&max-results=3&alt=json&category=movies&callback=JSON_CALLBACK";else o="https://gdata.youtube.com/feeds/api/videos?q="+r.split(" ").join("+")+"+official+trailer+-game&v=2&orderby=relevance&max-results=20&hd=true&alt=json&category=movies&callback=JSON_CALLBACK";n.getVideos(o).success(function(r){if(void 0!=r.feed.entry){for(var o=[],n=0,i=r.feed.entry.length;i>n;n++)o.push(t.trustAsResourceUrl(r.feed.entry[n].link[0].href.replace("watch?v=","embed/").replace("&feature=youtube_gdata","")));a.videos=o,console.log(o),e.searchText=""}else a.videos=""}).error(function(){console.log("err")})},e.genres=[{name:"horror",id:10},{name:"sci-fi",id:13},{name:"drama",id:6},{name:"comedy",id:4},{name:"thriller"},{name:"documentary"},{name:"animation",id:2},{name:"action",id:1},{name:"romance",id:12},{name:"crime",id:5},{name:"family",id:8},{name:"sports",id:15},{name:"adventure",id:1},{name:"fantasy"},{name:"history"},{name:"mystery",id:11},{name:"musical"},{name:"western"}],e.select=function(t){e.selected=t},e.genreClass=function(t){return t===e.selected?"active":void 0}}]),e.controller("videoListingController",["$scope","sharedVideos",function(e,t){e.programs=t}])}(),function(){var e=angular.module("appDirectiveModule",[]);e.directive("ngEnter",function(){return function(e,t,r){t.bind("keydown keypress",function(t){13===t.which&&(e.$apply(function(){e.$eval(r.ngEnter)}),t.preventDefault())})}})}(),function(){var e=angular.module("appFactoriesModule",[]);e.factory("youtubeApiService",["$http",function(e){var t={};return t.getVideos=function(t){return e({method:"JSONP",url:t,cache:!0})},t}]),e.factory("rottenTomatoesService",["$http",function(e){var t={};return t.getRatings=function(t){return e({method:"JSONP",url:t,cache:!0})},t}]),e.factory("sharedVideos",function(){var e={};return e})}(),function(){var e=angular.module("appFiltersModule",[]);e.filter("capitalize",function(){return function(e){if(e instanceof Array){for(var t=0,r=e.length,o=[];r>t;t++)o.push(e[t][0].toUpperCase()+e[t].slice(1));return o}return e[0].toUpperCase()+e.slice(1)}})}();
//# sourceMappingURL=data:application/json;base64,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R0FBQSxHQUFBLFFBQUEsT0FBQSx3QkFDSSxHQUFBLFVBQUEsVUFBc0IsV0FDbEIsTUFBQSxVQUFBLEVBQUEsRUFBQSxHQUNJLEVBQUEsS0FBQSxtQkFBQSxTQUFBLEdBQ0ksS0FBQSxFQUFBLFFBQ0ksRUFBQSxPQUFBLFdBQ0ksRUFBQSxNQUFBLEVBQUEsV0FFSixFQUFBLDBCQU14QixXQUNDLEdBQUEsR0FBQSxRQUFBLE9BQUEsd0JBQ0EsR0FBQSxRQUFBLHFCQUE4QixRQUFBLFNBQUEsR0FDN0IsR0FBQSxLQVFBLE9BUEEsR0FBQSxVQUFBLFNBQUEsR0FDQyxNQUFBLElBQ0MsT0FBQSxRQUNBLElBQUEsRUFDQSxPQUFBLEtBR0YsS0FFRCxFQUFBLFFBQUEseUJBQWtDLFFBQUEsU0FBQSxHQUNqQyxHQUFBLEtBUUEsT0FQQSxHQUFBLFdBQUEsU0FBQSxHQUNDLE1BQUEsSUFDQyxPQUFBLFFBQ0EsSUFBQSxFQUNBLE9BQUEsS0FHRixLQUdELEVBQUEsUUFBQSxlQUF5QixXQUN4QixHQUFBLEtBRUEsT0FBQSxRQUtGLFdBQ0MsR0FBQSxHQUFBLFFBQUEsT0FBQSxzQkFDQyxHQUFBLE9BQUEsYUFBc0IsV0FDbkIsTUFBQSxVQUFBLEdBQ0MsR0FBQSxZQUFBLE9BQUEsQ0FDRCxJQUFBLEdBQUEsR0FBQSxFQUFBLEVBQUEsRUFBQSxPQUFBLEtBQUEsRUFBQSxFQUFBLElBQ0MsRUFBQSxLQUFBLEVBQUEsR0FBQSxHQUFBLGNBQUEsRUFBQSxHQUFBLE1BQUEsR0FFRCxPQUFBLEdBR0UsTUFBQSxHQUFBLEdBQUEsY0FBQSxFQUFBLE1BQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgndHJhaWxlclBhcmtlJywgWydhcHBGaWx0ZXJzTW9kdWxlJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAnYXBwQ29udHJvbGxlck1vZHVsZScsIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICdhcHBEaXJlY3RpdmVNb2R1bGUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICdhcHBGYWN0b3JpZXNNb2R1bGUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICduZ1JvdXRlJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAndWkuYm9vdHN0cmFwJ10pOyAvL21haW4gbW9kdWxlXG52YXIgc2VhcmNoSW5wdXQ7IC8vcmVjb3JkcyBhIHVzZXIgaW5wdXRcblxuXG5hcHAuY29uZmlnKFsnJHJvdXRlUHJvdmlkZXInLCBmdW5jdGlvbigkcm91dGVQcm92aWRlcikge1xuICAgICAgICAkcm91dGVQcm92aWRlclxuICAgICAgICBcdC53aGVuKCcvJywgXG5cdCAgICAgICAgXHR7XG5cdCAgICAgICAgXHRcdHRlbXBsYXRlVXJsOiAnLi4vdGVtcGxhdGVzL3RyYWlsZXItbGlzdGluZ3MuaHRtbCcsXG4gICAgICAgICAgICBcdFx0Y29udHJvbGxlcjogJ3ZpZGVvTGlzdGluZ0NvbnRyb2xsZXInXHRcblx0ICAgICAgICBcdH0pXG4gICAgICAgICAgICAud2hlbignL3JlZ2lzdGVyJywgXG4gICAgICAgICAgICBcdHtcbiAgICAgICAgICAgIFx0XHR0ZW1wbGF0ZVVybDogJy4uL3RlbXBsYXRlcy9yZWdpc3Rlci5odG1sJ1xuICAgICAgICAgICAgXHR9KTtcblx0fV0pO1xuXG5hcHAuY29uc3RhbnQoJ2FwaUtleXMnLCB7XG5cdHlvdXR1YmVBUEk6ICdBSXphU3lEWWhxSDFndXZseHhvY3V0dHJ3eEUya2t2WWVmdTBjcW8nLFxuXHRyb3R0ZW5Ub21hdG9lc0FQSTogJzRjd2p0aGpxMmh5eHo3YW1oNmpqNXA0cCdcbn0pO1xuKGZ1bmN0aW9uKCl7XG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcENvbnRyb2xsZXJNb2R1bGUnLCBbXSk7XG5cdC8vIGFwcC5jb250cm9sbGVyKCdzZWFyY2hDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJHNjZScsICd5b3V0dWJlQXBpU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzY2UsIHlvdXR1YmVBcGlTZXJ2aWNlKSB7Ly9jb250cm9sbGVyIGZvciB0aGUgc2VhcmNoIHF1ZXJ5XG5cdC8vIFx0JHNjb3BlLnN1Ym1pdFNlYXJjaCA9IGZ1bmN0aW9uKGdlbnJlLCBjYWxsZWRGcm9tKSB7Ly9hcGkgY2FsbCBmb3IgdGhlIHF1ZXJ5L2dlbnJlXG5cdC8vIFx0ICBcdHZhciBxdWVyeVRleHQgPSAkc2NvcGUuc2VhcmNoVGV4dCxcblx0Ly8gXHQgIFx0ICBcdHNlYXJjaFVybDtcblx0Ly8gXHRcdGlmIChnZW5yZSA9PSB1bmRlZmluZWQpIHtcblx0Ly8gXHRcdCAgXHR2YXIgZ2VucmUgPSAkc2NvcGUuc2VhcmNoVGV4dCxcblx0Ly8gXHRcdCAgXHRcdHNlYXJjaFVybCA9ICdodHRwczovL2dkYXRhLnlvdXR1YmUuY29tL2ZlZWRzL2FwaS92aWRlb3M/cT0nK3F1ZXJ5VGV4dC5zcGxpdCgnICcpLmpvaW4oJysnKSsnK29mZmljaWFsK3RyYWlsZXImdj0yJm1heC1yZXN1bHRzPTMmYWx0PWpzb24mY2F0ZWdvcnk9bW92aWVzJmNhbGxiYWNrPUpTT05fQ0FMTEJBQ0snO1xuXHQvLyBcdFx0fVxuXHQvLyBcdFx0ICBlbHNlIHNlYXJjaFVybCA9ICdodHRwczovL2dkYXRhLnlvdXR1YmUuY29tL2ZlZWRzL2FwaS92aWRlb3M/cT0nK2dlbnJlLnNwbGl0KCcgJykuam9pbignKycpKycrb2ZmaWNpYWwrdHJhaWxlcistZ2FtZSZ2PTImb3JkZXJieT1yZWxldmFuY2UmbWF4LXJlc3VsdHM9MjAmaGQ9dHJ1ZSZhbHQ9anNvbiZjYXRlZ29yeT1tb3ZpZXMmY2FsbGJhY2s9SlNPTl9DQUxMQkFDSyc7XG5cdC8vIFx0ICB5b3V0dWJlQXBpU2VydmljZS5nZXRWaWRlb3Moc2VhcmNoVXJsKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEsIHN0YXR1cyl7XG5cdC8vIFx0XHRpZihkYXRhLmZlZWQuZW50cnkgIT0gdW5kZWZpbmVkKSB7Ly9jaGVja3MgdG8gc2VlIGlmIHRoZXJlIGlzIGEgZmVlZFxuXHQvLyBcdFx0XHR2YXIgdmlkZW9zU3JjID0gW107XG5cdC8vIFx0XHRcdGZvciAodmFyIGkgPSAwLCBsID0gZGF0YS5mZWVkLmVudHJ5Lmxlbmd0aDsgaSA8IGw7IGkrKykgey8vY2xlYW5zIHVwIHRoZSBhcnJheVxuXHQvLyBcdFx0XHRcdHZpZGVvc1NyYy5wdXNoKCRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKGRhdGEuZmVlZC5lbnRyeVtpXS5saW5rWzBdLmhyZWYucmVwbGFjZShcIndhdGNoP3Y9XCIsIFwiZW1iZWQvXCIpLnJlcGxhY2UoJyZmZWF0dXJlPXlvdXR1YmVfZ2RhdGEnLCAnJykpKTtcblx0Ly8gXHRcdFx0fVxuXHQvLyBcdFx0XHQkc2NvcGUucHJvZ3JhbXMgPSB2aWRlb3NTcmM7XG5cdC8vIFx0XHRcdCRzY29wZS5zZWFyY2hUZXh0ID0gJyc7XG5cdC8vIFx0XHR9XG5cdC8vIFx0XHRlbHNlIHsvL2lmIG5vIGZlZWQgc2hvdyBlcnJvciBtc2dcblx0Ly8gXHRcdFx0JHNjb3BlLnByb2dyYW1zID0gJyc7XG5cdC8vIFx0XHR9XG5cdC8vIFx0XHR9KS5lcnJvcihmdW5jdGlvbihkYXRhLCBzdGF0dXMpe1xuXHQvLyBcdFx0XHRjb25zb2xlLmxvZygnZXJyJyk7XG5cdC8vIFx0XHR9KTtcblx0Ly8gXHR9XG5cdC8vIH1dKTsvL3NlYXJjaENvbnRyb2xsZXJcblx0Ly8gYXBwLmNvbnRyb2xsZXIoJ2dlbnJlQ29udHJvbGxlcicsIFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKXsvL2hvbGRzIHRoZSBnZW5yZXMgYW5kIHlvdXR1YmUgYXBpIHJlbGF0ZWQgaWRzXG5cdC8vIFx0JHNjb3BlLmdlbnJlcyA9IFtcblx0Ly8gXHRcdHtuYW1lOiBcImhvcnJvclwiLCBpZDogMTB9LCBcblx0Ly8gXHRcdHtuYW1lOiBcInNjaS1maVwiLCBpZDogMTN9LCBcblx0Ly8gXHRcdHtuYW1lOiBcImRyYW1hXCIsIGlkOiA2fSwgXG5cdC8vIFx0XHR7bmFtZTogXCJjb21lZHlcIiwgaWQ6IDR9LCBcblx0Ly8gXHRcdHtuYW1lOiBcInRocmlsbGVyXCJ9LCBcblx0Ly8gXHRcdHtuYW1lOiBcImRvY3VtZW50YXJ5XCJ9LCBcblx0Ly8gXHRcdHtuYW1lOiBcImFuaW1hdGlvblwiLCBpZDogMn0sIFxuXHQvLyBcdFx0e25hbWU6IFwiYWN0aW9uXCIsIGlkOiAxfSwgXG5cdC8vIFx0XHR7bmFtZTogXCJyb21hbmNlXCIsIGlkOiAxMn0sXG5cdC8vIFx0XHR7bmFtZTogXCJjcmltZVwiLCBpZDogNX0sXG5cdC8vIFx0XHR7bmFtZTogXCJmYW1pbHlcIiwgaWQ6IDh9LFxuXHQvLyBcdFx0e25hbWU6IFwic3BvcnRzXCIsIGlkOiAxNX0sXG5cdC8vIFx0XHR7bmFtZTogXCJhZHZlbnR1cmVcIiwgaWQ6IDF9LFxuXHQvLyBcdFx0e25hbWU6IFwiZmFudGFzeVwifSxcblx0Ly8gXHRcdHtuYW1lOiBcImhpc3RvcnlcIn0sXG5cdC8vIFx0XHR7bmFtZTogXCJteXN0ZXJ5XCIsIGlkOiAxMX0sXG5cdC8vIFx0XHR7bmFtZTogXCJtdXNpY2FsXCJ9LFxuXHQvLyBcdFx0e25hbWU6IFwid2VzdGVyblwifVxuXHQvLyBcdF07XG5cdC8vIFx0JHNjb3BlLnNlbGVjdD0gZnVuY3Rpb24oZ2VucmUpIHtcbiAvLyAgICAgICBcdFx0JHNjb3BlLnNlbGVjdGVkID0gZ2VucmU7IFxuIC8vICAgIFx0fTtcblx0Ly8gICAgICRzY29wZS5nZW5yZUNsYXNzID0gZnVuY3Rpb24oZ2VucmUpIHtcblx0Ly8gICAgICAgICByZXR1cm4gZ2VucmUgPT09ICRzY29wZS5zZWxlY3RlZCA/ICdhY3RpdmUnIDogdW5kZWZpbmVkO1xuXHQvLyAgICAgfTtcblx0Ly8gfV0pOy8vZ2VucmVDb250cm9sbGVyXG5cdFxuXHQvLyBhcHAuY29udHJvbGxlcignc2VhcmNoQXV0b2NvbXBDb250cm9sbGVyJyxbJyRzY29wZScsICckc2NlJywgJ2FwaUtleXMnLCAncm90dGVuVG9tYXRvZXNTZXJ2aWNlJywgZnVuY3Rpb24oJHNjb3BlLCAkc2NlLCBhcGlLZXlzLCByb3R0ZW5Ub21hdG9lc1NlcnZpY2Upe1xuXHQvLyBcdCRzY29wZS5hdXRvY29tcGxldGVTZWFyY2ggPSBmdW5jdGlvbiAoaW5wdXQpIHtcblx0Ly8gXHRcdFx0dmFyIHVybCA9IFwiaHR0cDovL2FwaS5yb3R0ZW50b21hdG9lcy5jb20vYXBpL3B1YmxpYy92MS4wL21vdmllcy5qc29uP2FwaWtleT1cIiArIGFwaUtleXMucm90dGVuVG9tYXRvZXNBUEkgKyBcIiZxPVwiK2lucHV0LnNwbGl0KCcgJykuam9pbignKycpK1wiJnBhZ2VfbGltaXQ9NSZjYWxsYmFjaz1KU09OX0NBTExCQUNLXCIsXG5cdC8vIFx0XHRcdCBcdGF1dG9TdWdnZXN0ID0gW10sXG5cdC8vIFx0XHRcdCBcdHJhdGluZ3MgPSBbXSxcblx0Ly8gXHRcdFx0XHRzdWdnZXN0aW9uID0gJyc7XG5cdC8vIFx0XHRpZiAoaW5wdXQubGVuZ3RoID4gNSkge1xuXHQvLyBcdFx0XHRyb3R0ZW5Ub21hdG9lc1NlcnZpY2UuZ2V0UmF0aW5ncyh1cmwpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSwgc3RhdHVzKXtcblx0Ly8gXHRcdFx0XHRcdCRzY29wZS5TaG93QXV0b1N1Z2dlc3Rpb25zID0gdHJ1ZTtcblx0Ly8gXHRcdFx0XHRcdHZhciByYXRpbmcsIHRpdGxlO1xuXHQvLyBcdFx0XHRcdFx0aWYoZGF0YVsnbW92aWVzJ10ubGVuZ3RoID4gMCkge1xuXHQvLyBcdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRhdGFbJ21vdmllcyddLmxlbmd0aDsgaSsrKSB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRyYXRpbmcgPSBkYXRhWydtb3ZpZXMnXVtpXVsncmF0aW5ncyddWydjcml0aWNzX3Njb3JlJ107XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHR0aXRsZSA9IGRhdGFbJ21vdmllcyddW2ldWyd0aXRsZSddO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0aWYgKHRpdGxlICE9ICcnICYmIHRpdGxlLmxlbmd0aCA8IDMzKVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRzdWdnZXN0aW9uID0gdGl0bGU7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRlbHNlIGlmICh0aXRsZS5sZW5ndGggPiAzNilcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0c3VnZ2VzdGlvbiA9IHRpdGxlLnNsaWNlKDAsIDM2KSArICcuLi4nO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0aWYgKHJhdGluZyAhPSAtMSAmJiB0aXRsZS5sZW5ndGggPiAwKSB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdGF1dG9TdWdnZXN0LnB1c2goe3RpdGxlOiBzdWdnZXN0aW9uLCByYXRpbmc6IHJhdGluZ30pO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0fVxuXHQvLyBcdFx0XHRcdFx0XHR9XG5cdC8vIFx0XHRcdFx0XHRcdCRzY29wZS5BdXRvU3VnZ2VzdGlvbnMgPSBhdXRvU3VnZ2VzdDtcblx0Ly8gXHRcdFx0XHRcdH1cblx0Ly8gXHRcdFx0XHR9KS5lcnJvcihmdW5jdGlvbihkYXRhLCBzdGF0dXMpe1xuXHQvLyBcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2VycicpO1xuXHQvLyBcdFx0XHR9KTtcblx0Ly8gXHRcdH1cblx0Ly8gXHRcdGVsc2UgXG5cdC8vIFx0XHRcdCRzY29wZS5BdXRvU3VnZ2VzdGlvbnMgPSAnJztcblx0Ly8gXHRcdFx0JHNjb3BlLlJhdGluZ3MgPSAnJztcblx0Ly8gXHR9XG5cdC8vIH1dKTsvL1NlYXJjaEF1dG9jb21wQ29udHJvbGxlclxuXHRcblx0YXBwLmNvbnRyb2xsZXIoJ2hlYWRlckNvbnRyb2xsZXInLCBbJyRzY29wZScsICckc2NlJywgJ2FwaUtleXMnLCAncm90dGVuVG9tYXRvZXNTZXJ2aWNlJywgJ3lvdXR1YmVBcGlTZXJ2aWNlJywgJ3NoYXJlZFZpZGVvcycsIGZ1bmN0aW9uKCRzY29wZSwgJHNjZSwgYXBpS2V5cywgcm90dGVuVG9tYXRvZXNTZXJ2aWNlLCB5b3V0dWJlQXBpU2VydmljZSwgc2hhcmVkVmlkZW9zKSB7XG5cdFx0JHNjb3BlLmF1dG9jb21wbGV0ZVNlYXJjaCA9IGZ1bmN0aW9uIChpbnB1dCkge1xuXHRcdFx0dmFyIHVybCA9IFwiaHR0cDovL2FwaS5yb3R0ZW50b21hdG9lcy5jb20vYXBpL3B1YmxpYy92MS4wL21vdmllcy5qc29uP2FwaWtleT1cIiArIGFwaUtleXMucm90dGVuVG9tYXRvZXNBUEkgKyBcIiZxPVwiK2lucHV0LnNwbGl0KCcgJykuam9pbignKycpK1wiJnBhZ2VfbGltaXQ9NSZjYWxsYmFjaz1KU09OX0NBTExCQUNLXCIsXG5cdFx0XHQgXHRhdXRvU3VnZ2VzdCA9IFtdLFxuXHRcdFx0IFx0cmF0aW5ncyA9IFtdLFxuXHRcdFx0XHRzdWdnZXN0aW9uID0gJyc7XG5cdFx0XHRpZiAoaW5wdXQubGVuZ3RoID4gNSkge1xuXHRcdFx0XHRyb3R0ZW5Ub21hdG9lc1NlcnZpY2UuZ2V0UmF0aW5ncyh1cmwpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSwgc3RhdHVzKXtcblx0XHRcdFx0XHRcdCRzY29wZS5TaG93QXV0b1N1Z2dlc3Rpb25zID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHZhciByYXRpbmcsIHRpdGxlO1xuXHRcdFx0XHRcdFx0aWYoZGF0YVsnbW92aWVzJ10ubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRhdGFbJ21vdmllcyddLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyYXRpbmcgPSBkYXRhWydtb3ZpZXMnXVtpXVsncmF0aW5ncyddWydjcml0aWNzX3Njb3JlJ107XG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZSA9IGRhdGFbJ21vdmllcyddW2ldWyd0aXRsZSddO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHRpdGxlICE9ICcnICYmIHRpdGxlLmxlbmd0aCA8IDMzKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdWdnZXN0aW9uID0gdGl0bGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRlbHNlIGlmICh0aXRsZS5sZW5ndGggPiAzNilcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VnZ2VzdGlvbiA9IHRpdGxlLnNsaWNlKDAsIDM2KSArICcuLi4nO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJhdGluZyAhPSAtMSAmJiB0aXRsZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGF1dG9TdWdnZXN0LnB1c2goe3RpdGxlOiBzdWdnZXN0aW9uLCByYXRpbmc6IHJhdGluZ30pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCRzY29wZS5BdXRvU3VnZ2VzdGlvbnMgPSBhdXRvU3VnZ2VzdDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KS5lcnJvcihmdW5jdGlvbihkYXRhLCBzdGF0dXMpe1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2VycicpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHQkc2NvcGUuQXV0b1N1Z2dlc3Rpb25zID0gJyc7XG5cdFx0XHRcdCRzY29wZS5SYXRpbmdzID0gJyc7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdCRzY29wZS5zdWJtaXRTZWFyY2ggPSBmdW5jdGlvbihnZW5yZSwgY2FsbGVkRnJvbSkgey8vYXBpIGNhbGwgZm9yIHRoZSBxdWVyeS9nZW5yZVxuXHRcdCAgXHR2YXIgcXVlcnlUZXh0ID0gJHNjb3BlLnNlYXJjaFRleHQsXG5cdFx0ICBcdCAgXHRzZWFyY2hVcmw7XG5cdFx0XHRpZiAoZ2VucmUgPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQgIFx0dmFyIGdlbnJlID0gJHNjb3BlLnNlYXJjaFRleHQsXG5cdFx0XHQgIFx0XHRzZWFyY2hVcmwgPSAnaHR0cHM6Ly9nZGF0YS55b3V0dWJlLmNvbS9mZWVkcy9hcGkvdmlkZW9zP3E9JytxdWVyeVRleHQuc3BsaXQoJyAnKS5qb2luKCcrJykrJytvZmZpY2lhbCt0cmFpbGVyJnY9MiZtYXgtcmVzdWx0cz0zJmFsdD1qc29uJmNhdGVnb3J5PW1vdmllcyZjYWxsYmFjaz1KU09OX0NBTExCQUNLJztcblx0XHRcdH1cblx0XHRcdCAgZWxzZSBzZWFyY2hVcmwgPSAnaHR0cHM6Ly9nZGF0YS55b3V0dWJlLmNvbS9mZWVkcy9hcGkvdmlkZW9zP3E9JytnZW5yZS5zcGxpdCgnICcpLmpvaW4oJysnKSsnK29mZmljaWFsK3RyYWlsZXIrLWdhbWUmdj0yJm9yZGVyYnk9cmVsZXZhbmNlJm1heC1yZXN1bHRzPTIwJmhkPXRydWUmYWx0PWpzb24mY2F0ZWdvcnk9bW92aWVzJmNhbGxiYWNrPUpTT05fQ0FMTEJBQ0snO1xuXHRcdCAgeW91dHViZUFwaVNlcnZpY2UuZ2V0VmlkZW9zKHNlYXJjaFVybCkuc3VjY2VzcyhmdW5jdGlvbihkYXRhLCBzdGF0dXMpe1xuXHRcdFx0aWYoZGF0YS5mZWVkLmVudHJ5ICE9IHVuZGVmaW5lZCkgey8vY2hlY2tzIHRvIHNlZSBpZiB0aGVyZSBpcyBhIGZlZWRcblx0XHRcdFx0dmFyIHZpZGVvc1NyYyA9IFtdO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgbCA9IGRhdGEuZmVlZC5lbnRyeS5sZW5ndGg7IGkgPCBsOyBpKyspIHsvL2NsZWFucyB1cCB0aGUgYXJyYXlcblx0XHRcdFx0XHR2aWRlb3NTcmMucHVzaCgkc2NlLnRydXN0QXNSZXNvdXJjZVVybChkYXRhLmZlZWQuZW50cnlbaV0ubGlua1swXS5ocmVmLnJlcGxhY2UoXCJ3YXRjaD92PVwiLCBcImVtYmVkL1wiKS5yZXBsYWNlKCcmZmVhdHVyZT15b3V0dWJlX2dkYXRhJywgJycpKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2hhcmVkVmlkZW9zLnZpZGVvcyA9IHZpZGVvc1NyYztcblx0XHRcdFx0Y29uc29sZS5sb2codmlkZW9zU3JjKTtcblx0XHRcdFx0JHNjb3BlLnNlYXJjaFRleHQgPSAnJztcblx0XHRcdH1cblx0XHRcdGVsc2Ugey8vaWYgbm8gZmVlZCBzaG93IGVycm9yIG1zZ1xuXHRcdFx0XHRzaGFyZWRWaWRlb3MudmlkZW9zID0gJyc7XG5cdFx0XHR9XG5cdFx0XHR9KS5lcnJvcihmdW5jdGlvbihkYXRhLCBzdGF0dXMpe1xuXHRcdFx0XHRjb25zb2xlLmxvZygnZXJyJyk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0JHNjb3BlLmdlbnJlcyA9IFtcblx0XHRcdHtuYW1lOiBcImhvcnJvclwiLCBpZDogMTB9LCBcblx0XHRcdHtuYW1lOiBcInNjaS1maVwiLCBpZDogMTN9LCBcblx0XHRcdHtuYW1lOiBcImRyYW1hXCIsIGlkOiA2fSwgXG5cdFx0XHR7bmFtZTogXCJjb21lZHlcIiwgaWQ6IDR9LCBcblx0XHRcdHtuYW1lOiBcInRocmlsbGVyXCJ9LCBcblx0XHRcdHtuYW1lOiBcImRvY3VtZW50YXJ5XCJ9LCBcblx0XHRcdHtuYW1lOiBcImFuaW1hdGlvblwiLCBpZDogMn0sIFxuXHRcdFx0e25hbWU6IFwiYWN0aW9uXCIsIGlkOiAxfSwgXG5cdFx0XHR7bmFtZTogXCJyb21hbmNlXCIsIGlkOiAxMn0sXG5cdFx0XHR7bmFtZTogXCJjcmltZVwiLCBpZDogNX0sXG5cdFx0XHR7bmFtZTogXCJmYW1pbHlcIiwgaWQ6IDh9LFxuXHRcdFx0e25hbWU6IFwic3BvcnRzXCIsIGlkOiAxNX0sXG5cdFx0XHR7bmFtZTogXCJhZHZlbnR1cmVcIiwgaWQ6IDF9LFxuXHRcdFx0e25hbWU6IFwiZmFudGFzeVwifSxcblx0XHRcdHtuYW1lOiBcImhpc3RvcnlcIn0sXG5cdFx0XHR7bmFtZTogXCJteXN0ZXJ5XCIsIGlkOiAxMX0sXG5cdFx0XHR7bmFtZTogXCJtdXNpY2FsXCJ9LFxuXHRcdFx0e25hbWU6IFwid2VzdGVyblwifVxuXHRcdF07XG5cdFx0JHNjb3BlLnNlbGVjdD0gZnVuY3Rpb24oZ2VucmUpIHtcbiAgICAgICBcdFx0JHNjb3BlLnNlbGVjdGVkID0gZ2VucmU7IFxuICAgIFx0fTtcblx0ICAgICRzY29wZS5nZW5yZUNsYXNzID0gZnVuY3Rpb24oZ2VucmUpIHtcblx0ICAgICAgICByZXR1cm4gZ2VucmUgPT09ICRzY29wZS5zZWxlY3RlZCA/ICdhY3RpdmUnIDogdW5kZWZpbmVkO1xuXHQgICAgfTtcblxuXG5cdH1dKTtcblxuXHRhcHAuY29udHJvbGxlcigndmlkZW9MaXN0aW5nQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJ3NoYXJlZFZpZGVvcycsIGZ1bmN0aW9uKCRzY29wZSwgc2hhcmVkVmlkZW9zKSB7XG5cdFx0JHNjb3BlLnByb2dyYW1zID0gc2hhcmVkVmlkZW9zO1xuXG5cdH1dKTtcblxuXG5cblxuXG5cbn0pKCk7XG4oZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHBEaXJlY3RpdmVNb2R1bGUnLCBbXSk7XG4gICAgICAgIGFwcC5kaXJlY3RpdmUoJ25nRW50ZXInLCBmdW5jdGlvbiAoKSB7Ly9kaXJlY3RpdmUgZm9yIGVudGVyIGtleVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmJpbmQoXCJrZXlkb3duIGtleXByZXNzXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZihldmVudC53aGljaCA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS4kZXZhbChhdHRycy5uZ0VudGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG59KSgpO1xuKGZ1bmN0aW9uKCl7XG5cdHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwRmFjdG9yaWVzTW9kdWxlJywgW10pO1xuXHRhcHAuZmFjdG9yeSgneW91dHViZUFwaVNlcnZpY2UnLCBbJyRodHRwJywgZnVuY3Rpb24oJGh0dHApIHtcblx0XHR2YXIgeW91dHViZUFQSSA9IHt9O1x0XG5cdFx0eW91dHViZUFQSS5nZXRWaWRlb3MgPSBmdW5jdGlvbihzZWFyY2hVcmwpIHtcblx0XHRcdHJldHVybiAkaHR0cCh7XG5cdFx0XHRcdG1ldGhvZDogJ0pTT05QJyxcblx0XHRcdFx0dXJsOiBzZWFyY2hVcmwsXG5cdFx0XHRcdGNhY2hlOiB0cnVlXG5cdFx0XHR9KTtcblx0XHR9Oy8vZ2V0VmlkZW9zXG5cdFx0cmV0dXJuIHlvdXR1YmVBUEk7XG5cdH1dKTtcblx0YXBwLmZhY3RvcnkoJ3JvdHRlblRvbWF0b2VzU2VydmljZScsIFsnJGh0dHAnLCBmdW5jdGlvbigkaHR0cCkge1xuXHRcdHZhciByb3R0ZW5Ub21hdG9lc0FQSSA9IHt9O1xuXHRcdHJvdHRlblRvbWF0b2VzQVBJLmdldFJhdGluZ3MgPSBmdW5jdGlvbih1cmwpIHtcblx0XHRcdHJldHVybiAkaHR0cCh7XG5cdFx0XHRcdG1ldGhvZDogJ0pTT05QJyxcblx0XHRcdFx0dXJsOiB1cmwsXG5cdFx0XHRcdGNhY2hlOiB0cnVlXG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdHJldHVybiByb3R0ZW5Ub21hdG9lc0FQSTtcblx0fV0pO1xuXG5cdGFwcC5mYWN0b3J5KCdzaGFyZWRWaWRlb3MnLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgc2hhcmVkVmlkZW9zID0ge307XG5cblx0XHRyZXR1cm4gc2hhcmVkVmlkZW9zO1xuXHR9KTtcblxufSkoKTtcblxuKGZ1bmN0aW9uKCkge1xuXHR2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcEZpbHRlcnNNb2R1bGUnLCBbXSk7XG5cdFx0YXBwLmZpbHRlcignY2FwaXRhbGl6ZScsIGZ1bmN0aW9uKCkge1xuXHQgIFx0XHRyZXR1cm4gZnVuY3Rpb24oaW5wdXQpIHtcblx0ICBcdFx0XHRpZihpbnB1dCBpbnN0YW5jZW9mIEFycmF5KSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIGwgPSBpbnB1dC5sZW5ndGgsIG8gPSBbXTsgaSA8IGw7IGkrKykge1xuXHRcdFx0XHRcdFx0by5wdXNoKGlucHV0W2ldWzBdLnRvVXBwZXJDYXNlKCkgKyBpbnB1dFtpXS5zbGljZSgxKSk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZXR1cm4gbztcblx0XHRcdFx0fVxuXHQgIFx0XHRcdGVsc2Vcblx0ICBcdFx0XHRcdHJldHVybiBpbnB1dFswXS50b1VwcGVyQ2FzZSgpICsgaW5wdXQuc2xpY2UoMSk7XG5cdCAgXHR9XG5cdCAgXHRhcHAuZmlsdGVyKCd0cnVzdGVkJywgZnVuY3Rpb24gKCRzY2UpIHtcblx0XHQgICAgcmV0dXJuIGZ1bmN0aW9uKHVybCkge1xuXHRcdCAgICBcdGlmKHVybCAhPSB1bmRlZmluZWQpIHtcblx0XHRcdCAgICAgICAgcmV0dXJuICRzY2UuZ2V0VHJ1c3RlZFJlc291cmNlVXJsKHVybCk7XG5cdFx0ICAgIFx0fVxuXHRcdCAgICB9O1xuXHRcdH0pOyAgXG5cdH0pO1xufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=