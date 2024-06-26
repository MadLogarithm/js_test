import axios from "axios";

function searchByType() {
    const postData = {
        "keyword": "president",  //【可选字段】，根据值进行关键词搜索
        "filter": {  // 【可选字段】值为过滤的条件
            "blue_v": 1, // 【可选字段】整数0/1代表否/是蓝V认证
            "other_v": "Government",  // 【可选字段】其他认证，所有可能值可以通过另外的接口获得（目前为：Business、Government、no，返回的null即对应为no）
            "label": "东盟", //【可选字段】标签值，所有可能值从另外的接口获得（目前仅有“东盟”）
            "followers_low": 1000, //【可选字段】整数，粉丝数下限值（>=）
            "followers_up": 2000000, //【可选字段】整数，粉丝数上限值（<=）
            "activation": 1, //【可选字段】整数0/1代表否/是近期活跃（一周内有发文）
            "tweets_low": 1000, //【可选字段】整数，推文数下限值（>=）
            "tweets_up": 50000 //【可选字段】整数，推文数上限值（<=）
        },
        "order": 10 //【可选字段】结果的排序方式，10/11/20/21/30/31/40/41分别代表粉丝/推文/用户名/活跃度的降/升序
    }
    axios.post('https://www.yunbaogao.cn/reportFile/opinionLeader/getPeople?offset=0', postData) // offset为当前已获得的记录数，用于分页查询，接口最多每次只返回10条
        .then((response: { data: any; }) => {
            console.log(response.data);
        })
        .catch((error: any) => {
            console.log(error);
        });
}

searchByType();