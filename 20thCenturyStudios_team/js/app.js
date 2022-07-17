$(function(){

  /*** #gnb toggle ***/
  // 1. 열기: #toggle-btn 클릭시 #gnb on
  $('#btn-menu').click(function(){
    $('#gnb-menu').addClass('on');
  });
  // 2. 닫기: #btn-close 클릭시 #gnb 닫음
  $('#btn-close').click(function(){
    $('#gnb-menu').removeClass('on');
  });

/*** 검색창 열고, 닫기 */
// 1. #icon-menu .bi-search 누르면 열기
$('#gnb .bi-search').click(function(){
  $(".search-box").addClass('on');
});
// 2. .search-box .btn-close 누르면 닫기
$('.search-box .btn-close').click(function(){
  $(".search-box").removeClass('on');
})
}); 