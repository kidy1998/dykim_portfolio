document.getElementById("aboutME").addEventListener("click", function(){
    // 이동하고자 하는 id 요소 찾기
    var myInfoElement = document.getElementById("inputInfo");

    //  요소가 존재하면 
    if (myInfoElement) {
        // 요소로 이동
        myInfoElement.scrollIntoView({
            behavior: "smooth", // 부드러운 스크롤 효과
            block: "start" // 요소의 시작 부분으로 스크롤
        });
    }
});

document.getElementById("SKILLS").addEventListener("click", function(){
    // 이동하고자 하는 id 요소 찾기
    var myInfoElement = document.getElementById("mySkills");

    //  요소가 존재하면 
    if (myInfoElement) {
        // 요소로 이동
        myInfoElement.scrollIntoView({
            behavior: "smooth", // 부드러운 스크롤 효과
            block: "start" // 요소의 시작 부분으로 스크롤
        });
    }
});


document.getElementById("PROJECTS").addEventListener("click", function(){
    // 이동하고자 하는 id 요소 찾기
    var myInfoElement = document.getElementById("myProject");

    //  요소가 존재하면 
    if (myInfoElement) {
        // 요소로 이동
        myInfoElement.scrollIntoView({
            behavior: "smooth", // 부드러운 스크롤 효과
            block: "start" // 요소의 시작 부분으로 스크롤
        });
    }
});




// 글자 애니메이션
function startAnimation() {
    const textElement = document.getElementById("textAnimation");
    
    if (!textElement) {
        return; // 요소가 없으면 종료
    }
    
    textElement.style.animation = "jump 2s"; // 애니메이션 적용
    
    // 5초 간격으로 애니메이션을 다시 시작
    setInterval(function() {
        textElement.style.animation = "none"; // 애니메이션 해제
        setTimeout(function() {
            textElement.style.animation = "jump 2s"; // 다시 애니메이션 적용
        }, 100); // 애니메이션을 해제한 후 잠시 기다린 후 다시 적용
    }, 7000); 
}


// 페이지 로드 후 1초 뒤에 애니메이션 시작
setTimeout(function() {
    startAnimation();
}, 3000);


// 메인화면 변경 애니메이션
backgroundImage