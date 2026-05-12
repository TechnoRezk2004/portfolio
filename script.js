/**
 * تبديل الصفحات في الـ Portfolio
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
        
        // التمرير السلس للأسفل لمشاهدة المحتوى
        window.scrollTo({ 
            top: window.innerHeight, 
            behavior: 'smooth' 
        });
    }
}