var label = $('#nbCards');
var slider = $('#nbCardsSlider');
var list = $('#cardList');

var model = $('#cardModel').clone(true).removeAttr("id");
var nbCurrentCards = list.children().length;

slider.on("input", () => label.text(slider.val()));
slider.on("change", () => {
    var nbCards = slider.val();
    if (nbCards == nbCurrentCards) {
        return;
    }

    slider.prop("disabled", true);

    // Ugly code do the job :-)
    var func;
    var iter;
    if (nbCurrentCards < nbCards) {
        func = () => list.append(model.clone());
        iter = nbCards - nbCurrentCards;
    } else {
        func = () => list.children().last().remove();
        iter = nbCurrentCards - nbCards;
    }

    (function loop(i) {
        setTimeout(function() {
            func();

            // Baaaaaaa ahah.
            list.children().last().get(0).scrollIntoView();

            if (--i) loop(i);
            else slider.prop("disabled", false);
        }, 650);
    })(iter);

    nbCurrentCards = nbCards;
});