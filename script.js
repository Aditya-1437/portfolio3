var typed = new Typed(".auto-typed",{
    strings : ["Web Developer","Web Designer","Programmer"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true,
})

function sendMail(){
    var params = {
        from_name : document.getElementById("floatingPassword").value,
        email : document.getElementById("floatingInput").value,
        company_name : document.getElementById("floatingCompany").value,
        job_role : document.getElementById("floatingRole").value,
        comments : document.getElementById("floatingComment").value
    }
    if(params.email=="" || params.email==null){
        alert("Please provide your email for us to reply");
        return false;
    }
    if(params.from_name=="" || params.from_name==null){
        alert("Please let me know your good name");
        return false;
    }
    if(params.company_name=="" || params.company_name==null){
        alert("Please tell me which company provided the offer");
        return false;
    }
    if(params.job_role=="" || params.job_role==null){
        alert("Please provide the job role you are offering");
        return false;
    }

    emailjs.send("service_txkr2yg","template_rvd2u4r",params).then(alert("Notification send Successfully!"));
}