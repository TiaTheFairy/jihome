"use strict";(self["webpackChunkjihome_front"]=self["webpackChunkjihome_front"]||[]).push([[8],{1008:function(s,t,a){a.r(t),a.d(t,{default:function(){return c}});var e=function(){var s=this,t=s._self._c;return t("div",{staticClass:"userAnother"},[t("div",{staticClass:"myInfo"},[s._v(s._s(s.$t("User.UserAnother")))]),t("div",{staticClass:"infos"},[t("div",{staticClass:"avatar infoItem"},[t("el-avatar",{attrs:{size:100,src:s.avatar,shape:"square"}})],1),t("div",{staticClass:"infoItem"},[t("span",{staticClass:"infoLeft"},[s._v(s._s(s.$t("User.UserID")))]),t("span",{staticClass:"infoRight"},[s._v(s._s(s.userid))])]),t("div",{staticClass:"infoItem"},[t("span",{staticClass:"infoLeft"},[s._v(s._s(s.$t("User.Nickname")))]),t("span",{staticClass:"infoRight"},[s._v(s._s(s.nickname))])]),t("div",{staticClass:"infoItem"},[t("span",{staticClass:"infoLeft"},[s._v(s._s(s.$t("User.Email")))]),t("span",{staticClass:"infoRight"},[s._v(s._s(s.email))])]),t("div",{staticClass:"infoItem"},[t("span",{staticClass:"infoLeft"},[s._v(s._s(s.$t("User.RealName")))]),t("span",{staticClass:"infoRight"},[s._v(s._s(s.realname))])]),t("div",{staticClass:"infoItem"},[t("span",{staticClass:"infoLeft"},[s._v(s._s(s.$t("User.StudentID")))]),t("span",{staticClass:"infoRight"},[s._v(s._s(s.studentid))])]),t("div",{staticClass:"infoItem"},[t("span",{staticClass:"infoLeft"},[s._v(s._s(s.$t("User.School")))]),t("span",{staticClass:"infoRight"},[s._v(s._s(s.school))])]),t("div",{staticClass:"infoItem"},[t("span",{staticClass:"infoLeft"},[s._v(s._s(s.$t("User.Auth")))]),t("span",{staticClass:"infoRight"},[s._v(s._s(s.userType))])])]),s.myinfo?t("div",{staticClass:"jumpToMe",on:{click:s.jumpToMe}},[t("el-card",[t("div",[s._v(s._s(s.$t("User.GotoYou")))])])],1):s._e()])},i=[],n=(a(7658),a(4161)),r=a(1780),o=a(680),h={name:"user-info",data(){return{currentid:0,userid:0,avatar:"",nickname:"",email:"",realname:"",studentid:"",school:"",userType:"",myinfo:!1}},methods:{getCurrentUser(){if(!o.Z.get("loginCookie"))return void this.goLogin();const s=this.loading();(0,n.Z)({method:"post",url:r.Z.user,data:new URLSearchParams({type:"me",cookie:o.Z.get("loginAs")})}).then((t=>{s.close(),200!=t.status?this.alert(this.$t("System.NetworkIssue"),this.$t("System.Error")):"USER_FOUND"==t.data.status?this.userid==t.data.userid&&(this.myinfo=!0):this.notfound()}))},getUserInfo(){const s=this.loading();(0,n.Z)({method:"post",url:r.Z.user,data:new URLSearchParams({type:"other",userid:this.userid})}).then((t=>{s.close(),200!=t.status?this.alert(this.$t("System.NetworkIssue"),this.$t("System.Error")):"USER_FOUND"==t.data.status?(this.userid=t.data.userid,this.nickname=t.data.username,this.email=t.data.email,this.realname=t.data.realname,this.studentid=t.data.studentid,this.school=this.$t("User.UserSchool"+t.data.school),this.userType=this.formatUserType(t.data.userstatus,t.data.authname),this.avatar=this.getUserAvatar(this.userid)):this.notfound()}))},jumpToMe(){this.$router.push({name:"userMe"})}},mounted(){this.userid=this.$route.params.id,this.getUserInfo(),this.getCurrentUser()}},u=h,l=a(1001),d=(0,l.Z)(u,e,i,!1,null,"3348b812",null),c=d.exports}}]);
//# sourceMappingURL=8.a7a4a468.js.map