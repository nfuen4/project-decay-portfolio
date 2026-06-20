// Interactive Logic for Project Decay Portfolio

// Strategy Comparison Toggle
const strategyToggle = document.getElementById('strategy-toggle');
const label30 = document.getElementById('label-30');
const label14 = document.getElementById('label-14');
const cardReactive = document.getElementById('card-reactive');
const cardPredictive = document.getElementById('card-predictive');

strategyToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
        // Active Predictive state
        label14.classList.add('active');
        label30.classList.remove('active');
        cardPredictive.classList.add('active');
        cardReactive.classList.remove('active');
    } else {
        // Active Reactive state
        label30.classList.add('active');
        label14.classList.remove('active');
        cardReactive.classList.add('active');
        cardPredictive.classList.remove('active');
    }
});

// Tab Switcher for Visual Showcase
function switchShowcaseTab(index) {
    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.display-panel');

    // Remove active classes
    tabs.forEach(tab => tab.classList.remove('active'));
    panels.forEach(panel => panel.classList.remove('active'));

    // Set new active classes
    tabs[index].classList.add('active');
    panels[index].classList.add('active');
}
