// 1. Dark Mode Toggle Module
        const themeToggler = document.getElementById('themeToggler');
        const sunIcon = document.getElementById('sunIcon');
        const moonIcon = document.getElementById('moonIcon');
        const htmlElement = document.documentElement;

        
        themeToggler.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            if (currentTheme === 'dark') {
                htmlElement.setAttribute('data-bs-theme', 'light');
                sunIcon.classList.add('d-none');      
                moonIcon.classList.remove('d-none');  
            } else {
                htmlElement.setAttribute('data-bs-theme', 'dark');
                sunIcon.classList.remove('d-none');   
                moonIcon.classList.add('d-none');     
            }
        });

// 2. Download Resume Button
        document.getElementById('downloadResumeBtn').addEventListener('click', function() {
            window.open('assets/michael-adeniji-resume.pdf', '_blank');
        });

// 3. Interactive Terminal Sandbox Logic
        const consoleInput = document.getElementById('terminalConsoleInput');
        const consoleOutput = document.getElementById('terminalConsoleOutput');

        const terminalCommands = {
            'help': 'Available commands: <br>- <strong>status</strong> : check network status<br>- <strong>logcheck</strong> : run analytical audit of intrusion records<br>- <strong>whoami</strong> : displays current security terminal context<br>- <strong>clear</strong> : clears the screen terminal output',
            'status': 'Checking Clinify Server Nodes... <br><span class="text-success">[ACTIVE]</span> Database Port 5432: SECURED <br><span class="text-success">[ACTIVE]</span> Patient Intake Client Node: ENCRYPTED <br>Intrusion Vulnerability Score: 0%',
            'whoami': 'guest@michael-adeniji-defense-sandbox.local (Technical Auditor Context)',
            'logcheck': '<span class="text-danger">[WARN] Log ID #4812 from IP 192.168.1.104 attempted SQL Injection path.</span><br>Query payload parsed: <span class="text-warning">SELECT * FROM patients WHERE id = 1\' OR \'1\'=\'1</span><br><span class="text-success">[REMEDIATED]</span> Input sanitation rules blocked execution. Host access privileges revoked.',
            'clear': ''
        };

        consoleInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const userCommand = consoleInput.value.trim().toLowerCase();
                const newLine = document.createElement('p');
                newLine.innerHTML = `<span class="text-warning">$</span> <span class="text-white">${consoleInput.value}</span>`;
                consoleOutput.appendChild(newLine);

                if (userCommand === 'clear') {
                    consoleOutput.innerHTML = '';
                } else if (terminalCommands[userCommand]) {
                    const resultLine = document.createElement('p');
                    resultLine.innerHTML = terminalCommands[userCommand];
                    consoleOutput.appendChild(resultLine);
                } else if (userCommand !== '') {
                    const errorLine = document.createElement('p');
                    errorLine.innerHTML = `<span class="text-danger">Command not recognized: '${userCommand}'.</span> Type 'help' for support diagnostics context.`;
                    consoleOutput.appendChild(errorLine);
                }

                consoleInput.value = '';
                // Keep scroll of terminal at bottom
                consoleOutput.parentElement.scrollTop = consoleOutput.parentElement.scrollHeight;
            }
        });

// 4. Interactive Skill Insight Panel Logic
        const skillBadges = document.querySelectorAll('.skill-badge');
        const skillPanel = document.getElementById('skillDescriptionPanel');
        const selectedSkillName = document.getElementById('selectedSkillName');
        const selectedSkillDetail = document.getElementById('selectedSkillDetail');

        skillBadges.forEach(badge => {
            badge.addEventListener('click', () => {
                const detail = badge.getAttribute('data-skill');
                const skillName = badge.textContent.trim();
                selectedSkillName.textContent = skillName;
                selectedSkillDetail.textContent = detail ? `${detail}. Used actively in system config and architectural design.` : "Essential core expertise used across modern professional platforms.";
                skillPanel.classList.remove('d-none');
            });
        });

// 5. Custom Client-Side Contact Verification
        const contactForm = document.getElementById('portfolioContactForm');
        const formAlert = document.getElementById('contactFormAlert');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formAlert.classList.remove('d-none', 'alert-success', 'alert-danger');
            
            // Change button text to show loading status
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;

            // Send email via EmailJS using the form element directly
            emailjs.sendForm('service_qyahxa9', 'template_bhzpgoh', contactForm)
                .then(() => {
                    formAlert.classList.add('alert-success');
                    formAlert.textContent = `Excellent. Thank you, ${document.getElementById('inputName').value}! Your inquiry regarding '${document.getElementById('inputSubject').value}' has been captured successfully. Michael's communications channel is active.`;
                    
                    contactForm.reset();
                })
                .catch((error) => {
                    formAlert.classList.add('alert-danger');
                    formAlert.textContent = `Oops! Transmission failed. Please try again or reach out directly.`;
                    console.error('EmailJS Error:', error);
                })
                .finally(() => {
                    // Re-enable submission button
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                });
        });


// 6. Custom Pure JS Scrollspy & Smooth-Scroll Engine
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        const sections = document.querySelectorAll('section[id]');

        // Click handler with precise header offset correction
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                if (targetId.startsWith('#')) {
                    e.preventDefault();
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        const headerOffset = 85; // Matches nav design specifications
                        const elementPosition = targetSection.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                        
                        // Clean UX: Collapse mobile burger dropdown menu upon link click
                        const navbarCollapse = document.getElementById('navbarNav');
                        if (navbarCollapse.classList.contains('show')) {
                            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                            if (bsCollapse) {
                                bsCollapse.hide();
                            }
                        }
                    }
                }
            });
        });

        // Active highlighted link calculation engine
        function activeMenuOnScroll() {
            let scrollPosition = window.scrollY || document.documentElement.scrollTop;
            scrollPosition += 120; // Exact section visual trigger point offset

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }

        window.addEventListener('scroll', activeMenuOnScroll);
        window.addEventListener('load', activeMenuOnScroll);

