const { Router } = require('express')
const mongoose = require('mongoose')
const Category = require('../../models/Category')
const Article = require('../../models/Article')
module.exports = app=>{
    const router = require('express').Router()
    // const schema1 = new mongoose.Schema({})
    // const Category = mongoose.model('Category',schema)
    // const Article = mongoose.model('Article',schema)
    router.get('/news/init',async (reg,res) =>{
        const parent = await Category.findOne({
            name:'新闻分类'
        })
        const cats = await Category.find().where({
            parent:parent
        }).lean()//获取分类
        const newsTitles = ['峡谷夏日特别行动之狄某有话说|7月峡谷变化一览', '【赵云-未来纪元】技能特效研讨活动开启', '2022周年庆表现道具共创大赛开启', '峡谷夏日特别行动之狄某有话说|开局挂机还有理？不可取！', '王者夏日直播节开启，2022快手定制回城限时领！', '8月10日体验服停机更新公告', '8月5日体验服停机更新公告', '8月5日全服不停机更新公告', '8月4日组队界面显示异常说明', '8月4日全服不停机更新公告', '【赵云-未来纪元】技能特效研讨活动开启', '【音你闪耀】活动开启公告及FAQ', '【QQ福利】活动页面购买孙尚香皮肤抽Q币免单活动', '【微信用户专属】微信小程序"游戏礼品站"购买孙尚香新皮肤抽奖活动', '甜蜜峡谷来袭！孙尚香全新皮肤“音你闪耀”上线！', '武汉eStar.清融锁定周最佳，第三轮第二周群雄并起逐鹿赛场', '天下英雄谁敌手，夏季赛常规赛第九周风云变幻', 'K甲第八周回顾：53分打破时长纪录，溯确认降级', '武汉eStarPro.子阳豪取周最佳，第三轮第一周十二豪强捉对厮杀', '小胖宫本武藏单兵直入瞬杀C位初获周最佳，B组四队遗憾退场']
        const newsList = newsTitles.map(title =>{
            const randomCats = cats.slice(0).sort((a,b) => Math.random() - 0.5)
            return {
                categories:randomCats.slice(0,2),
                title:title
            }
        })
        await Article.deleteMany({})
        await Article.insertMany(newsList)
        res.send(newsList)
    })
    router.get('/news/list', async(req,res) => {
        // const parent = await Category.findOne({
        //     name:'新闻分类'
        // }).populate({
        //     path:'children',
        //     populate:{
        //         path:'newsList'
        //     }
        // }).lean()
        const parent = await Category.findOne({
            name:'新闻分类'
        })
        const cats = await Category.aggregate([//聚合查询
            {$match:{ parent:parent._id}},//条件查询
            {$lookup:{//join//外链接
                from:'articles',//关联的mongoose的表，集合名
                foreignField:'categories',
                localField:'_id',
                as:'newsList'
            }},
            {
                $addFields:{
                    newsList:{
                        $slice:['$newsList',5]//将newslist截为五个
                    }
                }
            }
        ])
        const subCats = cats.map(v => v._id)
        cats.unshift({//热门分类
            name:'热门',
            newsList:await Article.find().where({
                categories:{$in:subCats}
            }).populate('categories').limit(5).lean()
        })
        cats.map(cat =>{
            cat.newsList.map(news =>{
                news.categoriesName = cat.name ==='热门' ? news.categories[0] : cat.name
                return news
            })
        })
        res.send(cats)
    })


    app.use('/web/api',router)
}