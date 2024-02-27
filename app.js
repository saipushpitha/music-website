const music = new Audio('audio/1.mp3');
//music.play();

const songs= [
    {
        id: "1",
        songName: `On My Way <br> 
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg"
    },
    {
        id: "2",
        songName: `Dandelions <br> 
        <div class="subtitle">Ruth B</div>`,
        poster: "img/2.jpg"
    },
    {
        id: "3",
        songName: `Baby <br> 
        <div class="subtitle">Justin Bieber</div>`,
        poster: "img/3.jpg"
    },
    {
        id: "4",
        songName: `Common Denominator <br> 
        <div class="subtitle">Justin Bieber</div>`,
        poster: "img/4.jpg"
    },
    {
        id: "5",
        songName: `Eenie Meenie <br> 
        <div class="subtitle">Justin Bieber</div>`,
        poster: "img/5.jpg"
    },
    {
        id: "6",
        songName: `Kesariya <br> 
        <div class="subtitle">Arjit Singh</div>`,
        poster: "img/6.jpg"
    },
    {
        id: "7",
        songName: `Apna bana le <br> 
        <div class="subtitle">Arjit Singh</div>`,
        poster: "img/7.jpg"
    },
    {
        id: "8",
        songName: `Adire Hridayam <br> 
        <div class="subtitle">Karthik</div>`,
        poster: "img/8.jpg"
    },
    {
        id: "9",
        songName: `Chilipiga <br> 
        <div class="subtitle">Karthik</div>`,
        poster: "img/9.jpg"
    },
    {
        id: "10",
        songName: `Tum hi ho <br> 
        <div class="subtitle">Arjit Singh</div>`,
        poster: "img/10.jpg"
    },
    {
        id: "11",
        songName: `O Saathi <br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/11.jpg"
    },
    {
        id: "12",
        songName: `Jeena jeena <br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/12.jpg"
    },
    {
        id: "13",
        songName: `Butta bomma <br> 
        <div class="subtitle">Armaan malik</div>`,
        poster: "img/13.jpg"
    },
    {
        id: "14",
        songName: `Ninne tholi premalo <br> 
        <div class="subtitle">Armaan malik</div>`,
        poster: "img/14.jpg"
    },
    {
        id: "15",
        songName: `Perfect <br> 
        <div class="subtitle">Ed sheeran</div>`,
        poster: "img/15.jpg"
    },
    {
        id: "16",
        songName: `Shape Of You <br> 
        <div class="subtitle">Ed sheeran</div>`,
        poster: "img/16.jpg"
    },
    {
        id: "17",
        songName: `Enchanted <br> 
        <div class="subtitle">Taylor Swift</div>`,
        poster: "img/17.jpg"
    },
    {
        id: "18",
        songName: `Love Story <br> 
        <div class="subtitle">Taylor Swift</div>`,
        poster: "img/18.jpg"
    },
    {
        id: "19",
        songName: `Cruel Summer <br> 
        <div class="subtitle">Taylor Swift</div>`,
        poster: "img/19.jpg"
    },
    {
        id: "20",
        songName: `Gorgeous <br> 
        <div class="subtitle">Taylor Swift</div>`,
        poster: "img/20.jpg"
    },

] 

Array.from(document.getElementsByClassName('songItem')).forEach((e, i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});

let masterPlay= document.getElementById('masterPlay');
let wave= document.getElementById('wave');

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el=>{
        el.classList.add('bi-play-fill');
        el.classList.remove('bi-pause-fill');
    }))
}    
const makeAllBackground = ()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el=>{
        el.computedStyleMap.background='rgb(105 , 105 , 105 , .0)';

    }))
}

let index=0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        //console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src=~`img/${index}.jpg`
        music.play()
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName, poster}= elss;
            title.innerHTML = songName;
            
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105 , 105 , 105 , .0)";
        makeAllplays();
        el.target.classList.add('bi-pause-fill');
        el.target.classList.remove('bi-play-fill');
        wave.classList.add('active1')  
    });
})


let currentStart = document.getElementById('currentStart');
let currentEnd= document.getElementById('currentEnd');

music.addEventListener('timeupdate', () => {
    let musuic_curr = music.currentTime;
    let music_dur =music.duration;
    console.log(music_curr);
})

let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
}) ;

let pop_art_left=document.getElementById('pop_art_left');
let pop_art_right=document.getElementById('pop_art_right');
let Artists_bx=document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click', ()=>{
    Artists_bx.scrollLeft += 330;
});
pop_art_left.addEventListener('click', ()=>{
    Artists_bx.scrollLeft -= 330;
}) ;














