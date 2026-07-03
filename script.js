document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode Toggle (sama untuk semua halaman)
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark');
        darkModeToggle.checked = true;
    }
    
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
    
    // Animasi untuk Linktree Page (jika ada)
    if(document.querySelector('.linktree')){
        gsap.from("header", {
          duration: 1,
          y: -50,
          opacity: 0,
          ease: "power2.out"
        });
        gsap.from(".profile", {
          duration: 1,
          y: -30,
          opacity: 0,
          delay: 0.5,
          ease: "power2.out"
        });
        gsap.from(".profile h1", {
          duration: 1,
          x: -30,
          opacity: 0,
          delay: 0.7,
          ease: "power2.out"
        });
        gsap.from(".profile p", {
          duration: 1,
          x: 30,
          opacity: 0,
          delay: 0.7,
          ease: "power2.out"
        });
        gsap.from(".links-container .wrapper", {
          duration: 1,
          y: 30,
          opacity: 0,
          delay: 1,
          stagger: 0.3,
          ease: "power2.out"
        });
    }
    
    // Animasi untuk Coming Soon Page
    if(document.querySelector('.hero')){
        // Animasi header (sama seperti halaman lain)
        gsap.from("header", {
          duration: 1,
          y: -50,
          opacity: 0,
          ease: "power2.out"
        });
        
        // Membuat timeline untuk animasi di dalam .hero
        let tl = gsap.timeline({ delay: 0.5 });
        tl.from(".hero h1", {
          duration: 1,
          y: -30,
          opacity: 0,
          ease: "power2.out"
        })
        .from(".hero h5", {
          duration: 1,
          y: 30,
          opacity: 0,
          ease: "power2.out"
        }, "-=0.5")
        .from(".hero .back", {
          duration: 1,
          y: 30,
          opacity: 0,
          ease: "power2.out"
        }, "-=0.5");
    }
  });
    