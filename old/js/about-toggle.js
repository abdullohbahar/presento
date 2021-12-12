function checkboxAbout() {
    var checkboxAbout = document.querySelector("#checkboxAbout").value;
    if ($("#checkboxAbout").is(":checked")) {
        var checked = "on";
    } else {
        var checked = "off";
    }

    if (checked == "on") {
        //   document.querySelector("#image_on").removeAttribute("hidden", "");
        //   document.querySelector("#image_off").setAttribute("hidden", "");

        var element_on = document.getElementById("image_onAbout");
        element_on.classList.remove("image_hidden");

        var element_off = document.getElementById("image_offAbout");
        element_off.classList.add("image_hidden");
    } else if (checked == "off") {
        //   document.querySelector("#image_off").removeAttribute("hidden", "");
        //   document.querySelector("#image_on").setAttribute("hidden", "");

        var element_off = document.getElementById("image_offAbout");
        element_off.classList.remove("image_hidden");

        var element_on = document.getElementById("image_onAbout");
        element_on.classList.add("image_hidden");
    }
}
