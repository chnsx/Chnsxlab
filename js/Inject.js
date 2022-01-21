/**
 * Inject text and url of buttons
 */

window.onload=function(){
    const doneBtn=document.getElementById("done")
    const previousStepBtn=document.getElementById("previous-step")
    const nextStepButton=document.getElementById("next-step")
    const arrowBackIcon=document.getElementById("arrow-back")
    const feedbackDiv=document.getElementById("drawer").lastChild.firstChild
    const drawer=document.getElementById("drawer").firstChild.nextSibling.firstChild.childNodes

    changeRemainingText()
    doneBtn.innerHTML="完成"
    doneBtn.setAttribute("href","../../")
    previousStepBtn.innerHTML="上一步"
    nextStepButton.innerHTML="下一步"
    arrowBackIcon.setAttribute("href","../../")
    feedbackDiv.innerHTML=`<i class="material-icons">bug_report</i>向我们反馈`


    nextStepButton.onclick=function(){
        changeRemainingText()
    }

    previousStepBtn.onclick=function(){
        changeRemainingText()
    }
    for (const item of drawer) {
        item.onclick=function(){
            changeRemainingText()
        }
    }
}

function changeRemainingText(){
    let remainingTimeDiv=document.getElementById("codelab-title").lastChild.previousSibling.firstChild
    let remainingTime=(remainingTimeDiv.innerHTML).replaceAll(/\D/g,"")
    remainingTimeDiv.innerHTML=`<i class="material-icons">access_time</i>剩余${remainingTime}分钟`
}