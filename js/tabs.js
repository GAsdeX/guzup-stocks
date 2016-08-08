// Tabs
(function($){
    jQuery.fn.lightTabs = function(options){

        var createTabs = function(){
            tabs = this;
            i = 0;

            showPage = function(i){
                $(tabs).children(".tabs-body").children("div").hide();
                $(tabs).children(".tabs-body").children("div").eq(i).show();
                $(tabs).children(".tabs-header").children("div").removeClass("active");
                $(tabs).children(".tabs-header").children("div").eq(i).addClass("active");
            }

            showPage(0);

            $(tabs).children(".tabs-header").children("div").each(function(index, element){
                $(element).attr("data-page", i);
                i++;
            });

            $(tabs).children(".tabs-header").children("div").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });
        };
        return this.each(createTabs);
    };
})(jQuery);