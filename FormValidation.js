function validate()
{
    var un = document.getElementById("uname").value
    var unp = /^[a-z A-Z]+$/
    
    var ph = document.getElementById("phone").value
    var php = /^[6-9]{1} [0-9]{9}$/


    if(un == "")
    {
        document.getElementById("msg").innerHTML = "Enter the username"
        return false
    }
    if(un.match(unp))
    {
        document.getElementById("msg").innerHTML = "username should contain Alphabits only"
        return false
    }
    if(un.length<3)
    {
        document.getElementById("msg").innerHTML = "username should contain minimum 3 charecters"
        return false
    }
    if(un.length>8)
    {
        document.getElementById("msg").innerHTML = "username should contain maximum 8 charecters"
        return false
        
    }

    if(ph == "")
    {
        document.getElementById("msg1").innerHTML = "Enter the phone number"
        return false
    }
    if(ph.match(php))
    true
    else
    {
        document.getElementById("msg1").innerHTML="Invalid phone number"
        return false
    }


}