package errors

import (
	"github.com/yuanzhangcai/chaos/errors"
)

// Error 异常类型
var (

	// OK 正常。
	OK        = errors.New(0, "OK")
	ErrSystem = errors.New(-999, "系统错误")
)
