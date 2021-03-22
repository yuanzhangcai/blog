package controllers

import (
	"time"

	"github.com/jinzhu/gorm"
	"github.com/sirupsen/logrus"
	"github.com/yuanzhangcai/blog/common"
	"github.com/yuanzhangcai/blog/errors"
	"github.com/yuanzhangcai/blog/models"
	cerrors "github.com/yuanzhangcai/chaos/errors"
	cmodels "github.com/yuanzhangcai/chaos/models"
	"github.com/yuanzhangcai/config"
)

// UserCtl 微信公众号组件
type UserCtl struct {
	BaseCtl
}

// Message 根目录
func (c *UserCtl) Info() {
	c.Ctx.String(200, `
	{
		"name": "傲雨醉松",
		"avatar": "https://zacyuan.cn/images/header.gif",
		"userid": "00000001",
		"email": "zacyuan@qq.com",
		"signature": "不以物喜，不以己悲。",
		"title": "后端开发",
		"group": "蚂蚁集团－某某某事业群－某某平台部－某某技术部－UED",
		"tags": [
			{
				"key": "0",
				"label": "80后"
			},
			{
				"key": "1",
				"label": "技术宅"
			},
			{
				"key": "2",
				"label": "精神小伙"
			},
			{
				"key": "3",
				"label": "江西人"
			},
			{
				"key": "4",
				"label": "数码控"
			},
			{
				"key": "5",
				"label": "匠人"
			},
			{
				"key": "6",
				"label": "半栈"
			}
		],
		"notifyCount": 12,
		"unreadCount": 11,
		"country": "China",
		"geographic": {
			"province": {
				"label": "上海市",
				"key": "330000"
			},
			"city": {
				"label": "嘉定区",
				"key": "330100"
			}
		},
		"address": "西湖区工专路 77 号",
		"phone": "0752-268888888"
	}
	`)
}

func (c *UserCtl) Register() {
	params := &models.User{}
	err := c.Ctx.ShouldBind(params)
	if err != nil {
		logrus.Error(err)
		c.Output(cerrors.Wrap(errors.ErrParamsBind, err), nil)
		return
	}

	model := models.NewUserModel()
	_, err = model.GetInfo(&models.User{Email: params.Email})
	if err == nil {
		c.Output(errors.ErrUserEmailIsExist, nil)
		return
	}

	params.CreateTime = cmodels.GormTime{Time: time.Now()}
	params.UpdateTime = cmodels.GormTime{Time: time.Now()}
	params.Type = models.UserTypeUser
	params.Password = params.CreatePassword()

	err = model.Add(params)
	if err != nil {
		logrus.Error(err)
		c.Output(cerrors.Wrap(errors.ErrDBFailed, err), nil)
		return
	}

	c.Output(errors.OK, nil)
}

// Login 登录
func (c *UserCtl) Login() {
	params := &struct {
		Email    string `json:"email" form:"email" binding:"required"`
		Password string `json:"password" form:"password" binding:"required"`
	}{}

	err := c.Ctx.ShouldBind(params)
	if err != nil {
		logrus.Error(err)
		c.Output(cerrors.Wrap(errors.ErrParamsBind, err), nil)
		return
	}

	model := models.NewUserModel()
	userInfo, err := model.GetInfo(&models.User{Email: params.Email})
	if gorm.IsRecordNotFoundError(err) {
		c.Output(errors.ErrUserEmailIsNotExist, nil)
		return
	} else if err != nil {
		logrus.Error(err)
		c.Output(cerrors.Wrap(errors.ErrDBFailed, err), nil)
		return
	}

	temp := &models.User{Email: params.Email, Password: params.Password}
	if userInfo.Password != temp.CreatePassword() {
		c.Output(errors.ErrUserEmailOrPasswordIsNotRight, nil)
		return
	}

	token, err := common.GenToken(userInfo.Email)
	if err != nil {
		c.Output(cerrors.Wrap(errors.ErrGetToken, err), nil)
		return
	}

	c.Ctx.SetCookie("_t", token, 3*60*60, "/", config.GetString("common", "cookie_domain"), config.GetBool("common", "cookie_secure"), true)
	c.Output(errors.OK, map[string]interface{}{"type": userInfo.Type})
}

// Logout 登出
func (c *UserCtl) Logout() {

}
