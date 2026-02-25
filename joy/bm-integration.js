/**
 * 🔗 كود الربط الإمبراطوري - BM Integration
 * يربط واجهة المستخدم بدستور الـ 94 عاماً
 */

const BM_App_Logic = {
    // 1. حساب رصيد المستخدم بناءً على الإحالات
    updateUserBalance: function(referralCount) {
        let balance = 0;
        const core = window.BM_CORE; // استدعاء الدستور من BM-Core

        if (referralCount <= core.LOGIC.REFERRAL_CAP) {
            balance = referralCount * core.LOGIC.REWARD;
        } else {
            // حساب المرحلة الأولى + مكافأة الاستدامة لما بعد الـ 32
            balance = (core.LOGIC.REFERRAL_CAP * core.LOGIC.REWARD) + 
                      ((referralCount - core.LOGIC.REFERRAL_CAP) * core.LOGIC.SUSTAINABILITY);
        }
        return balance.toFixed(3);
    },

    // 2. حساب بونص الاشتراك (الـ 3 أضعاف)
    calculateSubBonus: function(amountPaid) {
        return amountPaid * window.BM_CORE.LOGIC.MULTIPLIER;
    },

    // 3. عرض رسالة الإرث الأبدي
    showLegacyMessage: function() {
        const monthsLeft = window.BM_CORE.LOGIC.LIFESPAN_MONTHS;
        console.log(`إمبراطورية بي ام: نظام الإرث نشط. متبقي ${monthsLeft} شهر من العطاء.`);
    }
};

// تشغيل الربط عند تحميل الصفحة
window.onload = () => {
    if (window.BM_CORE) {
        console.log("✅ تم الربط بنجاح مع محرك BM-Core");
        BM_App_Logic.showLegacyMessage();
    } else {
        console.error("❌ فشل الربط: تأكد من استدعاء ملف bm-core-engine.js أولاً");
    }
};

