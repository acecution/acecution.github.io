<script lang="ts">
    import type { Contact } from './types'; 
    import img1 from './assets/tg.png';
    import img2 from './assets/github.png';
    import img3 from './assets/mail.png';
  
    export let contacts: Contact[] = [
      {
        id: 'tg-link',
        href: 'https://t.me/acecution',
        src: img1,
        alt: 'Telegram',
      },
      {
        id: 'gh-link',
        href: 'https://github.com/acecution',
        src: img2,
        alt: 'GitHub',
      },
      {
        id: 'email',
        href: 'mailto:a.varfolomeeva@innopolis.university',
        src: img3,
        alt: 'Mail',
      },
    ];
  </script>
  
  <ul class="contact-list">
    {#each contacts as contact}
      <li>
        <a href={contact.href} class="contact-item">
          <img src={contact.src} alt={contact.alt} />
          <span class="contact-label">{contact.alt}</span>
        </a>
      </li>
    {/each}
  </ul>
  
  <style>
    @import url("https://fonts.googleapis.com/css?family=Montserrat:700,900&subset=cyrillic");
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i&subset=cyrillic');

    img {
      height: 50px;
      width: 50px;
    }

    li {
      list-style-type: none;
    }

    ul {
      margin-bottom: 0px;
    }

    .contact-list {
      background-color: transparent; 
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      padding-top: 40px;
      padding-bottom: 50px;
    }
  
    .contact-item {
      display: flex;
      align-items: center;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
      text-decoration: none;
      color: #333;
      background-color: #f0f0f0;
    }
  
    .contact-item:hover {
      opacity: 0.8;
    }
  
    .contact-label {
      margin-left: 10px;
      font-family: "Open Sans", sans-serif;
    }
  </style>
  