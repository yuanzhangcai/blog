package errors

import (
	"github.com/yuanzhangcai/chaos/errors"
)

// Error 异常类型
var (

	// OK 正常。
	OK = errors.New(0, "OK")

	// ErrParamsBind 参数错误。
	ErrParamsBind = errors.New(-100, "参数错误。")

	// ErrUserEmailIsExist 该邮箱已经被注册过了。
	ErrUserEmailIsExist = errors.New(-200, "该邮箱已经被注册过了。")
	// ErrUserEmailIsNotExist 账号尚未已注册。
	ErrUserEmailIsNotExist = errors.New(-201, "账号尚未已注册。")
	// ErrUserEmailOrPasswordIsNotRight
	ErrUserEmailOrPasswordIsNotRight = errors.New(-202, "账号或密码不正确。")

	// ErrGetCookie 获取cookie失败。
	ErrGetCookie = errors.New(-995, "获取cookie失败。")

	// ErrGetToken 生成登录token失败。
	ErrGetToken = errors.New(-996, "生成登录token失败。")

	// ErrDBFailed 数据库操作失败。
	ErrDBFailed = errors.New(-997, "数据库操作失败。")

	// ErrNoLogin 没有登录。
	ErrNoLogin = errors.New(-998, "没有登录。")

	ErrSystem = errors.New(-999, "系统错误")
)
