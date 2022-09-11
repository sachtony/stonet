function load()
{
    var bigImg = document.getElementById("changeImg")
    var thumb = document.querySelectorAll(".img-gallery img")
    for(let i = 0; i < thumb.length; i++)
    {
        thumb[i].onclick = function(){
           bigImg.setAttribute("src", this.src)
        }
    }

    var button = document.getElementsByTagName("a")
    for(let i=0; i<button.length; i++)
    {
        button[i].onclick = function(){
            var bigImg = document.getElementById("changeImg")
            var firstImgOfEachColor = this.getAttribute("rel")
            // bigImg.src = "/images/galaxys8/"+ firstImgOfEachColor +"_1.jpg"
            bigImg.src = `/images/galaxys8/${firstImgOfEachColor}_1.jpg`
            var thumb = document.querySelectorAll(".img-gallery img")
            for(let j=0; j<thumb.length; j++)
            thumb[j].src = `/images/galaxys8/${firstImgOfEachColor}_${j+1}.jpg`
        }
    }
}