let token = '';
let defaultHtml = null;
let defaultHtml2 = null;

defaultHtml = $('.loadwait').html()

function onOpen() {
    addAnalytics("captcha", "displayed", "empty");
}

function onSubmit(tokenString) {
    $(".loadwait").html(defaultHtml)
    localStorage.setItem('_token', tokenString)
    addAnalytics("captcha", "solved", "empty");
    document.querySelector('#submit').click()
}

function onClose() {
    defaultHtml = $('.loadwait').html()
    $(".loadwait  .text-lg").text(window.solve_captcha_text);
    $('.loadwait .animate-bounce').attr('id', 'loader-animation')
    $('#loader-animation').removeClass('animate-bounce')

    if (defaultHtml2 != null) {
        $(".loadwait").html(defaultHtml2)
    } else {
        $('#loader-animation').html('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; display: block; shape-rendering: auto;" width="200px" height="70px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">' +
            '<rect x="17.5" y="30" width="15" height="40" fill="#3b82f6">' +
            '<animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="18;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>' +
            '<animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="64;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>' +
            '</rect>' +
            '<rect x="42.5" y="30" width="15" height="40" fill="#3b82f6">' +
            '<animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>' +
            '<animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>' +
            '</rect>' +
            '<rect x="67.5" y="30" width="15" height="40" fill="#3b82f6">' +
            '<animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>' +
            '<animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>' +
            '</rect>' +
            '</svg>')

        let captchaButton = '<button id="solve-captcha-btn" class="w-full appearance-none rounded-lg bg-gradient-to-tl from-blue-400 to-blue-600 px-4 py-2 text-lg font-semibold text-white hover:from-blue-500 hover:to-red-600 focus:outline-none md:w-3/12 md:rounded-r-lg"> ' + window.show_captcha_btn + '</button>'

        $(".loadwait").append(captchaButton)
    }

    $('#solve-captcha-btn').on('click', function () {
        hcaptcha.execute()
    })

    if (defaultHtml2 == null) {
        defaultHtml2 = $(".loadwait").html()
    }
}

