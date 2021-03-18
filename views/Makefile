default: prod

prod:
	yarn build
	tar -czf dist.tar.gz  dist
	scp dist.tar.gz zacyuan@zacyuan.cn:/data/temp/user
	ssh zacyuan@zacyuan.cn 'cd /data/temp/user/; rm -rf dist; tar -xf dist.tar.gz; rm -rf /data/html/blog/*; cp -rf ./dist/* /data/html/blog/'

.PHONY: prod