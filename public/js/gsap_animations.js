gsap.from("header h1", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from("header p", { opacity: 0, y: 50, duration: 1, delay: 1 });
gsap.from("#cta-button", { opacity: 0, scale: 0.5, duration: 1, delay: 1.5 });

gsap.from("#about", { opacity: 0, y: 50, duration: 1, scrollTrigger: "#about" });
gsap.from("#projects", { opacity: 0, y: 50, duration: 1, scrollTrigger: "#projects" });
gsap.from("#contact", { opacity: 0, y: 50, duration: 1, scrollTrigger: "#contact" });