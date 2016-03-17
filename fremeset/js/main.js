var oCh = document.documentElement.clientHeight;
if(document.body.clientHeight>=oCh){
	$('body').css('padding',0);
	$('.footer').css('position','initial');
}
else if(oCh>=document.body.clientHeight){
	$('body').css('height',oCh-120+'px');
}

// 收缩展开
$('.text_left ul li span').click(function(){
	if(!$(this).parent().attr('class') || $(this).parent().attr('class').indexOf('on') < 0)
	{
		$(this).parent().addClass('active on');
		if($(this).next()[0])
			$(this).next().css('height',$(this).next()[0].children[0].offsetHeight*$(this).next()[0].children.length+'px');
	}else
	{
		$(this).parent().removeClass('active on');		
		$(this).next().css('height',0);
	}
});

//上传 
 // 点击上传=>显示内容
$('.list_tab a.upload').click(function(){
	$('.b_box').show();
	$('.b_box .upload_box').show();
});

// 点击关闭=>隐藏内容
$('.upload_box .close').click(function(){
	$('.b_box').hide();
	// 关闭初始化
	$('.b_box .upload_box').hide();
	$('.upload_pho').removeClass('aut');
});

// 上传之后显示内容
$('.upload_box .up_btn input').change(function(){
	$('.upload_pho').addClass('aut');
});

// 确认上传
$('.btn .sure').click(function(){
	$('.b_box .upload_box').hide();
	// 确认、初始化
	$('.upload_pho').removeClass('aut');
	// 关闭弹出层
	$('.b_box').hide();
});

// 创建
 // 点击创建相册=>显示内容
$('.list_tab a.create').click(function(){
	$('.b_box').show();
	$('.b_box .add_album').show();

});

// 点击关闭=>隐藏内容
$('.add_album .close').click(function(){
	$('.b_box').hide();
	// 关闭初始化
	$('.b_box .add_album').hide();
});

// 确认
$('.add_album .btn').click(function(){
	$('.b_box .add_album').hide();
	// 关闭弹出层
	$('.b_box').hide();
});

// 删除相册
$('.photo .close').click(function(){
	$('.b_box').show();
	$('.b_box .remove_album').show();
	for(var i = 0; i < $('.photo .close').length; i++)
		$('.photo .close')[i].index = i;

	var index = this.index;
	var str = $('.photo ul li')[index].children[1].children[2].innerHTML;
	$('.remove_album .cont p').text('相册中有'+str.replace(/[^\d]/g,'')+'张图片，删除相册将把这些图片也一起删除，您确定要删除该相册吗？');
});

// 确定
$('.remove_album .btn a:eq(0)').click(function(){
	$('.b_box').hide();
	$('.b_box .remove_album').hide();
});

// 取消
$('.remove_album .btn a:eq(1)').click(function(){
	$('.b_box').hide();
	$('.b_box .remove_album').hide();
});

// 取消
$('.remove_album .close').click(function(){
	$('.b_box').hide();
	$('.b_box .remove_album').hide();
});

document.onmousewheel=function(){
	if($('.b_box')[0] && $('.b_box')[0].style.display == 'block')
		return false;
}

// 详细
$('.text_right .notice p a').click(function(){
	var str = $('.text_right .notice p')[0].innerHTML.replace(/<a href="#">\[ 详细 \]<\/a>/g,'');
		$('.b_box').show();
		$('.b_box .notice').show();
		$('.b_box .notice p').text(str)
});
// 关闭
$('.notice .close').click(function(){
	$('.b_box .notice').hide();
	$('.b_box').hide();

});

// 销售业绩展示
$('.exh_look').click(function(){
	$('.b_box').show();
	$('.b_box .exh').show();
});

// 关闭
$('.b_box .exh .close').click(function(){
	$('.b_box').hide();
	$('.b_box .exh').hide();
});

// 销售业绩展示
$('.inf_look').click(function(){
	$('.b_box').show();
	$('.b_box .l_cus_inf').show();
});

// 关闭
$('.b_box .l_cus_inf .close').click(function(){
	$('.b_box').hide();
	$('.b_box .l_cus_inf').hide();
});




































































































































































