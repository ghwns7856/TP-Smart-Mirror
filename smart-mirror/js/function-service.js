var FUNCTIONSERVICE = {
	defaultHome : function($scope) {
		console.debug("Ok, going to default view...");
        if(responsiveVoice.voiceSupport()) {
          responsiveVoice.speak("홈 화면으로 갈게요.","Korean Female");
        }
        $scope.focus = "default";
	},
	whoIsSmartMirror : function($scope) {
		console.log("Who is Smart Mirror");
		if(responsiveVoice.voiceSupport()) {
	          responsiveVoice.speak("저는 당신을 도와줄 수 있는 스마트 미러입니다.","Korean Female");
        }
		$scope.focus = "whoissmartmirror";
	},
	goSleep : function($scope){
		console.debug("Ok, going to sleep...");
        if(responsiveVoice.voiceSupport()) {
          responsiveVoice.speak("다음에 봐요!","Korean Female");
        }
        $scope.focus = "sleep";
	},
	wake : function($scope) {
		console.debug("Wake up...");
		if(responsiveVoice.voiceSupport()) {
            responsiveVoice.speak("안녕하세요!","Korean Female");
          }
    	$scope.focus = "default";
	},
	whatCanISay : function($scope){
		console.debug("Here is a list of commands...");
        if(responsiveVoice.voiceSupport()) {
          responsiveVoice.speak("명령어 리스트입니다.","Korean Female");
        }
        $scope.focus = "commands";
	},
	map : function($scope,GeolocationService,MapService) {
		console.debug("Home map ...");
        GeolocationService.getLocation({enableHighAccuracy: true}).then(function(geoposition){
            console.log("Geoposition", geoposition);
            $scope.map = MapService.generateMap(geoposition.coords.latitude+','+geoposition.coords.longitude);

            $scope.focus = "map";
        });
        if(responsiveVoice.voiceSupport()) {
          responsiveVoice.speak("현재 위치 입니다.","Korean Female");
        }
	},
	location : function(location,$scope,GeolocationService,MapService) {
		console.debug("Getting map of", location);
        $scope.map = MapService.generateMap(location);
        if(responsiveVoice.voiceSupport()) {
          responsiveVoice.speak(location + "의 지도입니다.","Korean Female");
        }
        $scope.focus = "map";
	},
	news: function($scope) {
		console.debug("News..");
		
		if(responsiveVoice.voiceSupport()) {
            responsiveVoice.speak("실시간 뉴스입니다.","Korean Female");
          }
		
		$('#news-div').load('https://news.google.co.kr/news?pz=1&zx=muklwsp2gkt0 .section-toptop .esc-lead-article-title .titletext',function(){
  			console.log('news loaded.');
  		});
		$scope.focus = "news";
	},
	playYoutube : function(term,$scope,$sce,YoutubeService) {
		console.log("Play Youtube");
		
		if(responsiveVoice.voiceSupport()) {
        	responsiveVoice.speak("유튜브를 동영상을 재생합니다.","Korean Female");
        }
		YoutubeService.getYoutube(term,'video').then(function(){
			if(term){
	            var videoId = YoutubeService.getVideoId()
	            $scope.focus = "youtube";
	            $scope.youtubeurl = "http://www.youtube.com/embed/" + videoId + "?autoplay=1&enablejsapi=1&version=3&playerapiid=ytplayer"
	            $scope.currentYoutubeUrl = $sce.trustAsResourceUrl($scope.youtubeurl);
            }
        });
	},
	stopYoutube : function($scope) {
		console.debug("Stop Youtube");
		
		if(responsiveVoice.voiceSupport()) {
        	responsiveVoice.speak("유튜브를 동영상을 정지합니다.","Korean Female");
        }
		
		var iframe = document.getElementsByTagName("iframe")[0].contentWindow;
        iframe.postMessage('{"event":"command","func":"' + 'stopVideo' +   '","args":""}', '*');
        $scope.focus = "default";
	},
	subway : function(station,linenumber,updown,$scope,SubwayService) {
		console.debug("subway");
		SubwayService.init(station).then(function(){
            SubwayService.getArriveTime(linenumber,updown).then(function(data){
              if(data != null){
                $scope.subwayinfo1 = data[1].ARRIVETIME + "에 " + data[1].SUBWAYNAME + "행 열차";
                $scope.subwayinfo2 = data[2].ARRIVETIME + "에 " + data[2].SUBWAYNAME + "행 열차";
                $scope.subwayinfo3 = data[3].ARRIVETIME + "에 " + data[3].SUBWAYNAME + "행 열차";
                $scope.subwayinfo4 = data[4].ARRIVETIME + "에 " + data[4].SUBWAYNAME + "행 열차";
         
                if(responsiveVoice.voiceSupport()) {
                	responsiveVoice.speak(data[1].ARRIVETIME + "에 " + data[1].SUBWAYNAME + "행 열차가 있습니다. 이어서,"+data[2].ARRIVETIME + "에 " + data[2].SUBWAYNAME + "행 열차가 있습니다.","Korean Female");
                }
              }else{
                $scope.subwayinfo = "운행하는 열차가 없습니다.";
                if(responsiveVoice.voiceSupport()) {
                	responsiveVoice.speak("운행하는 열차가 없습니다.","Korean Female");
                }
              }
              $scope.focus = "subway";
            });
          });
	}
	
};