window.addEventListener('DOMContentLoaded', function () {
    const pasteElement = document.getElementById("paste");
    const inputElement = document.getElementById("url");

    let onlyClear = false;

    if (!navigator.clipboard) {
        onlyClear = true;
    }

    if (onlyClear || inputElement.value.length) {
        pasteElement.classList.replace("paste", "clear");
        pasteElement.innerHTML = "Clear";
    }

    pasteElement.classList.remove("disabled");

    pasteElement.addEventListener("click", async function (e) {
        if (onlyClear) {
            inputElement.value = "";
            pasteElement.classList.add("disabled");
            inputElement.focus();
            // window.addAnalytics("Paste_Clear_btn", "Clear", "");
            return;
        }

        let actionPaste = pasteElement.classList.contains("paste");

        if (!actionPaste) {
            pasteElement.innerHTML = "Paste";
            pasteElement.classList.replace("clear", "paste");
            inputElement.value = "";

            return;
        }
        const queryOpts = {
            name: "clipboard-read",
            allowWithoutGesture: false,
        };
        const permissionStatus = await navigator.permissions.query(queryOpts);

        permissionStatus.onchange = async () => {
            if (permissionStatus.state === "granted") {
                let text = await navigator.clipboard.readText();
                inputElement.value = text;
            }
        };

        if (permissionStatus.state === "denied") {
            return;
        }

        let text = await navigator.clipboard.readText();

        inputElement.value = text;

        if (text.length) {
            // window.addAnalytics("Paste_Clear_btn", "Paste", text);
        } else {
            return;
        }
        pasteElement.classList.replace("paste", "clear");
        pasteElement.innerHTML = "Clear";
    });

    inputElement.addEventListener('input', function (e) {
        let value = inputElement.value.trim();

        if (onlyClear) {
            if (value.length === 0) {
                pasteElement.classList.add("disabled");
            } else {
                pasteElement.classList.remove("disabled");
            }

            return;
        }

        if (value.length === 0) {
            pasteElement.innerHTML = "Paste";
            pasteElement.classList.replace("clear", "paste");
        } else {
            pasteElement.classList.replace("paste", "clear");
            pasteElement.innerHTML = "Clear";
        }
    });

    const regex = /^((https|http)?:\/\/(?:www\.)?instagram\.com(\/[A-Za-z0-9_@./#&+-]*)?\/(p|tv|reel|stories)\/([^/?#&]+)).*/
    const downloadAnotherVideo = document.querySelector('#download-other-video')
    const form = document.querySelector('#form')
    const url = document.querySelector('.url')
    const emsg = document.querySelector('#ivalidstatus')
    const preload = document.querySelector('#preload')
    const submit = document.querySelector('#submit')
    const results = $('#results')
    const partnerTiktok = document.querySelector('#partner-tiktok')
    const partnerFacebook = document.querySelector('#partner-facebook')
    const partnerYoutube = document.querySelector('#partner-youtube')
    const loadWait = $(".loadwait");

    if (downloadAnotherVideo) {
        downloadAnotherVideo.addEventListener('click', function () {
            addAnalytics('navigation', 'dl_other_file_btn')
        });
    }

    const showError = function () {
        emsg.classList.remove("hidden")
        emsg.classList.add("show")
    }

    const hideError = function () {
        emsg.classList.remove("show")
        emsg.classList.add("hidden")
    }

    const hidePartners = function () {
        let partners = document.querySelectorAll('.partners')
        partners.forEach((item, index) => {
            partners[index].classList.remove('show')
            partners[index].classList.add('hidden')
        })
    }

    url.addEventListener('input', function () {
        hidePartners();
        hideError();
    });

    form.addEventListener('submit', function (e) {
        emsg.classList.remove("show")
        emsg.classList.add("hidden")
        hidePartners();
        e.preventDefault();
        let inputValue = '';

        inputValue = url.value ? url.value.trim(): '';

        if (inputValue.indexOf("?") > 0) {
            inputValue = inputValue.substring(0, inputValue.indexOf("?"));
        }
        if (!inputValue || inputValue.length == 0) {
            showError();
            addAnalytics("submit_request", "not_ig_url", "empty");
            e.preventDefault()
            return false;
        }

        if (inputValue.indexOf('instagram.com') > 0 && !inputValue.endsWith('/')) {
            inputValue = `${inputValue}/`
        }

        if (isIgUrl(inputValue) || isUsernameUrl(inputValue) || isProfileUrl(inputValue)) {
            hideError();
            submitForm();
            e.preventDefault();

            return false;
        }

        if (isPartnerLink(inputValue)) {
            e.preventDefault();

            return false;
        }

        showError();

        addAnalytics("submit_request", "not_ig_url", inputValue);
        e.preventDefault();

        return false;
    })

    const isIgUrl = function (s) {
        return regex.test(s);
    }

    const isUsernameUrl = function (s) {

        if (s.includes('instagram.com')) {

            return false;
        }
        if  (s.endsWith('/')) {
            s = s.slice(0, -1)
        }

        s = s.replace('@', '')

        let regex = /^[A-Za-z0-9_.]{2,30}$/;

        return regex.test(s);
    }

    const isProfileUrl = function (s) {
        let regex = /^(https|http)?:\/\/(?:www\.)?instagram\.com(\/[A-Za-z0-9_@./#&+-].+\/$)/;

        return regex.test(s);
    }

    const isPartnerLink = function (inputValue) {
        if (inputValue.includes('tiktok')) {
            partnerTiktok.classList.remove('hidden')
            partnerTiktok.classList.add('show')
            addAnalytics("submit_request", "not_ig_url", inputValue);

            return true;
        } else if (inputValue.includes('facebook')) {
            partnerFacebook.classList.remove('hidden')
            partnerFacebook.classList.add('show')
            addAnalytics("submit_request", "not_ig_url", inputValue);

            return true;

        } else if (inputValue.includes('youtube')) {
            partnerYoutube.classList.remove('hidden')
            partnerYoutube.classList.add('show')
            addAnalytics("submit_request", "not_ig_url", inputValue);

            return true;
        }

        return false;
    }

    const insertTopAds = function () {
        let adUnitID = 6112245490;
        let adClient = 'ca-pub-7647406474707126';

        const parent = document.getElementById('adsBlock');
        const ele = document.createElement('ins');
        ele.style.display = 'block';
        ele.className = 'adsbygoogle';
        ele.setAttribute('data-ad-client', adClient);
        ele.setAttribute('data-ad-slot', adUnitID);
        ele.setAttribute('data-ad-format', 'auto');
        ele.setAttribute('data-full-width-responsive', 'true');
        parent.appendChild(ele);

        (window.adsbygoogle || []).push({});
    }

    function checkSuccessResponse() {
        let existCondition = setInterval(function () {
            let postType = $('#posttype');

            if (postType.length) {

                addAnalytics('results_show', postType.attr("data-posttype"), '')

                let apiVersion = $("#api_version")

                if (apiVersion.length) {
                    if (postType.attr("data-posttype") !== "PrivateAPI") {
                        addAnalytics('api_version', apiVersion.attr("data-api"), '')
                    }
                }
                clearInterval(existCondition);
            }
        }, 100);
    }

    results.on("click", "#download-btn", function () {
        const mediaType = $(this).attr("data-mediatype");
        addAnalytics('Conversion', 'Download', mediaType)
    });

    const submitForm = function () {
        let inputValue = url.value.trim();
        results.html('');
        loadWait.removeClass("hidden");
        loadWait.addClass("flex");

        if (inputValue.indexOf("?") > 0) {
            inputValue = inputValue.substring(0, inputValue.indexOf("?"));
        }

        if (inputValue.indexOf('instagram.com') > 0 && !inputValue.endsWith('/')) {
            inputValue = `${inputValue}/`
        }

        let isUsername = isUsernameUrl(inputValue);
        let profileUrl = isProfileUrl(inputValue);

        if (isUsername) {
            let newValue = inputValue.replace('@', '');
            if (newValue.endsWith('/')) {
                newValue = newValue.slice(0, -1)
            }
            inputValue = 'https://www.instagram.com/' + newValue;
        }

        if (inputValue && (isIgUrl(inputValue) || isUsername || profileUrl)) {
            addAnalytics("submit_request", "is_ig_url", '');
            if (localStorage.getItem('_token')) {
                token = localStorage.getItem('_token')
                localStorage.removeItem('_token')
            }

            $.ajax({
                type: "POST",
                url: window.api_url,
                data: {
                    url: inputValue,
                    lang_code: current_lang,
                    token: token
                },
                success: function (result) {

                    loadWait.addClass("hidden");

                    if (result === 'show_captcha') {
                        loadWait.removeClass("hidden");
                        hcaptcha.execute()

                        return false;
                    }

                    $("#results").html(result);

                    if (downloadAnotherVideo) {
                        let downloadOtherVideoWrapper = document.querySelector('#download-other-video-wrapper')
                        downloadOtherVideoWrapper.classList.remove('hidden');
                    }

                    addAnalytics('API', 'Success')
                    addAnalytics('submitted_url', 'success_url', String(inputValue))

                    $('#form-wrapper').hide();
                    insertTopAds();

                    $("html, body").animate({
                        scrollTop: $("#adsBlock").offset().top
                    }, 800);

                    checkSuccessResponse();
                },
                error: function (error) {
                    addAnalytics('API', 'Failed', "")
                    addAnalytics('submitted_url', 'failed_url', String(inputValue));
                    $(".apierror").removeClass("hidden");
                    $(".apierror").show();
                    loadWait.addClass("hidden");
                },
            });
        } else {
            loadWait.addClass("hidden");
            $(".emsg").removeClass("hidden");
            $(".emsg").show();
            submit.attr("disabled", "disabled");
        }
    }
})

