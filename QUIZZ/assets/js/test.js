 
          /*
           
                for(input of inputs)
                {
                    input.addEventListener("keyup",function(e)
                    {
                        if(e.target.hasAttribute("error"))
                        {
                            var idDivError=e.target.getAttribute("error");
                            if(e.target.getAttribute("type")=="password")
                            {
                                if(e.target.value.length < 5)
                                {
                                    document.getElementById(idDivError).innerText="Doit contenir au moins 5 caracteres";
                                }
                                else
                                {
                                    document.getElementById(idDivError).innerText="";
                                }
                            }
                            else
                            {
                                document.getElementById(idDivError).innerText="";
                            }
                        }
                    })
                }

            document.getElementById("pwd_c").addEventListener("keyup",function()
            {
                var pwd=document.getElementById("pwd").value;
                var pwd_c=document.getElementById("pwd_c").value;
                if(pwd_c===pwd)
                {
                    document.getElementById('pwd_ctxt').innerText="";

                }
                else
                {
                    document.getElementById('pwd_ctxt').innerText="les mots de passes ne sont pas identiques";

                }
            });
*/
document.getElementById("form_register").addEventListener("submit",function(e)
{   
    const inputs=document.getElementsByTagName("input");
    var error=false;
    for(input of inputs)
    {
        if(input.hasAttribute("error"))
        {
            var idDivError = input.getAttribute("error");
            if(!input.value.trim())
            {
                if(input.type==='file')
                {
                    document.getElementById(idDivError).innerText='choisir une photo';
                }
                else
                {
                    document.getElementById(idDivError).innerText='ce champ est obligatoitre';
                }
                error=true;
            }
        }

    }

    
   /* var pwd=document.getElementById("pwd").value.trim();
    var pwd_c=document.getElementById("pwd_c").value.trim();
    errorpwd=false;
    if(pwd!==pwd_c || pwd.length<5)
    {
        document.getElementById('error_4').innerText="le mot de passe doit avoir au moins 5 caracteres";
        errorpwd=true;
    }
    
    if(error || errorpwd)
    {
        e.preventDefault();
        return false;
    }
})*/

function prevUpload()
{
    document.getElementById('error_f').innerText="";
    var file = document.getElementById("imgUser").files[0];
    var reader = new FileReader();
    if (file) {
        reader.readAsDataURL(file);
        reader.onloadend = function () {
        document.getElementById("avatar").src = reader.result;
        }
    }
}
