const $ = document;

$.addEventListener("DOMContentLoaded", () => {
    console.log("page chargée ");
    // $.addEventListener("click", () => {
    //     console.log("Click");
    // });

    $.querySelector("button").addEventListener("click", async () => {
        // event.preventDefault();
        console.log("click");
        const data = {
            firstName: $.querySelector("#firstName").value,
            lastName: $.querySelector("#lastName").value,
            email: $.querySelector("#email").value,
            message: $.querySelector("#message").value,
        };

        const response = await axios.post("http://localhost:3000/form", data);
        console.log(response);
        alert("Merci");
    });
});
