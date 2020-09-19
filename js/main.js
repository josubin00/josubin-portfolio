/**
 * Designnas Hong
 * Created by Jang Ho Seok on 2018-03-15.
 */


$(document).ready(function() {

    $('#fullpage').fullpage({


        /*

        네이게이션 (nav)를 만들려고 한다면 반드시 페이지별 추가를 해야 합니다!

        원스크롤 라이브러리가 페이지를 인식할 수 있도록

        anchors 와 navigationTooltips 모두 페이지 별로 추가시키세요

        ex ) 총 페이지가 20페이지라면 Page20까지 만들어야 합니다.

         */

        anchors: ['Page00','Page01', 'Page02', 'Page03', 'Page04', 'Page05'],

        navigationTooltips: ['Page00','Page01', 'Page02', 'Page03', 'Page04', 'Page05'],

        afterLoad: function(anchorLink, index){
            if (index == 1) {
            } else {
            }

        }

    });



});