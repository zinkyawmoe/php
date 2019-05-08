$(document).ready(function() {
    
    $("#search").on('keyup', function() {
        var value = $(this).val();

        if(isNaN(value)) {
            alert("type only number");
            $(this).val('');
            unset(value);
        }

        if(value > 20 ) {
            alert("please insert a number lower than 20");
            $(this).val('');
            unset(value);
        }

        if(value !== "") {
            $.ajax({
                method : 'post',
                url : 'action.php',
                data : {value:value},
                success : function(output) {
                    $("#output").html(output)
                }
            })
        }

    })

})