$(function () {
    // init controller
    var controller = new ScrollMagic.Controller();


    ////////////       Typing Letter Word       ////////////////////
    var tl = new TimelineMax({
        paused: true
    });
    // letter animation
    tl.fromTo(".anim-typewriter", 1, {
        width: "0",
    }, {
        width: "3em",
        ease: SteppedEase.config(37)
    }, 0);
    // letter animation
    tl.fromTo(".anim-typewriter", {
        borderRightColor: "transparent",
    }, {
        borderRightColor: "#b71c1c",
        repeat: 50000,
        duration: 1
    }, 0);

    tl.play();
    ////////////       Typing Letter Word       ////////////////////


    ////////////       Profile Text And Social Button       ////////////////////
    var tweenProfile = TweenMax.to(".profile-info", { opacity: 1, duration: 3 });
    var tweenSocial = TweenMax.to(".social-btn", { opacity: 1, duration: 2 });

    new ScrollMagic.Scene({})
        .setTween(tweenProfile)
        .addTo(controller);

    new ScrollMagic.Scene({})
        .setTween(tweenSocial)
        .addTo(controller);
    ////////////       Profile Text And Social Button       ////////////////////


    ////////////       Word Cloud       ////////////////////
    new ScrollMagic.Scene({ triggerElement: "#wordCloudSection" })
        .addTo(controller)
        .on("enter", function (e) {
            renderWordCloud();
        })
    ////////////       Word Cloud      ////////////////////



    function renderWordCloud() {
        var list = [['JS', 45], ['CSS', 51], ['HTML', 36], ['PHP', 28], ['Angular', 30], ["Sql Server", 20], ["Swagger", 15],
        ['ReactJs', 21], ['Wordpress', 10], ['MySql', 20], ["Drupal", 5], ["C# MVC", 21], ["Git", 21], ["WebApi", 15]
            , ["Tailwind", 15], ["Gatsby", 15]];
        WordCloud(document.getElementById('wordCloud'), {
            list: list,
            wait: 100,
            backgroundColor: "transparent",
            weightFactor: 2,
            fontFamily: "'Raleway', sans-serif",
            color: function (word, weight) {
                return (weight === 12) ? '#f02222' : '#b71c1c';
            },
        });
    }



    ////////////      Experience      ////////////////////
    var tweenSyonExperienceCard = TweenMax.to("#syonExperienceCard", { left: 0, opacity: 1, duration: 1 });
    var tweenHelimpExperienceCard = TweenMax.to("#helimpExperienceCard", { right: 0, opacity: 1, duration: 1 });
    var tweenFlawlessExperienceCard = TweenMax.to("#flawlessExperienceCard", { right: 0, opacity: 1, duration: 1 });
    new ScrollMagic.Scene({ triggerElement: "#experienceSection" })
        .setTween(tweenSyonExperienceCard)
        .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: "#experienceSection" })
        .setTween(tweenHelimpExperienceCard)
        .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: "#experienceSection" })
        .setTween(tweenFlawlessExperienceCard)
        .addTo(controller);
    ////////////      Experience      ////////////////////




    ////////////      Progress Circle      ////////////////////
    new ScrollMagic.Scene({ triggerElement: "#progressSection" })
        .addTo(controller)
        .on("enter", function (e) {
            renderProgressCircle();
        })
    function renderProgressCircle() {
        $('#uiProgress').circleProgress({
            value: 0.9,
            size: 200,
            fill: {
                gradient: ["red", "orange"]
            }
        }).on('circle-animation-progress', function (event, progress, stepValue) {
            $(this).find('strong').html(Math.round(100 * stepValue) + '<i>%</i>');
        });
        $('#backendProgress').circleProgress({
            value: 0.8,
            size: 200,
            fill: {
                gradient: ["red", "orange"]
            }
        }).on('circle-animation-progress', function (event, progress, stepValue) {
            $(this).find('strong').html(Math.round(100 * stepValue) + '<i>%</i>');
        });
        $('#dbProgress').circleProgress({
            value: 0.7,
            size: 200,
            fill: {
                gradient: ["red", "orange"]
            }
        }).on('circle-animation-progress', function (event, progress, stepValue) {
            $(this).find('strong').html(Math.round(100 * stepValue) + '<i>%</i>');
        });
    }
    ////////////      Progress Circle      ////////////////////


    ////////////      Dark Theme Toggle      ////////////////////
    $(".dark-mode-btn").on("click", function () {
        $("body").toggleClass("theme-dark");
    })
    ////////////      Dark Theme Toggle      ////////////////////

})