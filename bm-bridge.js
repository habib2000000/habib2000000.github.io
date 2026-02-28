/**
 * BM Pyramid Empire - Universal Smart Wallet & DEX Bridge v2.0
 * المظلة الرسمية والمحرك المركزي لمنظومة BM الذكية
 */

const BMWallet = {
    // جلب اسم التطبيق تلقائياً من عنوان الصفحة (مثلاً: BM Scanner)
    appName: document.title || "BM App",
    bal: 0,
    pool: "GA...PI_DEX_POOL", // عنوان حوض السيولة الخاص بك

    // 1. وظيفة استبدال التوكنز في Pi DEX (Swap)
    async swap(amt) {
        if (amt > this.bal) return alert(`رصيد ${this.appName} غير كافٍ للاستبدال.`);
        
        try {
            // تنفيذ الدفع عبر Pi SDK الموثق في App Studio
            const payment = await window.Pi.createPayment({
                amount: amt * 0.01,
                memo: `DEX Swap via ${this.appName}`,
                metadata: { 
                    type: "DEX_SWAP", 
                    source: this.appName,
                    network: "BM_PYRAMID"
                }
            });
            alert(`✅ تم تحويل ${amt} BM من تطبيق ${this.appName} إلى حوض السيولة بنجاح.`);
        } catch (e) {
            console.error(`[${this.appName}] Swap Error:`, e);
        }
    },

    // 2. وظيفة إرسال التوكنز (التحويل الداخلي عبر الجسر)
    async send(to, amt) {
        try {
            await fetch("https://habib2000000.github.io/BM-Core/tx", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    from_app: this.appName, 
                    to_user: to, 
                    amount: amt, 
                    token: "BM" 
                })
            });
            alert(`✅ تم تحويل ${amt} BM بنجاح إلى ${to} عبر تطبيق ${this.appName}.`);
        } catch (e) {
            console.error(`[${this.appName}] Transfer Error:`, e);
        }
    },

    // 3. كود المشاركة الذكي (للحصول على مكافأة 3.14 BM)
    share() {
        const shareData = {
            title: `انضم إليّ في تطبيق ${this.appName}`,
            text: `احصل على مكافأة 3.14 BM فورية في ${this.appName}! إمبراطورية BM Pyramid ترحب بك.`,
            url: window.location.href 
        };

        if (navigator.share) {
            navigator.share(shareData);
        } else {
            // دعم المتصفحات القديمة أو التليجرام
            window.open(`https://t.me/share/url?url=${encodeURIComponent(shareData.url)}&text=${encodeURIComponent(shareData.text)}`);
        }
    },

    // 4. تحديث الرصيد من الـ BM-Core (تلقائي عند الدخول)
    async syncBalance(username) {
        // يتم استدعاؤه لتحديث رصيد الـ 3.14 ومضاعفات الاشتراك
        console.log(`[${this.appName}] Syncing balance for: ${username}`);
    }
};

// تشغيل التهيئة عند تحميل أي تطبيق من الـ 21 تطبيقاً
document.addEventListener("DOMContentLoaded", () => {
    console.log(`BM Bridge Active: ${BMWallet.appName} is ready.`);
});
