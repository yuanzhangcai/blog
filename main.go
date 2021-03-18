package main

import (
	"github.com/yuanzhangcai/blog/routers"
	"github.com/yuanzhangcai/chaos"
)

func main() {
	// 启动服务
	chaos.Start(routers.SetRouters)
}
