const $ = document;

$.addEventListener("DOMContentLoaded", () => {
    console.log("page chargée ");
    // $.addEventListener("click", () => {
    //     console.log("Click");
    // });

    $.querySelector("button").addEventListener("click", () => {
        console.log("click");
        const data = {
            firstName: $.querySelector("#firstName").value,
            lastName: $.querySelector("#lastName").value,
            email: $.querySelector("#email").value,
            message: $.querySelector("#message").value,
        };
        // J'ai l'objet à envoyer dans postman pour tester ma route
    });
});
