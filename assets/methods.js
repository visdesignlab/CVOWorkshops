var transitionTime = 500;

$(document).ready(function () {
    $(".filter-btn").click(function () {
        var name = $(this).data('name');
        var otherButtons = $(".filter-btn")
            .filter(function () {
                return $(this).data('name') === name;
            });
        $(otherButtons).removeClass('active');
        $(this).addClass('active');
        updateMethods();
    });

    /**
     * Toggle visibility of methods
     */
    function filterMethods(params) {
        var methods = $(".method");
        methods.hide(transitionTime);
        methods.filter(function () {
            var keys = Object.keys(params);
            for (var i = 0; i < keys.length; ++i) {
                var allowedValue = params[keys[i]];
                var currentValue = $(this).data(keys[i]);
                if (allowedValue != "all") {
                    if (allowedValue != currentValue) {
                        return false;
                    }
                }
            }
            return true;
        }).show(transitionTime);
    }

    /**
     * For the filter category 'name' get what the user has selected.
     */
    function getSelectedValue(name) {
        var activePhase = $(".filter-btn")
            .filter(function () {
                return $(this).data('name') === name;
            })
            .filter(function () {
                return $(this).hasClass("active");
            });
        return $(activePhase).data('value');

    }

    /**
     * Get the currently selected method parameters. Then update the visible methods.
     */
    function updateMethods() {
        var params = {
            'phase': getSelectedValue('phase'),
            'ideaspace': getSelectedValue('ideaspace'),
            'activity': getSelectedValue('activity')
        };
        filterMethods(params);
    }
});

