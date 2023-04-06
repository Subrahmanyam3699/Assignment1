
const login1=document.getElementById("login_page");
const reg=document.getElementById("register_page");
const note=document.getElementById("note_page");
//console.log(login1)
if(login1) login1.addEventListener('submit',funlogin)
if(reg) reg.addEventListener('submit',funregister)
if(note) note.addEventListener('submit',funnote)


function funregister(e)
{
    e.preventDefault();
    let f_name=document.getElementById("f_name").value;
    let l_name=document.getElementById("l_name").value;
    let u_name=document.getElementById("u_name").value;
    let pswd=document.getElementById("pswd").value;


class User{
    constructor(f_name,l_name,u_name,pswd)
    {
        this.f_name=f_name;
        this.l_name=l_name;
        this.u_name=u_name;
        this.pswd=pswd;
    }
    getf_name(){
      return this.f_name;
    }
    getl_name()
    {
        return this.l_name;
    }
    getu_name()
    {
        return this.u_name;
    }
    getpswd()
    {
        return this.pswd;
    }
    setF_name(f_name)
   {
    this.f_name=f_name;
   }
    setL_name(l_name)
    {
        this.l_name=l_name;
    }
    setU_name(u_name)
    {
        this.u_name=u_name;
    }
    setpswd(pswd)
    {
        this.pswd=pswd;
    }
}
    const p1=new User(f_name,l_name,u_name,pswd);
    console.log(p1);

}

function funlogin(e)
{
    e.preventDefault()

    let u_name=document.getElementById("u_name").value;
    let pswd=document.getElementById("pswd").value;
   
    class User{
        constructor(u_name,pswd)
        {
           
            this.u_name=u_name;
            this.pswd=pswd;
        }

        getu_name()
    {
        return this.u_name;
    }
    getpswd()
    {
        return this.pswd;
    }
    setU_name(u_name)
    {
        this.u_name=u_name;
    }
    setpswd(pswd)
    {
        this.pswd=pswd;
    }
       }
   
    const user1=new User(u_name,pswd);
    console.log(user1);
}

function funnote(e)
{
    e.preventDefault()
   
    let note1=document.getElementById('note1').value;
   
   
    class User{
        constructor(note)
        {
           
            this.note=note;
           
        }
        getnote(){
            return this.note;
        }
        setnote(newnote){
            this.note = newnote;
        }
    }

    const user1=new User(note1);
    console.log(user1);
}
