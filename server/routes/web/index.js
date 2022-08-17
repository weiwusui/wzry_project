const { Router } = require('express')
const mongoose = require('mongoose')
const Category = require('../../models/Category')
const Article = require('../../models/Article')
const Hero = require('../../models/Hero')
const Item = require('../../models/Item')
const Video = require('../../models/Video')
// const Hotvideo = require('../../models/HotVideo')
const V = require('../../models/V')

//导入新闻数据
module.exports = app => {
    const router = require('express').Router()
    // const schema1 = new mongoose.Schema({})
    // const Category = mongoose.model('Category',schema)
    // const Article = mongoose.model('Article',schema)
    router.get('/news/init', async (reg, res) => {
        const parent = await Category.findOne({
            name: '新闻分类'
        })
        const cats = await Category.find().where({
            parent: parent
        }).lean()//获取分类
        const newsTitles = ['峡谷夏日特别行动之狄某有话说|拒绝给消极态度找借口！', '2022周年庆表现道具设计大赛首轮投票开启', '8月11日全服不停机更新公告', '峡谷夏日特别行动之狄某有话说|7月峡谷变化一览', '【赵云-未来纪元】技能特效研讨活动开启', '陪你再战一万年！《乱世王者》携手《大话西游》共赴五周年庆典', '峡谷夏日特别行动之狄某有话说|拒绝给消极态度找借口！', '2022周年庆表现道具设计大赛首轮投票开启', '峡谷夏日特别行动之狄某有话说|7月峡谷变化一览', '【赵云-未来纪元】技能特效研讨活动开启', '8月15日体验服不停机更新公告', '“珍宝阁-兑稀有皮肤”活动异常说明', '8月13日体验服停机更新公告', '8月12日体验服停机更新完成公告', '8月12日体验服停机更新公告', '【蔷薇珍宝阁】活动开启公告', '《神女的闪烁》活动开启公告', '2022周年庆表现道具设计大赛首轮投票开启', '点券返利活动开启公告', '8月13日六大福利来袭！  娜可露露全新皮肤“前尘镜”上线！', '风物长宜放眼量，夏季赛常规赛收官周决战紫禁之巅', 'K甲第九周回顾：MTG零封收官，常规赛落下帷幕', '武汉eStar.清融锁定周最佳，第三轮第二周群雄并起逐鹿赛场', '天下英雄谁敌手，夏季赛常规赛第九周风云变幻', 'K甲第八周回顾：53分打破时长纪录，溯确认降级']
        const newsList = newsTitles.map(title => {
            const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
            return {
                categories: randomCats.slice(0, 2),
                title: title
            }
        })
        await Article.deleteMany({})
        await Article.insertMany(newsList)
        res.send(newsList)
    })

    // 导入热门视频
    router.get('/v/init', async (reg, res) => {
        const parent = await Category.findOne({
            name: '热门视频'
        })
        const cats = await Category.find().where({ parent: parent }).lean()
        const videosTitles = ['暗信主播都推荐的弱化出装铭文，到底厉害在哪？', '还用小明辅助？学会独狼惩戒流，拿下敌方野区！', '复活双无尽铠皇，一刀破伤风，两刀见祖宗！', 'S28赛季法球流暗信，该如何搭配出装铭文！', '肉装上阵一打五，开启铠爹新时代！', '后羿法球流出装铭文它来了', '澜s27新赛季最强出装，学会王者轻松上荣耀，输出爆炸胜率逆天', '【双信流】出装教学，教你光信、暗信融为一体', '【T0射手后羿】版本之子，新赛季出装铭文打法！\n', '新赛季最变态的辅助玩法!明世隐这么出装，让射手秒变坦克!', '1.还用小明辅助？学会独狼惩戒流，拿下敌方野区！', 'S28赛季法球流暗信，该如何搭配出装铭文！', '暗信主播都推荐的弱化出装铭文，到底厉害在哪？', '复活双无尽铠皇，一刀破伤风，两刀见祖宗！', '后羿法球流出装铭文它来了', '澜s27新赛季最强出装，学会王者轻松上荣耀，输出爆炸胜率逆天', '肉装上阵一打五，开启铠爹新时代！', '【双信流】出装教学，教你光信、暗信融为一体', '新版宫本能扛能打《不死粘人乱砍流》出装，超高容错率无脑一打五', '新赛季最变态的辅助玩法!明世隐这么出装，让射手秒变坦克!', '暗信主播都推荐的弱化出装铭文，到底厉害在哪？', '2.复活双无尽铠皇，一刀破伤风，两刀见祖宗！', '还用小明辅助？学会独狼惩戒流，拿下敌方野区！', '【T0射手后羿】版本之子，新赛季出装铭文打法！\n', 'S28赛季法球流暗信，该如何搭配出装铭文！', '澜s27新赛季最强出装，学会王者轻松上荣耀，输出爆炸胜率逆天', '【大神教你玩】掌握铠爹正确玩法，排位谁见都害怕', '【大神教你玩】花木兰的这一招，你学会了吗？', '【大神教你玩】肉装典韦，究竟有多欢乐？', '后羿法球流出装铭文它来了']
        const videosList = videosTitles.map(title => {
            const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
            return {
                categories: randomCats.slice(0, 2),
                title: title
            }
        })
        await V.deleteMany({})
        await V.insertMany(videosList)
        res.send(videosList)
    })

    //新闻列表接口
    router.get('/news/list', async (req, res) => {
        // const parent = await Category.findOne({
        //     name:'新闻分类'
        // }).populate({
        //     path:'children',
        //     populate:{
        //         path:'newsList'
        //     }
        // }).lean()
        const parent = await Category.findOne({
            name: '新闻分类'
        })
        const cats = await Category.aggregate([//聚合查询
            { $match: { parent: parent._id } },//条件查询
            {
                $lookup: {//join//外链接
                    from: 'articles',//关联的mongoose的表，集合名
                    foreignField: 'categories',
                    localField: '_id',
                    as: 'newsList'
                }
            },
            {
                $addFields: {
                    newsList: {
                        $slice: ['$newsList', 5]//将newslist截为五个
                    }
                }
            }
        ])
        const subCats = cats.map(v => v._id)
        cats.unshift({//热门分类
            name: '热门',
            newsList: await Article.find().where({
                categories: { $in: subCats }
            }).populate('categories').limit(5).lean()
        })
        cats.map(cat => {
            cat.newsList.map(news => {
                news.categoryName = (cat.name === '热门') ? news.categories[0].name : cat.name
                return news
            })
        })
        res.send(cats)
    })

    //导入英雄数据
    router.get('/heroes/init', async (req, res) => {
        await Hero.deleteMany({})
        const rawData = [{ "name": "热门", "heroes": [{ "name": "后羿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg" }, { "name": "安琪拉", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg" }, { "name": "妲己", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg" }, { "name": "李信", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg" }, { "name": "鲁班七号", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg" }, { "name": "孙尚香", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg" }, { "name": "瑶", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg" }, { "name": "甄姬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg" }, { "name": "孙策", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg" }, { "name": "亚瑟", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg" }] }, { "name": "战士", "heroes": [{ "name": "赵云", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg" }, { "name": "墨子", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg" }, { "name": "钟无艳", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg" }, { "name": "吕布", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg" }, { "name": "夏侯惇", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg" }, { "name": "曹操", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/128/128.jpg" }, { "name": "典韦", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg" }, { "name": "宫本武藏", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg" }, { "name": "达摩", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg" }, { "name": "老夫子", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg" }, { "name": "关羽", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/140/140.jpg" }, { "name": "程咬金", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg" }, { "name": "露娜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg" }, { "name": "花木兰", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg" }, { "name": "橘右京", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg" }, { "name": "亚瑟", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg" }, { "name": "孙悟空", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg" }, { "name": "刘备", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/170/170.jpg" }, { "name": "杨戬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/178/178.jpg" }, { "name": "雅典娜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/183/183.jpg" }, { "name": "哪吒", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/180/180.jpg" }, { "name": "铠", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg" }, { "name": "梦奇", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg" }, { "name": "裴擒虎", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg" }, { "name": "狂铁", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg" }, { "name": "孙策", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg" }, { "name": "李信", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg" }, { "name": "盘古", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg" }, { "name": "云中君", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg" }, { "name": "曜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg" }, { "name": "马超", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg" }, { "name": "蒙恬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/527/527.jpg" }, { "name": "夏洛特", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/536/536.jpg" }, { "name": "司空震", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/537/537.jpg" }, { "name": "云缨", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/538/538.jpg" }] }, { "name": "法师", "heroes": [{ "name": "小乔", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/106/106.jpg" }, { "name": "墨子", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg" }, { "name": "妲己", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg" }, { "name": "嬴政", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/110/110.jpg" }, { "name": "高渐离", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/115/115.jpg" }, { "name": "孙膑", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg" }, { "name": "扁鹊", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/119/119.jpg" }, { "name": "芈月", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg" }, { "name": "周瑜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/124/124.jpg" }, { "name": "甄姬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg" }, { "name": "武则天", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg" }, { "name": "貂蝉", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg" }, { "name": "安琪拉", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg" }, { "name": "露娜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg" }, { "name": "姜子牙", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg" }, { "name": "王昭君", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg" }, { "name": "张良", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/156/156.jpg" }, { "name": "不知火舞", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg" }, { "name": "钟馗", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg" }, { "name": "诸葛亮", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg" }, { "name": "干将莫邪", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/182/182.jpg" }, { "name": "女娲", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/179/179.jpg" }, { "name": "杨玉环", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/176/176.jpg" }, { "name": "弈星", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/197/197.jpg" }, { "name": "米莱狄", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg" }, { "name": "司马懿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg" }, { "name": "沈梦溪", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/312/312.jpg" }, { "name": "上官婉儿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg" }, { "name": "嫦娥", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg" }, { "name": "西施", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/523/523.jpg" }, { "name": "司空震", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/537/537.jpg" }, { "name": "金蝉", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/540/540.jpg" }] }, { "name": "坦克", "heroes": [{ "name": "廉颇", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg" }, { "name": "庄周", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg" }, { "name": "刘禅", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg" }, { "name": "钟无艳", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg" }, { "name": "白起", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg" }, { "name": "芈月", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg" }, { "name": "吕布", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg" }, { "name": "夏侯惇", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg" }, { "name": "达摩", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg" }, { "name": "项羽", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg" }, { "name": "程咬金", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg" }, { "name": "刘邦", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg" }, { "name": "亚瑟", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg" }, { "name": "牛魔", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg" }, { "name": "张飞", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg" }, { "name": "太乙真人", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg" }, { "name": "东皇太一", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg" }, { "name": "铠", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg" }, { "name": "苏烈", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg" }, { "name": "梦奇", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg" }, { "name": "孙策", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg" }, { "name": "盾山", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg" }, { "name": "嫦娥", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg" }, { "name": "猪八戒", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/511/511.jpg" }, { "name": "蒙恬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/527/527.jpg" }, { "name": "阿古朵", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/533/533.jpg" }] }, { "name": "刺客", "heroes": [{ "name": "赵云", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg" }, { "name": "阿轲", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/116/116.jpg" }, { "name": "李白", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/131/131.jpg" }, { "name": "貂蝉", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg" }, { "name": "韩信", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg" }, { "name": "兰陵王", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/153/153.jpg" }, { "name": "花木兰", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg" }, { "name": "不知火舞", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg" }, { "name": "娜可露露", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/162/162.jpg" }, { "name": "橘右京", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg" }, { "name": "孙悟空", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg" }, { "name": "百里守约", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg" }, { "name": "百里玄策", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/195/195.jpg" }, { "name": "裴擒虎", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg" }, { "name": "元歌", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/125/125.jpg" }, { "name": "司马懿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg" }, { "name": "上官婉儿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg" }, { "name": "云中君", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg" }, { "name": "马超", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg" }, { "name": "镜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/531/531.jpg" }, { "name": "澜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/528/528.jpg" }, { "name": "云缨", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/538/538.jpg" }, { "name": "暃", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/542/542.jpg" }] }, { "name": "射手", "heroes": [{ "name": "孙尚香", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg" }, { "name": "鲁班七号", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg" }, { "name": "马可波罗", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg" }, { "name": "狄仁杰", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/133/133.jpg" }, { "name": "后羿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg" }, { "name": "李元芳", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/173/173.jpg" }, { "name": "虞姬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/174/174.jpg" }, { "name": "成吉思汗", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/177/177.jpg" }, { "name": "黄忠", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/192/192.jpg" }, { "name": "百里守约", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg" }, { "name": "公孙离", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/199/199.jpg" }, { "name": "伽罗", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg" }, { "name": "蒙犽", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/524/524.jpg" }, { "name": "艾琳", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/155/155.jpg" }, { "name": "戈娅", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/548/548.jpg" }] }, { "name": "辅助", "heroes": [{ "name": "庄周", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg" }, { "name": "刘禅", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg" }, { "name": "孙膑", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg" }, { "name": "牛魔", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg" }, { "name": "张飞", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg" }, { "name": "钟馗", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg" }, { "name": "蔡文姬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/184/184.jpg" }, { "name": "太乙真人", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg" }, { "name": "大乔", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/191/191.jpg" }, { "name": "东皇太一", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg" }, { "name": "鬼谷子", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/189/189.jpg" }, { "name": "苏烈", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg" }, { "name": "明世隐", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg" }, { "name": "盾山", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg" }, { "name": "瑶", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg" }, { "name": "鲁班大师", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/525/525.jpg" }, { "name": "金蝉", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/540/540.jpg" }, { "name": "桑启", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/534/534.jpg" }] }]
        for (let cat of rawData) {//let cat in rawData，在js循环中，in指的是索引
            if (cat.name === '热门') {
                continue//跳过热门
            }
            //当前分类再数据库中对应的数据
            const category = await Category.findOne({
                name: cat.name
            })
            //录入英雄
            cat.heroes = cat.heroes.map(hero => {
                hero.categories = [category]
                return hero
            })
            await Hero.insertMany(cat.heroes)
        }
        res.send(await Hero.find())
    })

    //英雄列表接口
    router.get('/heroes/list', async (req, res) => {
        const parent = await Category.findOne({
            name: '英雄分类'
        })
        const cats = await Category.aggregate([//聚合查询
            { $match: { parent: parent._id } },//条件查询
            {
                $lookup: {//join//外链接
                    from: 'heroes',//关联的mongoose的表，集合名
                    foreignField: 'categories',
                    localField: '_id',
                    as: 'heroList'
                }
            },
            // {
            //     $addFields:{
            //         newsList:{
            //             $slice:['$newsList',5]//将newslist截为五个
            //         }
            //     }
            // }
        ])
        const subCats = cats.map(v => v._id)
        cats.unshift({//热门分类
            name: '热门',
            heroList: await Hero.find().where({
                categories: { $in: subCats }
            }).limit(10).lean()
        })
        // cats.map(cat =>{
        //     cat.heroList.map(news =>{
        //         // news.categoryName = (cat.name ==='热门') ? news.categories[0].name : cat.name
        //         return news
        //     })
        // })
        res.send(cats)
    })

    //文章详情
    router.get('/articles/:id', async (req, res) => {
        const data = await Article.findById(req.params.id).lean()
        data.related = await Article.find().where({
            categories: { $in: data.categories }
        }).limit(2)
        res.send(data)
    })

    router.get('/heroes/:id', async (req, res) => {
        const data = await Hero.findById(req.params.id).populate('categories items1 items2 partners.hero').lean()
        res.send(data)
    })

    // router.get('/videos/:id',async (req,res) => {
    //     const data = await Video.findById(req.params.id).populate('categories title plays cover').lean()
    //     res.send(data)
    // })

    // 视频列表接口
    router.get('/videos/list', async (req, res) => {
        const parent = await Category.findOne({
            name: '视频分类'
        })
        const cats = await Category.aggregate([//聚合查询
            { $match: { parent: parent._id } },//条件查询
            {
                $lookup: {//join//外链接
                    from: 'videos',//关联的mongoose的表，集合名
                    foreignField: 'categories',
                    localField: '_id',
                    as: 'videoList'
                }
            },
        ])
        res.send(cats)
    })

    router.get('/v/list', async (req, res) => {
        const parent = await Category.findOne({
            name: '热门视频'
        })
        const cats = await Category.aggregate([//聚合查询
            { $match: { parent: parent._id } },//条件查询
            {
                $lookup: {//join//外链接
                    from: 'vs',//关联的mongoose的表，集合名
                    foreignField: 'categories',
                    localField: '_id',
                    as: 'vList'
                }
            },
        ])
        res.send(cats)
    })
    //热门视频接口
    // router.get('/hotvideos/list', async (req, res) => {
    //     const parent = await Category.findOne({
    //         name: '热门视频'
    //     })
    //     const cats = await Category.aggregate([//聚合查询
    //         { $match: { parent: parent._id } },//条件查询
    //         {
    //             $lookup: {//join//外链接
    //                 from: 'hotvideos',//关联的mongoose的表，集合名
    //                 foreignField: 'categories',
    //                 localField: '_id',
    //                 as: 'hotvideoList'
    //             }
    //         },
    //     ])
    //     res.send(cats)
    // })
    app.use('/web/api', router)
}