
var options = {
    "key": "rzp_test_UcHqZDRzEhzV0F", // Enter the Key ID generated from the Dashboard
    "amount": "29935", // Amount is in currency subunits. Default currency is INR. Hence, 29935 refers to 29935 paise or INR 299.35.
    "currency": "INR",
    "name": "Acme Corp",
    "description": "A Wild Sheep Chase is the third novel by Japanese author  Haruki Murakami",
    "image": "https://example.com/your_logo",
    "order_id": "order_9A33XWu170gUtm",//Order ID is generated as Orders API has been implemented. Refer the Checkout form table given below
    "handler": function (response){
        alert(response.razorpay_payment_id);
    },
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com"
    },
    "notes": {
        "address": "note value"
    },
    "theme": {
        "color": "#F37254"
    }
};
var rzp1 = new Razorpay(options);
document.getElementById('get-me-money').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}
