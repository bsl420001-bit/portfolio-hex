// ==========================================
// تطبيق Portfolio الرئيسي
// ==========================================

class Portfolio {
    constructor() {
        this.currentLanguage = 'ar';
        this.audioPlaying = false;
        this.init();
    }

    // تهيئة التطبيق
    init() {
        this.setupEventListeners();
        this.renderSkills();
        this.renderProjects();
        this.renderAchievements();
        this.renderTestimonials();
        this.renderCertificates();
        this.updateStatistics();
        this.setupLanguageToggle();
        this.setupAudioToggle();
    }

    // ==========================================
    // إعداد مستمعي الأحداث
    // ==========================================
    setupEventListeners() {
        // تحديث الروابط النشطة عند التمرير
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    // ==========================================
    // المهارات
    // ==========================================
    renderSkills() {
        const container = document.getElementById('skillsContainer');
        const skills = portfolioData.skills;

        if (!skills || skills.length === 0) {
            container.innerHTML = `<div class="empty-state" data-i18n="empty_skills">${this.translate('empty_skills')}</div>`;
            return;
        }

        container.innerHTML = skills.map(skill => `
            <div class="skill-card">
                <div class="skill-icon">${skill.icon || '⭐'}</div>
                <h3 class="skill-name">${skill.name}</h3>
                <p class="skill-description">${skill.description}</p>
            </div>
        `).join('');
    }

    // ==========================================
    // المشاريع
    // ==========================================
    renderProjects() {
        const container = document.getElementById('projectsContainer');
        const projects = portfolioData.projects;

        if (!projects || projects.length === 0) {
            container.innerHTML = `<div class="empty-state" data-i18n="empty_projects">${this.translate('empty_projects')}</div>`;
            return;
        }

        container.innerHTML = projects.map(project => `
            <div class="project-card">
                ${project.imageUrl ? `<div class="project-image"><img src="${project.imageUrl}" alt="${project.title}"></div>` : ''}
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-technologies">
                        ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${project.projectUrl ? `<a href="${project.projectUrl}" target="_blank" class="btn btn-small">${this.translate('btn_view')}</a>` : ''}
                        ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="btn btn-small btn-secondary">GitHub</a>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // ==========================================
    // الإنجازات
    // ==========================================
    renderAchievements() {
        const container = document.getElementById('achievementsContainer');
        const achievements = portfolioData.achievements;

        if (!achievements || achievements.length === 0) {
            container.innerHTML = `<div class="empty-state" data-i18n="empty_achievements">${this.translate('empty_achievements')}</div>`;
            return;
        }

        container.innerHTML = achievements.map(achievement => `
            <div class="achievement-card">
                <div class="achievement-header">
                    <h3 class="achievement-title">${achievement.title}</h3>
                    <span class="achievement-date">${new Date(achievement.date).toLocaleDateString('ar-EG')}</span>
                </div>
                <p class="achievement-organization"><strong>${achievement.organization}</strong></p>
                <p class="achievement-description">${achievement.description}</p>
                ${achievement.rank ? `<p class="achievement-rank">🏆 ${achievement.rank}</p>` : ''}
            </div>
        `).join('');
    }

    // ==========================================
    // التقييمات
    // ==========================================
    renderTestimonials() {
        const container = document.getElementById('testimonialsContainer');
        const testimonials = portfolioData.testimonials;

        if (!testimonials || testimonials.length === 0) {
            container.innerHTML = `<div class="empty-state" data-i18n="empty_testimonials">${this.translate('empty_testimonials')}</div>`;
            return;
        }

        container.innerHTML = testimonials.map(testimonial => `
            <div class="testimonial-card">
                <div class="testimonial-header">
                    <h4 class="testimonial-name">${testimonial.name}</h4>
                    <p class="testimonial-title">${testimonial.title}</p>
                </div>
                <div class="testimonial-rating">
                    ${Array(testimonial.rating || 5).fill('⭐').join('')}
                </div>
                <p class="testimonial-text">"${testimonial.comment}"</p>
                <p class="testimonial-date">${new Date(testimonial.date).toLocaleDateString('ar-EG')}</p>
            </div>
        `).join('');
    }

    // ==========================================
    // الشهادات
    // ==========================================
    renderCertificates() {
        const container = document.getElementById('certificatesContainer');
        const certificates = portfolioData.certificates;

        if (!certificates || certificates.length === 0) {
            container.innerHTML = `<div class="empty-state" data-i18n="empty_certificates">${this.translate('empty_certificates')}</div>`;
            return;
        }

        container.innerHTML = certificates.map(cert => `
            <div class="certificate-card">
                ${cert.imageUrl ? `<div class="certificate-image"><img src="${cert.imageUrl}" alt="${cert.title}"></div>` : ''}
                <div class="certificate-content">
                    <h3 class="certificate-title">${cert.title}</h3>
                    <p class="certificate-issuer">${cert.issuer}</p>
                    <p class="certificate-date">${new Date(cert.date).toLocaleDateString('ar-EG')}</p>
                    ${cert.certificateUrl ? `<a href="${cert.certificateUrl}" target="_blank" class="btn btn-small">${this.translate('btn_view')}</a>` : ''}
                </div>
            </div>
        `).join('');
    }

    // ==========================================
    // تحديث الإحصائيات
    // ==========================================
    updateStatistics() {
        const stats = portfolioData.getStats();

        document.querySelectorAll('.stat-number').forEach(stat => {
            const statKey = stat.getAttribute('data-stat');
            const value = stats[statKey];
            if (value && value > 0) {
                stat.textContent = value;
                stat.closest('.stat-card').style.display = 'block';
            } else {
                stat.closest('.stat-card').style.display = 'none';
            }
        });
    }

    // ==========================================
    // تبديل اللغة
    // ==========================================
    setupLanguageToggle() {
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                this.currentLanguage = this.currentLanguage === 'ar' ? 'en' : 'ar';
                this.applyLanguage();
                langToggle.textContent = this.currentLanguage === 'ar' ? 'English' : 'العربية';
            });
        }
    }

    applyLanguage() {
        const html = document.documentElement;
        html.lang = this.currentLanguage;
        html.dir = this.currentLanguage === 'ar' ? 'rtl' : 'ltr';

        // تحديث النصوص
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.translate(key);
        });

        // إعادة تصيير الأقسام
        this.renderSkills();
        this.renderProjects();
        this.renderAchievements();
        this.renderTestimonials();
        this.renderCertificates();
    }

    // ترجمة النص
    translate(key) {
        const trans = translations[this.currentLanguage] || translations['ar'];
        return trans[key] || key;
    }

    // ==========================================
    // التحكم بالموسيقى
    // ==========================================
    setupAudioToggle() {
        const audioToggle = document.getElementById('audioToggle');
        const bgAudio = document.getElementById('bgAudio');

        if (audioToggle && bgAudio) {
            audioToggle.addEventListener('click', () => {
                if (this.audioPlaying) {
                    bgAudio.pause();
                    audioToggle.textContent = '🔇';
                    this.audioPlaying = false;
                } else {
                    bgAudio.play().catch(err => {
                        console.log('لا يمكن تشغيل الصوت:', err);
                    });
                    audioToggle.textContent = '🔊';
                    this.audioPlaying = true;
                }
            });

            // تحديث الأيقونة عند انتهاء الصوت
            bgAudio.addEventListener('ended', () => {
                audioToggle.textContent = '🔇';
                this.audioPlaying = false;
            });
        }
    }
}

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
});
