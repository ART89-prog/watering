document.addEventListener('DOMContentLoaded', function () {

    $(document).on('change', '.error', function() {
        $(this).removeClass('error');
    })
    $(document).on('keypress', '.error', function() {
        $(this).removeClass('error');
    })

    $('.form button').on('click', function(event){
        event.preventDefault();

        var dataForAjax = "action=form&";
        var addressForAjax = myajax.url;
        var valid = true;
        
        $(this).closest('form').find('input:not([type=submit]),textarea, select').each(function(i, elem) {
            if (this.value.length < 3 && $(this).hasClass('required')) {
                valid = false;
                $(this).addClass('error');
            }
            if ($(this).attr('name') == 'email' && $(this).hasClass('required')) {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if (!pattern.test($(this).val())) {
                    valid = false;
                    $(this).addClass('error');
                }
            }
            if ($(this).attr('name') == 'agree' && !$(this).prop("checked")) {
                $(this).addClass('error');
                valid = false;
            }

            if($(this).attr('name') == 'phone' && $(this).hasClass('required')) {
                console.log(this.value.replace(/[_-]/g, '').length);
                if (this.value.replace(/[_-]/g, '').length!=16)
                {
                    valid = false;
                    $(this).addClass('error');
                }
            } 

            if (i > 0) {
                dataForAjax += '&';
            }
            dataForAjax += this.name + '=' + encodeURIComponent(this.value);
        })
       

        if (!valid) {
            return false;
        }  

        $.ajax({
            type: 'POST',
            data: dataForAjax,
            url: addressForAjax,
            success: function(response) {
                $("form").trigger("reset");
                Fancybox.close()

                Fancybox.show([{
                    src: "#success_modal",
                    type: 'inline'
                }])               
            }
        });  
    }); 
});