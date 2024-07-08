// تعريف المتغيرات
let campaigns = [];

// دالة لإضافة حملة جديدة
document.getElementById('campaignForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const campaignName = document.getElementById('campaignName').value;
    const platform = document.getElementById('platform').value;
    const budget = document.getElementById('budget').value;

    const campaign = {
        name: campaignName,
        platform: platform,
        budget: budget
    };

    campaigns.push(campaign);
    localStorage.setItem('campaigns', JSON.stringify(campaigns));
    alert('تم إضافة الحملة بنجاح!');
    this.reset();
});

// دالة لعرض الحملات الحالية
function loadCampaigns() {
    const storedCampaigns = localStorage.getItem('campaigns');
    if (storedCampaigns) {
        campaigns = JSON.parse(storedCampaigns);
        const tableBody = document.querySelector('#campaignsTable tbody');
        tableBody.innerHTML = '';
        campaigns.forEach(campaign => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${campaign.name}</td>
                <td>${campaign.platform}</td>
                <td>${campaign.budget}</td>
            `;
            tableBody.appendChild(row);
        });
    }
}

// تحميل الحملات عند فتح صفحة عرض الحملات
if (document.querySelector('#campaignsTable')) {
    loadCampaigns();
}
