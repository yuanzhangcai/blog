module github.com/yuanzhangcai/blog

go 1.16

replace (
	github.com/coreos/bbolt => go.etcd.io/bbolt v1.3.5
	github.com/coreos/go-systemd => github.com/coreos/go-systemd/v22 v22.1.0
// github.com/yuanzhangcai/chaos => /Users/zacyuan/MyWork/chaos
)

require (
	github.com/dgrijalva/jwt-go v3.2.0+incompatible
	github.com/gin-contrib/cors v1.3.1
	github.com/gin-gonic/gin v1.6.3
	github.com/jinzhu/gorm v1.9.16
	github.com/sirupsen/logrus v1.8.1
	github.com/yuanzhangcai/chaos v0.0.0-20210407122338-01b3e881bb7c
	github.com/yuanzhangcai/config v0.0.0-20200806074344-66e1e22e6731
)
