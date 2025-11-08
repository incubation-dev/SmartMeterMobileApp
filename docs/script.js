     1	// Smooth scrolling for anchor links
     2	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     3	    anchor.addEventListener('click', function (e) {
     4	        e.preventDefault();
     5	        const target = document.querySelector(this.getAttribute('href'));
     6	        if (target) {
     7	            target.scrollIntoView({
     8	                behavior: 'smooth',
     9	                block: 'start'
    10	            });
    11	        }
    12	    });
    13	});
    14	
    15	// Add animation on scroll
    16	const observerOptions = {
    17	    threshold: 0.1,
    18	    rootMargin: '0px 0px -50px 0px'
    19	};
    20	
    21	const observer = new IntersectionObserver((entries) => {
    22	    entries.forEach(entry => {
    23	        if (entry.isIntersecting) {
    24	            entry.target.style.opacity = '1';
    25	            entry.target.style.transform = 'translateY(0)';
    26	        }
    27	    });
    28	}, observerOptions);
    29	
    30	// Observe all animated elements
    31	document.addEventListener('DOMContentLoaded', () => {
    32	    const animatedElements = document.querySelectorAll('.feature-card, .tech-item, .screenshot-item, .requirement-card, .download-card, .info-card, .step');
    33	    
    34	    animatedElements.forEach(el => {
    35	        el.style.opacity = '0';
    36	        el.style.transform = 'translateY(20px)';
    37	        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    38	        observer.observe(el);
    39	    });
    40	
    41	    // Progress bar animation
    42	    const progressBars = document.querySelectorAll('.progress-fill');
    43	    progressBars.forEach(bar => {
    44	        const width = bar.style.width;
    45	        bar.style.width = '0';
    46	        setTimeout(() => {
    47	            bar.style.width = width;
    48	        }, 100);
    49	    });
    50	});
    51	
    52	// Download button click tracking (optional)
    53	document.querySelectorAll('.btn-download').forEach(button => {
    54	    button.addEventListener('click', function(e) {
    55	        if (this.classList.contains('btn-disabled')) {
    56	            e.preventDefault();
    57	            alert('このAPKは実機テスト完了後に公開されます。');
    58	        } else {
    59	            console.log('APK download initiated');
    60	            // Add analytics tracking here if needed
    61	        }
    62	    });
    63	});
    64	
    65	// Add scroll-to-top button
    66	const scrollToTopBtn = document.createElement('button');
    67	scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    68	scrollToTopBtn.className = 'scroll-to-top';
    69	scrollToTopBtn.style.cssText = `
    70	    position: fixed;
    71	    bottom: 30px;
    72	    right: 30px;
    73	    width: 50px;
    74	    height: 50px;
    75	    background: var(--primary-color);
    76	    color: white;
    77	    border: none;
    78	    border-radius: 50%;
    79	    cursor: pointer;
    80	    display: none;
    81	    align-items: center;
    82	    justify-content: center;
    83	    font-size: 1.2rem;
    84	    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    85	    transition: all 0.3s ease;
    86	    z-index: 1000;
    87	`;
    88	
    89	document.body.appendChild(scrollToTopBtn);
    90	
    91	window.addEventListener('scroll', () => {
    92	    if (window.pageYOffset > 300) {
    93	        scrollToTopBtn.style.display = 'flex';
    94	    } else {
    95	        scrollToTopBtn.style.display = 'none';
    96	    }
    97	});
    98	
    99	scrollToTopBtn.addEventListener('click', () => {
   100	    window.scrollTo({
   101	        top: 0,
   102	        behavior: 'smooth'
   103	    });
   104	});
   105	
   106	scrollToTopBtn.addEventListener('mouseenter', () => {
   107	    scrollToTopBtn.style.transform = 'scale(1.1)';
   108	    scrollToTopBtn.style.background = 'var(--primary-dark)';
   109	});
   110	
   111	scrollToTopBtn.addEventListener('mouseleave', () => {
   112	    scrollToTopBtn.style.transform = 'scale(1)';
   113	    scrollToTopBtn.style.background = 'var(--primary-color)';
   114	});
   115	
