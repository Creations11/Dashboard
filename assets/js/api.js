async function loadApplicationsFromCloud(){

    try{

        const response = await fetch(
            `${API_URL}?key=${API_KEY}&action=read`
        );

        const result = await response.json();

        if(result.status === "success"){

            applications = result.data || [];

            renderAll();

            renderCharts();

            showToast("Cloud sync successful ✔️");

        }else{

            showToast(result.message, "danger");

        }

    }catch(error){

        console.error(error);

        showToast("Cloud sync failed", "danger");

    }

}

async function saveApplicationToCloud(application){

    try{

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                key: API_KEY,
                action: "create",
                ...application
            })

        });

        const result = await response.json();

        if(result.status === "success"){

            showToast("Application saved ✔️");

        }else{

            showToast(result.message, "danger");

        }

    }catch(error){

        console.error(error);

        showToast("Save failed", "danger");

    }

}

async function deleteApplication(ref){

    try{

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                key: API_KEY,
                action: "delete",
                ref
            })

        });

        const result = await response.json();

        if(result.status === "success"){

            applications =
            applications.filter(
                a => (a.Ref || a.ref) !== ref
            );

            renderAll();

            showToast("Application deleted ✔️");

        }else{

            showToast(result.message, "danger");

        }

    }catch(error){

        console.error(error);

        showToast("Delete failed", "danger");

    }

}
