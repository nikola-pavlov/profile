/* ============================================
   LOGO REPLAY
   ============================================ */
function replayLogo() {
  const animationDuration = 7750;
  const pauseAfter = 5000;
  setTimeout(() => {
    const logo = document.getElementById('logo-reload');
    if (!logo) return;
    const parent = logo.parentNode;
    const clone = logo.cloneNode(true);
    parent.replaceChild(clone, logo);
    replayLogo();
  }, animationDuration + pauseAfter);
}
replayLogo();


/* ============================================
   SCROLL REVEAL
   ============================================ */
(function () {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  targets.forEach((el) => observer.observe(el));
})();


/* ============================================
   HEADER — shadow + active nav link
   ============================================ */
(function () {
  const header = document.getElementById('site-header');
  const links  = document.querySelectorAll('.site-nav__link, .mobile-menu__link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
    highlightActive();
  }, { passive: true });

  function highlightActive() {
    const scrollY = window.scrollY + 80;
    let current = '';
    sections.forEach(sec => {
      if (sec.offsetTop <= scrollY) current = sec.id;
    });
    links.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('is-active', href === current);
    });
  }
  highlightActive();
})();


/* ============================================
   WORK — data, grid, tabs, lightbox
   ============================================ */
(function () {

  /* ── 1. WORK DATA ──────────────────────────
     src:    string  = single image
             array   = multiple images (gallery within the project)
             The first image in the array is used as the grid thumbnail.
     type:   'image' | 'video'
     link:   optional URL — shows "View" button in lightbox if set
     aspect: 'portrait' | 'story' | 'square' | 'landscape'
  ─────────────────────────────────────────── */
  const WORK = [
    /* SOCIAL POSTS */


    // {
    //   id: 1, tab: 'social', type: 'image', aspect: 'portrait',
    //   src: [
    //     'https://placehold.co/800x800/e20074/ffffff?text=Social+Posts',
    //   ],
    //   title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
    //   link: ''
    // },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/we/we00.png',
        'visuals/we/we01.png',
        'visuals/we/we02.png',
        'visuals/we/we03.png',
        'visuals/we/we04.png',
        'visuals/we/we05.png',
        'visuals/we/we06.png',
        'visuals/we/we07.png',
        'visuals/we/we08.png',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/kina/kina00.jpg',
        'visuals/kina/kina01.png',
        'visuals/kina/kina02.png',
        'visuals/kina/kina03.png',
        'visuals/kina/kina04.png',
        'visuals/kina/kina05.png',
        'visuals/kina/kina06.png',
        'visuals/kina/kina07.png',
        'visuals/kina/kina08.png',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },



    {
      id: 1, tab: 'social', type: 'image', aspect: 'story',
      src: [
        'visuals/mytime/mytime03.png',
        'visuals/mytime/mytime04.png',
        'visuals/mytime/mytime01.png',
        'visuals/mytime/mytime02.png',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },



    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/bf/bf00.png',
        'visuals/bf/bf01.png',
        'visuals/bf/bf02.png',
        'visuals/bf/bf03.png',
        'visuals/bf/bf04.png',
        'visuals/bf/bf05.png',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/kategorii/kat01.png',
        'visuals/kategorii/kat02.png',
        'visuals/kategorii/kat03.jpg',
        'visuals/kategorii/kat04.png',
        'visuals/kategorii/kat05.png',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },



    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/lamp/lamp00.png',
        'visuals/lamp/lamp01.png',
        'visuals/lamp/lamp02.jpg',
        'visuals/lamp/lamp03.png',
        'visuals/lamp/lamp04.png',
        'visuals/lamp/lamp05.png',
        'visuals/lamp/lamp06.png',
        'visuals/lamp/lamp07.png',
        'visuals/lamp/lamp08.png',
        'visuals/lamp/lamp09.png',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },



    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/viber/viber.jpg',
        'visuals/viber/whatsapp.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },




    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/1+1FREE.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/calling.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/krstarenje.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },



    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/Toronto.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },




    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/Rezerviraj0.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/hoteli.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },

    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/ponuda.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/hrg01.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/nurni.png',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/1+1.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/beyond.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },



    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/neverletgo.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },



    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/happyholidays.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },



    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/osumka.png',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },



     {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/petki.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },



    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/wecover.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/earlybird.png',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },

    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/11okt.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },

    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/newweb.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },





    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/bodrumleto.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/0e0.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },



    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/Ilija.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/9reasons.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/marketing.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/egweek.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/master.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/straws.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },



    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/mapa01.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },



    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/bajram.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/bookonline.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },



    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/raspored.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/co2.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/BackToSchool.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },

    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/enna.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/join.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },

    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/promo.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/may.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },

    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/birth.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },

    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/th.png',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/weather.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/aclass.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/welcome.png',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/Skopje.png',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },



    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/hrgjuli.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },



    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/iftar.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/70.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/greet1.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },



    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/school.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/mesec.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/krstozbor.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },

    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/hommex.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },

    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/rent.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },

    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/about.png',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/opp.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/hh.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/7p.png',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/mario.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'story',
      src: [
        'visuals/ig.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/midnight.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },



    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/behind.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


     {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/vreme.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/imposible.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    {
      id: 1, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/bansko-zima.jpg'
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },


    // {
    //   id: 2, tab: 'social', type: 'image', aspect: 'square',
    //   src: 'https://placehold.co/800x800/1a1a1a/ffffff?text=Feed+Post+02',
    //   title: 'Product Launch Series', tag: 'Social Post', meta: 'Instagram',
    //   link: ''
    // },
    // {
    //   id: 3, tab: 'social', type: 'image', aspect: 'portrait',
    //   src: 'https://placehold.co/800x1000/efeff0/1a1a1a?text=Carousel+Post',
    //   title: 'Carousel — Real Estate', tag: 'Social Post', meta: '2024',
    //   link: ''
    // },
    // {
    //   id: 4, tab: 'social', type: 'image', aspect: 'square',
    //   src: 'https://placehold.co/800x800/e20074/ffffff?text=Feed+Design',
    //   title: 'Monthly Feed Design', tag: 'Social Post', meta: 'Hospitality',
    //   link: ''
    // },
    // {
    //   id: 5, tab: 'social', type: 'image', aspect: 'portrait',
    //   src: 'https://placehold.co/800x1000/9b9b9b/ffffff?text=Promo+Post',
    //   title: 'Seasonal Promo Post', tag: 'Social Post', meta: 'Instagram / FB',
    //   link: ''
    // },

    /* VIDEO / REELS */


    {
      id: 6, tab: 'video', type: 'video', aspect: 'landscape',
      src: 'visuals/fibu.jpg',
      title: 'Video Post', tag: 'Video / Reel', meta: 'Event Video',
      link: 'https://www.youtube.com/watch?v=JraB2J3aNh8'
    },


    {
      id: 6, tab: 'video', type: 'video', aspect: 'story',
      src: 'visuals/idylic.jpg',
      title: 'Video Post', tag: 'Video / Reel', meta: 'Instagram',
      link: 'https://www.instagram.com/reel/DYHOi_cAK6p/'
    },


    {
      id: 6, tab: 'video', type: 'video', aspect: 'story',
      src: 'visuals/plostad.jpg',
      title: 'Video Post', tag: 'Video / Reel', meta: 'Instagram',
      link: 'https://www.instagram.com/p/DX_PHDrlI17/'
    },

    {
      id: 7, tab: 'video', type: 'video', aspect: 'story',
      src: 'visuals/desertdays.jpg',
      title: 'Vide Post', tag: 'Video / Reel', meta: 'Instagram / TikTok',
      link: 'https://www.instagram.com/reel/DTIjd7qjNcr/'
    },


    {
      id: 7, tab: 'video', type: 'video', aspect: 'story',
      src: 'visuals/grcijahotel.jpg',
      title: 'Vide Post', tag: 'Video / Reel', meta: 'Instagram / TikTok',
      link: 'https://www.instagram.com/reel/DUS7ONejyiU/'
    },

    {
      id: 12, tab: 'video', type: 'video', aspect: 'square',
      src: 'visuals/deka.jpg',
      title: 'Video Post', tag: 'Campaign', meta: 'Facebook / Instagram',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7425078362856960000'
    },


    {
      id: 12, tab: 'video', type: 'video', aspect: 'square',
      src: 'visuals/easter.jpg',
      title: 'Video Post', tag: 'Campaign', meta: 'Facebook / Instagram',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7445762856467341312'
    },


    {
      id: 12, tab: 'video', type: 'video', aspect: 'story',
      src: 'visuals/bodrum.jpg',
      title: 'Video Post', tag: 'Campaign', meta: 'Facebook / Instagram',
      link: 'https://www.instagram.com/reel/DYOlBZ8jAxw/'
    },

    {
      id: 12, tab: 'video', type: 'video', aspect: 'story',
      src: 'visuals/wow.jpg',
      title: 'Video Post', tag: 'Campaign', meta: 'Facebook / Instagram',
      link: 'https://www.fibula.mk/'
    },

    {
      id: 12, tab: 'video', type: 'video', aspect: 'story',
      src: 'visuals/ws26.jpg',
      title: 'Video Post', tag: 'Campaign', meta: 'Facebook / Instagram',
      link: 'https://www.instagram.com/reel/DXgzEJeDQWG/'
    },








    // {
    //   id: 8, tab: 'video', type: 'video', aspect: 'story',
    //   src: 'https://placehold.co/600x1067/e20074/ffffff?text=Story+Series',
    //   title: 'Story Series — Launch', tag: 'Video / Reel', meta: 'Instagram',
    //   link: 'https://www.instagram.com/reel/PLACEHOLDER'
    // },
    // {
    //   id: 9, tab: 'video', type: 'video', aspect: 'landscape',
    //   src: 'https://placehold.co/1200x675/000000/9b9b9b?text=Promo+Video',
    //   title: 'Promo Video — Brand Spot', tag: 'Video / Reel', meta: 'After Effects',
    //   link: 'https://www.youtube.com/watch?v=PLACEHOLDER'
    // },

    /* CAMPAIGNS */
    // {
    //   id: 10, tab: 'campaign', type: 'image', aspect: 'landscape',
    //   src: 'https://placehold.co/1200x675/e20074/ffffff?text=Campaign+Key+Visual',
    //   title: 'Key Visual — Summer Campaign', tag: 'Campaign', meta: '2024',
    //   link: ''
    // },
    // {
    //   id: 11, tab: 'campaign', type: 'image', aspect: 'portrait',
    //   src: 'https://placehold.co/800x1000/000000/ffffff?text=Campaign+Post',
    //   title: 'Awareness Campaign Series', tag: 'Campaign', meta: 'Print + Digital',
    //   link: ''
    // },
    // {
    //   id: 12, tab: 'campaign', type: 'image', aspect: 'square',
    //   src: 'https://placehold.co/800x800/1a1a1a/9b9b9b?text=Meta+Ads',
    //   title: 'Video Post', tag: 'Campaign', meta: 'Facebook / Instagram',
    //   link: ''
    // },
    // {
    //   id: 13, tab: 'campaign', type: 'image', aspect: 'portrait',
    //   src: 'https://placehold.co/800x1000/9b9b9b/ffffff?text=Social+Creatives',
    //   title: 'Social Creatives — NGO', tag: 'Campaign', meta: '2023',
    //   link: ''
    // },

    /* BRANDING */


    {
      id: 15, tab: 'brand', type: 'image', aspect: 'landscape',
      src: [
        'visuals/ws26/materials/23.jpg',
        'visuals/ws26/materials/01.jpg',
        'visuals/ws26/materials/02.jpg',
        'visuals/ws26/materials/03.jpg',
        'visuals/ws26/materials/04.jpg',
        'visuals/ws26/materials/05.jpg',
        'visuals/ws26/materials/06.jpg',
        'visuals/ws26/materials/07.jpg',
        'visuals/ws26/materials/08.jpg',
        'visuals/ws26/materials/09.jpg',
        'visuals/ws26/materials/10.jpg',
        'visuals/ws26/materials/11.jpg',
        'visuals/ws26/materials/12.jpg',
        'visuals/ws26/materials/13.jpg',
        'visuals/ws26/materials/14.jpg',
        'visuals/ws26/materials/15.jpg',
        'visuals/ws26/materials/16.jpg',
        'visuals/ws26/materials/17.jpg',
        'visuals/ws26/materials/18.jpg',
        'visuals/ws26/materials/19.jpg',
        'visuals/ws26/materials/20.jpg',
        'visuals/ws26/materials/21.jpg',
        'visuals/ws26/materials/22.jpg',
        'visuals/ws26/materials/24.jpg',
        'visuals/ws26/materials/25.jpg',
      ],
      title: 'Logo System & Guidelines', tag: 'Branding', meta: '2023',
      link: ''
    },

    
    // {
    //   id: 15, tab: 'brand', type: 'image', aspect: 'square',
    //   src: 'https://placehold.co/800x800/e20074/ffffff?text=Logo+System',
    //   title: 'Logo System & Guidelines', tag: 'Branding', meta: '2023',
    //   link: ''
    // },
    // {
    //   id: 16, tab: 'brand', type: 'image', aspect: 'landscape',
    //   src: 'https://placehold.co/1200x675/000000/9b9b9b?text=Visual+Identity',
    //   title: 'Visual Identity — Hospitality', tag: 'Branding', meta: '2023',
    //   link: ''
    // },

    /* EVENTS */


    {
      id: 14, tab: 'event', type: 'image', aspect: 'landscape',
      src: [
        'visuals/ws26/01.png',
        'visuals/ws26/02.png',
        'visuals/ws26/03.png',
        'visuals/ws26/04.png',
        'visuals/ws26/05.png',
        'visuals/ws26/06.png',
        'visuals/ws26/07.png',
        'visuals/ws26/08.png',
        'visuals/ws26/09.png',
        'visuals/ws26/10.png',
        'visuals/ws26/11.png',
        'visuals/ws26/12.png',
        'visuals/ws26/13.png',
        'visuals/ws26/14.png',
        'visuals/ws26/15.png',
        'visuals/ws26/16.png',
        'visuals/ws26/17.png',
      ],
      title: 'Brand Identity — Retail', tag: 'Branding', meta: '2024',
      link: ''
    },

    // {
    //   id: 17, tab: 'event', type: 'image', aspect: 'landscape',
    //   src: 'https://placehold.co/1200x675/1a1a1a/ffffff?text=Event+Branding',
    //   title: 'Event Branding — Conference', tag: 'Event', meta: '2024',
    //   link: ''
    // },
    // {
    //   id: 18, tab: 'event', type: 'image', aspect: 'portrait',
    //   src: 'https://placehold.co/800x1000/e20074/ffffff?text=Event+Poster',
    //   title: 'Event Poster Series', tag: 'Event', meta: 'Print',
    //   link: ''
    // },
    // {
    //   id: 19, tab: 'event', type: 'image', aspect: 'square',
    //   src: 'https://placehold.co/800x800/efeff0/333333?text=Event+Social',
    //   title: 'Social Countdown — Launch', tag: 'Event', meta: 'Instagram',
    //   link: ''
    // },
  ];

  /* ── 2. HELPERS ── */
  const ASPECT_RATIOS = {
    portrait:  '4 / 5',
    story:     '9 / 16',
    square:    '1 / 1',
    landscape: '16 / 9',
  };

  const ASPECT_LABELS = {
    portrait:  '4:5',
    story:     '9:16',
    square:    '1:1',
    landscape: '16:9',
  };

  const TYPE_ICON = {
    image: 'image',
    video: 'play_circle',
  };

  const TYPE_LABEL = {
    image: 'Image',
    video: 'Video',
  };

  /* normalise src to always be an array */
  function getSrcs(item) {
    return Array.isArray(item.src) ? item.src : [item.src];
  }

  /* ── 3. RENDER ── */
  const grid    = document.getElementById('work-grid');
  const empty   = document.getElementById('work-empty');
  const countEl = document.getElementById('work-count');

  function render(tab) {
    const items = tab === 'all' ? WORK : WORK.filter(w => w.tab === tab);
    grid.innerHTML = '';

    if (!items.length) {
      empty.classList.add('is-visible');
      countEl.textContent = '';
      return;
    }

    empty.classList.remove('is-visible');
    countEl.textContent = items.length + ' piece' + (items.length !== 1 ? 's' : '');

    items.forEach((item, i) => {
      const srcs      = getSrcs(item);
      const thumbnail = srcs[0];
      const hasMany   = srcs.length > 1;

      const el = document.createElement('div');
      el.className = 'work__item' + (item.type === 'video' ? ' work__item--video' : '');
      el.dataset.id = item.id;
      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'button');
      el.setAttribute('aria-label', 'View: ' + item.title);

      el.innerHTML = `
        <img
          class="work__item-img"
          src="${thumbnail}"
          alt="${item.title}"
          loading="lazy"
          style="aspect-ratio: ${ASPECT_RATIOS[item.aspect] || '4/5'}; object-fit: cover;"
        />
        <div class="work__item-overlay">
          <span class="work__item-tag">${item.tag}</span>
          <p class="work__item-title">${item.title}</p>
          <p class="work__item-meta">${item.meta}</p>
        </div>
        <span class="work__item-type">
          <span class="material-symbols-outlined">${TYPE_ICON[item.type] || 'image'}</span>
          ${TYPE_LABEL[item.type] || 'Image'}
        </span>
        ${hasMany ? `<span class="work__item-count"><span class="material-symbols-outlined">photo_library</span>${srcs.length}</span>` : ''}
        <span class="work__item-format">${ASPECT_LABELS[item.aspect] || ''}</span>
      `;

      el.addEventListener('click', () => openLightbox(item));
      el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openLightbox(item); });

      grid.appendChild(el);
    });
  }

  /* ── 4. TABS ── */
  document.querySelectorAll('.work__tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.work__tab').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      render(btn.dataset.tab);
    });
  });

  render('all');

  /* ── 5. LIGHTBOX ── */
  const lb        = document.getElementById('work-lightbox');
  const lbImg     = document.getElementById('lb-img');
  const lbCap     = document.getElementById('lb-caption');
  const lbClose   = document.getElementById('lb-close');
  const lbPrev    = document.getElementById('lb-prev');
  const lbNext    = document.getElementById('lb-next');
  const lbView    = document.getElementById('lb-view');
  const lbCounter = document.getElementById('lb-counter');

  /* current state */
  let currentItem  = null;   /* the WORK item */
  let currentSrcs  = [];     /* its image array */
  let currentSlide = 0;      /* index within the array */

  function openLightbox(item) {
    currentItem  = item;
    currentSrcs  = getSrcs(item);
    currentSlide = 0;
    renderSlide();
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lb.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function renderSlide() {
    const src   = currentSrcs[currentSlide];
    const total = currentSrcs.length;

    lbImg.src = src;
    lbImg.alt = currentItem.title;
    lbCap.textContent = currentItem.title + ' — ' + currentItem.meta;

    /* prev / next — navigate within this item's images */
    lbPrev.style.visibility = currentSlide > 0          ? 'visible' : 'hidden';
    lbNext.style.visibility = currentSlide < total - 1  ? 'visible' : 'hidden';

    /* counter — only show when more than one image */
    if (lbCounter) {
      if (total > 1) {
        lbCounter.textContent = (currentSlide + 1) + ' / ' + total;
        lbCounter.style.display = 'block';
      } else {
        lbCounter.style.display = 'none';
      }
    }

    /* View button */
    if (lbView) {
      if (currentItem.link && currentItem.link.trim() !== '') {
        lbView.href = currentItem.link;
        lbView.classList.add('is-visible');
      } else {
        lbView.href = '#';
        lbView.classList.remove('is-visible');
      }
    }
  }

  lbClose.addEventListener('click', closeLightbox);

  lbPrev.addEventListener('click', () => {
    if (currentSlide > 0) { currentSlide--; renderSlide(); }
  });

  lbNext.addEventListener('click', () => {
    if (currentSlide < currentSrcs.length - 1) { currentSlide++; renderSlide(); }
  });

  lb.addEventListener('click', e => {
    if (e.target === lb) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('is-open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft'  && currentSlide > 0)                       { currentSlide--; renderSlide(); }
    if (e.key === 'ArrowRight' && currentSlide < currentSrcs.length - 1)  { currentSlide++; renderSlide(); }
  });

})();


