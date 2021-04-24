//functions for changing the style (color and size) of the header links on each page when the user moves the mouse over

function home() {
    document.getElementById("home").style.color = "red";
    document.getElementById("home").style.fontSize = "15pt";
  }

  function about() {

    document.getElementById("about").style.color = "red";
    document.getElementById("about").style.fontSize = "15pt";
  }

  function regs() {

    document.getElementById("regs").style.color = "red";
    document.getElementById("regs").style.fontSize = "15pt";
  }

  function equip() {

    document.getElementById("equip").style.color = "red";
    document.getElementById("equip").style.fontSize = "15pt";
  }

  function tech() {

    document.getElementById("tech").style.color = "red";
    document.getElementById("tech").style.fontSize = "15pt";
  }

  function site() {

    document.getElementById("site").style.color = "red";
    document.getElementById("site").style.fontSize = "15pt";
  }

  function contact() {

    document.getElementById("contact").style.color = "red";
    document.getElementById("contact").style.fontSize = "15pt";
  }

  function creds() {

    document.getElementById("creds").style.color = "red";
    document.getElementById("creds").style.fontSize = "15pt";
    
  }

  function rHome() {
    document.getElementById("home").style.color = "white";
    document.getElementById("home").style.fontSize = "12pt";
  }

  function rAbout() {
    document.getElementById("about").style.color = "white";
    document.getElementById("about").style.fontSize = "12pt";
  }

  function rRegs() {
    document.getElementById("regs").style.color = "white";
    document.getElementById("regs").style.fontSize = "12pt";
  }

  function rEquip() {
    document.getElementById("equip").style.color = "white";
    document.getElementById("equip").style.fontSize = "12pt";
  }

  function rTech() {
    document.getElementById("tech").style.color = "white";
    document.getElementById("tech").style.fontSize = "12pt";
  }

  function rSite() {
    document.getElementById("site").style.color = "white";
    document.getElementById("site").style.fontSize = "12pt";
  }

  function rContact() {
    document.getElementById("contact").style.color = "white";
    document.getElementById("contact").style.fontSize = "12pt";
  }

  function rCreds() {
    document.getElementById("creds").style.color = "white";
    document.getElementById("creds").style.fontSize = "12pt";
  }

  document.getElementById("home").onmouseover = home;
  document.getElementById("about").onmouseover = about;
  document.getElementById("regs").onmouseover = regs;
  document.getElementById("equip").onmouseover = equip;
  document.getElementById("tech").onmouseover = tech;
  document.getElementById("site").onmouseover = site;
  document.getElementById("contact").onmouseover = contact;
  document.getElementById("creds").onmouseover = creds;

  document.getElementById("home").onmouseout = rHome;
  document.getElementById("about").onmouseout = rAbout;
  document.getElementById("regs").onmouseout = rRegs;
  document.getElementById("equip").onmouseout = rEquip;
  document.getElementById("tech").onmouseout = rTech;
  document.getElementById("site").onmouseout = rSite;
  document.getElementById("contact").onmouseout = rContact;
  document.getElementById("creds").onmouseout = rCreds;


  //function to change the image on the homepgae when the user clicks on it

  function change() {
    let img = document.getElementById("tuna1");
    img.src = "project/images/tunafishing.jpg";
  }
  function changeBack() {
    let img = document.getElementById("tuna1");
    img.src = "project/images/bluefin-swimming.jpg";
  }
  document.getElementById("tuna1").onmouseover = change;
  document.getElementById("tuna1").onmouseout = changeBack;


  
  
  




