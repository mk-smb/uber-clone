document.querySelector("#dropdown-btn").addEventListener("click", function() {
    // dropdown-menu
    const dropdown_toggle = document.querySelector("#dropdown-nav");
    if (dropdown_toggle.classList.contains("hidden")) {
        dropdown_toggle.classList.remove("hidden");
        dropdown_toggle.classList.add("block");
       
    } else {
        dropdown_toggle.classList.remove("block");
        dropdown_toggle.classList.add("hidden");
       
    };
    // icon-toggler
    const icon = document.querySelector("#dropdown-icon")

    icon.classList.toggle("fa-angle-down");
    icon.classList.toggle("fa-angle-up");
});



