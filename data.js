// ==========================================
// بيانات Portfolio المركزية
// ==========================================
// هذا الملف يحتوي على جميع بيانات Portfolio
// قم بتعديل البيانات هنا لتحديث الموقع

const portfolioData = {
    // ==========================================
    // المعلومات الشخصية
    // ==========================================
    personal: {
        fullName: "محمد هشام بركات",
        nickname: "HEX",
        specialty: "الأمن السيبراني",
        phone: "01030403929",
        location: "مصر",
        email: "your@email.com" // أضف بريدك الإلكتروني
    },

    // ==========================================
    // المهارات
    // ==========================================
    // أضف مهاراتك هنا بالصيغة التالية:
    // {
    //     name: "اسم المهارة",
    //     description: "وصف المهارة",
    //     icon: "🛡️"
    // }
    skills: [
        // مثال:
        // {
        //     name: "Penetration Testing",
        //     description: "اختبار الاختراق والأمان",
        //     icon: "🎯"
        // }
    ],

    // ==========================================
    // المشاريع
    // ==========================================
    // أضف مشاريعك هنا بالصيغة التالية:
    // {
    //     title: "اسم المشروع",
    //     description: "وصف المشروع",
    //     technologies: ["React", "Node.js"],
    //     imageUrl: "رابط الصورة",
    //     projectUrl: "رابط المشروع",
    //     githubUrl: "رابط GitHub (اختياري)"
    // }
    projects: [
        // مثال:
        // {
        //     title: "Security Audit Tool",
        //     description: "أداة لتدقيق الأمان الشاملة",
        //     technologies: ["Python", "Flask"],
        //     imageUrl: "https://via.placeholder.com/300",
        //     projectUrl: "https://example.com/project",
        //     githubUrl: "https://github.com/user/project"
        // }
    ],

    // ==========================================
    // الإنجازات
    // ==========================================
    // أضف إنجازاتك هنا بالصيغة التالية:
    // {
    //     title: "اسم الإنجاز",
    //     date: "2024-01-15",
    //     organization: "اسم الجهة",
    //     description: "وصف الإنجاز",
    //     rank: "المركز أو الرقم (اختياري)"
    // }
    achievements: [
        // مثال:
        // {
        //     title: "أفضل مشروع أمني",
        //     date: "2024-06-20",
        //     organization: "مسابقة الأمن السيبراني",
        //     description: "فوز بمسابقة الأمن السيبراني الدولية",
        //     rank: "المركز الأول"
        // }
    ],

    // ==========================================
    // التقييمات
    // ==========================================
    // أضف التقييمات هنا بالصيغة التالية:
    // {
    //     name: "اسم صاحب التقييم",
    //     title: "صفته",
    //     comment: "نص التقييم",
    //     rating: 5,
    //     date: "2024-01-15"
    // }
    testimonials: [
        // مثال:
        // {
        //     name: "أحمد محمد",
        //     title: "مدير أمن المعلومات",
        //     comment: "محترف جداً في مجال الأمن السيبراني",
        //     rating: 5,
        //     date: "2024-05-10"
        // }
    ],

    // ==========================================
    // الشهادات
    // ==========================================
    // أضف الشهادات هنا بالصيغة التالية:
    // {
    //     title: "اسم الشهادة",
    //     issuer: "الجهة المصدرة",
    //     date: "2024-01-15",
    //     imageUrl: "رابط صورة الشهادة",
    //     certificateUrl: "رابط الشهادة (اختياري)"
    // }
    certificates: [
        // مثال:
        // {
        //     title: "Certified Ethical Hacker (CEH)",
        //     issuer: "EC-Council",
        //     date: "2024-03-20",
        //     imageUrl: "https://via.placeholder.com/300",
        //     certificateUrl: "https://example.com/cert"
        // }
    ],

    // ==========================================
    // الروابط الخارجية (Social Links)
    // ==========================================
    // أضف روابطك على وسائل التواصل هنا:
    socialLinks: [
        // مثال:
        // { platform: "GitHub", url: "https://github.com/username" },
        // { platform: "LinkedIn", url: "https://linkedin.com/in/username" },
        // { platform: "Twitter", url: "https://twitter.com/username" }
    ],

    // ==========================================
    // الإحصائيات (تُحدّث تلقائياً من البيانات)
    // ==========================================
    // لا تعدل هذا الجزء - يُحدّث تلقائياً
    getStats() {
        return {
            projects: this.projects.length,
            certificates: this.certificates.length,
            achievements: this.achievements.length,
            testimonials: this.testimonials.length
        };
    }
};

// ==========================================
// الترجمات
// ==========================================
const translations = {
    ar: {
        // Hero Section
        hero_title: "محمد هشام بركات",
        hero_subtitle: "HEX",
        hero_description: "متخصص في الأمن السيبراني",
        btn_projects: "عرض المشاريع",
        btn_contact: "تواصل معي",

        // Navigation
        nav_home: "الرئيسية",
        nav_skills: "مهاراتي",
        nav_projects: "مشاريعي",
        nav_achievements: "إنجازاتي",
        nav_testimonials: "التقييمات",
        nav_contact: "تواصل",

        // Section Titles
        stats_title: "أرقامي",
        skills_title: "مهاراتي",
        projects_title: "مشاريعي",
        achievements_title: "إنجازاتي",
        testimonials_title: "ماذا يقولون عني؟",
        certificates_title: "شهاداتي",
        contact_title: "تواصل معي",

        // Statistics
        stat_projects: "المشاريع",
        stat_certificates: "الشهادات",
        stat_achievements: "الإنجازات",
        stat_testimonials: "التقييمات",

        // Contact
        contact_name: "الاسم",
        contact_phone: "رقم التواصل",
        contact_location: "الموقع",
        contact_specialty: "التخصص",

        // Empty States
        empty_skills: "لم تضف أي مهارات بعد",
        empty_projects: "سيتم إضافة المشاريع قريبًا",
        empty_achievements: "لم تضف أي إنجازات بعد",
        empty_testimonials: "التقييمات ستتم إضافتها قريبًا",
        empty_certificates: "لم تضف أي شهادا�� بعد",

        // Footer
        footer_text: "&copy; 2026 محمد هشام بركات - HEX. جميع الحقوق محفوظة."
    },
    en: {
        // Hero Section
        hero_title: "Mohamed Hisham Barakat",
        hero_subtitle: "HEX",
        hero_description: "Cybersecurity Specialist",
        btn_projects: "View Projects",
        btn_contact: "Contact Me",

        // Navigation
        nav_home: "Home",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_achievements: "Achievements",
        nav_testimonials: "Testimonials",
        nav_contact: "Contact",

        // Section Titles
        stats_title: "My Numbers",
        skills_title: "My Skills",
        projects_title: "My Projects",
        achievements_title: "My Achievements",
        testimonials_title: "What People Say About Me?",
        certificates_title: "My Certificates",
        contact_title: "Contact Me",

        // Statistics
        stat_projects: "Projects",
        stat_certificates: "Certificates",
        stat_achievements: "Achievements",
        stat_testimonials: "Testimonials",

        // Contact
        contact_name: "Name",
        contact_phone: "Phone",
        contact_location: "Location",
        contact_specialty: "Specialty",

        // Empty States
        empty_skills: "No skills added yet",
        empty_projects: "Projects coming soon",
        empty_achievements: "No achievements added yet",
        empty_testimonials: "Testimonials coming soon",
        empty_certificates: "No certificates added yet",

        // Footer
        footer_text: "&copy; 2026 Mohamed Hisham Barakat - HEX. All rights reserved."
    }
};
