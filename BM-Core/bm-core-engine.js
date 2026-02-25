/**
 * 🏛️ BM PYRAMID EMPIRE - OFFICIAL CORE ENGINE
 * -----------------------------------------
 * Project: BM Token (Eternal Legacy)
 * Total Supply: 3.14 Trillion
 * Duration: 94 Years & 2 Months (1130 Months)
 * Liquidity Base: 300 Pi per 3.14 Billion BM
 */

const BMCoreEngine = {
    // 1. الإجمالي الكلي (3.14 تريليون)
    TOTAL_SUPPLY: 3140000000000,

    // 2. تقسيم الأثلاث (قاعدة السيادة)
    DISTRIBUTION: {
        COMMUNITY_VAULT: 3140000000000 / 3, // ثلث المجتمع
        DEVELOPERS_VAULT: 3140000000000 / 3, // ثلث المطورين
        OWNER_VAULT: 3140000000000 / 3      // ثلث المالك (الحصة السيادية)
    },

    // 3. نظام الإرث الأبدي (94 سنة وشهرين)
    LEGACY_SYSTEM: {
        TOTAL_MONTHS: 1130,
        COMMUNITY_TEN_PERCENT: (3140000000000 / 3) * 0.10, // الـ 10% المخصصة للتشغيل حالياً
        MONTHLY_RELEASE_LIMIT: ((3140000000000 / 3) * 0.10) / 1130, // المتاح صرفه شهرياً
        START_DATE: "2026-02-26",
        END_DATE: "2120-04-26"
    },

    // 4. حوض السيولة وقانون التوسع (300 Pi)
    LIQUIDITY_POOL: {
        INITIAL_PI_RESERVE: 300,
        EXPANSION_THRESHOLD_BM: 3140000000, // كل 3.14 مليار توكر موزعة
        ADDITIONAL_PI_PER_CYCLE: 300        // يتم ضخ 300 باي إضافية
    },

    // 5. قوانين المكافآت (نظام الـ 3 أضعاف والـ 3.14)
    GOVERNANCE_RULES: {
        WELCOME_BONUS: 3.14,           // بونص البداية (متعة التعلم)
        SUBSCRIPTION_MULTIPLIER: 3,    // بونص الـ 3 أضعاف (المضاعفة الإمبراطورية)
        SUSTAINABILITY_RATE: 0.785,    // معدل الاستدامة بعد 32 رائد
        REFERRAL_CAP: 32
    },

    /**
     * دالة حسابية لحساب السيولة الحالية بناءً على التوسع
     * @param {number} distributedAmount إجمالي ما تم توزيعه من توكنز
     */
    calculateCurrentPiLiquidity: function(distributedAmount) {
        let cycles = Math.floor(distributedAmount / this.LIQUIDITY_POOL.EXPANSION_THRESHOLD_BM);
        return this.LIQUIDITY_POOL.INITIAL_PI_RESERVE + (cycles * this.LIQUIDITY_POOL.ADDITIONAL_PI_PER_CYCLE);
    },

    /**
     * دالة منح بونص الاشتراك (3 أضعاف)
     */
    getSubscriptionBonus: function(paidAmount) {
        return paidAmount * this.GOVERNANCE_RULES.SUBSCRIPTION_MULTIPLIER;
    }
};

// جعل المحرك متاحاً لكل تطبيقات الإمبراطورية (Scanner, NET, Joy)
window.BM_CORE = BMCoreEngine;

console.log("✅ تم تفعيل دستور إمبراطورية بي ام بنجاح.");
console.log("⏳ نظام الإرث الأبدي: 94 عاماً وشهران من الاستدامة.");

