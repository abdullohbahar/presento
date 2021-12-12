function checkbox1() {
  var checkbox1 = document.querySelector("#checkbox1").value;
  if ($("#checkbox1").is(":checked")) {
    var checked = "on";
  } else {
    var checked = "off";
  }

  if (checked == "on") {
    //   document.querySelector("#image_on").removeAttribute("hidden", "");
    //   document.querySelector("#image_off").setAttribute("hidden", "");

    var element_on = document.getElementById("image_on1");
    element_on.classList.remove("image_hidden");

    var element_off = document.getElementById("image_off1");
    element_off.classList.add("image_hidden");
  } else if (checked == "off") {
    //   document.querySelector("#image_off").removeAttribute("hidden", "");
    //   document.querySelector("#image_on").setAttribute("hidden", "");

    var element_off = document.getElementById("image_off1");
    element_off.classList.remove("image_hidden");

    var element_on = document.getElementById("image_on1");
    element_on.classList.add("image_hidden");
  }
}

function checkbox2() {
  var checkbox2 = document.querySelector("#checkbox2").value;
  if ($("#checkbox2").is(":checked")) {
    var checked = "on";
  } else {
    var checked = "off";
  }

  if (checked == "on") {
    //   document.querySelector("#image_on").removeAttribute("hidden", "");
    //   document.querySelector("#image_off").setAttribute("hidden", "");

    var element_on = document.getElementById("image_on2");
    element_on.classList.remove("image_hidden");

    var element_off = document.getElementById("image_off2");
    element_off.classList.add("image_hidden");
  } else if (checked == "off") {
    //   document.querySelector("#image_off").removeAttribute("hidden", "");
    //   document.querySelector("#image_on").setAttribute("hidden", "");

    var element_off = document.getElementById("image_off2");
    element_off.classList.remove("image_hidden");

    var element_on = document.getElementById("image_on2");
    element_on.classList.add("image_hidden");
  }
}

function checkbox3() {
  var checkbox3 = document.querySelector("#checkbox3").value;
  if ($("#checkbox3").is(":checked")) {
    var checked = "on";
  } else {
    var checked = "off";
  }

  if (checked == "on") {
    //   document.querySelector("#image_on").removeAttribute("hidden", "");
    //   document.querySelector("#image_off").setAttribute("hidden", "");

    var element_on = document.getElementById("image_on3");
    element_on.classList.remove("image_hidden");

    var element_off = document.getElementById("image_off3");
    element_off.classList.add("image_hidden");
  } else if (checked == "off") {
    //   document.querySelector("#image_off").removeAttribute("hidden", "");
    //   document.querySelector("#image_on").setAttribute("hidden", "");

    var element_off = document.getElementById("image_off3");
    element_off.classList.remove("image_hidden");

    var element_on = document.getElementById("image_on3");
    element_on.classList.add("image_hidden");
  }
}

function checkbox4() {
  var checkbox4 = document.querySelector("#checkbox4").value;
  if ($("#checkbox4").is(":checked")) {
    var checked = "on";
  } else {
    var checked = "off";
  }

  if (checked == "on") {
    //   document.querySelector("#image_on").removeAttribute("hidden", "");
    //   document.querySelector("#image_off").setAttribute("hidden", "");

    var element_on = document.getElementById("image_on4");
    element_on.classList.remove("image_hidden");

    var element_off = document.getElementById("image_off4");
    element_off.classList.add("image_hidden");
  } else if (checked == "off") {
    //   document.querySelector("#image_off").removeAttribute("hidden", "");
    //   document.querySelector("#image_on").setAttribute("hidden", "");

    var element_off = document.getElementById("image_off4");
    element_off.classList.remove("image_hidden");

    var element_on = document.getElementById("image_on4");
    element_on.classList.add("image_hidden");
  }
}
