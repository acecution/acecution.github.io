import type { ComicApiResponse, ComicData } from '../../types.ts';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export async function load({ fetch }) {
  const email : string = "a.varfolomeeva@innopolis.university";
  const comicId : ComicApiResponse = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`).then(r => r.json())
  const comicData : ComicData = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`).then(r => r.json())

  const { img, day, safe_title, year, month, alt } = comicData;

  let date = new Date(`${year}-${month}-${day}`);
  dayjs.extend(relativeTime);
  const now = dayjs();
  const timeAgo = now.from(dayjs(date));

  return {
    img,
    alt,
    date,
    safe_title,
    timeAgo,
  };
}
