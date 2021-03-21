package controllers

import (
	"github.com/yuanzhangcai/chaos/controllers"
	cerrors "github.com/yuanzhangcai/chaos/errors"
)

type BaseCtl struct {
	controllers.Controller
}

// Output 统一输出
func (c *BaseCtl) Output(ret *cerrors.Error, jData interface{}) {
	c.Result["ret"] = ret.Code()
	c.Result["msg"] = ret.Error()

	if jData != nil {
		c.Result["data"] = jData
	}

	c.OutputJSON()
}
