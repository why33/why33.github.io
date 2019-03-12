(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{670:function(n,e,t){},704:function(n,e,t){"use strict";t.r(e);t(603);var i,a=t(604),l=t.n(a),r=(t(183),t(17)),o=t.n(r),s=(t(184),t(124)),c=t.n(s),d=t(18),p=t(19),u=t(21),m=t(20),h=t(22),b=t(82),g=t(1),x=t.n(g),f=t(26),w=t(83),y=t(101);t(670);function v(){var n=Object(b.a)(["\n    display:flex;\n    align-items:center;\n    margin-top:20px; \n    height:500px;\n    box-sizing:border-box;\n    margin:50px 0 70px;\n    box-shadow:0px .5px 5px 0 rgba(187, 187, 187,.8);\n    .music-list-style{\n        width:20%;\n        height:100%;\n        color:#fff;\n        background:rgba(123,126,129,1);\n        display:flex;\n        flex-direction:column;\n        .music-list-hearder{\n            font-size:16px;\n            line-height:40px;\n            text-indent:5px;\n            font-weight:bolder; \n            border-bottom:1px solid rgb(205,205,205);;\n        }\n        ul{\n            color:rgb(205,205,205);\n            overflow-y:auto;\n            overflow-x: hidden;\n            scroll-behavior:smooth;\n            list-style:none;\n            margin-bottom:5px;\n            li{\n                width:100%;\n                font-size:14px;\n                line-height:30px;\n                text-overflow:ellipsis;\n                white-space: nowrap;\n                overflow: hidden;\n                text-indent:15px;\n                span{\n                    display:inline-block;\n                    width:25px;\n                    text-indent:0;\n                }\n            }\n            li:nth-child(2n+1){\n                border-radius:2px;\n                background:rgba(87,89,90,.1);\n            }\n            li:hover,li.selectedStyle{\n                color:#fff;\n                cursor:pointer;\n                background:rgba(35, 40, 45,.3);\n            } \n            \n         \n          \n        }\n        ul::-webkit-scrollbar{\n            display: none;\n        }\n       \n    }\n    .music-content-style{\n        width:80%;\n        display:flex;\n        box-sizing:border-box;\n        padding:15px;\n    }\n    .music-detail-style{\n        width:0;\n        flex:3;\n        border-right:1.5px solid rgba(187, 187, 187,.5);\n        &>div{\n            width:100%;\n            text-align:center;\n            display:flex;\n            flex-direction:column;\n            align-items:center;\n            padding-top:20px;\n            &>div{\n                width:55%;\n                height:0;\n                padding-bottom:55%;\n                position:relative;\n            }\n            img{\n                position:absolute;\n                top:0;\n                left:0;\n                width:100%;\n                height:100%;\n                border-radius:50%;\n                border:20px solid #4b4e51;\n            }\n            .activeImg{\n                \n                \n                -webkit-animation:aniImg 5s linear infinite forwards running;\n                -moz-animation:aniImg 5s linear infinite forwards running;\n                -o-animation:aniImg 5s linear infinite forwards running;\n                -ms-animation:aniImg 5s linear infinite forwards;\n                animation:aniImg 5s linear infinite forwards running ;\n            }\n            button{\n                margin-top:30px;\n                width:60%;\n                border:none;\n                outline:none;\n                background:none;\n                border:1px solid  rgba(187, 187, 187,.6);\n                line-height:25px;\n                border-radius:10px;\n                cursor:pointer;\n                a{\n                    text-derocation:none;\n                }\n            }\n            button:hover{\n                border:1px solid #1890ff;\n            }\n        }\n    }\n    .music-lyric-style{\n        width:0;\n        flex:5;\n        box-sizing:border-box;\n        padding:15px 20px;\n    }\n    .music-title-style{\n        p{\n            font-size:20px;\n            font-weight:bold;\n            margin-bottom:10px;\n        }\n        div{\n            font-weight:bold;\n            text-overflow:ellipsis;\n            // white-space: nowrap;\n            overflow: hidden;\n        }\n        span{\n            color:rgba(167,167,167,.85);\n            margin-right:5px;\n        }\n    }\n    .music-lyric-content-style{\n        height:300px;\n        overflow-y:scroll;\n        margin-top:10px;\n        ul{\n            font-size:12px;\n            line-height:25px;\n            list-style:none;\n            color:rgba(100,100,100,.9);\n            li{\n                width:100%;\n                text-overflow:ellipsis;\n                white-space: nowrap;\n                overflow: hidden;\n            }\n        }\n\n       \n    }\n    .search-control-style{\n        position:fixed;\n        right:20px;\n        top:220px;\n        font-size:20px;\n      \n    }\n"]);return v=function(){return n},n}var E=w.a.div(v()),k=Object(y.a)("music","index")(i=function(n){function e(){var n,t;Object(d.a)(this,e);for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return(t=Object(u.a)(this,(n=Object(m.a)(e)).call.apply(n,[this].concat(a)))).clickfun=function(n,e){t.props.indexSelectedFun(e),t.props.selectMusicFun(n)},t.searchPage=function(){t.props.selectModuleFun("6"),t.props.history.push("/search/?val=")},t}return Object(h.a)(e,n),Object(p.a)(e,[{key:"componentWillMount",value:function(){this.props.musicAll.length>0||this.props.loadMusicFun(function(){return c.a.error("\u8bf7\u6c42\u5931\u8d25,\u53ef\u80fd\u670d\u52a1\u5668\u51fa\u73b0\u95ee\u9898")})}},{key:"render",value:function(){var n=this,e=this.props,t=e.musicAll,i=e.selectedMusic,a=e.selectedMusicLyric;return x.a.createElement(E,null,x.a.createElement("div",{className:"music-list-style"},x.a.createElement("div",{className:"music-list-hearder"},x.a.createElement(o.a,{type:f.a.iBars})," \u64ad\u653e\u5217\u8868"),x.a.createElement("ul",null,t.map(function(e,t){return x.a.createElement("li",{key:e.album_id,className:i&&(e.album_id===i.album_id?"selectedStyle":""),title:e.song_name,onClick:n.clickfun.bind(n,e,t)},x.a.createElement("nobr",null,x.a.createElement("span",null,"".concat(t+1,".")," "),e.song_name))}))),x.a.createElement("div",{className:"music-content-style"},x.a.createElement("div",{className:"music-detail-style"},i&&x.a.createElement("div",null,x.a.createElement("div",null,x.a.createElement("img",{src:i.img,className:this.props.isPlay?"activeImg":"",alt:"\u6b4c\u66f2\u56fe\u7247"})),x.a.createElement("button",null,x.a.createElement("a",{target:"__blank",href:i.play_url},"\u4e0b\u8f7d\u97f3\u4e50")))),x.a.createElement("div",{className:"music-lyric-style"},i&&x.a.createElement("div",{className:"music-title-style"},x.a.createElement("p",null,i.song_name),x.a.createElement("div",null,x.a.createElement("span",null,"\u6b4c\u624b:"),x.a.createElement("nobr",null,i.authors.map(function(n){return n.author_name+" "}))),x.a.createElement("div",null,x.a.createElement("span",null,"\u4e13\u8f91:"),x.a.createElement("nobr",null,i.album_name))),a&&x.a.createElement("div",{className:"music-lyric-content-style"},x.a.createElement("ul",null,a.map(function(n){return x.a.createElement("li",{key:n.time},x.a.createElement("nobr",null,n.text))}))))),x.a.createElement("div",{className:"search-control-style"},x.a.createElement(l.a,{shape:"circle",icon:f.a.iSearch,onClick:this.searchPage.bind(this)})))}}]),e}(x.a.Component))||i;e.default=k}}]);
//# sourceMappingURL=8.ee1cd5d9.chunk.js.map