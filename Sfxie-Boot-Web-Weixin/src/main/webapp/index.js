var settings = {
		dashboardClick: function(self,data){
		},
		itemClick: function(self,data){
			$.fn.jerichoTab.addTab({
                title: data['title'],
                tabFirer: $(self),
                data: {
                    dataType: 'iframe',
                    dataLink: data['href']
                }
            }).loadData();
			
		},
		dashboard:{
			title: '面板',
			icon: 'fa-tachometer',
			href: 'index.html'
		},
		menu: [{
			title: '微信基础配置',
			id:'weixinbase',
			icon: 'fa-cogs',
			submenu:[{
				id:'weixinbase1',
				href: 'jsp/weixin/jqgrid.html',
				title: '配置用户标识1',
				icon: 'fa-caret-right'
			},{
				id:'weixinbase2',
				href: 'http://www.baidu.com',
				title: '配置用户标识2',
				icon: 'fa-caret-right'
			}]
		},{
			title: '微信资源管理',
			id:'weixinresource',
			icon: 'fa-desktop',
			submenu:[{
				id:'weixinresource1',
				href: 'http://www.baidu.com',
				title: '上传资源',
				icon: 'fa-caret-right'
			}]
		},{
			title: '微信消息管理',
			id:'weixinmessage',
			icon: 'fa-comment',
			submenu:[{
				id:'weixinmessage1',
				href: 'http://www.baidu.com',
				title: '群发消息管理',
				icon: 'fa-caret-right'
			},{
				id:'weixinmessage2',
				href: 'http://www.baidu.com',
				title: '个人消息管理',
				icon: 'fa-caret-right'
			}]
		}]
	};
$('#__NAVID').aceMenu(settings);

$.fn.aceMenu.addMenuItem('weixinbase',{
	id:'weixinbase3',
	href: 'http://www.baidu.com',
	title: '配置用户标识3',
	icon: 'fa-caret-right'
});
$.fn.aceMenu.addMenu({
	title: '微信用户配置',
	id:'userConfig',
	icon: 'fa-user'
});
