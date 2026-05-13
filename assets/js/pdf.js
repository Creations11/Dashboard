function exportFullReport(){

showToast(
"Generating PDF Report..."
);

html2pdf()
.from(document.body)
.save("5clipa-dashboard-report.pdf");

}
