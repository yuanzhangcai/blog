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

	// ErrDBFailed 数据库操作失败。
	ErrDBFailed = errors.New(-998, "数据库操作失败。")

	ErrSystem = errors.New(-999, "系统错误")
)
