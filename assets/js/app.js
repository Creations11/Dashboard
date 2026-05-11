window.onload = async () => {

    loadTheme();

    runComplianceChecks();

    await loadApplicationsFromCloud();

    setInterval(async () => {

        await loadApplicationsFromCloud();

    }, AUTO_REFRESH_INTERVAL);

    showToast("5Clipa Cloud Platform Ready ✔️");

};
