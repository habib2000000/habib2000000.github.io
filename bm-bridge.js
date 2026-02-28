// BM Pyramid Empire - Universal Reward Bridge
const BMEcosystem = {
    appPrefix: "BM",
    rewardAmount: 3.14,
    subscriptionMultiplier: 3,

    // وظيفة تسجيل الدخول ومنح المكافأة
    async initializeBMRewards() {
        try {
            // 1. جلب بيانات المستخدم من Pi SDK
            const user = await window.Pi.authenticate(['username', 'payments']);
            const username = user.user.username;

            // 2. إرسال إشارة للجسر (GitHub Bridge) لتسجيل الدخول
            this.sendToBridge(username, "APP_ENTRY_REWARD");

            console.log(`Welcome to BM Empire, ${username}! checking rewards...`);
        } catch (error) {
            console.error("BM Bridge Error:", error);
        }
    },

    // وظيفة معالجة المكافأة المزدوجة (إحالة + اشتراك)
    async processDoubleBonus(referrerId, isSubscriptionActive) {
        if (isSubscriptionActive) {
            // حساب مكافأة الاشتراك (3 أضعاف الـ 3.14)
            const subBonus = this.rewardAmount * this.subscriptionMultiplier;
            
            // إرسال البيانات لنظام الـ PM لتحديث الرصيد
            this.updatePMInventory(referrerId, this.rewardAmount, subBonus);
            
            this.showRewardUI(this.rewardAmount, subBonus);
        }
    },

    // التواصل مع الجسر (GitHub Pages / Backend)
    async sendToBridge(username, actionType) {
        const bridgeURL = "https://habib2000000.github.io/BM-Core/update";
        await fetch(bridgeURL, {
            method: 'POST',
            body: JSON.stringify({ user: username, action: actionType })
        });
    },

    // إظهار واجهة المكافأة للرائد
    showRewardUI(refAmount, subAmount) {
        alert(`🎉 مبروك! تم إضافة ${refAmount} BM للإحالة و ${subAmount} BM كأضعاف اشتراك لرصيدك الموحد في إمبراطورية BM!`);
    }
};

