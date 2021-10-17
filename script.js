function checkLoveper()
{
    var name=document.getElementById('name').value;
    var lname=document.getElementById('lname').value;
    if(name == "")
    {
        alert('Please enter you name');
    }
    else if(name.length<=2){
        alert('Min length should be 3');
    }else if(!isNaN(name))
    {
        alert('Please enter the characters only');
    }
    else if(lname == "")
    {
        alert('Please enter the other name');
    }
    else if(lname.length<=2){
        alert('Min length should be 3');
    }else if(!isNaN(lname))
    {
        alert('Please enter the characters only');
    }
    else{
        var lovedata=Math.random() * 100;
    lovedata=Math.floor(lovedata);
    document.getElementById('lovevalue').value=lovedata + "%";

    }

    
}

