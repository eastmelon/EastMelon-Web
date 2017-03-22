/**
 * Created by hudw on 2017/2/27.
 */
/*
 * 程序入口文件
 * */
//加载express模块
var express=require('express');

//加载模板模块
var swig=require('swig');
//加载数据库
var mongoose=require('mongoose');
//创建app应用
var app=express();
var bodyParser=require('body-parser');
//设置静态文件托管
//当前用户访问的url以/public开始，那么直接返回对应__dirname+'/public'下的文件
app.use('/public',express.static(__dirname+'/public'));
//配置应用模板
//定义当前应用所使用的模板引擎
//第一个参数：模板引擎的名称，同时也是模板文件的后缀，第二个参数表示用于处理模板内容的方法
app.engine('html',swig.renderFile);
//设置模板文件存放的目录,第一个必须是views 第二个是目录
app.set('views','./views');
//第一个参数必须是view engine ,第二个和app engine这个方法中定义的模板引擎的名称（第一个参数）是一致的
app.set('view engine','html');
//方便开发时候的调试，取消缓存
swig.setDefaults({cache:false})

//配置传参模板
app.use(bodyParser.urlencoded({extended:true}));
/*
 * 模块划分
 * */
/*app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));*/
app.use('/',require('./routers/main'));
app.listen(80);
//链接数据库
/*mongoose.connect('mongodb://localhost:27017/blog',function(err){
    if(err){
        console.log('数据库链接失败');
    }else{
        console.log('数据库链接成功');
        //监听http请求
        app.listen(8088);
        setTimeout(function(){
            console.log("aaa");
        },5000)
    }
})*/
/*
 app.get('/',function(req,res,next){
 */
/*
 * 读取views目录下的指定文件，解析并返回给客户端
 * 1.第一个参数表示模板的文件
 * 2.传递给模板的参数
 * *//*

 res.render('index');
 //res.send('welcome');
 })*/
