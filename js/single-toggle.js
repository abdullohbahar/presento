function checkbox() {
    var checkbox = document.querySelector("#checkbox").value;
    if ($("#checkbox").is(":checked")) {
        var checked = "on";
    } else {
        var checked = "off";
    }

    if (checked == "on") {
        //   document.querySelector("#image_on").removeAttribute("hidden", "");
        //   document.querySelector("#image_off").setAttribute("hidden", "");

        var element_on = document.getElementById("image_on");
        element_on.classList.remove("image_hidden");

        var element_off = document.getElementById("image_off");
        element_off.classList.add("image_hidden");
    } else if (checked == "off") {
        //   document.querySelector("#image_off").removeAttribute("hidden", "");
        //   document.querySelector("#image_on").setAttribute("hidden", "");

        var element_off = document.getElementById("image_off");
        element_off.classList.remove("image_hidden");

        var element_on = document.getElementById("image_on");
        element_on.classList.add("image_hidden");
    }
}
