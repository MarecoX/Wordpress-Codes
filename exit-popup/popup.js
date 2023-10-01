$( document ).ready(function() {
            $( ".btn-close" ).click(function() {
                $(".modal2").removeClass("show");
                setTimeout(() => {
                    document.removeEventListener('mouseout', mouseEvent);
                }, 5000);
            })
            $( ".modal2" ).click(function() {
                $(".modal2").removeClass("show");
                setTimeout(() => {
                    document.removeEventListener('mouseout', mouseEvent);
                }, 5000);
            })
        });

    setTimeout(() => {
        document.addEventListener('mouseout', mouseEvent);
        document.addEventListener('keydown', exit);
    }, 1000);

const exit = e => {
    const shouldExit =
        e.keyCode === 27; // user hits escape

    if (shouldExit) {
        $(".modal2").removeClass("show"); 
        setTimeout(() => {
            document.removeEventListener('mouseout', mouseEvent);
        }, 5000);
    }
};

const mouseEvent = e => {
    const shouldShowExitIntent = 
        !e.toElement && 
        !e.relatedTarget &&
        e.clientY < 10;

    if (shouldShowExitIntent) {
        $(".modal2").addClass("show"); 
    }
};
