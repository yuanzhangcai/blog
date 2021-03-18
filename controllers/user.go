package controllers

import (
	"fmt"

	"github.com/yuanzhangcai/chaos/controllers"
	"github.com/yuanzhangcai/chaos/errors"
)

// UserCtl 微信公众号组件
type UserCtl struct {
	controllers.Controller
}

// Message 根目录
func (c *UserCtl) Info() {
	fmt.Println("user " + c.Params.Get("user"))
	params := &struct {
		User string `json:"user"`
	}{}

	err := c.Ctx.ShouldBind(&params)
	fmt.Println(err, params)

	c.Ctx.String(200, `
	{
		"name": "傲雨醉松",
		"avatar": "./images/header.gif",
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
				"label": "油腻大叔"
			},
			{
				"key": "3",
				"label": "江西人"
			},
			{
				"key": "4",
				"label": "数码控"
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

func (c *UserCtl) Visit() {
	c.Output(errors.OK)
}
