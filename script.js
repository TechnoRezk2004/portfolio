/**
 * تبديل الصفحات في الـ Portfolio مع التمرير السلس
 * @param {string} pageId - المعرف الخاص بالقسم المراد عرضه
 */
function showPage(pageId) {
    // جلب جميع الأقسام التي تحمل كلاس page
    let pages = document.querySelectorAll('.page');

    // إخفاء جميع الصفحات بإزالة كلاس active
    pages.forEach(function(page) {
        page.classList.remove('active');
    });

    // إظهار الصفحة المطلوبة بإضافة كلاس active
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // التمرير السلس لبداية القسم بدلاً من الارتفاع العشوائي
        // بنعمل حساب الـ Sticky Nav عشان المحتوى ميتغطاش تحته
        const navHeight = document.getElementById('main-nav').offsetHeight;
        const elementPosition = targetPage.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
        });
    }
}