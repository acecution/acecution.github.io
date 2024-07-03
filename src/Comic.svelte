<script lang='ts'>
    import type { ComicApiResponse, ComicData } from './types.ts';
    import dayjs from 'dayjs';
    import relativeTime from 'dayjs/plugin/relativeTime';

    let imgSrc : string | undefined
    let imgAlt : string | undefined
    let date : Date | undefined
    let datePublished : string | undefined
    let dateAgo : string | undefined
    let title : string | undefined

    const getData = async () => {
        const email : string = "a.varfolomeeva@innopolis.university";
        const comicId : ComicApiResponse = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`).then(r => r.json())
        const comicData : ComicData = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`).then(r => r.json())

        const { img, day, safe_title, year, month, alt } = comicData;

        imgSrc = img;
        imgAlt = alt;
        title = `Title: ${safe_title}`;
        
        date = new Date(`${year}-${month}-${day}`);
        dayjs.extend(relativeTime);
        const now = dayjs();
        const timeAgo = now.from(dayjs(date));
        datePublished = `Published: ${date.toLocaleDateString()}`;
        dateAgo = `The comic was released ${timeAgo}.`;
    }

    getData()
</script>

<div class="comic">
    <div class="comic-container">
        <div class="comic-image">
            <img src={imgSrc} alt={imgAlt}/>
        </div>
        <div class="comic-title">
            <span>
                {title}
            </span>
        </div>
        <div class="comic-date">
            <span>
                {datePublished}
            </span>
        </div>
        <div class="comic-ago">
            <span>
                {dateAgo}
            </span>
        </div>
    </div>    
</div>

<style>
    @import url("https://fonts.googleapis.com/css?family=Montserrat:700,900&subset=cyrillic");
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i&subset=cyrillic');
    
    .comic {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-bottom: 100px;
    }

    .comic-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #F4F6F7;
        width: fit-content;
        padding-bottom: 10px;
        border: 10px outset lightblue;
    }

    .comic-title, .comic-date, .comic-ago {
        font-family: 'Open Sans', sans-serif;
        font-size: 1.2em;
    }

    .comic-title {
        font-weight: bold;
    }

</style>
