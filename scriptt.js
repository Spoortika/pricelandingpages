function togglePricing(pricingType) {
    // Hide all pricing tiers
    document.querySelectorAll('.pricing-tier').forEach(function (tier) {
        tier.style.display = 'none';
    });

    // Show the selected pricing tier
    document.getElementById(pricingType + '-price').parentNode.style.display = 'block';
}
