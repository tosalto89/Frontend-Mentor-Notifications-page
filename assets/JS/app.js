/*declaring variables*/
let numberOfNotifications= parseInt(document.querySelector('.notificationsNumber').innerHTML);
let postStatus= document.querySelectorAll('.fa-circle');
let newPost= document.querySelectorAll('.newPost');
let notificationStatus= document.querySelector('.notificationStatus');
let body= document.querySelector('body');
let first= document.querySelector('.first');
let second= document.querySelector('.second');
let third= document.querySelector('.third');
let postMessage=document.querySelectorAll('.postMessage');
let postWithContent= document.querySelector('.post');

/*toggle existing post*/
function showPost(){
    postMessage.forEach(element => {
        element.style.display= element.style.display === 'none' ? '': 'none';
        
    });
}

postWithContent.addEventListener('click',showPost);


/*computing number of punread posts*/
function determineUnreadPosts(){
    let countOfUnreadPosts=0

    for(let i = 0 ; i < postStatus.length; i++){
     countOfUnreadPosts+= i;   
    }
    return countOfUnreadPosts;
}

window.onload= function displayNotifications(){
    document.querySelector('.notificationsNumber').innerHTML= determineUnreadPosts();
}

numberOfNotifications= determineUnreadPosts();

/*Mark all Items as read*/
function markAllAsRead(){
    // postStatus.style.display= postStatus.style.display === 'none' ? '' : 'none';
   

    for(let i = 0 ; i < postStatus.length; i++){
        
        let postStyle= getComputedStyle(postStatus[i]).display;
        
        if(postStyle === 'inline-block'){
            postStatus[i].setAttribute('style','display:none');
            numberOfNotifications= numberOfNotifications - numberOfNotifications ;
                    document.querySelector('.notificationsNumber').innerHTML= numberOfNotifications;
        }else if (postStyle === 'none'){
            postStatus[i].setAttribute('style','display:inline-block');
            document.querySelector('.notificationsNumber').innerHTML= determineUnreadPosts();
            numberOfNotifications= determineUnreadPosts();
        }
        
         
    }
}


notificationStatus.addEventListener('click', markAllAsRead);

/*mark individual items as read*/


for(let i = 0; i < newPost.length; i++){
    for(let j = 0; j < postStatus.length; j++){
        if (i===j){
           
            newPost[i].addEventListener('click', function(){
                let postStyle= getComputedStyle(postStatus[j]).display;
                if(postStyle === 'inline-block'){
                    postStatus[j].setAttribute('style','display:none');
                    numberOfNotifications= numberOfNotifications - 1;
                    document.querySelector('.notificationsNumber').innerHTML= numberOfNotifications;
               }else if (postStyle === 'none'){
                postStatus[j].setAttribute('style','display:inline-block');
                numberOfNotifications= numberOfNotifications + 1;
                document.querySelector('.notificationsNumber').innerHTML= numberOfNotifications;
                }
            })
           
           
        }   
    }
}