function toggleDescription(serviceNumber) {
    var description = document.getElementById("service-description-" + serviceNumber);
    var icon = document.getElementById("icon-" + serviceNumber);

    if (description.style.display === "block") {
        description.style.display = "none";
        icon.classList.remove("rotated");
    } else {
        description.style.display = "block";
        icon.classList.add("rotated");
    }
}