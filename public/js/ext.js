$(function() {
            $("#button1").click(function() {
                $("#item1").toggle();
                $("#item2").hide();
                $("#item3").hide();
                $("#item4").hide();

            });
            $("#button2").click(function() {
                $("#item2").toggle();
                $("#item1").hide();
                $("#item3").hide();
                $("#item4").hide();

            });
            $("#button3").click(function() {
                $("#item3").toggle();
                $("#item2").hide();
                $("#item1").hide();
                $("#item4").hide();

            });
            $("#button4").click(function() {
                $("#item4").toggle();
                $("#item2").hide();
                $("#item3").hide();
                $("#item1").hide();

            });
             $("#new_instrument").click(function() {
                $("#rock-type-details-form").hide();
                $("#extensometer_form").hide();
                 $("#convergence_form").hide();
                 $("#stressmeter_form").hide();
                 $("#pressure_cell_form").hide();
                 $("#sisc_cell_form").hide();
                 $("#new_instrument_options").toggle();
               
            });
            $("#rock-type-details").click(function() {
                $("#rock-type-details-form").toggle();
                $("#extensometer_form").hide();
                 $("#convergence_form").hide();
                 $("#stressmeter_form").hide();
                 $("#pressure_cell_form").hide();
                 $("#sisc_cell_form").hide();
                 $("#new_instrument_options").hide();
               
            });
            $("#extensometer").click(function() {
               $("#rock-type-details-form").hide();
                 $("#extensometer_form").toggle();
                 $("#convergence_form").hide();
                 $("#stressmeter_form").hide();
                 $("#pressure_cell_form").hide();
                 $("#sisc_cell_form").hide();
                $("#new_instrument_options").hide();
            });
            $("#convergence").click(function() {
              $("#rock-type-details-form").hide();
                 $("#extensometer_form").hide();
                 $("#convergence_form").toggle();
                 $("#stressmeter_form").hide();
                 $("#pressure_cell_form").hide();
                 $("#sisc_cell_form").hide();
                $("#new_instrument_options").hide();
            });
            $("#stressmeter").click(function() {
              $("#rock-type-details-form").hide();
                 $("#extensometer_form").hide();
                 $("#convergence_form").hide();
                 $("#stressmeter_form").toggle();
                 $("#pressure_cell_form").hide();
                 $("#sisc_cell_form").hide();
                $("#new_instrument_options").hide();
            });
            $("#pressure_cell").click(function() {
              $("#rock-type-details-form").hide();
                $("#extensometer_form").hide();
                 $("#convergence_form").hide();
                 $("#stressmeter_form").hide();
                 $("#pressure_cell_form").toggle();
                 $("#sisc_cell_form").hide();
                 $("#new_instrument_options").hide();
            });
            $("#sisc_cell").click(function() {
               $("#rock-type-details-form").hide();
                $("#extensometer_form").hide();
                 $("#convergence_form").hide();
                 $("#stressmeter_form").hide();
                 $("#pressure_cell_form").hide();
                 $("#sisc_cell_form").toggle();
                $("#new_instrument_options").hide();
            });

        });