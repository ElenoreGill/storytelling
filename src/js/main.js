gsap.registerPlugin(ScrollTrigger);

const body = document.querySelector("body");
const sword = document.querySelector(".loading_image_sword");
const progress = document.querySelector(".loading_image_progress");
const tl = gsap.timeline();

body.style.height = window.innerHeight;
body.style.overflow = "hidden";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const enerver_parent = document.querySelectorAll(".la");
let totalWidth = 0;

for (let element of enerver_parent) {
  totalWidth += element.offsetWidth;
}

const easeLoading = gsap.utils.random(["power3.out", "power2.out", "expo.out"]);
gsap.set(".loading_red", { scaleX: 0 });
gsap.to(".loading_red", {
  delay: 0.5,
  scaleX: 1,
  duration: 1.5,
  ease: easeLoading,
  onComplete: () => {
    body.style.height = "auto";
    body.style.overflowY = "visible";
  },
});

gsap.to(".furious_lady", {
  yPercent: -80,
  ease: "none",

  scrollTrigger: {
    trigger: ".furious_header",
    scrub: true,
  },
});

gsap.fromTo(
  ".furious_header",
  {
    yPercent: 100,
    rotateX: "-60deg",
    skewY: "-2deg",
    scale: 0.8,
    autoAlpha: 0,
  },
  {
    yPercent: 0,
    rotateX: "0deg",
    skewY: "0deg",
    scale: 1,
    duration: 1.5,
    autoAlpha: 1,
    ease: "power4.out",

    scrollTrigger: {
      trigger: ".furious_lady",
      scrub: true,
      start: "top 80%",
      end: "+=600",
    },
  }
);

gsap.to(sword, {
  overwrite: true,
  yPercent: 150,

  scrollTrigger: {
    trigger: ".furious",
    start: "top 30%",
    end: "+=300",
    toggleActions: "play reset none none",
  },
});

let sections = gsap.utils.toArray(".hScroll");

const horizontalScroll = gsap.to(".titre", {
  x: -totalWidth,
  ease: "none",
  scrollTrigger: {
    trigger: ".titre",
    pin: true,

    momentum: true,

    scrub: 1,
    anticipatePin: 3,
  },
});

gsap.fromTo(
  ".ysa-1_mirror",
  {
    xPercent: -13,
    autoAlpha: 0,
  },
  {
    xPercent: 0,
    autoAlpha: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".ysa-1",
      start: "top 60%",
    },
  }
);
gsap.fromTo(
  ".ysa-1_chat",
  {
    scale: 0,
    autoAlpha: 0,
  },
  {
    scale: 1,
    autoAlpha: 1,
    duration: 0.8,
    delay: 1,
    scrollTrigger: {
      trigger: ".ysa-1",
    },
  }
);

gsap.fromTo(
  ".ysa-2_gossip",
  {
    xPercent: 15,
    autoAlpha: 0,
  },
  {
    xPercent: 0,
    autoAlpha: 1,
    duration: 1.2,
    scrollTrigger: {
      trigger: ".ysa-2",
      start: "top 60%",
    },
  }
);
gsap.fromTo(
  ".ysa-2_chat",
  {
    yPercent: -15,
    xPercent: 50,
    scale: 0,
    autoAlpha: 0,
  },
  {
    yPercent: 0,
    xPercent: 0,
    scale: 1,
    autoAlpha: 1,
    delay: 1.2,
    scrollTrigger: {
      trigger: ".ysa-2",
    },
  }
);

gsap.fromTo(
  ".zizi",
  {
    yPercent: 25,
    autoAlpha: 0,
  },
  {
    yPercent: 0,
    autoAlpha: 1,
    delay: 1.6,
    scrollTrigger: {
      trigger: ".ysa-2",
    },
  }
);

gsap.fromTo(
  ".ysa-3_nouveau",
  {
    yPercent: 25,
    autoAlpha: 0,
  },
  {
    yPercent: 0,
    autoAlpha: 1,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".ysa-3",
      start: "top 60%",
    },
  }
);
gsap.fromTo(
  ".ysa-3_chat",
  {
    xPercent: 10,
    scale: 0,
    autoAlpha: 0,
  },
  {
    xPercent: 0,
    scale: 1,
    autoAlpha: 1,
    delay: 0.8,
    scrollTrigger: {
      trigger: ".ysa-3",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".enerver_chat",
  {
    autoAlpha: 0,
  },
  {
    autoAlpha: 1,
    ease: "none",
    duration: 0.5,
    scrollTrigger: {
      containerAnimation: horizontalScroll,
      trigger: ".titre",
      start: "30% 40%",
      markers: true,
    },
  }
);
let quotes = gsap.utils.toArray(".quote");
quotes.forEach((quote) => {
  gsap.fromTo(
    quote,
    {
      autoAlpha: 0,
      xPercent: 30,
    },
    {
      autoAlpha: 1,
      xPercent: 0,

      duration: 0.5,
      scrollTrigger: {
        containerAnimation: horizontalScroll,
        trigger: quote,
        start: "top 70%",
        // markers:true,
      },
    }
  );
});
gsap.fromTo(
  ".book_img img",
  {
    autoAlpha: 0,
    xPercent: 30,
  },
  {
    autoAlpha: 1,
    xPercent: 0,
    duration: 0.5,
    scrollTrigger: {
      containerAnimation: horizontalScroll,
      trigger: ".book",
      start: "30% 40%",
      markers: true,
    },
  }
);

gsap.to(".bb-baron", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: ".bb-baron",
    start: "top 40%",
  },
});
gsap.fromTo(
  ".bb-baron_chat",
  { autoAlpha: 0, x: 200 },
  {
    autoAlpha: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".bb-baron",
      start: "top 50%",
    },
  }
);
