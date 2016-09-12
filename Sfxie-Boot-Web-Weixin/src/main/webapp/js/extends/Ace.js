(function($){
	$.fn.extend({
		//aceMenu start
		aceMenu:function(settings) {
			var _nav= this;
			var opts = $.fn.extend({
				dashboardClick: null,
				itemClick: null
			},settings);
			
			$.extend($.fn.aceMenu, {
				addDashboard: function (dashboard){
					var dashboardString = ''+
					'<li class="active">'+
					'	<a class="" url="{dashboardhref}" href="javascript:">'+
					'		<i class="menu-icon fa {dashboardicon}"></i>'+
					'		<span class="menu-text"> {dashboardtitle} </span>'+
					'	</a>'+
					'	<b class="arrow"></b>'+
					'</li>';
					dashboardString  = dashboardString.format({dashboardtitle: dashboard['title']},
							 {dashboardicon: dashboard['icon']},
							 {dashboardhref: dashboard['href']});
					var element = $(dashboardString);
					$('a',element).bind({
						click: function(){
							if(opts.dashboardClick){
								opts.dashboardClick(this,dashboard);
							}
						}
					});
					_nav.append(element);
				},
				addMenu: function (menuItem){
					var menuString = 
						'<li id="{id}" class="">'+
						'	<a href="#" class="dropdown-toggle">'+
						'		<i class="menu-icon fa {icon}"></i>'+
						'		<span class="menu-text">'+
						'			{title}'+
						'		</span>'+
						'		<b class="arrow fa fa-angle-down"></b>'+
						'	</a>'+
						'	<b class="arrow"></b>'+
						'	<ul class="submenu">'
						'	</ul>'+
						'</li>';

					menuString = menuString.format({title: menuItem['title']},{id: menuItem['id']},{icon: menuItem['icon']});
					_nav.append(menuString);
				},
				addMenuItem: function (parentId,item){
					var submenuString = 
					'		<li id="{id}" class="">'+
					'			<a url="{submenuhref}" href="javascript:">'+
					'				<i class="menu-icon fa {submenuicon}"></i>'+
					'				<span style="color:red;">{submenutitle}</span>'+
					'				{subMenuEndString}'+		
					'			</a>'+
					'		</li>';

					submenuString =  submenuString.format({'submenutitle': item['title']},
																	{'submenuhref': item['href']},
																	{'id': item['id']},
																	{'submenuicon': item['icon']},
																	{'subMenuEndString': ''});
					var element = $(submenuString);
					$('a',element).bind({
						click: function(){
							if(opts.itemClick){
								opts.itemClick(this,item);
							}
						}
					});
					$('#'+parentId+' ul.submenu').append(element);
				},
				remove: function (id){
					$('#'+id).remove();
				}
			});

			$.fn.aceMenu.addDashboard(settings['dashboard']);
			var menus = settings['menu'];
			for(var i=0;i<menus.length;i++){
				var menu = menus[i];
				$.fn.aceMenu.addMenu(menu);
				var submenu = menu['submenu'];
				if(submenu && submenu.length>0){
					for(var j=0;j<submenu.length;j++){
						item = submenu[j];
						$.fn.aceMenu.addMenuItem(menu['id'],item);
					}
				}
			}
		}
	//aceMenu end
	//aceTable start
	,aceGrid: function(settings,navGridSettingss){
		var grid= this;
		var opts = $.fn.extend(true,{
			viewrecords : true,
			rowNum:10,
			rowList:[10,20,30],
			altRows: true,
			//toppager: true,
			multiselect: true,
			//multikey: "ctrlKey",
	        multiboxonly: true,
			autowidth: true,
			grouping:true, 
			groupingView : { 
				 groupField : ['name'],
				 groupDataSorted : true,
				 plusicon : 'fa fa-chevron-down bigger-110',
				 minusicon : 'fa fa-chevron-up bigger-110'
			},
//				pager : pager_selector,
			recordpos: 'right',
			toppager:true
		},settings);
		var navGridOpts = $.fn.extend(true,{
			options:{ 	//navbar options
				edit: true,
				editicon : 'ace-icon fa fa-pencil blue',
				add: true,
				addicon : 'ace-icon fa fa-plus-circle purple',
				del: true,
				delicon : 'ace-icon fa fa-trash-o red',
				search: true,
				searchicon : 'ace-icon fa fa-search orange',
				refresh: true,
				refreshicon : 'ace-icon fa fa-refresh green',
				view: true,
				viewicon : 'ace-icon fa fa-search-plus grey',
				//放在顶部
				cloneToTop : true
			},
			edit: {
				//edit record form
				//closeAfterEdit: true,
				//width: 700,
	        	mtype: 'PUT',
				recreateForm: true
			},
			add: {
				//new record form
				//width: 700,
	        	mtype: 'POST',
				closeAfterAdd: true,
				recreateForm: true,
				viewPagerButtons: false
			},
			remove: {
				//delete record form
	        	mtype: 'DELETE',
				recreateForm: true,
				beforeShowForm : function(e) {
					var form = $(e[0]);
					if(form.data('styled')) return false;
					
					form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />')
					style_delete_form(form);
					
					form.data('styled', true);
				}
			},
			search: {
				//search form
	        	mtype: 'GET',
				recreateForm: true,
				multipleSearch: true,
				multipleGroup:true,
				afterRedraw: function(){
					style_search_filters($(this));
				},
				afterShowSearch: function(e){
					var form = $(e[0]);
					form.closest('.ui-jqdialog').find('.ui-jqdialog-title').wrap('<div class="widget-header" />')
					style_search_form(form);
				},
				showQuery: true
				
			},
			view: {
				//view record form
				recreateForm: true,
				beforeShowForm: function(e){
					var form = $(e[0]);
					form.closest('.ui-jqdialog').find('.ui-jqdialog-title').wrap('<div class="widget-header" />')
				}
			}
		},navGridSettingss);
		
		$(window).on('resize.jqGrid', function () {
			
			var grid_selector = "#"+$(grid).attr("id");
			var parent_width = $(grid_selector).closest('.main-content').width();
			$(grid_selector).jqGrid( 'setGridWidth', parent_width );
//			var parent_width = $(grid_selector).closest('.main-content').width();
//			$(grid_selector).jqGrid( 'setGridWidth', parent_width );
		});
	
		var _$grid = $(grid).jqGrid(opts);
		
		$(window).triggerHandler('resize.jqGrid');//trigger window resize to make the grid get the correct size
		
		_$grid.jqGrid('navGrid',navGridOpts.pagerSelector,
				navGridOpts.options,
				navGridOpts.edit,
				navGridOpts.add,
				navGridOpts.remove,
				navGridOpts.search,
				navGridOpts.view
		);
		
		
		function style_delete_form(form) {
			var buttons = form.next().find('.EditButton .fm-button');
			buttons.addClass('btn btn-sm btn-white btn-round').find('[class*="-icon"]').hide();//ui-icon, s-icon
			buttons.eq(0).addClass('btn-danger').prepend('<i class="ace-icon fa fa-trash-o"></i>');
			buttons.eq(1).addClass('btn-default').prepend('<i class="ace-icon fa fa-times"></i>')
		}
		
		function style_search_filters(form) {
			form.find('.delete-rule').val('X');
			form.find('.add-rule').addClass('btn btn-xs btn-primary');
			form.find('.add-group').addClass('btn btn-xs btn-success');
			form.find('.delete-group').addClass('btn btn-xs btn-danger');
		}
		function style_search_form(form) {
			var dialog = form.closest('.ui-jqdialog');
			var buttons = dialog.find('.EditTable')
			buttons.find('.EditButton a[id*="_reset"]').addClass('btn btn-sm btn-info').find('.ui-icon').attr('class', 'ace-icon fa fa-retweet');
			buttons.find('.EditButton a[id*="_query"]').addClass('btn btn-sm btn-inverse').find('.ui-icon').attr('class', 'ace-icon fa fa-comment-o');
			buttons.find('.EditButton a[id*="_search"]').addClass('btn btn-sm btn-purple').find('.ui-icon').attr('class', 'ace-icon fa fa-search');
		}
	}
	//aceTable end
	});
})(jQuery);