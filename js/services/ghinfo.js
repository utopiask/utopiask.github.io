utils.jq(()=>{$(function(){const f=document.getElementsByClassName("ds-ghinfo");for(var l=0;l<f.length;l++){const n=f[l],o=n.getAttribute("api");o!=null&&utils.request(null,o,function(s){function c(t){for(let e of Object.keys(t))$(n).find("[type=text]#"+e).text(t[e]),$(n).find("[type=link]#"+e).attr("href",t[e]),$(n).find("[type=img]#"+e).attr("src",t[e])}const i=n.getAttribute("index");if(i!=null){const t=s.content||s;if(t&&t.length>i){let e=t[i];e["latest-tag-name"]=e.name,c(t[i])}}else c(s)})}})});
