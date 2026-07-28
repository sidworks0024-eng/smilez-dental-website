document.getElementById("waBtn").addEventListener("click", function () {

    const name = document.getElementById("patientName").value;
    const phone = document.getElementById("patientPhone").value;
    const age = document.getElementById("patientAge").value;

    if (name === "" || phone === "" || age === "") {
        alert("Please fill all the details.");
        return;
    }

    const message =
`Hello Smilez Dental Clinic,

Patient Name: ${name}
Phone: ${phone}
Age: ${age}

I would like to book an appointment.`;

    const whatsappNumber = "919591460881";

    window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
    );

});