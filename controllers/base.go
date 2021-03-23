package controllers

import (
	"github.com/sirupsen/logrus"
	"github.com/yuanzhangcai/blog/common"
	"github.com/yuanzhangcai/chaos/controllers"
	cerrors "github.com/yuanzhangcai/chaos/errors"
	"github.com/yuanzhangcai/chaos/tools"
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

// checkLogin 检查登录
func (c *BaseCtl) checkLogin() (*common.LoginClaims, error) {
	token, _ := c.Ctx.Cookie(common.TokenCookieName)
	if token == "" {
		return nil, nil
	}

	redis := tools.GetRedis()
	ret := redis.Get(token)
	if ret.Val() == "1" {
		return nil, nil
	}

	claims, err := common.ParseToken(token)
	if err != nil {
		logrus.Error(err)
		return nil, err
	}
	return claims, nil
}
