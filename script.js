                   // Chat in whatsapp
const phoneNumber = "918621076191"; // Your WhatsApp number
        const whatsappLink = `https://wa.me/${phoneNumber}`;
        document.getElementById("whatsapp-link").href = whatsappLink;

// Don't copy any sentence
document.addEventListener("copy", (event) => {
    const selectedData = window.getSelection().toString();
    event.clipboardData.setData(
        "text/plain",
        "🤞"
    );
    event.preventDefault();
});


                      //Animated number counter
// Get elements from the DOM 
const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");
//variable that tracks if the counters have been activated
let activated = false;
//add scroll event to the page
window.addEventListener("scroll", () => {
    // if the page is scrolled to the containers
    // element and the counters are not activated
    if(
        pageYOffset > container.offsetTop - container.offsetHeight - 200 && activated === false
    ){
        // select all counters 
        counters.forEach(counter => {
            // set counter values to zero 
            counter.innerText = 0;
            // Set count variable to track the count 
            let count = 0;

            // update count function 
            function updateCount() {
                // get counter target number to count to 
                const target = parseInt(counter.dataset.count);
                // as long as the count is below the target number 
                if(count < target){
                    // increment the count 
                    count++;
                    // set the counter text to the count 
                    counter.innerText = count;
                    // repeat this every 10 miliseconds 
                    setTimeout(updateCount, 40); //count speed
                }else{
                    // set the counter text to the target number 
                    counter.innerText = target;
                }
            }
            // run the function initially 
            updateCount();
            // set activated to true 
            activated = true;
        });
        // if the page is scrolled back a certain amount or to top 
        // and activated is true 
    }else if(
        pageYOffset < container.offsetTop - container.offsetHeight - 500 || pageYOffset === 0 && activated === true) {
            // select all counters 
            counters.forEach(counter => {
                // set counter text back to zero
                counter.innerText = 0;
            });
            // set activated to false 
            activated = false;
        }
});


                       // Clear the form 
function clearForm(event) {
    // Delay clearing the form to ensure the submission completes
    const form = event.target;
    setTimeout(() => {
        form.reset(); // Clears all fields in the form
    }, 500); // Adjust delay time as needed
}