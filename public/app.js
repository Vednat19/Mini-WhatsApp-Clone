let btn = document.querySelector(".delete");

btn.addEventListener("click", function (event){
    let ans = confirm("Are you sure you want to delete this?");
     if (ans) {
        alert("Item deleted!");
    } else {
        event.preventDefault(); // Stops the form submission
    }
});
