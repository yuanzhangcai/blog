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
		// 兑换接口
		services.HandleAll(blog, "/user/info", []string{http.MethodGet, http.MethodPost}, ctl, "Info")
		services.HandleAll(blog, "/visit", []string{http.MethodGet, http.MethodPost}, ctl, "Visit")
	}
}
