const sections=document.querySelectorAll('section');
const navTeamEl=document.querySelector('a[href="#team"]');
const teamSection = document.querySelector('#team');
const teamMembers = document.querySelectorAll('.team-member');
const teamInfoEls=teamSection.querySelectorAll('.team-member--info');
const gitReposEls=teamSection.querySelectorAll('.team-member-repos');
let time=700;
console.log(teamInfoEls, teamMembers)
const addAnimation=(el, animation, await)=>{
  if(await){
    setTimeout(()=>{el.classList.add(animation);}, await); 
  } else{
    el.classList.add(animation);
  } 
}
const removeAnimation=(el, animation)=>{  
    el.classList.remove(animation);  
}


const scrollToTeamHandler = () => {
  
  for (let i=0; i<teamInfoEls.length; i++) { 
    if(teamMembers[i].getBoundingClientRect().top < document.documentElement.scrollTop && !teamMembers[i].classList.contains('on-view')){
    
      addAnimation(teamInfoEls[i],'animate-left-in', time);  
      addAnimation(gitReposEls[i], 'animate-in', 1000+time); 
      time+=700;
      teamMembers[i].classList.add('on-view');
      console.log(teamMembers[i].getBoundingClientRect().top , teamMembers[i].querySelector('h3'));
      console.log(document.documentElement.scrollTop);

    
    } else if(teamMembers[i].getBoundingClientRect().top > document.documentElement.scrollTop){
      time=700;
      teamMembers[i].classList.remove('on-view');
      if(teamInfoEls[i].classList.contains('animate-left-in')){
        console.log(teamInfoEls[i] , 'remove')
        removeAnimation(teamInfoEls[i],'animate-left-in');
        removeAnimation(gitReposEls[i], 'animate-in');
      }      
      
    }
  }
    
}

window.addEventListener('scroll', scrollToTeamHandler);


