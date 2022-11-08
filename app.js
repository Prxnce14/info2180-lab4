window.onload = function()
{
    const httpRequest = new XMLHttpRequest()
    const element = document.querySelector(".btn")
    let myVar = "http://localhost/info2180-lab4/superheroes.php"
    httpRequest.onreadystatechange = temp
    httpRequest.open('Get', myVar)
    httpRequest.send()

    element.addEventListener('click', console.log('clicked'), {once: true})

    function temp()
    {
        if (httpRequest.readyState === XMLHttpRequest.DONE) 
        {
            //Checks for status 200 - ok 
            if (httpRequest.status === 200) 
            {
                let response = httpRequest.responseText;
                alert(response);
            } 
            else 
            {
            alert('There was a problem with the request.');
            }

        }
    }
}