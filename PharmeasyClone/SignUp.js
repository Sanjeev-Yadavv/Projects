let signUp = document.getElementById('signUp');
let signUPpage = document.querySelector('.signUPpage')



signUp.addEventListener('click',function(){
    // signUPpage.style.display = "block"
    // signUPpage.style.marginLeft = "750px"
    window.location.href = "signUppage.html"
})

//  sign up page start

let signInBtn = document.getElementById('sign-in')
let signUpBtn = document.getElementById('sign-up')
let inputName = document.getElementById('name')
let line = document.querySelector('.line2')
let heading = document.getElementById('heading')

signInBtn.addEventListener('click', function(){
    inputName.style.display = 'none'
    heading.innerText = 'Sign In'
    line.style.marginLeft = '232px'


   console.log('hello')
})

signUpBtn.addEventListener('click', function(){
    heading.innerText = 'Sign Up'
    signInBtn.style.backgroundColor = "white"
    inputName.style.display = 'block'
    console.log('hello')
})

// document.querySelectorAll('.slideContainer').forEach(container => {
//     container.addEventListener('mouseenter', () => {
//         const contentWidth = container.scrollWidth - container.clientWidth;
//         if (contentWidth > 0) {
//             const scrollInterval = setInterval(() => {
//                 container.scrollLeft += 1; // Scroll to the right
//                 if (container.scrollLeft >= contentWidth) {
//                     clearInterval(scrollInterval); // Stop scrolling when reached the end
//                 }
//             }, 20); // Adjust scrolling speed as needed

//             container.addEventListener('mouseleave', () => {
//                 clearInterval(scrollInterval); // Stop scrolling when mouse leaves
//             });
//         }
//     });
// });

