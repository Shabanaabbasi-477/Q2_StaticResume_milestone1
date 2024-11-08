
//  ----------------ref section  ------------------

let refrence = document.getElementById('refrence')
let ref_btn = document.getElementById('ref_btn')

ref_btn?.addEventListener('click',()=> {
    refrence!.classList.toggle('hide')
})
//  ----------------exp section  ------------------

let experience = document.getElementById('experience')
let exp_btn = document.getElementById('exp_btn')

exp_btn?.addEventListener('click',()=> {
    experience!.classList.toggle('hide')
})

//  ----------------language section  ------------------

let language = document.getElementById('language')
let  lang_btn = document.getElementById('lang_btn')


lang_btn?.addEventListener('click',()=> {
    language !.classList.toggle('hide')
})


//  ----------------skill section  ------------------

let skill = document.getElementById('skill')
let  skill_btn = document.getElementById('skill_btn')


skill_btn?.addEventListener('click',()=> {
    skill!.classList.toggle('hide')

})

//  ----------------education section  ------------------

let education = document.getElementById('education')
let edu_btn = document.getElementById('edu_btn')


edu_btn?.addEventListener('click',()=> {
    education!.classList.toggle('hide')

})

//  ----------------contact  section  ------------------


let contact_sec = document.getElementById('contact_sec')
let cont_btn = document.getElementById('cont_btn')

cont_btn?.addEventListener('click',()=> {
    contact_sec!.classList.toggle('hide')
})

//  ----------------print section  ------------------

let print_btn = document.getElementById('print_btn')

print_btn?.addEventListener('click',()=>{
    window.print()
})