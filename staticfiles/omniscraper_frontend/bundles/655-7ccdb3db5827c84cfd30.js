"use strict";(self.webpackChunkomniscraper_frontend=self.webpackChunkomniscraper_frontend||[]).push([[655],{9632:(n,e,o)=>{o.r(e),o.d(e,{default:()=>c});var t=o(2928),a=(o(7294),o(3727)),l=o(461),i=o(4125),r=o(4347);const c=function(n){var e=n.videoTags,o=n.clickedTag,c=n.handleEditTagDialogOpen,s=n.mouseX,d=n.mouseY,u=n.handleRightClick,g=n.handleClose,m=n.loggedIn,f=n.loading,p=(0,t.Z)(i.Z,{disableScrollLock:!0,keepMounted:!0,open:null!==d,onClose:g,anchorReference:"anchorPosition",anchorPosition:null!==d&&null!==s?{top:d,left:s}:void 0},void 0,(0,t.Z)(r.Z,{onClick:function(){return c()}},void 0,"Edit"));return(0,t.Z)("div",{className:"tags",style:{marginTop:8,marginBottom:8}},void 0,m&&p,e.map((function(n){return(0,t.Z)(l.Z,{onContextMenu:function(e){return u(e,n)},component:a.rU,to:"/tags/".concat(n.slug),label:n.tag_name,disabled:f,clickable:!0,color:"primary",variant:o===n.slug?"default":"outlined",style:{margin:5,fontWeight:500}},n.tag_name)})))}}}]);