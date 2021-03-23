package common

import (
	"errors"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/yuanzhangcai/config"
)

const (
	TokenExpireDuration       = time.Hour * 3
	TokenCookieExpireDuration = 3 * 60 * 60
	TokenCookieName           = "_t"
	LoginFailedCountPreDay    = 5 // 密码连续错误5次，限制一小时内不能登录
)

type LoginClaims struct {
	Email string `json:"email"`
	jwt.StandardClaims
}

// GenToken 生成JWT
func GenToken(email string) (string, error) {
	c := LoginClaims{
		Email: email,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Add(TokenExpireDuration).Unix(), // 过期时间
			Issuer:    "zacyuan_blog",                             // 签发人
		},
	}
	// 使用指定的签名方法创建签名对象
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, c)
	// 使用指定的secret签名并获得完整的编码后的字符串token
	return token.SignedString([]byte(config.GetString("common", "jwt_secret")))
}

// ParseToken 解析JWT
func ParseToken(tokenString string) (*LoginClaims, error) {
	// 解析token
	token, err := jwt.ParseWithClaims(tokenString, &LoginClaims{}, func(token *jwt.Token) (i interface{}, err error) {
		return []byte(config.GetString("common", "jwt_secret")), nil
	})
	if err != nil {
		return nil, err
	}
	if claims, ok := token.Claims.(*LoginClaims); ok && token.Valid { // 校验token
		return claims, nil
	}
	return nil, errors.New("invalid token")
}
