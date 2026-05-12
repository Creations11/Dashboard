function validateForm(data) {
    const required = ['fullname', 'id', 'phone', 'loan', 'repayment', 'payday'];
    for (let field of required) {
        if (!data[field] || String(data[field]).trim() === '') {
            showToast(`Missing field: ${field}`, 'error');
            return false;
        }
    }
    return true;
}

function showToast(msg, type = "success") {
    const toast = document.getElementById("toast");
    if (toast) {
        toast.textContent = msg;
        toast.style.borderLeftColor = type === "success" ? "#00ff9d" : "#ff3b5c";
        toast.style.display = "block";
        setTimeout(() => toast.style.display = "none", 4500);
    }
}