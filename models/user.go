package models

import (
	"github.com/jinzhu/gorm"
	"github.com/yuanzhangcai/chaos/common"
	"github.com/yuanzhangcai/chaos/models"
)

const (
	dbNote        = "blog"
	UserTypeSuper = "super"
	UserTypeAdmin = "admin"
	UserTypeUser  = "user"

	passwordSecret = "_blog_secret"
)

// User 用户表结构
type User struct {
	ID         uint64          `json:"-" form:"id" gorm:"primary_key"`
	Email      string          `json:"email" form:"email" binding:"required"`
	Nickname   string          `json:"nickname" form:"nickname" binding:"required"`
	Avatar     string          `json:"avatar" form:"avatar"`
	Signature  string          `json:"signature" form:"signature"`
	Password   string          `json:"-" form:"password" binding:"required"`
	Mobile     uint64          `json:"-" form:"mobile"`
	Province   string          `json:"province" form:"province"`
	Address    string          `json:"-" form:"address"`
	Type       string          `json:"type" form:"type"`
	Status     int             `json:"status" form:"status"`
	CreateTime models.GormTime `json:"-"`
	UpdateTime models.GormTime `json:"-"`
	Tags       []string        `json:"tags" gorm:"-"`
}

func (c *User) CreatePassword() string {
	if c.Password == "" || c.Email == "" {
		return ""
	}

	return common.Md5Str(c.Email + "_" + c.Password + passwordSecret)
}

// UserModel 用户model
type UserModel struct {
	models.Model
}

// NewUserModel 创建UserModel组件
func NewUserModel() *UserModel {
	model := &UserModel{}
	model.SetDB(dbNote)
	model.DB.SingularTable(false)
	return model
}

// GetInfo 获取帐户信息
func (c *UserModel) GetInfo(params *User) (*User, error) {
	err := c.DB.Where(params).First(params).Error
	return params, err
}

// Add 创建账户
func (c *UserModel) Add(params *User) error {
	return c.DB.Create(params).Error
}

// Modify 修改帐户信息
func (c *UserModel) Modify(user *User) (int64, error) {
	if user.ID == 0 {
		return 0, gorm.ErrRecordNotFound
	}

	params := &User{}
	params.ID = user.ID
	ret := c.DB.Model(&params).Updates(user)
	return ret.RowsAffected, ret.Error
}
