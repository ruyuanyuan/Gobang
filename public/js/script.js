var godang={
    chessBoard=[],
    data:{
       can_w:400,
       can_h:400,
       num:15,
       color:true,
       bg_img:"../public/img/bg.jpg"
    },
    init:function(data){
       var data=data?data:this.data;
       this.position(data);
       for(var i=0;i<data.num;i++){
            chessBoard[i]=[];
            for(var j=0;j<data.num;j++){
                chessBoard[i][j]=0;
            }
       }
    },
    position:function(data){
        var canvas=document.getElementById("canvas");
        var cxt=canvas.getContext("2d");
        canvas.width=data.can_w;
        canvas.height=data.can_h;
        this.addimg(cxt,data);
    },
    addimg:function(cxt,data){
        var solf=this
        var img= new Image();
        img.src=data.bg_img;
        img.onload=function(){
            cxt.drawImage(img,0,0,data.can_w,data.can_h);
            solf.drowline(cxt,data);
        }
    },
    drowline:function(cxt,data){
        var canw=data.can_w;
        var canh=data.can_h;
        var num=data.num;
        var rech=canw/num;
        for(var i=0;i<num;i++){
            cxt.strokeStyle="#666";
            cxt.lineWidth=0.5
            cxt.moveTo(rech/2+rech*i,rech/2);
            cxt.lineTo(rech/2+rech*i,canh-rech/2);
            cxt.stroke();
            cxt.moveTo(rech/2,rech/2+rech*i);
            cxt.lineTo(canh-rech/2,rech/2+rech*i);
            cxt.stroke();
        }
        this.drowdang(cxt,,x,y,rech,color);
    },
    drowdang:function(cxt,,x,y,rech,color){
        cxt.beginPath();
        cxt.arc(rech/2+x*rech, rech/2+y*rech, rech, 0, 2*Math.PI,true);
        var gradient=context.createRadialGradient(rech/2+x*rech+2, rech/2+y*rech-2, rech, rech/2+x*rech+2,rech/2+y*rech-2,0);
        if(color){
             gradient.addColorStop(0, "#0A0A0A");
             gradient.addColorStop(1, "#636766");
        }else{
             gradient.addColorStop(0, "#D1D1D1");
             gradient.addColorStop(1, "#F9F9F9");
        }
        context.fillStyle=gradient;
        context.fill()
    },
    downdang:function(){
        var canvas=document.getElementById("canvas");
        canvas.onclick=function(e){
            var x=e.offsetX;
            var y=e.offsetY;
            x=Math.floor(x/rech);
            y=Math.floor(x/rech);
        }
    }

}




$(document).ready(function(){
    godang.init()
});
