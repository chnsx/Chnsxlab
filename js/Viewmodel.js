/**
 * Created by visual studio code
 * @author Iceberry
 * @date 2022-02-14
 * @version 1.0
 * @description viewmodel for loading
 */

export let loadingVM={_isLoading:true}

const app=document.querySelector(".App")
const loadingCover=document.querySelector(".LoadingCover")

Object.defineProperty(loadingVM,"isLoading",{
    get(){return this._isLoading},
    set(newValue){
        this._isLoading=newValue
        if(newValue==true){
            app.setAttribute("style","display:none")
            loadingCover.setAttribute("style","display:block")
        }else{
            app.setAttribute("style","display:flex")
            loadingCover.setAttribute("style","display:none")
        }
    }
})