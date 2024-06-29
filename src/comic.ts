interface ComicData {  
    img: string;  
    day: number;  
    safe_title: string;  
    year: number;  
    month: number;  
    alt: string;  
}

interface ComicApiResponse {
    id: number;
}

import img2 from "./assets/2.jpg"
import img3 from "./assets/3.jpg"

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const getData = async () => {
    const email : string = "a.varfolomeeva@innopolis.university";
    const comicId : ComicApiResponse = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`).then(r => r.json())
    const comicData : ComicData = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`).then(r => r.json())

    const { img, day, safe_title, year, month, alt } = comicData;

    const date = new Date(`${year}-${month}-${day}`);

    dayjs.extend(relativeTime);
    const now = dayjs();
    const timeAgo = now.from(dayjs(date));

    const dateElement = document.createElement('span');
    dateElement.textContent = `Published: ${date.toLocaleDateString()}`;

    const agoElement = document.createElement('span');
    agoElement.textContent = `The comic was released ${timeAgo}.`;
    
    const imageElement = document.createElement('img');
    imageElement.src = img;
    imageElement.alt = alt;

    const titleElement = document.createElement('span');
    titleElement.textContent = `Title: ${safe_title}`;

    document.getElementById("comic-image")?.appendChild(imageElement);
    document.getElementById("comic-title")?.appendChild(titleElement);
    document.getElementById("comic-date")?.appendChild(dateElement);
    document.getElementById("comic-ago")?.appendChild(agoElement);

}

function getRandomImageUrl() : string {
    const imageUrls : string[] = [
        img2,
        img3,
    ];
    return imageUrls[Math.floor(Math.random() * imageUrls.length)];
}

document.body.style.backgroundImage = `url(${getRandomImageUrl()})`;

getData()
     
