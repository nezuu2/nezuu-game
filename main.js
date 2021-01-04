// 画面サイズ
const SCREEN_W = 180;
const SCREEN_H = 320;

// キャンバスサイズ
const CANVANS_W = SCREEN_W *2;
const CANVANS_H = SCREEN_W *2;

// フィールドサイズ
const FIELD_W = SCREEN_W *2;
const FIELD_W = SCREEN_H *2;

function rand(min,max)
{
    return Math.floor( Math.random()*(max-min+1) ) +min;
}

// 星の数
const STAR_MAX =300;

// キャンバス
let can = document.getElementById("can");
let con = can.getContext("2d");
can.width = CANVAS_W;
can.height = CANVAS_H;

// 星クラス
class Star
{
    constructor()
    {
        this.x = rand(0,FILED_W);
        this.y = rand(0,FILED_H);
        this.vx = 0;
        this.vy = rand(30,200);
        this.sz = rand(1,2);
    }

    draw()
    {
        con.fillStyle=rand(0,2)!=0?"66f":"#8af";
        con.fillRect (this.x>>8,this.y>>8,this.sz.this.sz);
    }

    update()
    {
        this.x += this.vx;
        this.y += this.vy;
        if( this.y>FIELD_H<<8 )
        {
            this.y=0;
            this.x=rand(0, FILED_W)<<8;
        }
    }
}

let star=[];
for(let i=0;i<STAR_MAX;i++)star[i] = new Star();
for(let i=0;i<STAR_MAX;i++)star[i].draw();