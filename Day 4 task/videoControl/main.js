window.addEventListener('load', function () {
    const myvideo = document.getElementById('myvideo');
    const playpausebtn = document.getElementById('playpausebtn');
    const sizeSelect = document.getElementById('sizeSelect');
    const muteCheckbox = document.getElementById('muteCheckbox');
    const loopCheckbox = document.getElementById('loopCheckbox');
    const volumeRange = document.getElementById('volumeRange');
    const seekbar = document.getElementById('seekbar');
    const forwardbtn = document.getElementById('forwardbtn');
    const backwardbtn = document.getElementById('backwardbtn');
    const slowbtn = document.getElementById('slowbtn');

    playpausebtn.addEventListener('click', function () {
        if (myvideo.paused) {
            myvideo.play();
            playpausebtn.textContent = "Pause";
        } else {
            myvideo.pause();
            playpausebtn.textContent = "Play";
        }
    });

    sizeSelect.addEventListener('change', function () {
        switch (sizeSelect.value) {
            case "small":
                myvideo.width = 400;
                myvideo.height = 225;
                break;
            case "medium":
                myvideo.width = 640;
                myvideo.height = 360;
                break;
            case "large":
                myvideo.width = 800;
                myvideo.height = 450;
                break;
            case "fullscreen":
                myvideo.requestFullscreen();
                break;
            default:
                myvideo.width = 640;
                myvideo.height = 360;
        }
    });

    muteCheckbox.addEventListener('change', function () {
        myvideo.muted = muteCheckbox.checked;
    });

    loopCheckbox.addEventListener('change', function () {
        myvideo.loop = loopCheckbox.checked;
    });

    volumeRange.addEventListener('input', function () {
        myvideo.volume = volumeRange.value;
    });

    seekbar.addEventListener('input', function () {
        myvideo.currentTime = (seekbar.value / 100) * myvideo.duration;
    });

    myvideo.addEventListener('timeupdate', function () {
        seekbar.value = (myvideo.currentTime / myvideo.duration) * 100;
    });

    forwardbtn.addEventListener('click', function () {
        myvideo.playbackRate += 0.5;
        if (myvideo.playbackRate > 4) {
            myvideo.playbackRate = 4;
        }
    });

    backwardbtn.addEventListener('click', function () {
        myvideo.playbackRate -= 0.5;
        if (myvideo.playbackRate < 0.5) {
            myvideo.playbackRate = 0.5;
        }
    });

});