// Task 1: Creating the Base Structure
	// Set up the basic HTML structure in the HTML file

document.addEventListener("DOMContentLoaded", () => {
    console.log("Risk Dashboard Loaded");

    const riskDashboard = document.getElementById("riskDashboard");
    const riskForm = document.getElementById("riskForm");
    const increaseRiskBtn = document.getElementById("increaseRiskBtn");
});

// Task 2: Adding Risk Items Dynamically
    function addRiskItem(riskName, riskLevel, department) {
        const riskCard = document.createElement("div");
        riskCard.classList.add("riskCard");

        // Assign background color based on risk level (Task 4: Categorizing Risks By Level)
        if (riskLevel === "Low") riskCard.classList.add("low");
        if (riskLevel === "Medium") riskCard.classList.add("medium");
        if (riskLevel === "High") riskCard.classList.add("high");

        riskCard.innerHTML = `
            <strong>${riskName}</strong> - ${riskLevel} (${department})
            <button class="resolveBtn">Resolve</button>
        `;

 // Task 3: Removing Risk Items
        riskCard.querySelector(".resolveBtn").addEventListener("click", (e) => {
            e.stopPropagation(); // (Task 6: Handling Event Propagation) Prevent event bubbling
            riskCard.remove();
        });

        riskDashboard.appendChild(riskCard);
    }

    // Form Submission - Add Risk
    riskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("riskName").value;
        const level = document.getElementById("riskLevel").value;
        const department = document.getElementById("department").value;
        addRiskItem(name, level, department);
        riskForm.reset();
    });

