# 🎯 Portfolio HEX - محمد هشام بركات

**Portfolio Framework احترافي جاهز للتعبئة**

> هذا هو الهيكل الأساسي فقط - بدون بيانات افتراضية. أنت من ستضيف بياناتك الحقيقية.

---

## 📋 المحتويات

- ✅ الرئيسية (Hero Section)
- ✅ الإحصائيات (Statistics)
- ✅ المهارات (Skills) - فارغة جاهزة للتعبئة
- ✅ المشاريع (Projects) - فارغة جاهزة للتعبئة
- ✅ الإنجازات (Achievements) - فارغة جاهزة للتعبئة
- ✅ التقييمات (Testimonials) - فارغة جاهزة للتعبئة
- ✅ الشهادات (Certificates) - فارغة جاهزة للتعبئة
- ✅ التواصل (Contact)
- ✅ دعم اللغة العربية والإنجليزية
- ✅ تشغيل/كتم الموسيقى

---

## 🚀 البدء السريع

### 1️⃣ إضافة المهارات

افتح `data.js` وابحث عن `skills`:

```javascript
skills: [
    {
        name: "Penetration Testing",
        description: "اختبار الاختراق والأمان",
        icon: "🎯"
    },
    {
        name: "Network Security",
        description: "أمان الشبكات",
        icon: "🛡️"
    }
]
```

### 2️⃣ إضافة المشاريع

افتح `data.js` وابحث عن `projects`:

```javascript
projects: [
    {
        title: "Security Audit Tool",
        description: "أداة لتدقيق الأمان الشاملة",
        technologies: ["Python", "Flask"],
        imageUrl: "https://example.com/image.jpg",
        projectUrl: "https://example.com/project",
        githubUrl: "https://github.com/user/project"
    }
]
```

### 3️⃣ إضافة المشاريع (Projects)

```javascript
projects: [
    {
        title: "اسم المشروع",
        description: "وصف المشروع",
        technologies: ["تقنية 1", "تقنية 2"],
        imageUrl: "رابط الصورة",
        projectUrl: "رابط المشروع",
        githubUrl: "رابط GitHub"
    }
]
```

### 4️⃣ إضافة الإنجازات (Achievements)

```javascript
achievements: [
    {
        title: "اسم الإنجاز",
        date: "2024-06-20",
        organization: "اسم الجهة",
        description: "وصف الإنجاز",
        rank: "المركز الأول"
    }
]
```

### 5️⃣ إضافة التقييمات (Testimonials)

```javascript
testimonials: [
    {
        name: "اسم الشخص",
        title: "الصفة",
        comment: "نص التقييم",
        rating: 5,
        date: "2024-05-10"
    }
]
```

### 6️⃣ إضافة الشهادات (Certificates)

```javascript
certificates: [
    {
        title: "اسم الشهادة",
        issuer: "الجهة المصدرة",
        date: "2024-03-20",
        imageUrl: "رابط صورة الشهادة",
        certificateUrl: "رابط الشهادة"
    }
]
```

### 7️⃣ إضافة الروابط الخارجية

```javascript
socialLinks: [
    { platform: "GitHub", url: "https://github.com/username" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/username" },
    { platform: "Twitter", url: "https://twitter.com/username" }
]
```

---

## 📁 هيكل الملفات

```
portfolio-hex/
├── index.html          # الصفحة الرئيسية
├── data.js            # ملف البيانات المركزي
├── app.js             # JavaScript الرئيسي
├── styles.css         # الأنماط
├── README.md          # هذا الملف
└── assets/
    └── resonance.mp3  # الموسيقى (اختياري)
```

---

## 🎨 الميزات

### 🌍 دعم اللغات
- **العربية** (RTL) 🇪🇬
- **الإنجليزية** (LTR) 🇬🇧
- تبديل اللغة من الواجهة

### 🎵 الموسيقى
- تشغيل/كتم الموسيقى
- دعم `HOME - Resonance`
- احترام منع التشغيل التلقائي

### 📱 الاستجابية
- تصميم متجاوب (Responsive Design)
- يعمل على جميع الأجهزة
- تحسين للهواتف الذكية

### 🌙 Dark Mode
- دعم الوضع الليلي التلقائي

---

## 📝 المعلومات الشخصية الثابتة

تم تعيين المعلومات التالية بالفعل في `data.js`:

```javascript
personal: {
    fullName: "محمد هشام بركات",
    nickname: "HEX",
    specialty: "الأمن السيبراني",
    phone: "01030403929",
    location: "مصر",
    email: "your@email.com" // أضف بريدك
}
```

---

## 🎯 الإحصائيات التلقائية

الإحصائيات تُحدّث تلقائياً بناءً على عدد العناصر المضافة:

- **عدد المشاريع** = `projects.length`
- **عدد الشهادات** = `certificates.length`
- **عدد الإنجازات** = `achievements.length`
- **عدد التقييمات** = `testimonials.length`

إذا لم تكن هناك عناصر، لن تظهر الإحصائيات.

---

## 🎨 التخصيص

### تغيير الألوان

افتح `styles.css` وعدّل متغيرات CSS:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
}
```

### تغيير الخطوط

في `styles.css`:

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body[lang="ar"] {
    font-family: 'Tajawal', 'Arial', sans-serif;
}
```

---

## 🔊 إضافة الموسيقى

1. ضع ملف `resonance.mp3` في مجلد `assets/`
2. يجب أن يكون الملف مرخص ومسموح الاستخدام
3. أيقونة التشغيل ستظهر في الشريط العلوي تلقا��ياً

---

## 🚀 النشر

### على GitHub Pages

1. اذهب إلى **Settings** > **Pages**
2. اختر **Deploy from a branch**
3. اختر الفرع `main`
4. سيتم النشر تلقائياً على `https://bsl420001-bit.github.io/portfolio-hex`

---

## 📊 ملخص البيانات المطلوبة

| القسم | النوع | الحالة |
|------|------|------|
| المهارات | مصفوفة | فارغة ✅ |
| المشاريع | مصفوفة | فارغة ✅ |
| الإنجازات | مصفوفة | فارغة ✅ |
| التقييمات | مصفوفة | فارغة ✅ |
| الشهادات | مصفوفة | فارغة ✅ |
| المعلومات الشخصية | كائن | مملوء ✅ |

---

## ⚠️ ملاحظات مهمة

- **لا تضف بيانات وهمية** - الموقع يعرض "فارغ" بدلاً من البيانات الوهمية
- **جميع البيانات في ملف واحد** - `data.js` يسهل التحديث
- **الترجمات كاملة** - عربي وإنجليزي
- **تلقائي تماماً** - الإحصائيات تتحدث بنفسها

---

## 💡 نصائح

1. **ابدأ بملف `data.js`** - أضف بياناتك هناك فقط
2. **لا تعدل HTML** - كل شيء يعمل تلقائياً
3. **استخدم صور عالية الجودة** - للمشاريع والشهادات
4. **تحقق من الروابط** - تأكد من أن جميع الروابط صحيحة
5. **اختبر على الهاتف** - تأكد من الاستجابة

---

## 📞 التواصل

**اسم:** محمد هشام بركات  
**اللقب:** HEX  
**التخصص:** الأمن السيبراني  
**الهاتف:** +20 103 040 3929  
**الموقع:** مصر

---

## 📄 الترخيص

جميع الحقوق محفوظة © 2026

---

**تم إنشاؤه بحب 💜 بواسطة GitHub Copilot**
