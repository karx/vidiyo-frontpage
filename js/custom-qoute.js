var qoutes_all = [
 {qoute: "Kitne aadmi the?", qoute_by: "Amjad Khan aka Gabbar "},
 {qoute: "Maine tumse kitni baar kaha hai Pushpa, mujhse yeh aansoo nahi dekhe jaate. I hate tears.", qoute_by: "Rajesh Khanna."},
 {qoute: "Hum jahan khade ho jate hai line wahi se shuru hoti hai.", qoute_by: "Amitabh Bachchan (Deawar)"},
 {qoute: "Sara shehar mujhe Loin ke naam se janata hai", qoute_by: "Arjit Singh "},
 {qoute: "Don ko pakadna mushkil hi nahi, namumkin hai.", qoute_by: "Amitabh Bachchan, Shahrukh Khan (Don)"},
 {qoute: "Rahul. Naam to suna hoga?", qoute_by: "Shahrukh Khan"},
 {qoute: "Picture abhi baaki hai mere dost.", qoute_by: "Shahrukh Khan (Om Shanti Om)"},
 {qoute: "Life mein sabse bada risk hota hai… koi risk na lena", qoute_by: "Ranbir Kapoor (Barfi)"},
 {qoute: "Aaj khush to bahut hoge tum", qoute_by: "Amitabh Bachchan"},
 {qoute: "Mooche ho to Nathulal jaise ho….warna na ho", qoute_by: "Amitabh Bachchan"},
]

$(document).ready(function(){
    updateQouteOnPage();
    setInterval(updateQouteOnPage, 4500);
    

});

function updateQouteOnPage() {
    var random_int = Math.floor(Math.random() * (10));
    var qoute_to_use = qoutes_all[random_int];
    $("#qoute-main").text(qoute_to_use.qoute);
    $("#qoute-by").text('- ' + qoute_to_use.qoute_by);
}








