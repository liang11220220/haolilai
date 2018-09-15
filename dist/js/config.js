//这里主要就是进行模块的配置，在什么文件夹下构建模块我们这里主要构建一个路劲赋值给变量，给他定义方便操作

require.config({
	baseUrl: "/",
	paths: {
		"jquery": "libs/jquery-1.12.4",
		"tab": "module/tab",
		"toast": "module/toast",
		"template": "libs/template-web",
		"url": "module/url",
		"header":"module/header",
		"footer":"module/footer",
		"fhelp":"module/fhelp",
		"lunbo":"module/lunbo",
		"loginyz":"module/loginyz",
		"zhuceyz":"module/zhuceyz",
		"cookie":"libs/jquery.cookie",
		"md5":"libs/md5"
	},
	shim: {//垫片
		toast:{
			deps:["jquery"]
		}/*,
		tab:{
			deps:["jquery","toast"]
		}*/,
		header:{
			deps:["jquery"]
		},
		footer:{
			deps:["jquery"]
		},
		fhelp:{
			deps:["jquery"]
		},
		lunbo:{
			deps:["jquery"]
		},
		loginyz:{
			deps:["jquery"]
		},
		zhuceyz:{
			deps:["jquery"]
		},
		cookie:{
			deps:["jquery"]
		}
	}
})

//去构建模块