/* ============================================
   CONTACT — form submission via Formspree
   ============================================ */
(function () {
  const form   = document.getElementById('contact-form');
  const status = document.getElementById('cf-status');
  const submit = document.getElementById('cf-submit');
  const yearEl = document.getElementById('cf-year');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    status.textContent = '';
    status.className = 'contact__status';
    submit.disabled = true;
    submit.querySelector('.contact__submit-text').textContent = 'Sending…';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.textContent = 'Message sent — thanks, I\u2019ll be in touch soon.';
        status.classList.add('is-success');
        form.reset();
      } else {
        const data = await response.json().catch(() => ({}));
        const msg = data.errors
          ? data.errors.map(err => err.message).join(', ')
          : 'Something went wrong. Please email me directly.';
        status.textContent = msg;
        status.classList.add('is-error');
      }
    } catch (err) {
      status.textContent = 'Network error. Please email me directly.';
      status.classList.add('is-error');
    } finally {
      submit.disabled = false;
      submit.querySelector('.contact__submit-text').textContent = 'Send Message';
    }
  });
})();


/* ============================================
   MOBILE HAMBURGER MENU
   ============================================ */
(function () {
  const burger   = document.getElementById('nav-burger');
  const menu     = document.getElementById('mobile-menu');
  const overlay  = document.getElementById('mobile-overlay');
  const closeBtn = document.getElementById('mobile-close');
  const links    = document.querySelectorAll('.mobile-menu__link');

  if (!burger || !menu || !overlay) return;

  function openMenu() {
    burger.classList.add('is-open');
    menu.classList.add('is-open');
    overlay.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Close menu');
    menu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    burger.classList.remove('is-open');
    menu.classList.remove('is-open');
    overlay.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open menu');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    if (menu.classList.contains('is-open')) closeMenu();
    else openMenu();
  }

  burger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  links.forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && menu.classList.contains('is-open')) closeMenu();
  });
})();