package models

import (
	"github.com/yuanzhangcai/chaos/models"
)

// Visit 访问记录表结构
type Visit struct {
	Time  uint64 `gorm:"primary_key"`
	Count uint64
}

// VisitModel 访问记录model
type VisitModel struct {
	models.Model
}

// NewVisitModel 创建VisitModel组件
func NewVisitModel() *VisitModel {
	model := &VisitModel{}
	model.SetDB(dbNote)
	model.DB.SingularTable(false)
	return model
}

// AddVisit 增加访问量
func (c *VisitModel) AddVisit(time string) error {
	return c.DB.Exec("insert into visits set time = ? , count = 1 ON DUPLICATE KEY UPDATE count = count + 1;", time).Error
}
