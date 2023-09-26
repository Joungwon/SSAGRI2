package com.ssafy.ssagri.util.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

/**
 *        CODE : 카테고리 (4자리 정수)
 *        MESSAFE : 메세지
 */
@Getter
@RequiredArgsConstructor
public enum CustomExceptionStatus {
    //ETC = 0xxx
    UTIL_ERR(-0100, "util 서비스 제공 도중 에러가 발생했습니다."),

    //Oauth
    OAUTH_USERINFO_PARSING_ERR(-900,"액세스 토큰 요청 후 유저 값 파싱 도중 문제가 발생했습니다."),

    //Register = 1xxx
    REGISTER_NICKNAME_IS_DUPLICATE(-1000, "유저 닉네임이 중복됩니다."),
    REGISTER_EMAIL_IS_DUPLICATE(-1001, "이메일이 중복됩니다."),
    //LOGIN = 11xx
    LOGIN_HAVE_NO_ACCOUT(-1101, "일치하는 계정이 없습니다."),
    LOGIN_GET_TOKEN_ERROR(-1102, "토큰 발급 과정에서 문제가 발생했습니다."),
    LOGIN_SAVE_TOKEN_ERROR(-1103, "토큰을 Redis로 저장하는 과정에서 문제가 발생했습니다."),
    USER_DOES_NOT_EXSIST(-1104,"존재하지 않는 유저 입니다."),

    //LOGOUT = 12xx
    LOGOUT_TOKEN_ERR(-1201, "토큰 헤더가 없거나 유효하지 않습니다."),

    //JWT = 13xx
    JWT_PARSING_ERR(-1300, "Null or Not Bearer Token"),
    JWT_TOKEN_EXPIRED(-1301, "만료된 토큰입니다."),
    JWT_TOKEN_INVALID(-1302, "유효하지 않은 토큰입니다."),
    JWT_TOKENTYPE_ERR(-1303, "TokenType Parsing중 오류가 발생했습니다."),

    //JWT token refill = 1400
    JWT_REFILL_COOKIE_NOT_EXIST(-1400, "Refresh Cookie가 존재하지 않습니다."),
    JWT_REFILL_COOKIE_VALUE_INVALID(-1401, "쿠키 안의 토큰 값이 유효하지 않습니다."),
    JWT_REFILL_COOKIE_REDIS_NOT_MATCHED(-1402, "쿠키는 유효하나, Redis 서버에 유저 정보가 없습니다."),
    JWT_REFILL_CREATE_TOKEN_ERR(-1403, "액세스 토큰 발급과정에서 문제가 발생했습니다."),

    //Mail service = 15xx
    MAIL_SEND_ERR(-1500, "메일 전송 과정 중 에러가 발생했습니다."),
    MAIL_AUTH_SAVE_ERR(-1501, "인증번호를 Redis에 저장하는 중 에러가 발생했습니다."),

    //Redis = 16xx
    REDIS_GET_VALUE_FAIL(-1600, "redis 키값으로 value를 찾아오는 것을 실패했습니다. (입력 값 다름)"),

    //file = 17xx
    FILE_UPLOAD_FAIL(-1700, "파일 업로드 과정에서 문제가 발생했습니다."),
    FILE_DOWNLOAD_FAIL(-1701, "파일 다운로드 과정에서 문제가 발생했습니다."),

    //mypage = 18xx
    MYPAGE_PROFILE_FAIL(-1800, "마이페이지 프로필 갱신에 실패했습니다"),

    //Auction = 19xx
    AUCTION_PRODUCT_DOES_NOT_EXIST(-1900, "존재하지 않는 경매 상품입니다."),

    //ChatRoom = 2xxx
    CHATROOM_DOES_NOT_EXIST(-2002, "존재하지 않는 채팅방입니다."),

    //UsedProduct = 3xxx
    USED_PRODUCT_DOES_NOT_EXIST(-3001, "존재하지 않는 중고상품 입니다."),
    USED_PRODUCT_LIKE_ALREADY_EXIST(-3002, "이미 좋아한 상품 입니다."),
    USED_PRODUCT_LIKE_DOES_NOT_EXIST(-3003,"좋아하지 않는 상품 입니다."),

    //SseEmitter = 31xx
    SSEEMITTER_CAN_NOT_CREATE(-3100,"SseEmitter 가 생성되지 않았습니다."),
    SSEEMITTER_DOES_NOT_EXIST(-3101,"존재하지 않는 SseEmitter 입니다.");




    private final int code;
    private final String message;

}


