    /*
        Programmed by Ricson B. Escalicas
        I'm sorry if you don't like the way I write code. I do not gurantee that this code is written in the most efficient way. Do let me know if you have any remarks/criticism/suggestion to my code to better improve myself as a beginner. Thanks!

        The very concept of this JavaScript code is: hide and show. It basically shows/hides some elements depending upon where you've clicked in at any element. There's nothing to put something complex because my HTML doesn't need to. Furthermore, it might require so eventually if God willing, because I'd like to improve this mere project of mine.
    */  
   
    // variables
    // I don't know if it's good to keep the variables in one place for it to be manageable. Do let me know if it's not. Thanks!

    // General Usage
    var maintitle = document.getElementById("title");
    var main = document.getElementById("main");
    var about = document.getElementById("about");
    var skills = document.getElementById("skills");
    var contact = document.getElementById("contact");
    var home = document.getElementById("home");
    var error = document.getElementById("error");

    // For Menu section
    var optionSelect = document.getElementsByClassName("optionSelect");
    var showOptionS = document.getElementsByClassName("showOptionS");
    var upNavMenu = document.getElementById("upNavMenu");
    var defaultMenu = document.getElementById("defaultMenu");
    
    var forShowHelp = document.getElementById("forShowHelp");
    var forShowSupport = document.getElementById("forShowSupport");
    var forShowServices = document.getElementById("forShowServices");
    var forShowVisit = document.getElementById("forShowVisit");
    var forAboutWeb = document.getElementById("forAboutWeb");

    var mNL = document.getElementsByClassName("menuNavLists");
    var help = document.getElementById("help");
    var support = document.getElementById("support");
    var services = document.getElementById("services");
    var visit = document.getElementById("visit");
    var aboutWeb = document.getElementById("aboutWeb");

    // At About section
    var general = document.getElementById("general");
    var abouT = document.getElementById("abouT");
    var photos = document.getElementById("photos");
    var hobbies = document.getElementById("hobbies");
    
    var forGeneral = document.getElementById("forGeneral");
    var forAbout = document.getElementById("forAbout");
    var forPhotos = document.getElementById("forPhotos");
    var forHobbies = document.getElementById("forHobbies");

    var theShowerP = document.getElementById("theShowerP");

    var branchSci = document.getElementsByClassName("branchSci");

    var myModal = document.getElementById("myModal");
    var modalImg = document.getElementById("image");
    var captionText = document.getElementById("caption");

    // For goUp buttons at the Skills section
    var goUp1 = document.getElementById("goUp1");
    var goUp2 = document.getElementById("goUp2");
    var goUp3 = document.getElementById("goUp3");

    // Clicking capsules at Skills section for each skills division
    var tInfo = document.getElementsByClassName("tInfo");
    var lInfo = document.getElementsByClassName("lInfo");
    var sInfo = document.getElementsByClassName("sInfo");
     
    //For technologicalSkills
    var ts = document.getElementById("technologicalSkills");
    var tsShowerNav = document.getElementById("tsShowerNav");
    var tsShowerCon = document.getElementById("tsShowerCon");
     
    //For each skills division
     var tFG = document.getElementById("tsSkillsForGen");
     var lFG = document.getElementById("lsSkillsForGen");
     var sFG = document.getElementById("ssSkillsForGen");
     
     //For Technological Skills division
     var tsForGen = document.getElementById("tsSkillsForGen");
     var tsSNHTML = document.getElementById("tsSNHTML");
     var tsSNCSS = document.getElementById("tsSNCSS");
     var tsSNJs = document.getElementById("tsSNJs");
     var tsSNHd = document.getElementById("tsSNHd");
     var tsSNNet = document.getElementById("tsSNNet");
     var tsSNO = document.getElementById("tsSNO")
     var tssShower = document.getElementById("tssShower");
     
     var tsTitle = document.getElementById("tsSkills");
         
     var tsForHTML = document.getElementById("tsForHTML");
     var tsForCSS = document.getElementById("tsForCSS");
     var tsForJs = document.getElementById("tsForJs");
     var tsForHd = document.getElementById("tsForHardware");
     var tsForNet = document.getElementById("tsForNet");
     var tsForOthers = document.getElementById("tsForOthers");
     
    // For Linguistic Skills division
     var ls = document.getElementById("languageSkills");
     var lssShower = document.getElementById("lssShower");
     
     var lsForGen = document.getElementById("lsSkillsForGen");
     var cTagalog = document.getElementById("cTagalog");
     var cVisaya = document.getElementById("cVisaya");
     var cEnglish  = document.getElementById("cEnglish");
     var cOthers = document.getElementById("cOthers");
     
     var tagalog = document.getElementById("tagalog");
     var visaya = document.getElementById("visaya");
     var english = document.getElementById("english");
     var othersLS = document.getElementById("others");
     
     // For Scientific Skills division
     var ss = document.getElementById("scientificSkills");
     var showerSS = document.getElementById("showerSS");
         
     var cPhysics = document.getElementById("cPhysics");
     var cBiology = document.getElementById("cBiology");
     var cMicrobiology = document.getElementById("cMicrobiology");
     var cOthersSS = document.getElementById("cOthersSS");
     
     var ssForGen = document.getElementById("ssSkillsForGen");
     var physicsSS = document.getElementById("physicsSS");
     var biologySS = document.getElementById("biologySS");
     var microbiologySS = document.getElementById("microbiologySS");
     var othersSS = document.getElementById("othersSS");
    // variables
        
    // SIDE NAVIGATION Starts
    
    function openMenu() {
        
        document.getElementById("navMenu").style.display = "block";
        document.getElementById("upNav").style.height = "100%";
        forShowHelp.style.display = "none";
        forShowServices.style.display = "none";
        forShowSupport.style.display = "none";
        forShowVisit.style.display = "none";
        forAboutWeb.style.display = "none";
        defaultMenu.style.display = "block";
        upNavMenu.style.display = "block";
        
        for (i = 0; i < optionSelect.length; i++) {
        optionSelect[i].onclick = function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
            }
        }
        
        setTimeout(function() {
            main.style.display = "none";
            error.style.display = "block";
            clickHome.style.display = "none";
            clickAbout.style.display = "none";
            clickSkills.style.display = "none";
            clickContact.style.display = "none";
        }, 500);
    }
 
    function closeMenu() {
        document.getElementById("navMenu").style.display = "none";
        document.getElementById("upNav").style.height = "0";

        forShowHelp.style.display = "none";
        forShowServices.style.display = "none";
        forShowSupport.style.display = "none";
        forShowVisit.style.display = "none";
        defaultMenu.style.display = "none";
        forAboutWeb.style.display = "none";
        upNavMenu.innerHTML = "Menu:";
        upNavMenu.style.display = "none";

        main.style.display = "block";
        error.style.display = "none";
        
        clickHome.style.display = "inline-block";
        clickAbout.style.display = "inline-block";
        clickSkills.style.display = "inline-block";
        clickContact.style.display = "inline-block";
        
        help.classList.remove("active");
        support.classList.remove("active");
        services.classList.remove("active");
        visit.classList.remove("active"); 
        aboutWeb.classList.remove("active");
    }
 
    // Up Nav Begins 
        
    help.onclick = function() {
        
        defaultMenu.style.display = "none";
        forShowHelp.style.display = "block";
        forShowSupport.style.display = "none";
        forShowServices.style.display = "none";
        forShowVisit.style.display = "none";
        forAboutWeb.style.display = "none";
        upNavMenu.style.display = "block";
        upNavMenu.innerHTML = "I need help in:";
        
        this.classList.add("active");
        support.classList.remove("active");
        services.classList.remove("active");
        visit.classList.remove("active");
        aboutWeb.classList.remove("active");
    }
    
    support.onclick = function() {
        
        defaultMenu.style.display = "none";
        forShowSupport.style.display = "block";
        forShowHelp.style.display = "none";
        forShowVisit.style.display = "none";
        forShowServices.style.display = "none";
        forAboutWeb.style.display = "none";
        upNavMenu.style.display = "block";
        upNavMenu.innerHTML = "I want to support on:";
        
        this.classList.add("active");
        help.classList.remove("active");
        services.classList.remove("active");
        visit.classList.remove("active");
        aboutWeb.classList.remove("active");
    }
        
    services.onclick = function() {
        
        defaultMenu.style.display = "none";
        forShowServices.style.display = "block";
        forShowSupport.style.display = "none";
        forShowHelp.style.display = "none";
        forShowVisit.style.display = "none";
        forAboutWeb.style.display = "none";
        upNavMenu.style.display = "block";
        upNavMenu.innerHTML = "I need a service like:";
        
        this.classList.add("active");
        support.classList.remove("active");
        help.classList.remove("active");
        visit.classList.remove("active");
        aboutWeb.classList.remove("active");
    }
    
    visit.onclick = function() {
        
        defaultMenu.style.display = "none";
        forShowSupport.style.display = "none";
        forShowHelp.style.display = "none";
        forShowVisit.style.display = "block";
        forShowServices.style.display = "none";
        forAboutWeb.style.display = "none";
        upNavMenu.style.display = "block";
        upNavMenu.innerHTML = "I want to visit:";
        
        this.classList.add("active");
        support.classList.remove("active");
        services.classList.remove("active");
        help.classList.remove("active");
        aboutWeb.classList.remove("active");
    }
    
    aboutWeb.onclick = function() {
        
        defaultMenu.style.display = "none";
        forShowSupport.style.display = "none";
        forShowHelp.style.display = "none";
        forShowVisit.style.display = "none";
        forShowServices.style.display = "none";
        forAboutWeb.style.display = "block";
        upNavMenu.style.display = "none";
        
        this.classList.add("active");
        support.classList.remove("active");
        services.classList.remove("active");
        help.classList.remove("active");
        visit.classList.remove("active");
    }
 
    // Up Nav Ends

     // SIDE NAVIGATION Ends

     //HOME DIVISION Starts
    
    clickHome.onclick = function() {
       
        document.getElementById('home').style.display = "block";
        document.getElementById('about').style.display = "none";
        document.getElementById('skills').style.display = "none";
        document.getElementById('contact').style.display = "none";
        
        window.location = "#home";
        maintitle.innerHTML = "www.ricsonescalicas.net";
        
        this.classList.add("active");
        clickAbout.classList.remove("active");
        clickSkills.classList.remove("active");
        clickContact.classList.remove("active");
    }
    
    // This is used to depict that the Home section as selected although you didn't select such yet as it's the default section will be opened.
    clickHome.classList.add("active");

    // Descriptions Changing Mechanism Begins

    // This setInterval is used to repeat the process all over again. 
    var time = setInterval(change, 7500);
    function change() {
        var descriptions = document.getElementById("descriptions");

        var homeIntro = document.getElementById("homeIntro");
        // I'm lacking appropriate photos. I'd like to go outside to take photos that should be used but unfortunately, we're in a crap pandemic. For example if the "Friendly" is shown, the wallpaper should depict that I'm socializing to others, and so on. The default photo would be one of the newLines version if none appropriate one is found.

        setTimeout(function() {
            descriptions.innerHTML = "Friendly";
            homeIntro.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(eatingLugaw.jpg)";
        }, 1000);

        setTimeout(function() {
            descriptions.innerHTML = "A Front-End Web Developer";
            homeIntro.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(newLines3.png)";
        }, 2000);

        setTimeout(function() {
            descriptions.innerHTML = "A Mere Programmer";
            homeIntro.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(newLines4.png)";
        }, 3000);

        setTimeout(function() {
            descriptions.innerHTML = "Hard-working";
            homeIntro.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(newLines5.png)";
        }, 4000);

        setTimeout(function() {
            descriptions.innerHTML = "Multilingual";
            homeIntro.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(newLines6.png)";
        }, 5000);

        setTimeout(function() {
            descriptions.innerHTML = "Passionate to Learn";
            homeIntro.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(newLines7.png)";
        }, 6000);

        setTimeout(function() {
            descriptions.innerHTML = "Filipino";
            homeIntro.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(newLines.png)";
        }, 7000);

    }
    //  Descriptions Changing Mechanism Ends
    
    //HOME DIVISION Ends

    //ABOUT DIVISION Starts
    
    clickAbout.onclick = function() {
     
        about.style.display = "block";
        home.style.display = "none";
        skills.style.display = "none";
        contact.style.display = "none";
        
        // For Light(Orange) Reflection Mechanism
        // This will reflect the orange color from its above, better play with the website to see it at About/General section regarding on how it works.
        post1.onclick = function() {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
            post2.classList.toggle("onReflect");
        }
        post2.onclick = function() {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
            post3.classList.toggle("onReflect");
        }
        post3.onclick = function() {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
            post4.classList.toggle("onReflect");
        }
        post4.onclick = function() {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
            post5.classList.toggle("onReflect");
        }
        post5.onclick = function() {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
            post6.classList.toggle("onReflect");
        }
        post6.onclick = function() {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
            post7.classList.toggle("onReflect");
        }
        post7.onclick = function() {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }

        window.location = "#about";
        maintitle.innerHTML = "About Me";
        
        this.classList.add("active");
        clickHome.classList.remove("active");
        clickSkills.classList.remove("active");
        clickContact.classList.remove("active");
    }
        
    abouT.onclick = function() {
        forGeneral.style.display = "none";
        forAbout.style.display = "block";
        forAbout.style.height = "auto";
        forPhotos.style.display = "none";
        forHobbies.style.display = "none";
        theShowerP.innerHTML = "About:";
        window.location = "#theShower";
        
        this.classList.add("active");
        general.classList.remove("active");
        photos.classList.remove("active");
        hobbies.classList.remove("active");
    }
        
    // General Section Starts
    general.classList.add("active");
    general.onclick = function() {
        forGeneral.style.display = "block";
        forGeneral.style.height = "auto";
        forAbout.style.display = "none";
        forPhotos.style.display = "none";
        forHobbies.style.display = "none";
        theShowerP.innerHTML = "General:";
        window.location = "#theShower";
        
        this.classList.add("active");
        abouT.classList.remove("active");
        photos.classList.remove("active");
        hobbies.classList.remove("active");
    }
    
    // General Section Ends

    // Photos Section Starts
    var img1 = document.getElementById("photo1"); 
    var img2 = document.getElementById("photo2");
    var img3 = document.getElementById("photo3");
    var img4 = document.getElementById("photo4");
    var img5 = document.getElementById("photo5");
    var img6 = document.getElementById("photo6");
    var img7 = document.getElementById("photo7");
    var img8 = document.getElementById("photo8");
    var img9 = document.getElementById("photo9");
    var img10 = document.getElementById("photo10");

    photos.onclick = function() {
        forGeneral.style.display = "none";
        forAbout.style.display = "none";
        forPhotos.style.display = "block";
        forPhotos.style.height = "auto";
        forHobbies.style.display = "none";
        theShowerP.innerHTML = "Photos:";
        window.location = "#theShower";
        
        this.classList.add("active");
        abouT.classList.remove("active");
        general.classList.remove("active");
        hobbies.classList.remove("active");
    }
    
    img1.onclick = function() {
        myModal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt;
    }
    
    img2.onclick = function() {
        myModal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt;
    }
    
    img3.onclick = function() {
        myModal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt; 
    }
    
    img4.onclick = function() {
        myModal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt;; 
    }
    
    img5.onclick = function() {
        myModal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt; 
    }
    
    img6.onclick = function() {
        myModal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt;
    }
    
    img7.onclick = function() {
        myModal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt;
    }
    
    img8.onclick = function() {
        myModal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt;
    }
    
    img9.onclick = function() {
        myModal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt;
    }
    
    img10.onclick = function() {
        myModal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt;
    }

    function closePhoto() { 
        myModal.style.display = "none";
    }
    
    // Photos Section Ends
        
    // Hobbies Section Starts
    
    hobbies.onclick = function() {
        forGeneral.style.display = "none";
        forAbout.style.display = "none";
        forPhotos.style.display = "none";
        forHobbies.style.display = "block";
        forHobbies.style.height = "auto";
        theShowerP.innerHTML = "Hobbies:";
        window.location = "#theShower";
      
        // For Changing Words Mechanism about the reasons on why learning some languages
        german.onclick = function() {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
            lc1.classList.toggle("hide");
            deutsch.classList.toggle("show");
        }
        portugueS.onclick = function() {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
            lc2.classList.toggle("hide");
            portugues.classList.toggle("show");
        }
        russian.onclick = function() {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
            lc3.classList.toggle("hide");
            russiaN.classList.toggle("show");
        }
        spanish.onclick = function() {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
            lc4.classList.toggle("hide");
            espanol.classList.toggle("show");
        }
        
        this.classList.add("active");
        abouT.classList.remove("active");
        photos.classList.remove("active");
        general.classList.remove("active");
        
        for (i = 0; i <  branchSci.length; i++) {
        branchSci[i].onclick = function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
            }
        }
    }
    // Hobbies Section Ends
    
    //ABOUT DIVISION Ends

    // SKILLS DIVISION Starts
    clickSkills.onclick = function() {
        home.style.display = "none";
        about.style.display = "none";
        skills.style.display = "block";
        contact.style.display = "none";
        
        ts.onclick = function() { 
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
            this.classList.toggle("noHover");
            goUp1.classList.toggle("show");
        
            tsForGen.style.display = "block";
            tssShower.innerHTML = "Introduction";
            tsForHTML.style.display = "none";
            tsForCSS.style.display = "none";
            tsForJs.style.display = "none";
            tsForHd.style.display = "none";
            tsForNet.style.display = "none";
            tsForOthers.style.display = "none";
            
            tsSNHTML.classList.remove("active");
            tsSNCSS.classList.remove("active");
            tsSNJs.classList.remove("active");
            tsSNHd.classList.remove("active");
            tsSNNet.classList.remove("active");
            tsSNO.classList.remove("active");
        }
        ts.style.marginBottom = "0";
        
        ls.onclick = function() {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
            this.classList.toggle("noHover");
            goUp2.classList.toggle("show");
            
            lsForGen.style.display = "block";
            lssShower.innerHTML = "Introduction";
            tagalog.style.display = "none";
            visaya.style.display = "none";
            english.style.display = "none";
            othersLS.style.display = "none";
            
            cTagalog.classList.remove("active");
            cVisaya.classList.remove("active");
            cEnglish.classList.remove("active");
            cOthers.classList.remove("active");
        }
        ls.style.marginBottom = "0";
        
        ss.onclick = function() {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
            this.classList.toggle("noHover");
            goUp3.classList.toggle("show");
            
            ssForGen.style.display = "block";
            showerSS.innerHTML = "Introduction";
            physicsSS.style.display = "none";
            biologySS.style.display = "none";
            microbiologySS.style.display = "none";
            othersSS.style.display = "none";
            
            cPhysics.classList.remove("active");
            cBiology.classList.remove("active");
            cMicrobiology.classList.remove("active");
            cOthersSS.classList.remove("active");
        }
        ss.style.marginBottom = "0";
        
        for (i = 0; i < tInfo.length; i++) {
        tInfo[i].onclick = function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
            }
        }
        
        for (i = 0; i < lInfo.length; i++) {
        lInfo[i].onclick = function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
            }
        }
        
        for (i = 0; i < sInfo.length; i++) {
        sInfo[i].onclick = function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
            }
        }
        
        window.location = "#skills";
        maintitle.innerHTML = "My Skills";
        
        this.classList.add("active");
        clickAbout.classList.remove("active");
        clickHome.classList.remove("active");
        clickHome.classList.add("remove");
        clickContact.classList.remove("active");    
    }
        
    tsSNHTML.onclick = function() {
        tssShower.innerHTML = "Hypertext Markup Language";
        this.classList.add("active");
        tsSNCSS.classList.remove("active");
        tsSNJs.classList.remove("active");
        tsSNHd.classList.remove("active");
        tsSNNet.classList.remove("active");
        tsSNO.classList.remove("active");
        
        tsForHTML.style.display = "block";
        tsForCSS.style.display = "none";
        tsForJs.style.display = "none";
        tsForHd.style.display = "none";
        tsForNet.style.display = "none";
        tsForOthers.style.display = "none";
        
        tFG.style.display = "none";
    } 
        
    tsSNCSS.onclick = function() {
        tssShower.innerHTML = "Cascading Style Sheets";
        this.classList.add("active");
        tsSNHTML.classList.remove("active");
        tsSNJs.classList.remove("active");
        tsSNHd.classList.remove("active");
        tsSNNet.classList.remove("active");
        tsSNO.classList.remove("active");
        
        tsForHTML.style.display = "none";
        tsForCSS.style.display = "block";
        tsForJs.style.display = "none";
        tsForHd.style.display = "none";
        tsForNet.style.display = "none";
        tsForOthers.style.display = "none";
        
        tFG.style.display = "none";
    }
    
    tsSNJs.onclick = function() {
        tssShower.innerHTML = "JavaScript";
        this.classList.add("active");
        tsSNCSS.classList.remove("active");
        tsSNHTML.classList.remove("active");
        tsSNHd.classList.remove("active");
        tsSNNet.classList.remove("active");
        tsSNO.classList.remove("active");
        
        tsForHTML.style.display = "none";
        tsForCSS.style.display = "none";
        tsForJs.style.display = "block";
        tsForHd.style.display = "none";
        tsForNet.style.display = "none";
        tsForOthers.style.display = "none";
        
        tFG.style.display = "none";
    }
    
    tsSNHd.onclick = function() {
        tssShower.innerHTML = "Hardware";
        this.classList.add("active");
        tsSNCSS.classList.remove("active");
        tsSNJs.classList.remove("active");
        tsSNHTML.classList.remove("active");
        tsSNNet.classList.remove("active");
        tsSNO.classList.remove("active");
        
        tsForHTML.style.display = "none";
        tsForCSS.style.display = "none";
        tsForJs.style.display = "none";
        tsForHd.style.display = "block";
        tsForNet.style.display = "none";
        tsForOthers.style.display = "none";
        
        tFG.style.display = "none";
    }
    
    tsSNNet.onclick = function() {
        tssShower.innerHTML = "Networking";
        this.classList.add("active");
        tsSNCSS.classList.remove("active");
        tsSNJs.classList.remove("active");
        tsSNHd.classList.remove("active");
        tsSNHTML.classList.remove("active");
        tsSNO.classList.remove("active");
        
        tsForHTML.style.display = "none";
        tsForCSS.style.display = "none";
        tsForJs.style.display = "none";
        tsForHd.style.display = "none";
        tsForNet.style.display = "block";
        tsForOthers.style.display = "none";
        
        tFG.style.display = "none";
    }
    
    tsSNO.onclick = function() {
        tssShower.innerHTML = "Other Technological Skills";
        this.classList.add("active");
        tsSNCSS.classList.remove("active");
        tsSNJs.classList.remove("active");
        tsSNHd.classList.remove("active");
        tsSNNet.classList.remove("active");
        tsSNHTML.classList.remove("active");
        
        tsForHTML.style.display = "none";
        tsForCSS.style.display = "none";
        tsForJs.style.display = "none";
        tsForHd.style.display = "none";
        tsForNet.style.display = "none";
        tsForOthers.style.display = "block";
        
        tFG.style.display = "none";
    }
 
    cTagalog.onclick = function() {
        lssShower.innerHTML = "Tagalog";
        this.classList.add("active");
        cVisaya.classList.remove("active");
        cEnglish.classList.remove("active");
        cOthers.classList.remove("active");
        
        tagalog.style.display = "block";
        visaya.style.display = "none";
        english.style.display = "none";
        othersLS.style.display = "none";
        
        lFG.style.display = "none";
    }
    
    cVisaya.onclick = function() {
        lssShower.innerHTML = "Visayan Language";
        this.classList.add("active");
        cTagalog.classList.remove("active");
        cEnglish.classList.remove("active");
        cOthers.classList.remove("active");
        
        tagalog.style.display = "none";
        visaya.style.display = "block";
        english.style.display = "none";
        othersLS.style.display = "none";
        
        lFG.style.display = "none";
    }
    
    cEnglish.onclick = function() {
        lssShower.innerHTML = "English";
        this.classList.add("active");
        cVisaya.classList.remove("active");
        cTagalog.classList.remove("active");
        cOthers.classList.remove("active");
        
        tagalog.style.display = "none";
        visaya.style.display = "none";
        english.style.display = "block";
        othersLS.style.display = "none";
        
        lFG.style.display = "none";
    }
    
    cOthers.onclick = function() {
        lssShower.innerHTML = "Other Languages";
        this.classList.add("active");
        cVisaya.classList.remove("active");
        cEnglish.classList.remove("active");
        cTagalog.classList.remove("active");
        
        tagalog.style.display = "none";
        visaya.style.display = "none";
        english.style.display = "none";
        othersLS.style.display = "block";
        
        lFG.style.display = "none";
    }
        
    cPhysics.onclick = function() {
        showerSS.innerHTML = "Physics";
        this.classList.add("active");
        cBiology.classList.remove("active");
        cMicrobiology.classList.remove("active");
        cOthersSS.classList.remove("active");
        
        physicsSS.style.display = "block";
        biologySS.style.display = "none";
        microbiologySS.style.display = "none";
        othersSS.style.display = "none";
        
        sFG.style.display = "none";
    }
    
    cBiology.onclick = function() {
        showerSS.innerHTML = "Biology";
        this.classList.add("active");
        cPhysics.classList.remove("active");
        cMicrobiology.classList.remove("active");
        cOthersSS.classList.remove("active");
        
        physicsSS.style.display = "none";
        biologySS.style.display = "block";
        microbiologySS.style.display = "none";
        othersSS.style.display = "none";
        
        sFG.style.display = "none";
    }
    
    cMicrobiology.onclick = function() {
        showerSS.innerHTML = "Microbiology";
        this.classList.add("active");
        cBiology.classList.remove("active");
        cPhysics.classList.remove("active");
        cOthersSS.classList.remove("active");
        
        physicsSS.style.display = "none";
        biologySS.style.display = "none";
        microbiologySS.style.display = "block";
        othersSS.style.display = "none";
        
        sFG.style.display = "none";
    }
    
    cOthersSS.onclick = function() {
        showerSS.innerHTML = "Other Scientific Skills";
        this.classList.add("active");
        cBiology.classList.remove("active");
        cMicrobiology.classList.remove("active");
        cPhysics.classList.remove("active");
        
        physicsSS.style.display = "none";
        biologySS.style.display = "none";
        microbiologySS.style.display = "none";
        othersSS.style.display = "block";
        
        sFG.style.display = "none";
    }
 
    // SKILLS DIVISION Ends

    // CONTACT DIVISION Starts
    clickContact.onclick = function() {
        home.style.display = "none";
        about.style.display = "none";
        skills.style.display = "none";
        contact.style.display = "block";
        
        window.location = "#contact";
        maintitle.innerHTML = "Contact Me";
        
        this.classList.add("active");
        clickAbout.classList.remove("active");
        clickSkills.classList.remove("active");
        clickHome.classList.remove("active");
        clickHome.classList.add("remove");
    }
    
    // CONTACT DIVISION Ends

    // PAGE DIVISIONS   