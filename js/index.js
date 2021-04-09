const paragraphText1 = document.getElementById('paragraph1');
const paragraphText2 = document.getElementById('paragraph2');

window.addEventListener('resize', function () {
    if (window.innerWidth < 1080) {
        paragraphText1.innerText = `Duolingo remove language barriers by connecting people that need websites translated with students that are minga language. Through trial and error the team at Duolingo has mastered the...`
        paragraphText2.innerText = `Duolingo remove language barriers by connecting people that need websites translated with students that are minga language. Through trial and error the team at Duolingo has mastered the...`
    }
    else {
        paragraphText1.innerText = "Duolingo remove language barriers by connecting people that need websites translated with students that are minga language. Through trial and error the team at Duolingo has mastered the art of data driven product development through AB testing and a focus on the right metrics to optimize. driven product development through AB testing and a focus on the right metrics to optimize."
        paragraphText2.innerText = "Duolingo remove language barriers by connecting people that need websites translated with students that are minga language. Through trial and error the team at Duolingo has mastered the art of data driven product development through AB testing and a focus on the right metrics to optimize. driven product development through AB testing and a focus on the right metrics to optimize."
    }
}
);
