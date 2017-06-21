/**
 * Created by DaiLV on 6/21/2017.
 */

$(document).ready(function () {
    //search box
    $('.bpm-search-form').hide();
    $('.bpm-header-btnsearch').click(function () {
        $('.bpm-header-btnsearch').hide();
        $('.bpm-search-form').fadeIn(1000, function () {
            $('.bpm-search-form').show();
        });
    });
    $('.bpm-search-form-c').click(function () {
        $('.bpm-search-form').fadeOut(1000, function () {
            $('.bpm-header-btnsearch').show();
            $('.bpm-search-form').hide();
        });

    })


    //menu user info
    $('.bpm-usermenu').hide();
    $('.bpm-header-userinfo-link').click(function () {
        $('.bpm-usermenu').fadeToggle(500);
    });

    //chatbox slidebar
    $('.bpm-chatbox-show').scrollTop(('.bpm-chatbox-show').scrollHeight);

    //bpm-onlchat-header toggle
    $('.bpm-onlchat-header').click(function () {
        var _div_on_chat = $(this).closest('.bpm-onlchat');
        var _chat_list = $('.bpm-onlchat-list', _div_on_chat).first();
        _chat_list.animate({
            height: 'toggle'
        });
    });

});