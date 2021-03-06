package routers

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/yuanzhangcai/blog/controllers"
	"github.com/yuanzhangcai/chaos/common"
	"github.com/yuanzhangcai/chaos/services"
)

// SetRouters 设置路径
func SetRouters(router *gin.Engine) {

	router.Static("/html", "/Users/zacyuan/MyStandy/blog/views/dist")
	router.StaticFile("/", "/Users/zacyuan/MyStandy/blog/views/dist/index.html")
	router.StaticFile("/index.html", "/Users/zacyuan/MyStandy/blog/views/dist/index.html")

	if common.Env != common.EnvDev {
		router.Use(cors.New(cors.Config{
			AllowOrigins: []string{"https://www.zacyuan.cn"},
			AllowMethods: []string{"GET", "POST"},
			AllowHeaders: []string{"Origin", "Content-Length", "Content-Type"},
		}))
	} else {
		router.Use(cors.Default())
	}

	blog := router.Group("/blog")
	{
		{
			ctl := &controllers.UserCtl{}
			// 获取帐户信息接口
			services.HandleAll(blog, "/user/info", []string{http.MethodGet, http.MethodPost}, ctl, "Info")

			// 帐户注册
			services.HandleAll(blog, "/user/register", []string{http.MethodGet, http.MethodPost}, ctl, "Register")

			// 帐户登录
			services.HandleAll(blog, "/user/login", []string{http.MethodGet, http.MethodPost}, ctl, "Login")

			// 账户注销
			services.HandleAll(blog, "/user/logout", []string{http.MethodGet, http.MethodPost}, ctl, "Logout")

			// 检查登录状态
			services.HandleAll(blog, "/user/getLoginUserInfo", []string{http.MethodGet, http.MethodPost}, ctl, "GetLoginUserInfo")
		}

		{
			ctl := &controllers.VisitCtl{}
			services.HandleAll(blog, "/visit", []string{http.MethodGet, http.MethodPost}, ctl, "Visit")
		}
	}
}
