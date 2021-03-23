package controllers

import (
	"time"

	"github.com/sirupsen/logrus"

	"github.com/yuanzhangcai/blog/errors"
	"github.com/yuanzhangcai/blog/models"
	"github.com/yuanzhangcai/chaos/common"
)

// VisitCtl 访问统计组件
type VisitCtl struct {
	BaseCtl
}

// Visit 登出
func (c *VisitCtl) Visit() {
	model := models.NewVisitModel()
	params := time.Now().Format(common.YMDH)
	err := model.AddVisit(params)
	if err != nil {
		logrus.Error(err)
	}
	c.Output(errors.OK, nil)
}
