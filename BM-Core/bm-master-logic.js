// BM Global Ecosystem - Master Logic Controller
// This script handles tokenomics for all BM applications (Scanner, NET, Joy, etc.)

const BM_Core = {
    settings: {
        multiplier: 3,           // مكافأة 3 أضعاف الاشتراك
        referralBonus: 3.14,    // بونص الإحالة (المرحلة 1)
        referralTarget: 32,      // هدف الـ 32 رائد
        sustainabilityRate: 0.785 // بونص ما بعد الهدف
    },

    // دالة حساب مكافأة الاشتراك الموحدة لكل التطبيقات
    calculateSubscriptionReward: function(amount) {
        return amount * this.settings.multiplier;
    },

    // دالة حساب مكافأة الإحالات (متعة التعلم وما يماثلها)
    calculateReferralReward: function(count) {
        return (count <= this.settings.referralTarget) 
            ? this.settings.referralBonus 
            : this.settings.sustainabilityRate;
    }
};

// تصدير النظام ليتم استدعاؤه في التطبيقات الأخرى
window.BM_Core = BM_Core;

