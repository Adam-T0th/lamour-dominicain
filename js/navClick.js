// still need to tailor it to my website

function OnwindowClick(elem , action){
    $(document).on('click',function(e){
        if (!$(elem).is(e.target) // if the target of the click isn't the container...
            && $(elem).has(e.target).length === 0) // ... nor a descendant of the container
        {
            action();
        }
    });
}

// OnwindowClick(elem , action) add the prevent elements in `elem` something like this
OnwindowClick('#navbar-collapse-first , #navbar-collapse-second', function(){
   $('.navbar-collapse-first, .navbar-collapse-second').collapse('hide');
});
