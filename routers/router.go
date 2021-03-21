package routers

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/yuanzhangcai/blog/controllers"
	"github.com/yuanzhangcai/chaos/services"
)

// SetRouters 设置路径
func SetRouters(router *gin.Engine) {
	router.Use(cors.Default())

	ctl := &controllers.UserCtl{}

	blog := router.Group("/blog")
	{
		// 获取帐户信息接口
		services.HandleAll(blog, "/user/info", []string{http.MethodGet, http.MethodPost}, ctl, "Info")

		// 帐户注册
		services.HandleAll(blog, "/user/register", []string{http.MethodGet, http.MethodPost}, ctl, "Register")

	}
}
